import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { writeFile } from "fs/promises"
import { join } from "path"

export async function POST(request: NextRequest) {
  try {
    const { documentId, unitId } = await request.json()

    if (!documentId) {
      return NextResponse.json({ error: "Document ID is required" }, { status: 400 })
    }

    // Get document information
    const document = await prisma.uploadedFile.findUnique({
      where: { id: documentId },
      include: {
        units: unitId ? {
          where: { id: unitId }
        } : undefined
      }
    })

    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 })
    }

    // Check if document is processed
    if (document.status !== "processed") {
      return NextResponse.json({
        error: "Document is not ready for quiz generation",
        status: document.status,
        message: document.status === "processing" 
          ? "Document is currently being processed" 
          : "Document needs to be processed first"
      }, { status: 400 })
    }

    // Check if document has extracted content
    if (!document.extractedContent) {
      return NextResponse.json({
        error: "Document content has not been extracted",
        message: "Please wait for document processing to complete"
      }, { status: 400 })
    }

    // If unitId is provided, verify it exists
    if (unitId) {
      const unit = document.units?.find(u => u.id === unitId)
      if (!unit) {
        return NextResponse.json({ error: "Specified unit not found in document" }, { status: 404 })
      }
    }

    // Create a new quiz
    const quiz = await prisma.quiz.create({
      data: {
        title: `Quiz for ${document.fileName}${unitId ? ' - Unit' : ''}`,
        description: `Generated quiz for ${document.subject} Grade ${document.grade}`,
        difficulty: "medium", // You might want to make this configurable
        documentId: document.id,
        unitId: unitId || null,
      }
    })

    // Create quiz generation request
    const queueDir = join(process.cwd(), "queue", "quiz_generation")
    const requestFile = join(queueDir, `${quiz.id}.json`)
    
    // Ensure queue directory exists
    await writeFile(requestFile, JSON.stringify({
      quiz_id: quiz.id,
      document_id: documentId,
      unit_id: unitId || null
    }))

    return NextResponse.json({
      id: quiz.id,
      message: "Quiz generation initiated",
      documentId,
      unitId: unitId || null,
      status: "pending"
    })

  } catch (error) {
    console.error("Error generating quiz:", error)
    return NextResponse.json({ error: "Failed to generate quiz" }, { status: 500 })
  }
}
