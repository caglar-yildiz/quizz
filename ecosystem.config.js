module.exports = {
  apps: [
    {
      name: 'pdf-processor',
      script: 'scripts/process_pdfs.py',
      interpreter: 'python3',
      watch: false,
      env: {
        POSTGRES_DB: process.env.POSTGRES_DB,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_PORT: process.env.POSTGRES_PORT || '5432'
      }
    },
    {
      name: 'quiz-generator',
      script: 'scripts/generate_quiz.py',
      interpreter: 'python3',
      watch: false,
      env: {
        POSTGRES_DB: process.env.POSTGRES_DB,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_PORT: process.env.POSTGRES_PORT || '5432'
      }
    }
  ]
} 