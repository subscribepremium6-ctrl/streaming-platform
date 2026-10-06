# Streaming Platform

A modern streaming web application inspired by premium OTT services, built with Next.js App Router, TypeScript, Tailwind CSS, and a provider-driven architecture for media, playback, and authentication.

## Overview

This project is designed to be a production-ready foundation for a movie, TV, and anime streaming platform with original branding and architecture. It includes a provider abstraction layer, role-based admin authorization, database schema, modern responsive UI, server/auth APIs, watch progress tracking, and a mock provider implementation so the project is usable even without external third-party integration.

## Project goals

- Browse movies, TV shows, and anime
- Search by title and metadata
- View detail pages with cast, seasons, episodes, and similar content
- Resume playback using saved watch progress
- Manage watchlist, favorites, and history
- Role-based admin dashboard
- Secure authentication with hashed passwords
- Responsive dark-first streaming experience
- Clean architecture separating UI, providers, auth, and services

## Phase plan

1. Project architecture and dependency setup
2. Database and authentication foundation
3. Content provider architecture
4. Main UI and navigation
5. Movie/TV/anime browsing
6. Details pages
7. Video playback architecture
8. Watch progress/history/watchlist
9. Profile and settings
10. Admin dashboard
11. Testing, security, performance, SEO
12. Production cleanup and deployment preparation

## Tech stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- bcryptjs
- TanStack Query
- zod validation
- Lucide icons
- Vitest

## Quick start

```bash
npm install
cp .env.example .env.local
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## Environment variables

See `.env.example` for required values.

## Database setup

```bash
npx prisma migrate dev --name init
npx prisma studio
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run test
```

## Architecture

- `app/` — App Router pages and API routes
- `components/` — UI and player components
- `lib/providers/` — content and video provider abstractions
- `lib/auth/` — auth helpers and password handling
- `lib/db/` — Prisma database connection
- `lib/services/` — business logic and media services
- `prisma/` — Prisma schema and migrations
- `types/` — shared app types
- `locales/` — translation scaffolding
- `tests/` — API and setup unit tests

## Security checklist

- Passwords hashed with bcrypt
- Auth secrets stored in server env
- Validation via zod
- SQL via Prisma ORM
- No leaked secrets in API output
- Session management via secure server-side patterns

## Deployment

Deploy to Vercel or any Node-compatible host using the production environment variables and a PostgreSQL connection string.

## Admin setup

Create the first admin user in the database or through a bootstrap script. Roles supported: `USER`, `ADMIN`.

## Limitations

- This scaffold uses a mock content provider for local development and demonstration.
- Real video playback sources should be mapped to legal providers and source metadata in production.
- Full external provider integration requires valid credentials and licensing.
