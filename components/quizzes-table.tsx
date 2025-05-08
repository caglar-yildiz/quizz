"use client"

import { useState, useEffect } from "react"
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
import { ArrowUpDown, ChevronDown, FileText, Loader2, Eye, FileQuestion } from "lucide-react"

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
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

type Quiz = {
  id: string
  title: string
  documentId: string
  documentTitle: string
  subject: string
  grade: string
  unitId?: string
  unitTitle?: string
  createdAt: string
  questionCount: number
  difficulty: "easy" | "medium" | "hard"
  questions: QuizQuestion[]
}

export default function QuizzesTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null)

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        setLoading(true)
        // In a real application, this would be an API call
        // const response = await fetch("/api/quizzes")
        // const data = await response.json()

        // For demonstration, we'll use mock data
        const mockData: Quiz[] = [
          {
            id: "quiz1",
            title: "Ancient Civilizations Quiz",
            documentId: "1",
            documentTitle: "History 9th Grade",
            subject: "History",
            grade: "9",
            unitId: "unit1",
            unitTitle: "Ancient Civilizations",
            createdAt: "2023-05-16T14:30:00Z",
            questionCount: 10,
            difficulty: "medium",
            questions: [
              {
                id: "q1",
                question: "Which civilization developed the first known writing system called cuneiform?",
                options: ["Egyptian", "Sumerian", "Indus Valley", "Chinese"],
                correctAnswer: 1,
              },
              {
                id: "q2",
                question: "Which river valley is known as the 'Gift of the Nile'?",
                options: ["Mesopotamia", "Indus Valley", "Egypt", "Yellow River Valley"],
                correctAnswer: 2,
              },
              {
                id: "q3",
                question: "What was the main purpose of the ziggurats in Mesopotamia?",
                options: ["Astronomical observations", "Religious temples", "Royal tombs", "Government buildings"],
                correctAnswer: 1,
              },
            ],
          },
          {
            id: "quiz2",
            title: "Mathematics Full Book Quiz",
            documentId: "3",
            documentTitle: "Mathematics 10th Grade",
            subject: "Mathematics",
            grade: "10",
            createdAt: "2023-05-15T09:45:00Z",
            questionCount: 25,
            difficulty: "hard",
            questions: [
              {
                id: "q1",
                question: "What is the solution to the equation 2x + 5 = 15?",
                options: ["x = 5", "x = 10", "x = 7.5", "x = 5.5"],
                correctAnswer: 0,
              },
              {
                id: "q2",
                question: "What is the area of a circle with radius 6 cm?",
                options: ["12π cm²", "36π cm²", "6π cm²", "18π cm²"],
                correctAnswer: 1,
              },
              {
                id: "q3",
                question: "If sin(θ) = 0.5, what is θ?",
                options: ["30°", "45°", "60°", "90°"],
                correctAnswer: 0,
              },
            ],
          },
          {
            id: "quiz3",
            title: "Cell Biology Quiz",
            documentId: "5",
            documentTitle: "Biology 11th Grade",
            subject: "Biology",
            grade: "11",
            unitId: "unit1",
            unitTitle: "Cell Biology",
            createdAt: "2023-05-14T16:20:00Z",
            questionCount: 15,
            difficulty: "medium",
            questions: [
              {
                id: "q1",
                question: "Which organelle is responsible for protein synthesis in a cell?",
                options: ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"],
                correctAnswer: 1,
              },
              {
                id: "q2",
                question: "What is the primary function of mitochondria?",
                options: ["Protein synthesis", "Lipid metabolism", "Energy production", "Waste removal"],
                correctAnswer: 2,
              },
              {
                id: "q3",
                question: "Which of the following is NOT a phase of mitosis?",
                options: ["Prophase", "Metaphase", "Interphase", "Telophase"],
                correctAnswer: 2,
              },
            ],
          },
          {
            id: "quiz4",
            title: "Trigonometry Unit Quiz",
            documentId: "3",
            documentTitle: "Mathematics 10th Grade",
            subject: "Mathematics",
            grade: "10",
            unitId: "unit3",
            unitTitle: "Trigonometry",
            createdAt: "2023-05-13T11:15:00Z",
            questionCount: 12,
            difficulty: "hard",
            questions: [
              {
                id: "q1",
                question: "What is the value of sin(90°)?",
                options: ["0", "1", "undefined", "√2/2"],
                correctAnswer: 1,
              },
              {
                id: "q2",
                question: "Which trigonometric identity is correct?",
                options: [
                  "sin²(θ) + cos²(θ) = 2",
                  "sin²(θ) + cos²(θ) = 1",
                  "sin²(θ) - cos²(θ) = 1",
                  "sin(θ) + cos(θ) = 1",
                ],
                correctAnswer: 1,
              },
              {
                id: "q3",
                question:
                  "In a right triangle, if one angle is 30° and the hypotenuse is 10 units, what is the length of the opposite side?",
                options: ["5 units", "5√3 units", "10√3 units", "5√2 units"],
                correctAnswer: 0,
              },
            ],
          },
        ]

        setQuizzes(mockData)
        setError(null)
      } catch (err) {
        console.error("Failed to fetch quizzes:", err)
        setError("Failed to load quizzes. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchQuizzes()
  }, [])

  const viewQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz)
  }

  const columns: ColumnDef<Quiz>[] = [
    {
      accessorKey: "title",
      header: "Quiz Title",
      cell: ({ row }) => (
        <div className="flex items-center">
          <FileQuestion className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{row.getValue("title")}</span>
        </div>
      ),
    },
    {
      accessorKey: "documentTitle",
      header: "Document",
      cell: ({ row }) => (
        <div className="flex items-center">
          <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{row.getValue("documentTitle")}</span>
        </div>
      ),
    },
    {
      accessorKey: "subject",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Subject
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "grade",
      header: "Grade",
    },
    {
      accessorKey: "unitTitle",
      header: "Unit",
      cell: ({ row }) => <div>{row.getValue("unitTitle") || "Full Book"}</div>,
    },
    {
      accessorKey: "questionCount",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Questions
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "difficulty",
      header: "Difficulty",
      cell: ({ row }) => {
        const difficulty = row.getValue("difficulty") as string
        return (
          <Badge
            variant={difficulty === "easy" ? "outline" : difficulty === "medium" ? "secondary" : "destructive"}
            className={
              difficulty === "easy"
                ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-300 dark:bg-gradient-to-r dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-300 dark:border-green-800/30"
                : difficulty === "medium"
                  ? "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-300 dark:bg-gradient-to-r dark:from-amber-900/30 dark:to-yellow-900/30 dark:text-amber-300 dark:border-amber-800/30"
                  : "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-300 dark:bg-gradient-to-r dark:from-red-900/30 dark:to-pink-900/30 dark:text-red-300 dark:border-red-800/30"
            }
          >
            {difficulty}
          </Badge>
        )
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Created
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"))
        return <div>{date.toLocaleDateString()}</div>
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => viewQuiz(row.original)}
                className="whitespace-nowrap bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 dark:bg-gradient-to-r dark:from-green-900/30 dark:to-emerald-900/30 dark:border-green-800/30 dark:text-green-300"
              >
                <Eye className="mr-2 h-3 w-3" />
                View Quiz
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gradient-to-b from-white to-green-50 dark:from-slate-900 dark:to-green-950/20">
              {selectedQuiz && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-green-700 dark:text-green-300">{selectedQuiz.title}</DialogTitle>
                    <DialogDescription className="text-green-600/70 dark:text-green-400/70">
                      From {selectedQuiz.documentTitle} • {selectedQuiz.subject} • Grade {selectedQuiz.grade}
                      {selectedQuiz.unitTitle && ` • Unit: ${selectedQuiz.unitTitle}`}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{selectedQuiz.questionCount} Questions</Badge>
                        <Badge
                          variant={
                            selectedQuiz.difficulty === "easy"
                              ? "outline"
                              : selectedQuiz.difficulty === "medium"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {selectedQuiz.difficulty}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Created on {new Date(selectedQuiz.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-6">
                      {selectedQuiz.questions.map((question, index) => (
                        <div
                          key={question.id}
                          className="space-y-3 bg-white dark:bg-slate-900 p-4 rounded-lg border border-green-200 dark:border-green-900/30 shadow-sm"
                        >
                          <h3 className="font-medium text-green-800 dark:text-green-300">
                            {index + 1}. {question.question}
                          </h3>
                          <RadioGroup defaultValue={question.correctAnswer.toString()}>
                            {question.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className={`flex items-center space-x-2 p-2 rounded-md ${
                                  optIndex === question.correctAnswer ? "bg-green-50 dark:bg-green-900/20" : ""
                                }`}
                              >
                                <RadioGroupItem
                                  value={optIndex.toString()}
                                  id={`${question.id}-option-${optIndex}`}
                                  checked={optIndex === question.correctAnswer}
                                  className={
                                    optIndex === question.correctAnswer ? "text-green-600 border-green-600" : ""
                                  }
                                />
                                <Label
                                  htmlFor={`${question.id}-option-${optIndex}`}
                                  className={
                                    optIndex === question.correctAnswer
                                      ? "font-medium text-green-700 dark:text-green-300"
                                      : ""
                                  }
                                >
                                  {option}
                                  {optIndex === question.correctAnswer && " (Correct)"}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {index < selectedQuiz.questions.length - 1 && (
                            <Separator className="my-4 bg-green-200 dark:bg-green-800/30" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        )
      },
    },
  ]

  const table = useReactTable({
    data: quizzes,
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
        <span className="ml-2">Loading quizzes...</span>
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
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          className="max-w-sm mr-4"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
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
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No quizzes found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} quiz(zes) found.
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
  )
}
