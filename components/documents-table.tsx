"use client"

import React, { useState, useEffect } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, FileText, Loader2, ChevronRight, BookOpen, Brain, RefreshCw, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import type { Document, Unit } from "@/types/document"
import { DeleteDialog } from "@/components/delete-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


interface DocumentsTableProps {
  documents: Document[]
  onRefresh?: () => Promise<void>
}

export default function DocumentsTable({ documents: initialDocuments, onRefresh }: DocumentsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({})
  const [generatingQuiz, setGeneratingQuiz] = useState<Record<string, boolean>>({})
  const [refreshing, setRefreshing] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [documentToDelete, setDocumentToDelete] = useState<Document | null>(null)
  const [unitToDelete, setUnitToDelete] = useState<{ id: string; title: string; documentId: string } | null>(null)
  const [filters, setFilters] = useState({
    subject: "all",
    grade: "all",
    status: "all",
    type: "all",
  })

  // Add useEffect to log documentToDelete changes
  useEffect(() => {
    console.log('documentToDelete:', documentToDelete)
  }, [documentToDelete])

  // Update documents when prop changes
  useEffect(() => {
    setDocuments(initialDocuments)
  }, [initialDocuments])

  const handleRefresh = async () => {
    if (!onRefresh) return
    try {
      setRefreshing(true)
      await onRefresh()
      toast.success("Documents Refreshed")
    } catch (error) {
      console.error("Failed to refresh documents:", error)
      toast.error("Failed to Refresh")
    } finally {
      setRefreshing(false)
    }
  }

  const toggleRowExpanded = (id: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleGenerateQuiz = async (documentId: string, unitId?: string) => {
    try {
      const targetId = unitId || documentId
      setGeneratingQuiz((prev) => ({ ...prev, [targetId]: true }))
      
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ documentId, unitId }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate quiz')
      }

      const result = await response.json()
      toast.success(`Quiz generated successfully with ${result.questionCount} questions`)
      
      if (onRefresh) {
        onRefresh()
      }
    } catch (error) {
      console.error("Failed to generate quiz:", error)
      toast.error("Failed to Generate Quiz")
    } finally {
      const targetId = unitId || documentId
      setGeneratingQuiz((prev) => ({ ...prev, [targetId]: false }))
    }
  }

  const handleDeleteUnit = async (options: { deleteUnits: boolean; deleteQuizzes: boolean }) => {
    if (!unitToDelete) return

    try {
      const response = await fetch(
        `/api/documents/units?id=${unitToDelete.id}&documentId=${unitToDelete.documentId}`,
        { method: 'DELETE' }
      )

      if (!response.ok) {
        throw new Error('Failed to delete unit')
      }

      toast.success('Unit deleted successfully')
      
      if (onRefresh) {
        onRefresh()
      }
    } catch (error) {
      toast.error('Failed to delete unit')
      console.error('Error deleting unit:', error)
    }
  }

  const handleDelete = async (options: { deleteUnits: boolean; deleteQuizzes: boolean }) => {
    if (!documentToDelete) return

    try {
      const response = await fetch(
        `/api/documents?id=${documentToDelete.id}&deleteUnits=${options.deleteUnits}&deleteQuizzes=${options.deleteQuizzes}`,
        { method: 'DELETE' }
      )

      if (!response.ok) {
        throw new Error('Failed to delete document')
      }

      const result = await response.json()
      toast.success(
        `Deleted ${result.document.filename}${options.deleteUnits ? ` and ${result.document.unitsDeleted} units` : ''}${options.deleteQuizzes ? ` and ${result.document.quizzesDeleted} quizzes` : ''}`
      )
      
      if (onRefresh) {
        onRefresh()
      }
    } catch (error) {
      toast.error('Failed to delete document')
      console.error('Error deleting document:', error)
    }
  }

  const columns: ColumnDef<Document>[] = [
    {
      id: "expander",
      header: "",
      cell: ({ row }) => {
        const document = row.original
        const isExpanded = expandedRows[document.id] || false
        const canExpand = document.status === "processed" && document.metadata?.extractedContent

        return canExpand ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleRowExpanded(document.id)}
            className="p-0 h-8 w-8"
            aria-label={isExpanded ? "Collapse row" : "Expand row"}
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
          </Button>
        ) : null
      },
    },
    {
      accessorKey: "class",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Subject
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div>{row.getValue("class")}</div>,
    },
    {
      accessorKey: "grade",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Grade
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div>{row.getValue("grade")}</div>,
    },
    {
      accessorKey: "type",
      header: "PDF Type",
      cell: ({ row }) => {
        const type = row.getValue("type") as string
        return (
          <Badge
            variant={type === "normal" ? "outline" : "secondary"}
            className={
              type === "normal"
                ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-300 dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-cyan-900/30 dark:text-blue-300 dark:border-blue-800/30"
                : "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border-purple-300 dark:bg-gradient-to-r dark:from-purple-900/30 dark:to-violet-900/30 dark:text-purple-300 dark:border-purple-800/30"
            }
          >
            {type}
          </Badge>
        )
      },
    },
    {
      accessorKey: "filename",
      header: "File Name",
      cell: ({ row }) => (
        <div className="flex items-center">
          <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="truncate max-w-[200px]">{row.getValue("filename")}</span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge
            variant={status === "processed" ? "default" : status === "processing" ? "outline" : "destructive"}
            className={
              status === "processed"
                ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0"
                : status === "processing"
                  ? "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-300 dark:bg-gradient-to-r dark:from-amber-900/30 dark:to-yellow-900/30 dark:text-amber-300 dark:border-amber-800/30"
                  : "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-0"
            }
          >
            {status === "processing" && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: "metadata",
      header: "Content",
      cell: ({ row }) => {
        const metadata = row.original.metadata
        if (!metadata) return <div>N/A</div>

        return (
          <div>
            {metadata.pageCount && (
              <div className="text-xs">Pages: {metadata.pageCount}</div>
            )}
            {metadata.processingTime && (
              <div className="text-xs">Processed in: {metadata.processingTime}s</div>
            )}
            {metadata.extractedContent !== undefined && (
              <div className="text-xs">Content: {metadata.extractedContent ? "Extracted" : "Not Extracted"}</div>
            )}
          </div>
        )
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const document = row.original
        const isProcessed = document.status === "processed"

        return (
          <div className="flex items-center gap-2">
            {isProcessed && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleGenerateQuiz(document.id)}
                disabled={generatingQuiz[document.id]}
                className="whitespace-nowrap bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:bg-gradient-to-r dark:from-indigo-900/30 dark:to-purple-900/30 dark:border-indigo-800/30 dark:text-indigo-300"
              >
                {generatingQuiz[document.id] ? (
                  <>
                    <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-3 w-3" />
                    Generate Quiz
                  </>
                )}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setDocumentToDelete(row.original)
                setUnitToDelete(null)
                setDeleteDialogOpen(true)
              }}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )
      },
    },
  ]

  const table = useReactTable({
    data: documents,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading documents...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="p-6 bg-destructive/10 text-destructive">
        <p>{error}</p>
        <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
          Retry
        </Button>
      </Card>
    )
  }

  return (
    <>
      <div className="w-full">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Filter by subject..."
                value={(table.getColumn("class")?.getFilterValue() as string) ?? ""}
                onChange={(event) => table.getColumn("class")?.setFilterValue(event.target.value)}
              />
            </div>
            <Select
              value={filters.grade}
              onValueChange={(value) => {
                setFilters(prev => ({ ...prev, grade: value }))
                table.getColumn("grade")?.setFilterValue(value === "all" ? "" : value)
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="9">Grade 9</SelectItem>
                <SelectItem value="10">Grade 10</SelectItem>
                <SelectItem value="11">Grade 11</SelectItem>
                <SelectItem value="12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filters.status}
              onValueChange={(value) => {
                setFilters(prev => ({ ...prev, status: value }))
                table.getColumn("status")?.setFilterValue(value === "all" ? "" : value)
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="processed">Processed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filters.type}
              onValueChange={(value) => {
                setFilters(prev => ({ ...prev, type: value }))
                table.getColumn("type")?.setFilterValue(value === "all" ? "" : value)
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="PDF Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="scanned">Scanned</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2 ml-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={refreshing || !onRefresh}
                className="gap-2"
              >
                {refreshing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Refreshing...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </>
                )}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    Columns <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) => column.toggleVisibility(!!value)}
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <TableRow data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                    {expandedRows[row.original.id] && row.original.units && (
                      <TableRow
                        key={`${row.id}-expanded`}
                        className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"
                      >
                        <TableCell colSpan={row.getVisibleCells().length} className="p-0">
                          <div className="p-4">
                            <h4 className="font-medium mb-2 flex items-center text-indigo-700 dark:text-indigo-300">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Units/Chapters
                            </h4>
                            <div className="grid gap-4">
                              {row.original.units.map((unit) => (
                                <Card
                                  key={unit.id}
                                  className="overflow-hidden border-indigo-200 dark:border-indigo-800/30 bg-white dark:bg-slate-900"
                                >
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4 text-violet-500" />
                                        <span className="font-medium">{unit.title}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => handleGenerateQuiz(row.original.id, unit.id)}
                                          disabled={generatingQuiz[unit.id]}
                                          className="whitespace-nowrap bg-gradient-to-r from-violet-50 to-fuchsia-50 border-violet-200 text-violet-700 hover:bg-gradient-to-r hover:from-violet-100 hover:to-fuchsia-100 dark:bg-gradient-to-r dark:from-violet-900/30 dark:to-fuchsia-900/30 dark:border-violet-800/30 dark:text-violet-300"
                                        >
                                          {generatingQuiz[unit.id] ? (
                                            <>
                                              <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                                              Generating...
                                            </>
                                          ) : (
                                            <>
                                              <Brain className="mr-2 h-3 w-3" />
                                              Generate Unit Quiz
                                            </>
                                          )}
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => {
                                            setUnitToDelete({ id: unit.id, title: unit.title, documentId: row.original.id })
                                            setDeleteDialogOpen(true)
                                          }}
                                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                        >
                                          <Trash2 className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No documents found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredRowModel().rows.length} document(s) found.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
        </div>
      </div>

      <DeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setDocumentToDelete(null)
          setUnitToDelete(null)
        }}
        onConfirm={unitToDelete ? handleDeleteUnit : handleDelete}
        title={unitToDelete ? "Delete Unit" : "Delete Document"}
        description={unitToDelete 
          ? `Are you sure you want to delete "${unitToDelete.title}"? This action cannot be undone.`
          : `Are you sure you want to delete "${documentToDelete?.filename}"? This action cannot be undone.`
        }
        showUnitOption={documentToDelete?.status === "processed" && documentToDelete?.units && documentToDelete.units.length > 0}
        showQuizOption={documentToDelete?.status === "processed" && documentToDelete?.quizzes && documentToDelete.quizzes.length > 0}
      />
    </>
  )
}
