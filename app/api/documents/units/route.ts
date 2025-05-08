import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const documentId = searchParams.get('documentId')

    if (!id || !documentId) {
      return NextResponse.json(
        { error: "Unit ID and Document ID are required" },
        { status: 400 }
      )
    }

    // Delete the unit
    const deletedUnit = await prisma.unit.delete({
      where: { 
        id,
        documentId 
      }
    })

    return NextResponse.json({
      message: "Unit deleted successfully",
      unit: {
        id: deletedUnit.id,
        title: deletedUnit.title
      }
    })
  } catch (error) {
    console.error("Error deleting unit:", error)
    return NextResponse.json(
      { error: "Failed to delete unit" },
      { status: 500 }
    )
  }
} 