import { NextResponse } from "next/server"
import { PrismaClient } from "../../../lib/generated/prisma"
import type { Quiz, UploadedFile, Unit, Question } from "../../../lib/generated/prisma"

const prisma = new PrismaClient()

type QuizWithRelations = Quiz & {
  document: UploadedFile;
  unit: Unit | null;
  questions: Question[];
}

export async function GET() {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        document: true,
        unit: true,
        questions: {
          select: {
            id: true,
            type: true,
            question: true,
            options: true,
            correctAnswer: true,
            reasoning: true,
          },
        },
      },
    })

    const formattedQuizzes = quizzes.map((quiz: QuizWithRelations) => ({
      id: quiz.id,
      title: quiz.title,
      documentId: quiz.documentId,
      documentTitle: quiz.document.fileName,
      subject: quiz.document.subject,
      grade: quiz.document.grade,
      unitId: quiz.unitId,
      unitTitle: quiz.unit?.title,
      createdAt: quiz.createdAt.toISOString(),
      questionCount: quiz.questions.length,
      difficulty: quiz.difficulty,
      questions: quiz.questions,
    }))

    return NextResponse.json(formattedQuizzes)
  } catch (error) {
    console.error("Failed to fetch quizzes:", error)
    return NextResponse.json(
      { error: "Failed to fetch quizzes" },
      { status: 500 }
    )
  }
} 