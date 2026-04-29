# Personal Ecosystem Portfolio

A minimalist personal platform for showcasing engineering work, writing, and ongoing experiments in one cohesive experience.

## Purpose

This portfolio is designed as a living product surface:

- Present selected projects with clear technical context
- Integrate blog content from VoicePress
- Curate media/book recommendations in Shelf
- Offer an optional interactive House explorer
- Maintain a polished light/dark mode experience

## Feature Overview

- **Garage (projects/tools):** searchable project cards with descriptions, rationale, and links
- **VoicePress-powered blog:** pulls public posts from the VoicePress API
- **Shelf:** curated books/media with clean presentation
- **Interactive House:** optional exploratory navigation layer
- **Theme support:** light/dark mode with persisted preference

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vercel (frontend hosting)
- VoicePress API (blog backend integration)

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

## Environment Variable

`NEXT_PUBLIC_VOICEPRESS_API_BASE_URL`

- **Local default behavior:** if unset, blog pages fall back to `http://127.0.0.1:5000`
- **Production:** set to your deployed VoicePress backend URL (for example, a Render service URL)

## Deployment Notes

- **Frontend:** deploy this repository on Vercel
- **Backend/blog data:** deploy VoicePress on Render and expose the public API
- **Integration:** set `NEXT_PUBLIC_VOICEPRESS_API_BASE_URL` in Vercel environment settings

## Recruiter / Reviewer Notes

This is an evolving personal platform, not a template generator. The goal is to combine product thinking, engineering execution, and writing into one maintainable portfolio surface.
