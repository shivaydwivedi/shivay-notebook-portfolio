# Reduc.to

## Verification scope

- Source path: `C:\Users\polma\Desktop\portfolio_projects\Reduc.to`
- Inspected root files, README, docs, package manifests, Prisma schema and migrations, API routes/services, frontend files, test files, Docker Compose, environment examples, Git metadata, and latest commits.

## Repository identity

- Official project name: Reduc.to. Evidence: Documentation stated and package metadata.
- Repository path: `C:\Users\polma\Desktop\portfolio_projects\Reduc.to`. Evidence: Git metadata verified.
- Git remote: `https://github.com/shivaydwivedi/Reduc.to.git`. Evidence: Git metadata verified.
- Branch/status: `main...origin/main`, clean. Evidence: Git metadata verified.
- Latest commits include README and professional docs updates. Evidence: Git metadata verified.

## Purpose

Full-stack URL-shortening platform for registered users to create and manage short links while public visitors resolve `/:key` redirects. Evidence: Documentation stated; auth/link/redirect routes are Code verified.

## Verified technology stack

- TypeScript npm-workspaces monorepo. Evidence: Configuration verified.
- API: Node.js, Fastify 5, Zod, Pino, Prisma 7, PostgreSQL, jose, Argon2, Redis optional. Evidence: Configuration verified.
- Web: React 19, Vite, TypeScript, browser fetch, Vitest/jsdom. Evidence: Configuration verified.
- Testing and quality: Vitest, ESLint, Prettier, TypeScript. Evidence: Configuration verified and Test verified.

## Architecture

Code verified monorepo:

- `apps/api`: Fastify app, config, health, auth, links, redirects, database, Redis, errors, logging, UUID helpers.
- `apps/web`: React dashboard and API client.
- `packages/shared`: shared package boundary.
- `apps/api/prisma/schema.prisma`: PostgreSQL schema for User, Link, RefreshSession, RefreshToken, ClickEvent, DailyLinkStatistic.

## Core features

- Health and readiness endpoints: `/health`, `/ready`. Evidence: Code verified.
- Auth routes: register, login, refresh, logout, me. Evidence: Code verified.
- Link routes: create, list, detail, update, enable, disable, soft delete. Evidence: Code verified.
- Redirect route: `/:key` with missing/disabled/deleted/expired handling and click-event creation. Evidence: Code verified.
- Web dashboard flow for auth and link management. Evidence: Code verified and Test verified.

## Authentication and security

- JWT access tokens and refresh tokens stored through HTTP-only cookies. Evidence: Code verified and Documentation stated.
- Refresh-token session storage and rotation are represented in Prisma schema and tests. Evidence: Code verified and Test verified.
- Argon2 password hashing. Evidence: Configuration verified and Test verified.
- CORS/origin protection, Helmet, destination URL safety validation. Evidence: Code verified.
- Ownership-scoped link management through authenticated user context. Evidence: Code verified and Test verified.

## Data and persistence

- PostgreSQL via Prisma schema with six models. Evidence: Code verified.
- UUID primary keys generated in application code. Evidence: Code verified.
- ClickEvent records minimized redirect metadata. Evidence: Code verified.
- Docker Compose provides local PostgreSQL and Redis. Evidence: Configuration verified.

## Background or real-time processing

- No queue/worker found. Evidence: Code search.
- Redis is optional for readiness; README states redirect caching/rate limiting are planned, not currently implemented. Evidence: Documentation stated and Code verified.

## API and documentation

- API prefix: `/api/v1` for auth and link management. Evidence: Code verified.
- Public redirect: `/:key`. Evidence: Code verified.
- Docs: `docs/api/01-endpoint-catalog.md`, architecture, database, planning, security docs. Evidence: Documentation stated.
- No Swagger/OpenAPI UI currently implemented. Evidence: Documentation stated.

## Testing

- Command run: `npm.cmd run lint`; result passed. Evidence: Test verified.
- Command run: `npm.cmd run prisma:validate`; result passed, schema valid. Evidence: Test verified.
- Command run: `npm.cmd run typecheck`; result passed. Evidence: Test verified.
- Command run: `npm.cmd test`; API workspace passed 16 files and 85 tests, then web workspace was blocked by sandbox EPERM writing Vite temp config. Evidence: Test verified and Unresolved for the combined command.
- Command rerun with approval: `npm.cmd run test:web`; result passed 2 files and 9 tests. Evidence: Test verified.

## Deployment and operations

- README states deployed web is Vercel and API is Render. Evidence: Documentation stated.
- Docker Compose exists for local PostgreSQL/Redis. Evidence: Configuration verified.
- Health/readiness endpoints are code verified. Evidence: Code verified.

## Verified links

- Repository: `https://github.com/shivaydwivedi/Reduc.to.git`. Evidence: Git metadata verified.
- Live app: `https://reduc-to-web.vercel.app`. Evidence: Documentation stated.
- API: `https://reduc-to.onrender.com`. Evidence: Documentation stated.
- Health: `https://reduc-to.onrender.com/health`. Evidence: Documentation stated.
- Readiness: `https://reduc-to.onrender.com/ready`. Evidence: Documentation stated.
- Live URL: `https://reduc-to-web.vercel.app`. Evidence: Documentation stated and Owner confirmed.
- API URL: `https://reduc-to.onrender.com`. Evidence: Documentation stated and Owner confirmed.
- Availability check: `curl.exe -I --max-time 20 https://reduc-to.onrender.com/health` timed out with no response on 2026-08-02. Deployment confirmed by project owner; availability was not confirmed during the automated audit. Evidence: Unresolved availability.

## Evidence quality

- Strong: package scripts, Prisma schema, route modules, tests, docs.
- Medium: live deployment URLs are README-stated and deployment is owner-confirmed; an API health check was attempted during this phase but timed out.
- Unresolved: final screenshots are planned but not present.

## Portfolio-ready summary

Reduc.to is a full-stack TypeScript URL shortener with a React dashboard, Fastify API, Prisma/PostgreSQL persistence, secure cookie-based sessions, owner-scoped link management, public redirects, and click tracking.

## Recommended engineering highlights

- Cookie-based auth with refresh-token rotation.
- Prisma schema with explicit relational constraints and indexes.
- Safe destination URL validation and redirect error handling.
- Separate web/API/shared workspace architecture.
- Verified API and web test suites.

## Recommended architecture diagram

React/Vite web -> Fastify `/api/v1` -> Prisma/PostgreSQL. Public visitor -> `/:key` redirect -> Fastify -> ClickEvent. Optional Redis readiness dependency.

## Confirmed challenges or trade-offs

- Redirect caching and rate limiting are documented as planned, not implemented. Evidence: Documentation stated.
- Advanced analytics aggregation jobs are not implemented. Evidence: Documentation stated and schema review.

## Missing information requiring Shivay confirmation

- Final screenshots.
- Current runtime availability of Vercel/Render URLs.
- Personal lessons, outcomes, and challenges.
