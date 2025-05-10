"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileText, BookOpen, Clock, CheckCircle2, XCircle, GraduationCap, FileIcon, Brain, Loader2, Trash2 } from "lucide-react"
import Link from "next/link"
import { DeleteDialog } from "@/components/delete-dialog"
import { toast } from "sonner"
import { Document, Unit, Quiz } from "./types"

interface DocumentContentProps {
  document: Document
}

export function DocumentContent({ document }: DocumentContentProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [unitToDelete, setUnitToDelete] = useState<{ id: string; title: string; documentId: string } | null>(null)
  const [quizToDelete, setQuizToDelete] = useState<{ id: string; title: string } | null>(null)
  const [documentToDelete, setDocumentToDelete] = useState<Document | null>(null)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processed":
        return (
          <Badge
            variant="default"
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0"
          >
            Processed
          </Badge>
        )
      case "processing":
        return (
          <Badge
            variant="outline"
            className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-300 dark:bg-gradient-to-r dark:from-amber-900/30 dark:to-yellow-900/30 dark:text-amber-300 dark:border-amber-800/30"
          >
            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
            Processing
          </Badge>
        )
      case "error":
        return (
          <Badge
            variant="destructive"
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0"
          >
            Error
          </Badge>
        )
      default:
        return (
          <Badge
            variant="outline"
            className="bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-300 dark:bg-gradient-to-r dark:from-gray-900/30 dark:to-slate-900/30 dark:text-gray-300 dark:border-gray-800/30"
          >
            Uploaded
          </Badge>
        )
    }
  }

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "processed":
        return "Document has been successfully processed and is ready for use."
      case "processing":
        return "Document is currently being processed. This may take a few minutes."
      case "error":
        return "There was an error processing this document. Please try uploading again."
      default:
        return "Document has been uploaded and is waiting to be processed."
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  const handleDelete = async (options: { deleteUnits: boolean; deleteQuizzes: boolean }) => {
    if (documentToDelete) {
      try {
        const response = await fetch(
          `/api/documents?id=${documentToDelete.id}`,
          { method: 'DELETE' }
        )

        if (!response.ok) {
          throw new Error('Failed to delete document')
        }

        const result = await response.json()
        toast.success(
          `Deleted ${result.document.filename}${result.document.unitsDeleted ? ` and ${result.document.unitsDeleted} units` : ''}${result.document.quizzesDeleted ? ` and ${result.document.quizzesDeleted} quizzes` : ''}`
        )
        
        // Redirect to home page after successful deletion
        window.location.href = '/'
      } catch (error) {
        toast.error('Failed to delete document')
        console.error('Error deleting document:', error)
      }
    } else if (unitToDelete || quizToDelete) {
      try {
        const response = await fetch(
          `/api/documents/${unitToDelete ? 'units' : 'quizzes'}?id=${unitToDelete ? unitToDelete.id : quizToDelete?.id}${unitToDelete ? `&documentId=${document.id}` : ''}`,
          { method: 'DELETE' }
        )

        if (!response.ok) {
          throw new Error(`Failed to delete ${unitToDelete ? 'unit' : 'quiz'}`)
        }

        toast.success(`Deleted ${unitToDelete ? unitToDelete.title : quizToDelete?.title} successfully`)
        setDeleteDialogOpen(false)
        setUnitToDelete(null)
        setQuizToDelete(null)
        
        // Refresh the page to show updated data
        window.location.reload()
      } catch (error) {
        toast.error(`Failed to delete ${unitToDelete ? 'unit' : 'quiz'}`)
        console.error(`Error deleting ${unitToDelete ? 'unit' : 'quiz'}:`, error)
      }
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{document.fileName}</h1>
          <p className="text-sm text-muted-foreground">
            Uploaded on {new Date(document.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {getStatusBadge(document.status)}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              console.log('Delete button clicked')
              console.log('Document:', document)
              setDocumentToDelete(document)
              setUnitToDelete(null)
              setQuizToDelete(null)
              setDeleteDialogOpen(true)
              console.log('Dialog state:', deleteDialogOpen)
            }}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subject</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{document.subject}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Grade</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{document.grade}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{document.pageCount || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Type</CardTitle>
            <FileIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge
              variant={document.pdfType === "normal" ? "outline" : "secondary"}
              className={
                document.pdfType === "normal"
                  ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-300 dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-cyan-900/30 dark:text-blue-300 dark:border-blue-800/30"
                  : "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border-purple-300 dark:bg-gradient-to-r dark:from-purple-900/30 dark:to-violet-900/30 dark:text-purple-300 dark:border-purple-800/30"
              }
            >
              {document.pdfType}
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Alert className="mb-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Document Status</AlertTitle>
        <AlertDescription>
          {getStatusMessage(document.status)}
        </AlertDescription>
      </Alert>

      {document.status === "processed" ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-700 dark:text-indigo-300">
                <BookOpen className="h-4 w-4 mr-2" />
                Units
              </CardTitle>
              <CardDescription>
                {document.units.length} units found in this document
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {document.units.map((unit: Unit) => (
                  <Card key={unit.id} className="overflow-hidden border-indigo-200 dark:border-indigo-800/30 bg-white dark:bg-slate-900">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-violet-500" />
                          <CardTitle className="text-lg">{unit.title}</CardTitle>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button asChild className="whitespace-nowrap bg-gradient-to-r from-violet-50 to-fuchsia-50 border-violet-200 text-violet-700 hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100 dark:bg-gradient-to-r dark:from-violet-900/30 dark:to-fuchsia-900/30 dark:border-violet-800/30 dark:text-violet-300">
                            <Link href={`/documents/${document.id}/units/${unit.id}`}>
                              View Unit
                            </Link>
                          </Button>
                          <Button
                            className="whitespace-nowrap bg-gradient-to-r from-violet-50 to-fuchsia-50 border-violet-200 text-violet-700 hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100 dark:bg-gradient-to-r dark:from-violet-900/30 dark:to-fuchsia-900/30 dark:border-violet-800/30 dark:text-violet-300"
                          >
                            <Brain className="mr-2 h-3 w-3" />
                            Generate Quiz
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => {
                              setDeleteDialogOpen(true)
                              setUnitToDelete({ id: unit.id, title: unit.title, documentId: document.id })
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardDescription>
                        Pages {unit.pageRange} • {unit.wordCount} words
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {unit.keyTopics.map((topic: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-700 dark:text-indigo-300">
                <Brain className="h-4 w-4 mr-2" />
                Quizzes
              </CardTitle>
              <CardDescription>
                {document.quizzes.length} quizzes available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {document.quizzes.map((quiz: Quiz) => (
                  <Card key={quiz.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{quiz.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Button asChild className="whitespace-nowrap bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:bg-gradient-to-r dark:from-indigo-900/30 dark:to-purple-900/30 dark:border-indigo-800/30 dark:text-indigo-300">
                            <Link href={`/quizzes/${quiz.id}`}>
                              View Quiz
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => {
                              setDeleteDialogOpen(true)
                              setQuizToDelete({ id: quiz.id, title: quiz.title })
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardDescription>
                        {quiz.questions.length} questions • {quiz.difficulty} difficulty
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
                <Button asChild className="w-full whitespace-nowrap bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:bg-gradient-to-r dark:from-indigo-900/30 dark:to-purple-900/30 dark:border-indigo-800/30 dark:text-indigo-300">
                  <Link href={`/documents/${document.id}/generate-quiz`}>
                    Generate New Quiz
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Document Processing</CardTitle>
            <CardDescription>
              This document is currently {document.status}. Please check back later.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-muted-foreground">
              {getStatusIcon(document.status)}
              <span>{getStatusMessage(document.status)}</span>
            </div>
          </CardContent>
        </Card>
      )}

      <DeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          console.log('Dialog closing')
          setDeleteDialogOpen(false)
          setUnitToDelete(null)
          setQuizToDelete(null)
          setDocumentToDelete(null)
        }}
        onConfirm={handleDelete}
        title={documentToDelete ? "Delete Document" : unitToDelete ? "Delete Unit" : "Delete Quiz"}
        description={documentToDelete 
          ? `Are you sure you want to delete "${documentToDelete.fileName}"? This action cannot be undone.`
          : `Are you sure you want to delete "${unitToDelete ? unitToDelete.title : quizToDelete?.title}"? This action cannot be undone.`
        }
        showUnitOption={documentToDelete?.status === "processed" && documentToDelete?.units && documentToDelete.units.length > 0}
        showQuizOption={documentToDelete?.status === "processed" && documentToDelete?.quizzes && documentToDelete.quizzes.length > 0}
      />
    </div>
  )
} 