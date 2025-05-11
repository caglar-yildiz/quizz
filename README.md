# Quiz App

A web application for generating quizzes from documents using AI.

## Prerequisites

- Node.js (v18 or higher)
- Python (v3.8 or higher)
- PM2 (for process management)
- PostgreSQL (for database)

## Installation

> **Note**: All commands should be run from the project root directory (`quiz_app/`)

1. Clone the repository:
```bash
git clone <repository-url>
cd quiz_app
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Set up Python virtual environment and install dependencies:
```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r scripts/requirements.txt

# Deactivate virtual environment when done
deactivate
```

4. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your configuration.

5. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
npx prisma db seed
```

## Development

1. Start the Next.js development server:
```bash
npm run dev
```

2. Start the Python backend server:
```bash
# Activate virtual environment first
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Start the server
python backend/server.py

# Deactivate when done
deactivate
```

## Production

1. Build the Next.js application:
```bash
npm run build
```

2. Start the application using PM2:
```bash
# Start Next.js server
pm2 start npm --name "quiz-app" -- start

# Start Python backend (make sure to use the virtual environment's Python)
pm2 start venv/bin/python --name "quiz-backend" -- backend/server.py

# Monitor the processes
pm2 monit

# View logs
pm2 logs

# Stop the application
pm2 stop all
```

## Database Management

```bash
# Reset database and run seed
npx prisma migrate reset --force

# Generate Prisma client
npx prisma generate

# View database
npx prisma studio
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
quiz_app/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions
├── prisma/             # Database schema and migrations
├── public/             # Static files
├── backend/            # Python backend
├── venv/               # Python virtual environment
└── types/              # TypeScript type definitions
```

## Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_API_URL` - API endpoint URL
- `PYTHON_PATH` - Path to Python executable
- `STORAGE_PATH` - Path for file storage

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

MIT
