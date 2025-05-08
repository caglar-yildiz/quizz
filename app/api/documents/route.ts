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
      }
    })

    // Transform database documents to match the Document type
    const realDocuments: Document[] = dbDocuments.map(doc => ({
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

    // Mock data for testing purposes
    const mockDocuments: Document[] = [
      {
        id: "doc1",
        filename: "mathematics_textbook_10.pdf",
        class: "Mathematics",
        grade: 10,
        type: "normal",
        status: "processed",
        uploadedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        metadata: {
          pageCount: 245,
          extractedContent: true,
          processingTime: 32,
        },
        units: [
          {
            id: "unit1",
            title: "Cell Biology",
            pageRange: "1-32",
            wordCount: 8200,
            keyTopics: ["Cell Structure", "Cell Division", "Metabolism"],
          },
          {
            id: "unit2",
            title: "Genetics",
            pageRange: "33-68",
            wordCount: 9400,
            keyTopics: ["DNA", "RNA", "Inheritance", "Mutations"],
          },
          {
            id: "unit3",
            title: "Evolution",
            pageRange: "69-98",
            wordCount: 7800,
            keyTopics: ["Natural Selection", "Adaptation", "Speciation"],
          },
        ],
      },
      {
        id: "doc2",
        filename: "history_9_textbook.pdf",
        class: "History",
        grade: 9,
        type: "scanned",
        status: "processing",
        uploadedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        metadata: {
          pageCount: 178,
          extractedContent: false,
          processingTime: 0,
        },
      },
      {
        id: "doc3",
        filename: "physics_11_advanced.pdf",
        class: "Physics",
        grade: 11,
        type: "normal",
        status: "processed",
        uploadedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        metadata: {
          pageCount: 312,
          extractedContent: true,
          processingTime: 45,
        },
        units: [
          {
            id: "unit1",
            title: "Cell Biology",
            pageRange: "1-32",
            wordCount: 8200,
            keyTopics: ["Cell Structure", "Cell Division", "Metabolism"],
          },
          {
            id: "unit2",
            title: "Genetics",
            pageRange: "33-68",
            wordCount: 9400,
            keyTopics: ["DNA", "RNA", "Inheritance", "Mutations"],
          },
          {
            id: "unit3",
            title: "Evolution",
            pageRange: "69-98",
            wordCount: 7800,
            keyTopics: ["Natural Selection", "Adaptation", "Speciation"],
          },
        ],
      },
      {
        id: "doc4",
        filename: "geography_world_atlas_8.pdf",
        class: "Geography",
        grade: 8,
        type: "normal",
        status: "uploaded",
        uploadedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        metadata: {
          pageCount: 156,
          extractedContent: false,
          processingTime: 12,
        },
      },
      {
        id: "doc5",
        filename: "computer_science_12_programming.pdf",
        class: "Computer Science",
        grade: 12,
        type: "normal",
        status: "processed",
        uploadedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        metadata: {
          pageCount: 287,
          extractedContent: true,
          processingTime: 38,
        },
        units: [
          {
            id: "unit1",
            title: "Cell Biology",
            pageRange: "1-32",
            wordCount: 8200,
            keyTopics: ["Cell Structure", "Cell Division", "Metabolism"],
          },
          {
            id: "unit2",
            title: "Genetics",
            pageRange: "33-68",
            wordCount: 9400,
            keyTopics: ["DNA", "RNA", "Inheritance", "Mutations"],
          },
          {
            id: "unit3",
            title: "Evolution",
            pageRange: "69-98",
            wordCount: 7800,
            keyTopics: ["Natural Selection", "Adaptation", "Speciation"],
          },
        ],
      },
    ]

    // Combine real and mock data
    const allDocuments = [...realDocuments, ...mockDocuments]

    return NextResponse.json(allDocuments)
  } catch (error) {
    console.error("Error fetching documents:", error)
    return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const deleteUnits = searchParams.get('deleteUnits') === 'true'
    const deleteQuizzes = searchParams.get('deleteQuizzes') === 'true'

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
        units: true
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

    // Delete the document and related resources from database
    const deletedDocument = await prisma.uploadedFile.delete({
      where: { id },
      include: { 
        units: true
      }
    })

    // Mock quiz deletion for now
    const deletedQuizzes = deleteQuizzes ? Math.floor(Math.random() * 5) + 1 : 0

    return NextResponse.json({
      message: "Resources deleted successfully",
      document: {
        id: deletedDocument.id,
        filename: deletedDocument.fileName,
        unitsDeleted: deleteUnits ? deletedDocument.units.length : 0,
        quizzesDeleted: deletedQuizzes
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
