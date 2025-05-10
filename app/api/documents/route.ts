import { NextResponse } from "next/server"
import type { Document } from "@/types/document"
import prisma from "@/lib/prisma"
import { LocalStorageService } from "@/lib/services/storage/LocalStorageService"

const storageService = new LocalStorageService()

export async function GET() {
  try {
    // Fetch real documents from the database
    const dbDocuments = await prisma.uploadedFile.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        units: true
      }
    })

    // Transform database documents to match the Document type
    const documents: Document[] = dbDocuments.map(doc => ({
      id: doc.id,
      filename: doc.fileName,
      class: doc.subject,
      grade: parseInt(doc.grade),
      type: doc.pdfType === "scanned" ? "scanned" : "normal",
      status: doc.status as Document["status"],
      uploadedAt: doc.createdAt.toISOString(),
      metadata: {
        pageCount: doc.pageCount || 0,
        extractedContent: doc.extractedContent || false,
        processingTime: doc.processingTime || 0,
      },
      units: doc.units?.map(unit => ({
        id: unit.id,
        title: unit.title,
        pageRange: unit.pageRange,
        wordCount: unit.wordCount,
        keyTopics: unit.keyTopics,
      })) || [],
    }))

    return NextResponse.json(documents)
  } catch (error) {
    console.error("Error fetching documents:", error)
    return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: "Document ID is required" },
        { status: 400 }
      )
    }

    // Get the document first to get the file path
    const document = await prisma.uploadedFile.findUnique({
      where: { id },
      include: { 
        units: {
          include: {
            quizzes: true
          }
        },
        quizzes: true,
        questions: true
      }
    })

    if (!document) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      )
    }

    // Delete the file from storage
    try {
      await storageService.deleteFile(document.filePath)
    } catch (error) {
      console.error("Error deleting file from storage:", error)
      // Continue with database deletion even if file deletion fails
    }

    // Delete the document and all related resources (cascading delete will handle units, quizzes, and questions)
    const deletedDocument = await prisma.uploadedFile.delete({
      where: { id }
    })

    // Count deleted resources
    const unitsDeleted = document.units.length
    const quizzesDeleted = document.quizzes.length + document.units.reduce((acc, unit) => acc + (unit.quizzes?.length || 0), 0)
    const questionsDeleted = document.questions.length

    return NextResponse.json({
      message: "Resources deleted successfully",
      document: {
        id: deletedDocument.id,
        filename: deletedDocument.fileName,
        unitsDeleted,
        quizzesDeleted,
        questionsDeleted
      }
    })
  } catch (error) {
    console.error("Error deleting document:", error)
    return NextResponse.json(
      { error: "Failed to delete document" },
      { status: 500 }
    )
  }
}
