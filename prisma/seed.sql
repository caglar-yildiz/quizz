-- Clear existing data
TRUNCATE TABLE "Question" CASCADE;
TRUNCATE TABLE "Quiz" CASCADE;
TRUNCATE TABLE "Unit" CASCADE;
TRUNCATE TABLE "UploadedFile" CASCADE;

-- Insert sample documents
INSERT INTO "UploadedFile" (
    id, 
    "fileName", 
    "fileSlug", 
    "filePath", 
    subject, 
    grade, 
    "pdfType", 
    status, 
    "pageCount", 
    "extractedContent", 
    "processingTime", 
    "createdAt", 
    "updatedAt"
) VALUES
    (
        'doc1',
        'mathematics_textbook_10.pdf',
        'mathematics-textbook-10-123456',
        'uploads/pdfs/mathematics-textbook-10-123456.pdf',
        'Mathematics',
        '10',
        'normal',
        'processed',
        245,
        true,
        32,
        NOW(),
        NOW()
    ),
    (
        'doc2',
        'physics_11_advanced.pdf',
        'physics-11-advanced-789012',
        'uploads/pdfs/physics-11-advanced-789012.pdf',
        'Physics',
        '11',
        'normal',
        'processed',
        312,
        true,
        45,
        NOW(),
        NOW()
    );

-- Insert sample units
INSERT INTO "Unit" (
    id,
    title,
    "pageRange",
    "wordCount",
    "keyTopics",
    "documentId",
    "createdAt",
    "updatedAt"
) VALUES
    (
        'unit1',
        'Algebra Fundamentals',
        '1-50',
        12000,
        ARRAY['Linear Equations', 'Quadratic Equations', 'Polynomials'],
        'doc1',
        NOW(),
        NOW()
    ),
    (
        'unit2',
        'Geometry Basics',
        '51-100',
        15000,
        ARRAY['Triangles', 'Circles', 'Polygons'],
        'doc1',
        NOW(),
        NOW()
    ),
    (
        'unit3',
        'Mechanics',
        '1-75',
        18000,
        ARRAY['Newton''s Laws', 'Motion', 'Forces'],
        'doc2',
        NOW(),
        NOW()
    );

-- Insert sample quizzes
INSERT INTO "Quiz" (
    id,
    title,
    description,
    difficulty,
    "documentId",
    "unitId",
    "createdAt",
    "updatedAt"
) VALUES
    (
        'quiz1',
        'Algebra Fundamentals Quiz',
        'Test your understanding of basic algebraic concepts',
        'easy',
        'doc1',
        'unit1',
        NOW(),
        NOW()
    ),
    (
        'quiz2',
        'Geometry Mastery Quiz',
        'Advanced geometry concepts and problem-solving',
        'hard',
        'doc1',
        'unit2',
        NOW(),
        NOW()
    ),
    (
        'quiz3',
        'Mechanics Practice Quiz',
        'Basic mechanics concepts and applications',
        'medium',
        'doc2',
        'unit3',
        NOW(),
        NOW()
    );

-- Insert sample questions (both standalone and quiz-related)
INSERT INTO "Question" (
    id,
    type,
    question,
    options,
    "correctAnswer",
    reasoning,
    "documentId",
    "unitId",
    "quizId",
    "createdAt",
    "updatedAt"
) VALUES
    -- Multiple choice questions for Algebra (Unit 1)
    (
        'q1',
        'multiple_choice',
        'What is the solution to the equation 2x + 5 = 13?',
        ARRAY['x = 4', 'x = 6', 'x = 8', 'x = 9'],
        0,
        'To solve 2x + 5 = 13, subtract 5 from both sides: 2x = 8, then divide by 2: x = 4',
        'doc1',
        'unit1',
        'quiz1',
        NOW(),
        NOW()
    ),
    (
        'q2',
        'multiple_choice',
        'Which of the following is a quadratic equation?',
        ARRAY['2x + 3 = 7', 'x² + 2x + 1 = 0', '3x - 2 = 4', '5x = 10'],
        1,
        'A quadratic equation must have a term with x². Only x² + 2x + 1 = 0 has this term.',
        'doc1',
        'unit1',
        'quiz1',
        NOW(),
        NOW()
    ),
    -- True/False questions for Geometry (Unit 2)
    (
        'q3',
        'true_false',
        'All equilateral triangles are also isosceles triangles.',
        ARRAY['False', 'True'],
        1,
        'An equilateral triangle has all sides equal, which means it also has at least two sides equal (the definition of isosceles).',
        'doc1',
        'unit2',
        'quiz2',
        NOW(),
        NOW()
    ),
    -- Multiple choice questions for Mechanics (Unit 3)
    (
        'q4',
        'multiple_choice',
        'According to Newton''s First Law, an object will:',
        ARRAY[
            'Continue in its state of rest or uniform motion unless acted upon by an external force',
            'Always accelerate when a force is applied',
            'Move in a circular path when a force is applied',
            'Stop moving when no force is applied'
        ],
        0,
        'Newton''s First Law states that an object will maintain its state of rest or uniform motion unless acted upon by an external force.',
        'doc2',
        'unit3',
        'quiz3',
        NOW(),
        NOW()
    ),
    -- Standalone questions (not part of any quiz)
    (
        'q5',
        'multiple_choice',
        'What is the formula for the area of a circle?',
        ARRAY['πr²', '2πr', 'πd', '2πd'],
        0,
        'The area of a circle is calculated using the formula A = πr², where r is the radius of the circle.',
        'doc1',
        'unit2',
        NULL,
        NOW(),
        NOW()
    ),
    (
        'q6',
        'true_false',
        'The sum of angles in a triangle is always 180 degrees.',
        ARRAY['False', 'True'],
        1,
        'This is a fundamental property of triangles in Euclidean geometry. The sum of all three interior angles must equal 180 degrees.',
        'doc1',
        NULL,
        NULL,
        NOW(),
        NOW()
    ); 