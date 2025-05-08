export interface StorageService {
  saveFile(file: File, slug: string): Promise<string>;
  getFileUrl(filePath: string): string;
  deleteFile(filePath: string): Promise<void>;
}

export interface FileMetadata {
  fileName: string;
  fileSlug: string;
  filePath: string;
  subject: string;
  grade: string;
  pdfType: string;
}

export interface ChunkedUploadMetadata {
  fileId: string;
  totalChunks: number;
  chunkSize: number;
  fileName: string;
  fileSize: number;
} 