"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Upload, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  grade: z.string().min(1, {
    message: "Grade is required.",
  }),
  pdfType: z.enum(["normal", "scanned"], {
    required_error: "PDF type is required.",
  }),
  file: z
    .instanceof(File, {
      message: "PDF file is required.",
    })
    .refine((file) => file.type === "application/pdf", "Only PDF files are allowed."),
})

const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB chunks

export default function UploadPdfForm() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<{
    success?: boolean
    message?: string
    metadata?: any
  } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      grade: "",
    },
  })

  const uploadChunk = async (
    file: File,
    chunkIndex: number,
    totalChunks: number,
    fileId: string,
    formData: FormData
  ) => {
    const start = chunkIndex * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, file.size);
    const chunk = file.slice(start, end);

    const chunkFormData = new FormData();
    chunkFormData.append("chunk", chunk);
    chunkFormData.append("chunkIndex", chunkIndex.toString());
    chunkFormData.append("totalChunks", totalChunks.toString());
    chunkFormData.append("fileId", fileId);
    chunkFormData.append("subject", formData.get("subject") as string);
    chunkFormData.append("grade", formData.get("grade") as string);
    chunkFormData.append("pdfType", formData.get("pdfType") as string);

    const response = await fetch("/api/upload/pdf", {
      method: "POST",
      body: chunkFormData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to upload chunk");
    }

    return response.json();
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUploading(true)
    setUploadStatus(null)
    setUploadProgress(0)

    try {
      const formData = new FormData()
      formData.append("subject", values.subject)
      formData.append("grade", values.grade)
      formData.append("pdfType", values.pdfType)
      formData.append("file", values.file)

      // For large files, use chunked upload
      if (values.file.size > 50 * 1024 * 1024) {
        const totalChunks = Math.ceil(values.file.size / CHUNK_SIZE);
        
        // Initialize upload with chunk information
        const initFormData = new FormData();
        initFormData.append("subject", values.subject);
        initFormData.append("grade", values.grade);
        initFormData.append("pdfType", values.pdfType);
        initFormData.append("fileName", values.file.name);
        initFormData.append("fileSize", values.file.size.toString());
        initFormData.append("totalChunks", totalChunks.toString());
        initFormData.append("chunkSize", CHUNK_SIZE.toString());
        initFormData.append("isChunked", "true");
        
        const initResponse = await fetch("/api/upload/pdf", {
          method: "POST",
          body: initFormData,
        });

        if (!initResponse.ok) {
          const errorData = await initResponse.json();
          throw new Error(errorData.error || "Failed to initialize upload");
        }

        const { fileId, fileSlug } = await initResponse.json();

        // Upload chunks
        for (let i = 0; i < totalChunks; i++) {
          await uploadChunk(values.file, i, totalChunks, fileId, formData);
          setUploadProgress(Math.round((i + 1) / totalChunks * 100));
        }

        // Get final file metadata
        const finalResponse = await fetch(`/api/upload/pdf/${fileId}`);
        if (!finalResponse.ok) {
          throw new Error("Failed to get final file metadata");
        }

        const data = await finalResponse.json();
        setUploadStatus({
          success: true,
          message: "PDF uploaded successfully. Content extraction in progress.",
          metadata: data,
        });
      } else {
        // For small files, use direct upload
        const response = await fetch("/api/upload/pdf", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to upload PDF");
        }

        const data = await response.json();
        setUploadStatus({
          success: true,
          message: "PDF uploaded successfully. Content extraction in progress.",
          metadata: data,
        });
      }

      toast({
        title: "Upload Successful",
        description: "Your PDF has been uploaded and is being processed.",
      });

      form.reset();
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus({
        success: false,
        message: error instanceof Error ? error.message : "Failed to upload PDF",
      });

      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "There was an error uploading your PDF.",
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. History, Geography" {...field} />
                  </FormControl>
                  <FormDescription>Enter the subject of the textbook</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[...Array(12)].map((_, i) => (
                        <SelectItem key={i + 1} value={`${i + 1}`}>
                          {`${i + 1}${getOrdinalSuffix(i + 1)} Grade`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Select the grade level</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="pdfType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PDF Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select PDF type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="normal">Normal PDF</SelectItem>
                    <SelectItem value="scanned">Scanned PDF</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Specify whether this is a normal PDF or a scanned document</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>PDF File</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        onChange(file)
                      }
                    }}
                    {...fieldProps}
                  />
                </FormControl>
                <FormDescription>Upload the textbook PDF file (max 50MB)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isUploading}
            className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {uploadProgress > 0 ? `Uploading... ${uploadProgress}%` : "Uploading..."}
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload PDF
              </>
            )}
          </Button>
        </form>
      </Form>

      {uploadStatus && (
        <Alert
          variant={uploadStatus.success ? "default" : "destructive"}
          className={
            uploadStatus.success
              ? "border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300"
              : ""
          }
        >
          <AlertTitle>{uploadStatus.success ? "Upload Successful" : "Upload Failed"}</AlertTitle>
          <AlertDescription>
            {uploadStatus.message}

            {uploadStatus.success && uploadStatus.metadata && (
              <Card className="mt-4 p-4 border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2">Upload Details:</h4>
                <pre className="text-xs overflow-auto p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                  {JSON.stringify(uploadStatus.metadata, null, 2)}
                </pre>
              </Card>
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

function getOrdinalSuffix(num: number): string {
  const j = num % 10
  const k = num % 100
  if (j === 1 && k !== 11) {
    return "st"
  }
  if (j === 2 && k !== 12) {
    return "nd"
  }
  if (j === 3 && k !== 13) {
    return "rd"
  }
  return "th"
}
