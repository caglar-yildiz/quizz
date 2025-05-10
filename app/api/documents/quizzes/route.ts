import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: "Quiz ID is required" },
        { status: 400 }
      )
    }

    // Delete the quiz and its associated questions
    const deletedQuiz = await prisma.quiz.delete({
      where: { id },
      include: {
        questions: true
      }
    })

    return NextResponse.json({
      message: "Quiz deleted successfully",
      quiz: {
        id: deletedQuiz.id,
        title: deletedQuiz.title,
        questionsDeleted: deletedQuiz.questions.length
      }
    })
  } catch (error) {
    console.error("Error deleting quiz:", error)
    return NextResponse.json(
      { error: "Failed to delete quiz" },
      { status: 500 }
    )
  }
} 