# Random CRUD Backend

A Node.js/TypeScript backend for managing projects and tasks, using Express, Prisma, and JWT authentication.

## Features

- User authentication (JWT)
- CRUD operations for Projects and Tasks
- RESTful API (versioned under `/v1`)
- Prisma ORM with MySQL (configurable)
- Seed script for development data
- Request logging, error handling, and CORS support

## Project Structure

```
.
├── prisma/                # Prisma schema, migrations, and seed script
├── src/
│   ├── errors/            # Custom error classes
│   ├── generated/         # Generated Prisma client
│   ├── middleware/        # Express middleware (auth, error handling, etc.)
│   ├── routes/            # API route handlers (v1/projects, v1/tasks, etc.)
│   ├── utils.ts           # Utility functions
│   ├── config.ts          # App configuration
│   ├── server.ts          # Express app factory
│   ├── index.ts           # App entry point
│   └── prisma-client.ts   # Prisma client instance
├── .env                   # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in required values (e.g., `APP_SECRET`, database URL).

3. **Run database migrations:**
   ```sh
   npx prisma migrate deploy
   ```

4. **Seed the database (optional):**
   ```sh
   npm run seed
   ```

5. **Start the server:**
   ```sh
   npm run dev
   ```
   The server will run on the port specified in `.env` or default to 3000.

## API

- Health check: `GET /health`
- Projects: `GET /v1/projects`, `GET /v1/projects/:id`, `GET /v1/projects/:id/tasks`
- Tasks: CRUD endpoints under `/v1/tasks`

Authentication is required for most endpoints. Use a JWT in the `Authorization` header.

## Testing

Run tests with:

```sh
npm test
```

## License