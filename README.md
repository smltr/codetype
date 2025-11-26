# CodeType

**Build muscle memory for any language or framework.**

A typing trainer inspired by [Monkeytype](https://monkeytype.com), but for code. Practice typing real code snippets tailored to the language or framework you're learning—whether it's Python basics, FastAPI routes, React hooks, or Rust lifetimes.

## Why CodeType?

Typing speed matters for developers, but generic typing tests don't help you internalize the syntax and patterns of your stack. CodeType generates contextual code challenges using AI, so every keystroke reinforces real skills. Also, because we are generating the text to type with an LLM, it isn't limited to any concept. You could generate just `Python` code, or you could practice `Python loops`, or maybe `TypeScript typing` to get practice using a specific skillset.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router) |
| Backend | Python / FastAPI |
| LLM | Google Gemini Flash |
| Styling | Tailwind CSS |

## Quick Start

### Prerequisites

- Node.js 18+
- Python 3.11+
- [uv](https://github.com/astral-sh/uv) or pip

### Run Locally

**1. Clone and enter the project:**

```bash
git clone <repo-url>
cd codetype
```

**2. Start the backend:**

```bash
cd backend
uv venv
source .venv/bin/activate 
uv pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**3. Start the frontend (new terminal):**

```bash
cd frontend
npm install
npm run dev
```

**4. Open http://localhost:3000**

## MVP Features

- [ ] Monkeytype-style typing interface
- [ ] Type any language/framework in a text box
- [ ] AI-generated code challenges (Gemini Flash)
- [ ] WPM and accuracy stats after each challenge

## Possible Future Features

- A mode to practice vim movements
    - This would be a little different than just typing as it would be important to see movements happen

## Project Structure

```
codetype/
├── frontend/          # Next.js app
│   ├── app/           # App Router pages
│   ├── components/    # React components
│   └── ...
├── backend/           # FastAPI app
│   ├── main.py        # Entry point
│   └── ...
├── README.md
└── MILESTONES.md      # Progress tracker
```

## License

MIT

