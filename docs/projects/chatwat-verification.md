# ChatWat

## Verification scope

- Source path: `C:\Users\polma\Desktop\portfolio_projects\chatwat`
- Inspected root files, README, client/server package manifests, REST routes, Socket.io code, SQLite repository, docs, screenshots, custom integration script, Git metadata, and latest commits.

## Repository identity

- Official project name: ChatWat. Evidence: Documentation stated.
- Repository path: `C:\Users\polma\Desktop\portfolio_projects\chatwat`. Evidence: Git metadata verified.
- Git remote: `https://github.com/shivaydwivedi/chatwat.git`. Evidence: Git metadata verified.
- Branch/status: `main...origin/main`, clean. Evidence: Git metadata verified.

## Purpose

Real-time web chat app with username-based demo login, REST chat history, live Socket.io messaging, typing indicators, online count, presence, themes, responsive UI, and integration checks. Evidence: Documentation stated; route, socket, service, and UI files are Code verified.

## Verified technology stack

- Client: React, Vite, CSS, socket.io-client. Evidence: Configuration verified.
- Server: Node.js, Express 5, Socket.io, better-sqlite3, cors, dotenv. Evidence: Configuration verified.
- Tooling: ESLint, Vite, custom Node integration check. Evidence: Configuration verified and Test verified.

## Architecture

Code verified structure:

- `client/src/App.jsx`, `hooks/useChatSocket.js`, and components own chat UI state.
- `server/src/app.js` composes Express middleware and REST routes.
- `server/src/server.js` starts HTTP server, Socket.io, database, and graceful shutdown.
- `server/src/services/messageService.js` validates and creates messages.
- `server/src/repositories/messageRepository.js` persists to SQLite.
- `server/src/sockets/chatSocket.js` handles join, message, typing, presence, and connection events.

## Core features

- REST endpoints: `GET /api/health`, `GET /api`, `GET /api/messages`, `POST /api/messages`. Evidence: Code verified.
- Socket events: `user:join`, `message:send`, `typing:start`, `typing:stop`, `message:new`, `user:online-count`, `user:presence`, `typing:update`, `connection:error`. Evidence: Code verified and Documentation stated.
- Persistent message history in SQLite. Evidence: Code verified.
- Light/dark themes and responsive UI components. Evidence: Code verified and Documentation stated.

## Authentication and security

- Username-based demo login only; no password authentication or account system. Evidence: Documentation stated and Code verified.
- CORS and Socket.io origin constrained by `CLIENT_URL`. Evidence: Code verified.
- Message validation enforces required string username/content and length limits. Evidence: Code verified.
- Express disables `x-powered-by` and limits JSON/urlencoded body size to 10kb. Evidence: Code verified.

## Data and persistence

- SQLite database with `messages` table: id, username, content, created_at. Evidence: Code verified.
- Index on `created_at, id` for chronological history reads. Evidence: Code verified.
- Presence and typing state are not persisted. Evidence: Documentation stated and Code verified.

## Background or real-time processing

- Socket.io provides real-time delivery, presence, typing, and connection state. Evidence: Code verified.
- No background worker found. Evidence: Code search.

## API and documentation

- REST docs: `docs/api.md`. Evidence: Documentation stated.
- Socket docs: `docs/socket-events.md`. Evidence: Documentation stated.
- Architecture/testing/submission docs exist. Evidence: Documentation stated.

## Testing

- Command run: `npm.cmd run check --prefix server`; result passed Node syntax checks. Evidence: Test verified.
- Command run: `npm.cmd run lint --prefix client`; result passed. Evidence: Test verified.
- Command run: `npm.cmd run test:integration`; result passed with `integration check passed`. Evidence: Test verified.
- No conventional unit test files were found by `rg` for `.test`/`.spec`; testing is currently represented by the custom integration script. Evidence: Code search.

## Deployment and operations

- README states frontend is deployed on Vercel and backend on Render. Evidence: Documentation stated.
- README documents Render free-tier cold starts and ephemeral SQLite persistence. Evidence: Documentation stated.

## Verified links

- Repository: `https://github.com/shivaydwivedi/chatwat.git`. Evidence: Git metadata verified.
- Live app: `https://chatwat-mu.vercel.app`. Evidence: Documentation stated.
- Backend API: `https://chatwat-api.onrender.com`. Evidence: Documentation stated.
- Health: `https://chatwat-api.onrender.com/api/health`. Evidence: Documentation stated.
- Demo recording: Google Drive URL in README. Evidence: Documentation stated.
- Live URL: `https://chatwat-mu.vercel.app`. Evidence: Documentation stated and Owner confirmed.
- API URL: `https://chatwat-api.onrender.com`. Evidence: Documentation stated and Owner confirmed.
- Availability check: `curl.exe -I --max-time 20 https://chatwat-api.onrender.com/api/health` timed out with no response on 2026-08-02. Deployment confirmed by project owner; availability was not confirmed during the automated audit. Evidence: Unresolved availability.

## Evidence quality

- Strong: code, package manifests, docs, screenshots, integration script.
- Medium: deployment links are README-stated and deployment is owner-confirmed; a backend health check was attempted during this phase but timed out.
- Unresolved: durable production persistence beyond documented assignment deployment.

## Portfolio-ready summary

ChatWat is a real-time React and Socket.io chat app with an Express backend, SQLite message persistence, REST history endpoints, typing indicators, online-user presence, and documented deployment limitations.

## Recommended engineering highlights

- Shared message service for REST and Socket.io writes.
- SQLite persistence with validation and chronological history retrieval.
- Presence and typing modeled as realtime-only state.
- Custom integration check covering REST, Socket.io, persistence, validation, typing, and presence.

## Recommended architecture diagram

React/Vite client -> REST API and Socket.io server -> shared message service -> SQLite repository; Socket.io broadcasts message, typing, count, and presence events.

## Confirmed challenges or trade-offs

- Username login is demo identity, not account authentication. Evidence: Documentation stated.
- Deployed SQLite on Render Free ephemeral filesystem may reset. Evidence: Documentation stated.
- No rooms, private messages, file attachments, deletion, or moderation tools. Evidence: Documentation stated.

## Missing information requiring Shivay confirmation

- Whether the Vercel/Render URLs are currently available during runtime checks and final for publication.
- Whether the Google Drive recording should be linked from the portfolio.
- Personal challenges, lessons, and outcomes.
