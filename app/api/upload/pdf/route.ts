import { type NextRequest, NextResponse } from "next/server"
import { LocalStorageService } from "@/lib/services/storage/LocalStorageService"
import { slugify } from "@/lib/utils/slugify"
import prisma from "@/lib/prisma"

const storageService = new LocalStorageService()
const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB chunks
const MAX_DIRECT_UPLOAD_SIZE = 50 * 1024 * 1024; // 50MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const subject = formData.get("subject") as string
    const grade = formData.get("grade") as string
    const pdfType = formData.get("pdfType") as string
    const file = formData.get("file") as File
    const chunk = formData.get("chunk") as File
    const chunkIndex = formData.get("chunkIndex") as string
    const totalChunks = formData.get("totalChunks") as string
    const fileId = formData.get("fileId") as string
    const isChunked = formData.get("isChunked") === "true"
    const fileName = formData.get("fileName") as string
    const fileSize = formData.get("fileSize") as string

    console.log("formData", formData)

    // Handle initialization request for chunked upload
    if (isChunked && !chunkIndex && !fileId) {
      if (!subject || !grade || !pdfType || !fileName || !fileSize || !totalChunks) {
        return NextResponse.json({ error: "Missing required fields for chunked upload initialization" }, { status: 400 })
      }

      const fileSlug = `${slugify(fileName)}-${Date.now()}`
      const uploadedFile = await prisma.uploadedFile.create({
        data: {
          fileName,
          fileSlug,
          filePath: `uploads/pdfs/${fileSlug}.pdf`,
          subject,
          grade,
          pdfType,
          status: "uploading"
        }
      })

      return NextResponse.json({
        fileId: uploadedFile.id,
        fileSlug: uploadedFile.fileSlug,
        totalChunks: parseInt(totalChunks),
        chunkSize: CHUNK_SIZE
      })
    }

    // Handle chunk upload
    if (chunkIndex && fileId) {
      if (!chunk || !totalChunks) {
        return NextResponse.json({ error: "Missing chunk information" }, { status: 400 })
      }

      const chunkIndexNum = parseInt(chunkIndex)
      const totalChunksNum = parseInt(totalChunks)

      if (isNaN(chunkIndexNum) || isNaN(totalChunksNum)) {
        return NextResponse.json({ error: "Invalid chunk information" }, { status: 400 })
      }

      const fileSlug = await prisma.uploadedFile.findUnique({
        where: { id: fileId },
        select: { fileSlug: true, status: true }
      })

      if (!fileSlug) {
        return NextResponse.json({ error: "File not found" }, { status: 404 })
      }

      if (fileSlug.status !== "uploading") {
        return NextResponse.json({ error: "File is not in uploading state" }, { status: 400 })
      }

      try {
        // Save chunk
        const chunkPath = await storageService.saveChunk(
          chunk,
          fileSlug.fileSlug,
          chunkIndexNum,
          totalChunksNum
        )

        // If this is the last chunk, finalize the upload
        if (chunkIndexNum === totalChunksNum - 1) {
          await storageService.finalizeUpload(fileSlug.fileSlug, totalChunksNum)
          await prisma.uploadedFile.update({
            where: { id: fileId },
            data: { status: "uploaded" }
          })
        }

        return NextResponse.json({ 
          success: true, 
          chunkIndex: chunkIndexNum,
          isLastChunk: chunkIndexNum === totalChunksNum - 1
        })
      } catch (error) {
        console.error("Error processing chunk:", error)
        await prisma.uploadedFile.update({
          where: { id: fileId },
          data: { status: "error" }
        })
        return NextResponse.json({ error: "Failed to process chunk" }, { status: 500 })
      }
    }

    // Handle direct upload (small files)
    if (!file || !subject || !grade || !pdfType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 })
    }

    const fileSlug = `${slugify(file.name)}-${Date.now()}`
    const filePath = await storageService.saveFile(file, fileSlug)

    const uploadedFile = await prisma.uploadedFile.create({
      data: {
        fileName: file.name,
        fileSlug,
        filePath,
        subject,
        grade,
        pdfType,
        status: "uploaded"
      }
    })

    return NextResponse.json({
      id: uploadedFile.id,
      fileName: uploadedFile.fileName,
      filePath: uploadedFile.filePath,
      subject: uploadedFile.subject,
      grade: uploadedFile.grade,
      pdfType: uploadedFile.pdfType,
      status: uploadedFile.status,
      uploadDate: uploadedFile.createdAt,
    })

  } catch (error) {
    console.error("Error processing PDF upload:", error)
    return NextResponse.json({ error: "Failed to process PDF upload" }, { status: 500 })
  }
}