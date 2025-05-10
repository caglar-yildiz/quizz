export interface Question {
  id: string
  quiz: Quiz | null
}

export interface Quiz {
  id: string
  title: string
  difficulty: string
  questions: Question[]
}

export interface Unit {
  id: string
  title: string
  pageRange: string
  wordCount: number
  keyTopics: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Document {
  id: string
  fileName: string
  status: string
  subject: string
  grade: string
  pageCount: number | null
  pdfType: string
  createdAt: Date
  updatedAt: Date
  units: Unit[]
  questions: Question[]
  quizzes: Quiz[]
} 