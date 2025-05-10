import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  try {
    // Clear existing data in the correct order (respecting foreign key constraints)
    await prisma.$transaction(async (tx) => {
      // First try to delete questions if the table exists
      try {
        await tx.question.deleteMany()
      } catch (error) {
        console.log('Question table does not exist yet, skipping deletion')
      }

      // Then try to delete quizzes if the table exists
      try {
        await tx.quiz.deleteMany()
      } catch (error) {
        console.log('Quiz table does not exist yet, skipping deletion')
      }

      // Then try to delete units if the table exists
      try {
        await tx.unit.deleteMany()
      } catch (error) {
        console.log('Unit table does not exist yet, skipping deletion')
      }

      // Finally delete uploaded files if the table exists
      try {
        await tx.uploadedFile.deleteMany()
      } catch (error) {
        console.log('UploadedFile table does not exist yet, skipping deletion')
      }
    })

    // Create documents
    const doc1 = await prisma.uploadedFile.create({
      data: {
        id: 'doc1',
        fileName: 'mathematics_textbook_10.pdf',
        fileSlug: 'mathematics-textbook-10-123456',
        filePath: 'uploads/pdfs/mathematics-textbook-10-123456.pdf',
        subject: 'Mathematics',
        grade: '10',
        pdfType: 'normal',
        status: 'processed',
        pageCount: 245,
        extractedContent: true,
        processingTime: 32,
      },
    })

    const doc2 = await prisma.uploadedFile.create({
      data: {
        id: 'doc2',
        fileName: 'physics_11_advanced.pdf',
        fileSlug: 'physics-11-advanced-789012',
        filePath: 'uploads/pdfs/physics-11-advanced-789012.pdf',
        subject: 'Physics',
        grade: '11',
        pdfType: 'normal',
        status: 'processed',
        pageCount: 312,
        extractedContent: true,
        processingTime: 45,
      },
    })

    // Create units
    const unit1 = await prisma.unit.create({
      data: {
        id: 'unit1',
        title: 'Algebra Fundamentals',
        pageRange: '1-50',
        wordCount: 12000,
        keyTopics: ['Linear Equations', 'Quadratic Equations', 'Polynomials'],
        documentId: doc1.id,
      },
    })

    const unit2 = await prisma.unit.create({
      data: {
        id: 'unit2',
        title: 'Geometry Basics',
        pageRange: '51-100',
        wordCount: 15000,
        keyTopics: ['Triangles', 'Circles', 'Polygons'],
        documentId: doc1.id,
      },
    })

    const unit3 = await prisma.unit.create({
      data: {
        id: 'unit3',
        title: 'Mechanics',
        pageRange: '1-75',
        wordCount: 18000,
        keyTopics: ["Newton's Laws", 'Motion', 'Forces'],
        documentId: doc2.id,
      },
    })

    // Create quizzes
    const quiz1 = await prisma.quiz.create({
      data: {
        id: 'quiz1',
        title: 'Algebra Fundamentals Quiz',
        description: 'Test your understanding of basic algebraic concepts',
        difficulty: 'easy',
        documentId: doc1.id,
        unitId: unit1.id,
      },
    })

    const quiz2 = await prisma.quiz.create({
      data: {
        id: 'quiz2',
        title: 'Geometry Mastery Quiz',
        description: 'Advanced geometry concepts and problem-solving',
        difficulty: 'hard',
        documentId: doc1.id,
        unitId: unit2.id,
      },
    })

    const quiz3 = await prisma.quiz.create({
      data: {
        id: 'quiz3',
        title: 'Mechanics Practice Quiz',
        description: 'Basic mechanics concepts and applications',
        difficulty: 'medium',
        documentId: doc2.id,
        unitId: unit3.id,
      },
    })

    // Create questions
    await prisma.question.createMany({
      data: [
        {
          id: 'q1',
          type: 'multiple_choice',
          question: 'What is the solution to the equation 2x + 5 = 13?',
          options: ['x = 4', 'x = 6', 'x = 8', 'x = 9'],
          correctAnswer: 0,
          reasoning: 'To solve 2x + 5 = 13, subtract 5 from both sides: 2x = 8, then divide by 2: x = 4',
          documentId: doc1.id,
          unitId: unit1.id,
          quizId: quiz1.id,
        },
        {
          id: 'q2',
          type: 'multiple_choice',
          question: 'Which of the following is a quadratic equation?',
          options: ['2x + 3 = 7', 'x² + 2x + 1 = 0', '3x - 2 = 4', '5x = 10'],
          correctAnswer: 1,
          reasoning: 'A quadratic equation must have a term with x². Only x² + 2x + 1 = 0 has this term.',
          documentId: doc1.id,
          unitId: unit1.id,
          quizId: quiz1.id,
        },
        {
          id: 'q3',
          type: 'true_false',
          question: 'All equilateral triangles are also isosceles triangles.',
          options: ['False', 'True'],
          correctAnswer: 1,
          reasoning: 'An equilateral triangle has all sides equal, which means it also has at least two sides equal (the definition of isosceles).',
          documentId: doc1.id,
          unitId: unit2.id,
          quizId: quiz2.id,
        },
        {
          id: 'q4',
          type: 'multiple_choice',
          question: "According to Newton's First Law, an object will:",
          options: [
            'Continue in its state of rest or uniform motion unless acted upon by an external force',
            'Always accelerate when a force is applied',
            'Move in a circular path when a force is applied',
            'Stop moving when no force is applied',
          ],
          correctAnswer: 0,
          reasoning: "Newton's First Law states that an object will maintain its state of rest or uniform motion unless acted upon by an external force.",
          documentId: doc2.id,
          unitId: unit3.id,
          quizId: quiz3.id,
        },
        {
          id: 'q5',
          type: 'multiple_choice',
          question: 'What is the formula for the area of a circle?',
          options: ['πr²', '2πr', 'πd', '2πd'],
          correctAnswer: 0,
          reasoning: 'The area of a circle is calculated using the formula A = πr², where r is the radius of the circle.',
          documentId: doc1.id,
          unitId: unit2.id,
        },
        {
          id: 'q6',
          type: 'true_false',
          question: 'The sum of angles in a triangle is always 180 degrees.',
          options: ['False', 'True'],
          correctAnswer: 1,
          reasoning: 'This is a fundamental property of triangles in Euclidean geometry. The sum of all three interior angles must equal 180 degrees.',
          documentId: doc1.id,
        },
      ],
    })

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 