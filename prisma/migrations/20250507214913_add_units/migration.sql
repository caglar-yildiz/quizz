-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "pageRange" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL,
    "keyTopics" TEXT[],
    "documentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "UploadedFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
