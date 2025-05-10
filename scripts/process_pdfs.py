import os
import time
import psycopg2
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import logging
from pathlib import Path
import tempfile
import shutil
from abc import ABC, abstractmethod
from typing import Optional, Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

class StorageProvider(ABC):
    @abstractmethod
    def download_file(self, file_path: str, destination: str) -> bool:
        """Download file from storage to local destination"""
        pass

class LocalStorageProvider(StorageProvider):
    def download_file(self, file_path: str, destination: str) -> bool:
        try:
            shutil.copy2(file_path, destination)
            return True
        except Exception as e:
            logging.error(f"Error copying file from local storage: {str(e)}")
            return False

class AzureStorageProvider(StorageProvider):
    def download_file(self, file_path: str, destination: str) -> bool:
        # TODO: Implement Azure Blob Storage download
        # This is a placeholder for Azure implementation
        raise NotImplementedError("Azure storage provider not implemented yet")

def get_storage_provider(provider_type: str) -> StorageProvider:
    """Factory function to get the appropriate storage provider"""
    providers = {
        "local": LocalStorageProvider(),
        "azure": AzureStorageProvider()
    }
    return providers.get(provider_type, LocalStorageProvider())

def get_document_info(cursor, file_id: str) -> Optional[Dict[str, Any]]:
    """Get document information from database"""
    try:
        cursor.execute("""
            SELECT 
                id, 
                file_path, 
                pdf_type,
                subject,
                grade,
                status
            FROM "UploadedFile" 
            WHERE id = %s
        """, (file_id,))
        
        result = cursor.fetchone()
        if not result:
            return None
            
        return {
            "id": result[0],
            "file_path": result[1],
            "pdf_type": result[2],
            "subject": result[3],
            "grade": result[4],
            "status": result[5]
        }
    except Exception as e:
        logging.error(f"Error fetching document info: {str(e)}")
        return None

def process_pdf_content(file_path: str, pdf_type: str, document_info: Dict[str, Any]) -> bool:
    """
    Process the PDF content based on its type
    This is where the actual PDF processing logic will be implemented
    """
    try:
        if pdf_type == "normal":
            # TODO: Implement normal PDF processing
            logging.info(f"Processing normal PDF: {file_path}")
            return True
        elif pdf_type == "scanned":
            # TODO: Implement scanned PDF processing
            logging.info(f"Processing scanned PDF: {file_path}")
            return True
        else:
            logging.error(f"Unknown PDF type: {pdf_type}")
            return False
    except Exception as e:
        logging.error(f"Error processing PDF content: {str(e)}")
        return False

def handle_pdf_processing(file_id: str, db_connection) -> bool:
    """
    Main function to handle PDF processing workflow
    """
    try:
        with db_connection.cursor() as cursor:
            # Get document information
            document_info = get_document_info(cursor, file_id)
            if not document_info:
                logging.error(f"Could not find document info for ID: {file_id}")
                return False

            # Update status to processing
            cursor.execute(
                "UPDATE \"UploadedFile\" SET status = 'processing' WHERE id = %s",
                (file_id,)
            )
            db_connection.commit()

            # Create temporary directory for processing
            with tempfile.TemporaryDirectory() as temp_dir:
                temp_file_path = os.path.join(temp_dir, f"{file_id}.pdf")
                
                # Get appropriate storage provider
                storage_provider = get_storage_provider("local")  # TODO: Get provider from config
                
                # Download file to temp directory
                if not storage_provider.download_file(document_info["file_path"], temp_file_path):
                    raise Exception("Failed to download file from storage")

                # Process the PDF
                if not process_pdf_content(temp_file_path, document_info["pdf_type"], document_info):
                    raise Exception("Failed to process PDF content")

                # Update status to processed
                cursor.execute(
                    "UPDATE \"UploadedFile\" SET status = 'processed', extracted_content = true WHERE id = %s",
                    (file_id,)
                )
                db_connection.commit()
                logging.info(f"Successfully processed document {file_id}")
                return True

    except Exception as e:
        logging.error(f"Error in PDF processing workflow: {str(e)}")
        # Update status to error
        with db_connection.cursor() as cursor:
            cursor.execute(
                "UPDATE \"UploadedFile\" SET status = 'error' WHERE id = %s",
                (file_id,)
            )
            db_connection.commit()
        return False

class PDFHandler(FileSystemEventHandler):
    def __init__(self, db_connection):
        self.db_connection = db_connection
        self.processing = set()

    def on_created(self, event):
        if event.is_directory:
            return
        
        if not event.src_path.endswith('.pdf'):
            return

        file_path = event.src_path
        if file_path in self.processing:
            return

        self.processing.add(file_path)
        try:
            # Get file ID from database
            with self.db_connection.cursor() as cursor:
                cursor.execute(
                    "SELECT id FROM \"UploadedFile\" WHERE file_path = %s AND status = 'uploaded'",
                    (file_path,)
                )
                result = cursor.fetchone()
                
                if not result:
                    logging.info(f"No matching record found for {file_path}")
                    return

                file_id = result[0]
                handle_pdf_processing(file_id, self.db_connection)

        finally:
            self.processing.remove(file_path)

def main():
    # Database connection
    db_connection = psycopg2.connect(
        dbname=os.getenv("POSTGRES_DB"),
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
        host=os.getenv("POSTGRES_HOST"),
        port=os.getenv("POSTGRES_PORT", "5432")
    )

    # Create uploads directory if it doesn't exist
    uploads_dir = Path("uploads/pdfs")
    uploads_dir.mkdir(parents=True, exist_ok=True)

    # Set up file system observer
    event_handler = PDFHandler(db_connection)
    observer = Observer()
    observer.schedule(event_handler, str(uploads_dir), recursive=False)
    observer.start()

    logging.info(f"Started watching {uploads_dir} for new PDFs")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        db_connection.close()
    
    observer.join()

if __name__ == "__main__":
    main() 