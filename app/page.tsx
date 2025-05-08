"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UploadPdfForm from "@/components/upload-pdf-form"
import DocumentsTable from "@/components/documents-table"
import QuizzesTable from "@/components/quizzes-table"
import { useState, useEffect } from "react"
import type { Document } from "@/types/document"

export default function AdminPage() {
  const [documents, setDocuments] = useState<Document[]>([])

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await fetch("/api/documents")
      const data = await response.json()
      setDocuments(data)
    }
    fetchDocuments()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          PDF Document Management
        </h1>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full md:w-[600px] grid-cols-3 bg-white/20 backdrop-blur-sm dark:bg-slate-800/40">
            <TabsTrigger
              value="upload"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
            >
              Upload PDF
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              View Documents
            </TabsTrigger>
            <TabsTrigger
              value="quizzes"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
            >
              Quizzes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-6">
            <div className="rounded-lg border border-pink-200 dark:border-pink-900/30 bg-white dark:bg-slate-900 shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-pink-600 dark:text-pink-400">Upload Textbook PDF</h2>
              <UploadPdfForm />
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <div className="rounded-lg border border-blue-200 dark:border-blue-900/30 bg-white dark:bg-slate-900 shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Uploaded Documents</h2>
              <DocumentsTable 
                documents={documents} 
                onRefresh={async () => {
                  const response = await fetch("/api/documents")
                  const data = await response.json()
                  setDocuments(data)
                }} 
              />
            </div>
          </TabsContent>

          <TabsContent value="quizzes" className="mt-6">
            <div className="rounded-lg border border-green-200 dark:border-green-900/30 bg-white dark:bg-slate-900 shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Generated Quizzes</h2>
              <QuizzesTable />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
