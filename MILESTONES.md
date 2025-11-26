# CodeType Milestones

Track progress toward MVP. Each milestone is a working, demoable state.

---

## MVP Phase

### Milestone 1: Scaffold
> Get both apps running with a live webview before writing any features.

- [x] Create Next.js app in `/frontend`
- [x] Create FastAPI app in `/backend`
- [x] Backend has `/health` endpoint returning `{ "status": "ok" }`
- [x] Frontend displays message fetched from backend
- [x] Both apps run with hot reload
- [x] Can access live webview at localhost:3000

**Done when:** You can open the browser, see the frontend, and confirm it's talking to the backend.

---

### Milestone 2: Typing UI + Stats
> Build the core typing mechanic with hardcoded text.

- [ ] Display grayed-out code snippet (hardcoded for now)
- [ ] Track user keystrokes, highlight correct/incorrect characters
- [ ] Detect when challenge is complete
- [ ] Calculate and display WPM
- [ ] Calculate and display accuracy percentage
- [ ] "Try again" or "New challenge" button

**Done when:** You can type through a hardcoded snippet and see your WPM/accuracy.

---

### Milestone 3: LLM Challenge Generation
> Connect to Gemini Flash and generate real challenges.

- [ ] Add text input for topic (e.g., "python", "react hooks", "fastapi")
- [ ] Backend endpoint `POST /challenge` calls Gemini Flash
- [ ] Prompt engineering for clean, typeable code snippets
- [ ] Frontend fetches challenge based on user's topic input
- [ ] Handle loading state while generating
- [ ] Handle errors gracefully

**Done when:** You can type "fastapi" and get a real FastAPI code snippet to type.

---

### Milestone 4: Deploy
> Get it live on the internet with a shareable URL.

- [ ] Choose and configure backend hosting (Railway/Fly.io/Render)
- [ ] Deploy backend with environment variables
- [ ] Deploy frontend to Vercel
- [ ] Update frontend to use production backend URL
- [ ] Test end-to-end on production
- [ ] Share the URL!

**Done when:** Anyone can visit the URL and use CodeType.

---

## Post-MVP

Ideas for after the core is shipped:

- [ ] Prettier UI/animations
- [ ] Dropdown of popular languages/frameworks
- [ ] Difficulty levels (beginner/intermediate/advanced)
- [ ] History of past attempts
- [ ] User accounts and progress tracking
- [ ] Leaderboards
- [ ] Custom themes (dark mode, etc.)
- [ ] Mobile support

