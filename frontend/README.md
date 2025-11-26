# CodeType Frontend

The frontend application for CodeType, a typing trainer for code snippets.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **React:** 19.2.0

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
frontend/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   └── globals.css  # Global styles
├── public/          # Static assets
├── package.json     # Dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## Development Notes

- The app uses the App Router (Next.js 13+)
- Tailwind CSS is configured and ready to use
- TypeScript is enabled for type safety
- ESLint is configured with Next.js rules

## Backend Integration

The frontend expects the backend API to be running on `http://localhost:8000` (default FastAPI port).

For production, update the API base URL in your environment variables.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

For project-wide information, see the [main README](../README.md).

