# Personal Ecosystem Portfolio

A minimalist personal platform for showcasing engineering work, writing, and ongoing experiments in one cohesive experience.

**Live site:** https://srikarchittemsetty.vercel.app  
**GitHub profile:** https://github.com/SrikarChittemsetty

## Purpose

This portfolio is designed as a living product surface:

- Present selected projects with clear technical context
- Keep a daily work journal in the repository (`src/data/activity.ts`)
- Curate media/book recommendations in Shelf
- Offer optional Behind the Scenes (interactive portfolio map)
- Maintain a polished light/dark mode experience

## Feature Overview

- **Featured Builds:** selected finished work on the homepage for quick recruiter review
- **Garage:** searchable tools, systems, and project cards with descriptions, rationale, and links
- **Activity:** daily journal entries in-repo; add a day to `activityJournal` and ship with git
- **Shelf:** curated media with clean presentation
- **Behind the Scenes:** optional exploratory navigation layer (`/house`)
- **Theme support:** light/dark mode with persisted preference

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vercel (frontend hosting)

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
npm run lint
npm run build
```

## Activity authoring

Edit **`src/data/activity.ts`**: append to the **`activityJournal`** array with `date` (ISO `YYYY-MM-DD`) and `note` (one short paragraph). List order is by **`date`** (newest first) on `/activity`.

## Deployment Notes

- **Frontend:** deploy this repository on Vercel (activity content is included in the build).

## Recruiter / Reviewer Notes

This is an evolving personal platform, not a template generator. The goal is to combine product thinking, engineering execution, and writing into one maintainable portfolio surface.
