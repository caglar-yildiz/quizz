import { StorageService } from './StorageService';
import { writeFile, mkdir, appendFile, readFile, unlink } from 'fs/promises';
import { join } from 'path';

export class LocalStorageService implements StorageService {
  private readonly uploadDir: string;
  private readonly chunkDir: string;

  constructor() {
    this.uploadDir = join(process.cwd(), 'public', 'uploads', 'pdfs');
    this.chunkDir = join(process.cwd(), 'public', 'uploads', 'chunks');
  }

  async saveFile(file: File, slug: string): Promise<string> {
    try {
      // Ensure upload directory exists
      await mkdir(this.uploadDir, { recursive: true });

      // Convert File to Buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create file path
      const filePath = join(this.uploadDir, `${slug}.pdf`);

      // Write file
      await writeFile(filePath, buffer);

      // Return relative path
      return `uploads/pdfs/${slug}.pdf`;
    } catch (error) {
      console.error('Error saving file:', error);
      throw new Error('Failed to save file');
    }
  }

  async saveChunk(file: File, slug: string, chunkIndex: number, totalChunks: number): Promise<string> {
    try {
      // Ensure chunk directory exists
      await mkdir(this.chunkDir, { recursive: true });

      // Convert chunk to Buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create chunk path
      const chunkPath = join(this.chunkDir, `${slug}_${chunkIndex}`);

      // Write chunk
      await writeFile(chunkPath, buffer);

      return chunkPath;
    } catch (error) {
      console.error('Error saving chunk:', error);
      throw new Error('Failed to save chunk');
    }
  }

  async finalizeUpload(slug: string, totalChunks: number): Promise<void> {
    try {
      // Ensure upload directory exists
      await mkdir(this.uploadDir, { recursive: true });

      // Create final file path
      const finalPath = join(this.uploadDir, `${slug}.pdf`);

      // Combine all chunks into final file
      for (let i = 0; i < totalChunks; i++) {
        const chunkPath = join(this.chunkDir, `${slug}_${i}`);
        const chunkBuffer = await readFile(chunkPath);
        await appendFile(finalPath, chunkBuffer);
        
        // Clean up chunk
        await unlink(chunkPath);
      }
    } catch (error) {
      console.error('Error finalizing upload:', error);
      throw new Error('Failed to finalize upload');
    }
  }

  getFileUrl(filePath: string): string {
    return `/${filePath}`;
  }

  async deleteFile(filePath: string): Promise<void> {
    try {
      const fullPath = join(process.cwd(), 'public', filePath);
      await unlink(fullPath);
    } catch (error) {
      console.error('Error deleting file:', error);
      throw new Error('Failed to delete file');
    }
  }
} 