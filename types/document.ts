export interface Unit {
  id: string
  title: string
  pageRange: string
  wordCount: number
  keyTopics: string[]
}

export interface Document {
  id: string
  filename: string
  class: string
  grade: number
  type: "normal" | "scanned"
  status: "uploading" | "uploaded" | "processing" | "processed" | "failed"
  uploadedAt: string
  metadata?: {
    pageCount?: number
    extractedContent?: boolean
    processingTime?: number
  }
  units?: Unit[]
} 