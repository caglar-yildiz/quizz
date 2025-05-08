-- AlterTable
ALTER TABLE "UploadedFile" ADD COLUMN     "extractedContent" BOOLEAN DEFAULT false,
ADD COLUMN     "pageCount" INTEGER,
ADD COLUMN     "processingTime" INTEGER;
