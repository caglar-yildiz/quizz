import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface DeleteDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (options: { deleteUnits: boolean; deleteQuizzes: boolean }) => void
  title: string
  description: string
  showUnitOption?: boolean
  showQuizOption?: boolean
}

export function DeleteDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  showUnitOption = true,
  showQuizOption = true,
}: DeleteDialogProps) {
  const [deleteUnits, setDeleteUnits] = useState(false)
  const [deleteQuizzes, setDeleteQuizzes] = useState(false)

  const handleConfirm = () => {
    onConfirm({ deleteUnits, deleteQuizzes })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {showUnitOption && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="delete-units"
                checked={deleteUnits}
                onCheckedChange={(checked) => setDeleteUnits(checked as boolean)}
              />
              <Label htmlFor="delete-units">Delete associated units</Label>
            </div>
          )}
          {showQuizOption && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="delete-quizzes"
                checked={deleteQuizzes}
                onCheckedChange={(checked) => setDeleteQuizzes(checked as boolean)}
              />
              <Label htmlFor="delete-quizzes">Delete associated quizzes</Label>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 