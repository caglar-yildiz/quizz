import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { DocumentContent } from "./document-content"
import { Document, Question, Quiz } from "./types"

// Make the page dynamic
export const dynamic = 'force-dynamic'

async function getDocument(id: string) {
  const document = await prisma.uploadedFile.findUnique({
    where: { id },
    include: {
      units: {
        orderBy: { createdAt: 'asc' }
      },
      questions: {
        include: {
          quiz: true
        }
      }
    }
  })

  if (!document) {
    return null
  }

  // Group questions by quiz
  const quizzes = document.questions.reduce<Quiz[]>((acc, question) => {
    if (!question.quiz) return acc
    const existingQuiz = acc.find(q => q.id === question.quiz!.id)
    if (existingQuiz) {
      existingQuiz.questions.push(question as Question)
    } else {
      acc.push({
        ...question.quiz,
        questions: [question as Question]
      })
    }
    return acc
  }, [])

  return {
    ...document,
    quizzes
  } as Document
}

export default async function DocumentPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  const document = await getDocument(id)

  if (!document) {
    notFound()
  }

  return <DocumentContent document={document} />
} 