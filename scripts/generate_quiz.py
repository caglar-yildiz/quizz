import os
import time
import psycopg2
import logging
from typing import Optional, Dict, Any
import json
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

def get_document_info(cursor, document_id: str) -> Optional[Dict[str, Any]]:
    """Get document information from database"""
    try:
        cursor.execute("""
            SELECT 
                id, 
                file_path, 
                pdf_type,
                subject,
                grade,
                status,
                extracted_content
            FROM "UploadedFile" 
            WHERE id = %s
        """, (document_id,))
        
        result = cursor.fetchone()
        if not result:
            return None
            
        return {
            "id": result[0],
            "file_path": result[1],
            "pdf_type": result[2],
            "subject": result[3],
            "grade": result[4],
            "status": result[5],
            "extracted_content": result[6]
        }
    except Exception as e:
        logging.error(f"Error fetching document info: {str(e)}")
        return None

def get_unit_info(cursor, unit_id: str) -> Optional[Dict[str, Any]]:
    """Get unit information from database"""
    try:
        cursor.execute("""
            SELECT 
                id,
                title,
                page_range,
                word_count,
                key_topics
            FROM "Unit"
            WHERE id = %s
        """, (unit_id,))
        
        result = cursor.fetchone()
        if not result:
            return None
            
        return {
            "id": result[0],
            "title": result[1],
            "page_range": result[2],
            "word_count": result[3],
            "key_topics": result[4]
        }
    except Exception as e:
        logging.error(f"Error fetching unit info: {str(e)}")
        return None

def generate_quiz_questions(document_info: Dict[str, Any], unit_info: Optional[Dict[str, Any]] = None) -> list:
    """
    Generate quiz questions based on document and unit information
    This is where you'll implement the actual question generation logic
    """
    # TODO: Implement actual question generation
    # For now, return mock questions
    return [
        {
            "type": "multiple_choice",
            "question": "Sample question 1?",
            "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
            "correctAnswer": 0,
            "reasoning": "This is the correct answer because..."
        },
        {
            "type": "true_false",
            "question": "Sample true/false question?",
            "options": ["True", "False"],
            "correctAnswer": 1,
            "reasoning": "This is false because..."
        }
    ]

def handle_quiz_generation(quiz_id: str, document_id: str, unit_id: Optional[str], db_connection) -> bool:
    """
    Main function to handle quiz generation workflow
    """
    try:
        with db_connection.cursor() as cursor:
            # Get document information
            document_info = get_document_info(cursor, document_id)
            if not document_info:
                logging.error(f"Could not find document info for ID: {document_id}")
                return False

            # Get unit information if provided
            unit_info = None
            if unit_id:
                unit_info = get_unit_info(cursor, unit_id)
                if not unit_info:
                    logging.error(f"Could not find unit info for ID: {unit_id}")
                    return False

            # Generate questions
            questions = generate_quiz_questions(document_info, unit_info)

            # Save questions to database
            for question in questions:
                cursor.execute("""
                    INSERT INTO "Question" (
                        type,
                        question,
                        options,
                        correct_answer,
                        reasoning,
                        document_id,
                        unit_id,
                        quiz_id
                    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                """, (
                    question["type"],
                    question["question"],
                    question["options"],
                    question["correctAnswer"],
                    question["reasoning"],
                    document_id,
                    unit_id,
                    quiz_id
                ))

            db_connection.commit()
            logging.info(f"Successfully generated quiz {quiz_id} with {len(questions)} questions")
            return True

    except Exception as e:
        logging.error(f"Error in quiz generation workflow: {str(e)}")
        return False

def main():
    # Database connection
    db_connection = psycopg2.connect(
        dbname=os.getenv("POSTGRES_DB"),
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
        host=os.getenv("POSTGRES_HOST"),
        port=os.getenv("POSTGRES_PORT", "5432")
    )

    # Create a queue directory for quiz generation requests
    queue_dir = Path("queue/quiz_generation")
    queue_dir.mkdir(parents=True, exist_ok=True)

    logging.info("Started quiz generation service")

    try:
        while True:
            # Check for new quiz generation requests
            for request_file in queue_dir.glob("*.json"):
                try:
                    with open(request_file, 'r') as f:
                        request = json.load(f)
                    
                    quiz_id = request.get("quiz_id")
                    document_id = request.get("document_id")
                    unit_id = request.get("unit_id")

                    if not all([quiz_id, document_id]):
                        logging.error(f"Invalid request in {request_file}")
                        request_file.unlink()
                        continue

                    # Process the request
                    success = handle_quiz_generation(quiz_id, document_id, unit_id, db_connection)

                    # Remove the request file
                    request_file.unlink()

                    if success:
                        logging.info(f"Successfully processed quiz generation request for quiz {quiz_id}")
                    else:
                        logging.error(f"Failed to process quiz generation request for quiz {quiz_id}")

                except Exception as e:
                    logging.error(f"Error processing request file {request_file}: {str(e)}")
                    request_file.unlink()

            time.sleep(1)  # Check every second

    except KeyboardInterrupt:
        logging.info("Stopping quiz generation service")
    finally:
        db_connection.close()

if __name__ == "__main__":
    main()