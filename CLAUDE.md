# Parable — AI Coding Agent Guide

Parable is a daily lesson series platform where users subscribe to topic-based curricula. Every day, each series generates a new AI-powered lesson containing three pieces: a **Standard** (structured educational content), a **Parable** (short narrative story with recurring characters), and a **Sonnet** (14-line Shakespearean poem with a DALL-E hero image).

**MAINTENANCE RULE:** Update this file whenever you add routes, models, pages, or environment variables.

---

## Monorepo Structure

```
parable/
├── package.json                  # npm workspaces root
├── packages/
│   ├── api/                      # Express 5 + TypeScript backend (Node.js)
│   │   └── src/
│   │       ├── index.ts          # App entry: middleware, routes, DB, cron start
│   │       ├── middleware/
│   │       │   ├── auth.ts       # JWT: requireAuth, optionalAuth, requireAdmin, generateTokens
│   │       │   └── rateLimiter.ts # express-rate-limit + per-user series creation limit
│   │       ├── models/           # Mongoose models (see Data Models below)
│   │       ├── routes/           # Express routers (see API Endpoints below)
│   │       ├── services/
│   │       │   ├── aiTools.ts    # Anthropic Claude tool-use calls
│   │       │   ├── generationService.ts # Orchestrates full generation pipeline + job queue
│   │       │   └── imageService.ts # DALL-E 3 generation + Cloudinary upload
│   │       └── jobs/
│   │           └── crons.ts      # node-cron: midnight lessons, 7AM progress advance
│   └── web/                      # React 19 + Vite SPA
│       └── src/
│           ├── main.tsx          # React root mount
│           ├── App.tsx           # BrowserRouter, route definitions, AuthProvider
│           ├── lib/api.ts        # Axios client with auto-refresh + all TypeScript interfaces
│           ├── hooks/useAuth.tsx # AuthContext: user, login, logout, refresh
│           ├── components/
│           │   ├── Sidebar.tsx   # Slide-out nav with series list, auth state
│           │   └── KaraokeText.tsx # Word-by-word highlight synced to audio (unused in current pages)
│           └── pages/
│               ├── Home.tsx           # / — popular series grid
│               ├── SeriesPage.tsx     # /:seriesKey — lesson list, subscribe, generation status
│               ├── LessonPage.tsx     # /:seriesKey/lesson/:sortOrder — parable/standard/sonnet tabs
│               ├── SubscriptionsPage.tsx # /subscriptions — user's series
│               ├── NewSeriesPage.tsx  # /new — create series form
│               ├── AdminPage.tsx      # /admin — user/series management (admin only)
│               └── AuthCallbackPage.tsx # /auth/callback — stores token from OAuth redirect
```

---

## Architecture

**Deployment:** Single Railway service. `npm run build` builds the web SPA into `packages/web/dist`, then the API serves that directory as static files. The SPA fallback (`/{*path}`) sends `index.html` for all non-API routes.

**Database:** MongoDB via Mongoose. URI must include `authSource=admin` if using admin auth.

**Images:** DALL-E 3 generates images at 1792×1024; they are uploaded to Cloudinary at path `parable/{seriesKey}/day-{sortOrder}`.

**AI Text:** All text content is generated via Anthropic Claude (claude-opus-4-6) using forced tool use (`tool_choice: {type: "tool", name: ...}`), which guarantees structured JSON output.

---

## Data Models

### Series
Central entity representing a topic curriculum.
- `title` String — display name
- `key` String (unique) — URL slug, e.g. `stoic-philosophy`
- `description` String — short summary
- `anchor` String — core theme/concept that guides generation
- `emoji` String? — single emoji for UI
- `wisdomLabel` String? — label for the wisdom section (e.g. "The Principle")
- `characters` ICharacter[] — recurring story characters (name, pronoun, age?, personality?, role?)
- `subscriberCount` Number — denormalized count
- `deletedAt` Date? — soft delete flag
- `createdBy` ObjectId? → User
- `createdAt` Date

### Lesson
One day's lesson within a series.
- `seriesId` ObjectId → Series (indexed)
- `sortOrder` Number — day number (1-based), unique per series
- `title` String
- `date` Date — when generated
- `image` String? — Cloudinary URL
- `standardId` ObjectId? → Standard
- `parable` String? — markdown narrative
- `sonnet` String? — markdown sonnet with `# Title\n\n...` format
- `deletedAt` Date? — soft delete
- `createdAt` Date
- **Indexes:** `(seriesId, sortOrder)` unique; `(seriesId, deletedAt)`

### Standard
Structured educational content for a lesson (1:1 with Lesson).
- `lessonId` ObjectId → Lesson (unique)
- `seriesId` ObjectId → Series (indexed)
- `review` String? — recap of previous lesson (absent on lesson 1)
- `concept` String — what is being taught
- `whyItMatters` String
- `howItWorks` String
- `definitions` IDefinition[] — `{term, definition}` pairs
- `wisdom` String — the key takeaway
- `followUpQuestion` String — seeds the next lesson's generation

### User
Google OAuth user account.
- `googleId` String (unique)
- `email` String (unique)
- `name` String
- `picture` String? — Google profile photo URL
- `role` 'user' | 'admin'
- `refreshToken` String? — stored for rotation validation
- `createdAt` Date

### Subscription
Join table: User ↔ Series.
- `userId` ObjectId → User
- `seriesId` ObjectId → Series
- `createdAt` Date
- **Index:** `(userId, seriesId)` unique

### Progress
Tracks how far a user is through a series.
- `userId` ObjectId → User
- `seriesId` ObjectId → Series
- `currentDay` Number — lesson sortOrder the user is currently on
- **Index:** `(userId, seriesId)` unique

### Read
Records that a user has read a specific lesson.
- `userId` ObjectId → User
- `lessonId` ObjectId → Lesson
- `readAt` Date
- **Index:** `(userId, lessonId)` unique

### GenerationJob
Prevents concurrent lesson generation for the same series.
- `seriesId` ObjectId → Series (unique)
- `status` 'generating' | 'queued'
- `action` 'create' | 'delete'
- `targetLessonId` ObjectId? → Lesson
- `startedAt` Date?
- `createdAt` Date — TTL index, expires after 30 minutes

---

## API Endpoints

All routes under `/api` have `generalLimiter` (100 req/min/IP). `/auth` routes have `authLimiter` (10 req/min/IP).

### Auth (`/auth`)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | /auth/google | — | Redirect to Google OAuth consent |
| GET | /auth/google/callback | — | OAuth callback; sets `refreshToken` cookie; redirects to `/auth/callback?token=<accessToken>` |
| POST | /auth/refresh | cookie | Rotate refresh token; returns `{accessToken, user}` |
| POST | /auth/logout | cookie | Clears cookie, removes refreshToken from DB |

### Series (`/api/series`)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | /api/series | — | All active series sorted by subscriberCount desc |
| GET | /api/series/popular | — | Top 20 by subscriberCount |
| POST | /api/series | required | Create series from `{topic}`. Rate limit: 3/user/day. Triggers async first-lesson generation. Returns series immediately. |
| POST | /api/series/:seriesId/generate | admin | Trigger next lesson generation (fires async) |
| GET | /api/series/:seriesId/generation-status | — | Returns `{generating: boolean}` |
| DELETE | /api/series/:seriesId | admin | Soft-delete series + lessons; hard-delete standards, subscriptions, jobs |

### Subscriptions (`/api/series/:seriesId/subscribe`, `/api/subscriptions`)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | /api/series/:seriesId/subscribe | required | Subscribe + create Progress at day 1 + increment subscriberCount |
| DELETE | /api/series/:seriesId/subscribe | required | Unsubscribe + decrement subscriberCount |
| GET | /api/subscriptions | required | User's subscriptions with seriesId populated |

### Lessons (`/api`)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | /api/series/:seriesId/lessons | optional | Paginated lessons (20/page). Includes `progress` if authed. |
| GET | /api/lessons/:lessonId | — | Single lesson with standard populated |
| DELETE | /api/lessons/:lessonId | admin | Soft-delete lesson |
| GET | /api/series/:seriesId/progress | required | Lessons up to `currentDay` with `read` boolean on each |
| PATCH | /api/series/:seriesId/progress/advance | required | Mark current lesson read + advance progress if next exists. Returns `{currentDay, hasNext}` |
| POST | /api/lessons/:lessonId/read | required | Upsert a Read record |

### Users (`/api/users`)
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | /api/users/me | required | Current user (no refreshToken/googleId) |
| PATCH | /api/users/:userId/role | admin | Set role to 'user' or 'admin' |
| GET | /api/users | admin | All users sorted by createdAt desc |

---

## Key Patterns

### Job Queue (GenerationJob)
Prevents duplicate generation. `acquireJob` returns false if a job already exists (and marks it `queued` if it was `generating`). `releaseJob` re-triggers generation if the job was `queued` while running. TTL of 30 minutes auto-cleans stuck jobs.

### AI Generation Pipeline
1. `createSeriesDetails(topic)` → series metadata
2. First lesson: `generateFirstStandard` → `generateParable` (initializes characters) → `generateSonnet` → `generateImagePrompt` → DALL-E + Cloudinary
3. Subsequent lessons: `generateStandard` (uses all prev titles + last followUpQuestion) → same pipeline as above. Characters are merged into the series (no duplicates).

### Soft Deletes
Series and Lessons use `deletedAt: Date`. All queries filter with `{ deletedAt: { $exists: false } }`. Standards, Subscriptions, and Jobs are hard-deleted on series deletion.

### Progress Tracking
Progress tracks `currentDay` (= lesson `sortOrder`). The 7AM cron auto-advances if the current lesson has been read. Users can also manually advance via `PATCH /api/series/:seriesId/progress/advance`. Subscribing creates a Progress record at day 1.

### Auth Token Flow
- Access token: JWT, 15 min expiry, sent in `Authorization: Bearer <token>` header
- Refresh token: JWT, 30 days, httpOnly cookie at path `/auth`, stored in User doc for rotation validation
- Frontend stores access token in `localStorage`. Auto-refresh on 401 via axios interceptor (deduplicated with a shared promise).

---

## Environment Variables

```bash
# packages/api/.env
MONGODB_URI=mongodb+srv://...   # include authSource=admin if using admin auth
ANTHROPIC_API_KEY=...           # for Claude text generation
OPENAI_API_KEY=...              # for DALL-E 3 image generation
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
GOOGLE_CLIENT_ID=...            # OAuth 2.0
GOOGLE_CLIENT_SECRET=...
JWT_SECRET=...                  # long random string
ADMIN_EMAILS=admin@example.com,other@example.com  # comma-separated
PORT=3001
NODE_ENV=development|production
CLIENT_URL=https://your-app.up.railway.app  # production only
API_URL=https://your-app.up.railway.app     # production only (for OAuth callback)
```

---

## Common Tasks

### Add a new API endpoint
1. Choose the appropriate router file in `packages/api/src/routes/`
2. Add the route handler (use `requireAuth`, `optionalAuth`, or `requireAdmin` as needed)
3. Update the API Endpoints table in this file

### Add a new AI generation step
1. Add a new tool function in `packages/api/src/services/aiTools.ts` following the `callTool` pattern
2. Export the output interface and function
3. Call it from `generationService.ts` in the appropriate pipeline (first-lesson or subsequent)
4. Update ARCHITECTURE.md

### Add a new page
1. Create the component in `packages/web/src/pages/`
2. Add a `<Route>` in `packages/web/src/App.tsx`
3. Add navigation link in `packages/web/src/components/Sidebar.tsx` if needed
4. Update the Route Map in `packages/web/ARCHITECTURE.md`

### Add a new Mongoose model
1. Create file in `packages/api/src/models/`
2. Export the model and interface
3. Add the model to the Data Models section in this file

---

## Gotchas & Known Issues

- **Express 5 route syntax:** Use `{*path}` for catch-all routes, not `*path`. The SPA fallback uses `/{*path}`.
- **MongoDB auth:** If using MongoDB Atlas or a secured cluster, include `?authSource=admin` in the URI.
- **`req.authUser` not `req.user`:** JWT payload is attached as `req.authUser` to avoid conflict with Passport's `req.user` (used during OAuth callback).
- **Async series creation:** `POST /api/series` returns immediately with the new series document. The first lesson is generated in the background. The frontend polls `/api/series/:id/generation-status` every 5 seconds.
- **Character persistence:** After first lesson generation, characters are saved to the Series document. Subsequent lessons merge new characters (by name) without overwriting existing ones.
- **`verbatimModuleSyntax`** is enabled in the web package — use `import type` for type-only imports.

---

## Dev Commands

```bash
npm run dev      # concurrent: api (tsx watch, port 3001) + web (Vite, port 5173)
npm run build    # build web first, then api (tsc)
npm run start    # start api only (production)
```

Web dev server proxies `/api` and `/auth` to `localhost:3001` via Vite config.
