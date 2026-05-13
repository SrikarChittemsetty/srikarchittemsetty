# Personal Ecosystem Portfolio

A minimalist personal platform for showcasing engineering work, writing, and ongoing experiments in one cohesive experience.

## Purpose

This portfolio is designed as a living product surface:

- Present selected projects with clear technical context
- Publish blog posts from the repository (`src/data/blog.ts`)
- Curate media/book recommendations in Shelf
- Offer optional Behind the Scenes (interactive portfolio map)
- Maintain a polished light/dark mode experience

## Feature Overview

- **Featured Builds:** selected finished work on the homepage for quick recruiter review
- **Garage:** searchable tools, systems, and project cards with descriptions, rationale, and links
- **Blog:** posts are data in-repo; add an entry to `blogPosts` and ship with git
- **Shelf:** curated media with clean presentation
- **Behind the Scenes:** optional exploratory navigation layer (`/house`)
- **Theme support:** light/dark mode with persisted preference

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vercel (frontend hosting)
- No external CMS for the blog (content ships with the app)

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

## Blog authoring

- Edit **`src/data/blog.ts`**: append to the **`blogPosts`** array (`title`, `slug`, `created_at`, `body`, optional `excerpt` / `category` / `tags` / `cover_image_url`).
- Each **`slug`** becomes **`/blog/[slug]`**. List order is by **`created_at`** (newest first) on `/blog`.

## Deployment Notes

- **Frontend:** deploy this repository on Vercel (blog content is included in the build).

## Recruiter / Reviewer Notes

This is an evolving personal platform, not a template generator. The goal is to combine product thinking, engineering execution, and writing into one maintainable portfolio surface.
