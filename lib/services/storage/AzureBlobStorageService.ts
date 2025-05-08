import { StorageService } from './StorageService';
import { BlobServiceClient, ContainerClient, BlockBlobClient } from '@azure/storage-blob';
import { DefaultAzureCredential } from '@azure/identity';

export class AzureBlobStorageService implements StorageService {
  private readonly containerClient: ContainerClient;
  private readonly baseUrl: string;

  constructor() {
    // Azure Blob Storage connection string or account name
    const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'uploads';
    
    if (!accountName) {
      throw new Error('Azure Storage account name is required');
    }

    // Create the BlobServiceClient
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      new DefaultAzureCredential()
    );

    // Get a reference to the container
    this.containerClient = blobServiceClient.getContainerClient(containerName);
    this.baseUrl = `https://${accountName}.blob.core.windows.net/${containerName}`;
  }

  async saveFile(file: File, slug: string): Promise<string> {
    try {
      // Convert File to Buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create blob name
      const blobName = `pdfs/${slug}.pdf`;

      // Get a reference to the block blob
      const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);

      // Upload the file
      await blockBlobClient.uploadData(buffer, {
        blobHTTPHeaders: {
          blobContentType: 'application/pdf'
        }
      });

      // Return the relative path
      return `uploads/pdfs/${slug}.pdf`;
    } catch (error) {
      console.error('Error saving file to Azure Blob Storage:', error);
      throw new Error('Failed to save file');
    }
  }

  async saveChunk(file: File, slug: string, chunkIndex: number, totalChunks: number): Promise<string> {
    try {
      // Convert chunk to Buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create blob name for the chunk
      const blobName = `chunks/${slug}_${chunkIndex}`;

      // Get a reference to the block blob
      const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);

      // Upload the chunk
      await blockBlobClient.uploadData(buffer);

      return blobName;
    } catch (error) {
      console.error('Error saving chunk to Azure Blob Storage:', error);
      throw new Error('Failed to save chunk');
    }
  }

  async finalizeUpload(slug: string, totalChunks: number): Promise<void> {
    try {
      // Create final blob name
      const finalBlobName = `pdfs/${slug}.pdf`;
      const finalBlockBlobClient = this.containerClient.getBlockBlobClient(finalBlobName);

      // Start block blob upload
      const blockIds: string[] = [];
      
      // Upload each chunk as a block
      for (let i = 0; i < totalChunks; i++) {
        const chunkBlobName = `chunks/${slug}_${i}`;
        const chunkBlockBlobClient = this.containerClient.getBlockBlobClient(chunkBlobName);
        
        // Get the chunk data
        const downloadResponse = await chunkBlockBlobClient.download();
        const chunkData = await this.streamToBuffer(downloadResponse.readableStreamBody!);
        
        // Generate a unique block ID
        const blockId = Buffer.from(`${i}`).toString('base64');
        
        // Upload the block
        await finalBlockBlobClient.stageBlock(blockId, chunkData, chunkData.length);
        blockIds.push(blockId);
        
        // Delete the chunk after staging
        await chunkBlockBlobClient.delete();
      }

      // Commit the blocks to create the final blob
      await finalBlockBlobClient.commitBlockList(blockIds, {
        blobHTTPHeaders: {
          blobContentType: 'application/pdf'
        }
      });
    } catch (error) {
      console.error('Error finalizing upload in Azure Blob Storage:', error);
      throw new Error('Failed to finalize upload');
    }
  }

  // Helper function to convert stream to buffer
  private async streamToBuffer(readableStream: NodeJS.ReadableStream): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      readableStream.on('data', (data) => {
        chunks.push(Buffer.from(data));
      });
      readableStream.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
      readableStream.on('error', reject);
    });
  }

  getFileUrl(filePath: string): string {
    // Convert relative path to blob name
    const blobName = filePath.replace('uploads/', '');
    return `${this.baseUrl}/${blobName}`;
  }

  async deleteFile(filePath: string): Promise<void> {
    try {
      // Convert relative path to blob name
      const blobName = filePath.replace('uploads/', '');
      const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);
      
      // Delete the blob
      await blockBlobClient.delete();
    } catch (error) {
      console.error('Error deleting file from Azure Blob Storage:', error);
      throw new Error('Failed to delete file');
    }
  }
} 