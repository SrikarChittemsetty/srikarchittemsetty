# Personal Ecosystem Portfolio

A minimalist personal platform for showcasing engineering work, writing, and ongoing experiments in one cohesive experience.

**Live site:** https://srikarchittemsetty.vercel.app  
**GitHub profile:** https://github.com/SrikarChittemsetty

## Purpose

This portfolio is designed as a living product surface:

- Present selected projects with clear technical context
- Keep a daily work journal in Git-backed content files (`content/activity/`)
- Curate media/book recommendations in Shelf
- Offer an optional Mind Map (interactive portfolio map)
- Maintain a polished light/dark mode experience

## Feature Overview

- **Featured Builds:** selected finished work on the homepage for quick recruiter review
- **Garage:** searchable tools, systems, and project cards with descriptions, rationale, and links
- **Activity:** daily journal entries as JSON in-repo; edit via `/admin` (Decap CMS) or commit directly
- **Shelf:** curated media with clean presentation
- **Mind Map:** optional exploratory navigation layer (`/house`)
- **Theme support:** light/dark mode with persisted preference

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Decap CMS (Git-backed Activity editor)
- Vercel (frontend hosting)

## Local Setup

```bash
npm install
cp .env.example .env.local   # optional for local CMS publishing
npm run dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
npm run lint
npm run build
```

## Activity authoring

Each entry is a JSON file in **`content/activity/`** with `date` and `note`:

```json
{
  "date": "2026-05-29",
  "note": "One short paragraph for the day."
}
```

The Activity page reads these files and sorts by date (newest first).

### Admin editor (Decap CMS)

Edit at **`/admin`** without touching code.

**Local editing (recommended for dev):**

1. Terminal 1: `npm run dev`
2. Terminal 2: `npm run cms:proxy`
3. Open `http://localhost:3000/admin`
4. Create or edit **Activity Entry** → **Publish** (writes to `content/activity/` locally)

**Production publishing (GitHub):**

1. Create a [GitHub OAuth App](https://github.com/settings/developers):
   - Homepage URL: `https://srikarchittemsetty.vercel.app`
   - Callback URL: `https://srikarchittemsetty.vercel.app/api/auth/callback`
2. Add to Vercel env vars: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `NEXT_PUBLIC_SITE_URL`
3. Open `https://srikarchittemsetty.vercel.app/admin`, sign in with GitHub, publish — Decap commits to the repo and Vercel redeploys.

## Deployment Notes

- **Frontend:** deploy this repository on Vercel. Activity content ships in the repo under `content/activity/`.

## Recruiter / Reviewer Notes

This is an evolving personal platform, not a template generator. The goal is to combine product thinking, engineering execution, and writing into one maintainable portfolio surface.
