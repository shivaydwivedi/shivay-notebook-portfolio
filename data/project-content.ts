import type { ProjectPortfolioContent } from "@/types/portfolio";

const ownerConfirmedDeploymentNote =
  "Deployment confirmed by project owner; availability was not confirmed during the automated audit.";

export const projectPortfolioContent = [
  {
    slug: "blogify",
    number: "01",
    name: "Blogify",
    category: "Backend REST API",
    status: "live",
    shortLabel: "Blogify",
    oneLine: "Django REST API for blogging workflows with authentication, publishing, engagement, notifications, and deployment checks.",
    summary:
      "Blogify is a Django REST Framework API for a blogging platform. It focuses on backend breadth: account flows, post publishing, engagement models, OpenAPI documentation, background email tasks, health checks, and deployment-oriented configuration.",
    problem:
      "A blogging API has to coordinate user identity, publishing workflows, moderation-adjacent ownership rules, and engagement features without scattering behavior across unrelated endpoints. The repository addresses that as a backend system with consistent API boundaries and operational checks.",
    solution:
      "The system uses a modular Django monolith with separate apps for accounts, posts, taxonomy, comments, likes, bookmarks, notifications, common utilities, and health checks. Django REST Framework exposes versioned APIs, Simple JWT handles authentication, Celery and Redis support email verification work, and PostgreSQL-oriented settings, Docker, Gunicorn, WhiteNoise, Cloudinary support, and Render documentation cover deployment.",
    highlights: [
      "Modular Django apps separate account, publishing, taxonomy, and engagement domains.",
      "Email-based user model uses Simple JWT access and refresh-token flows.",
      "Email verification is represented through signed tokens and Celery tasks.",
      "OpenAPI schema and Swagger UI are code verified under versioned API paths.",
      "Health checks cover database and Redis readiness behavior.",
      "Phase 3 pytest run passed 163 tests."
    ],
    architectureSummary:
      "Client applications call the Django REST API under `/api/v1`. Domain apps handle authentication, publishing, taxonomy, comments, likes, bookmarks, and notifications. PostgreSQL is the production-oriented database, Redis supports Celery and readiness checks, Cloudinary can back media, and Render/Docker files document deployment.",
    testingEvidence: {
      framework: "pytest and pytest-django",
      verifiedStatus: "Phase 3 checks passed",
      verifiedCount: "163 passed"
    },
    testingSummary: "Django system checks passed, and pytest completed with 163 passing tests during Phase 3.",
    deploymentEvidence: {
      liveUrl: "https://blogify-api-0ghm.onrender.com/",
      repositoryUrl: "https://github.com/shivaydwivedi/blogify-api.git",
      apiUrl: "https://blogify-api-0ghm.onrender.com/",
      documentationUrl: "https://blogify-api-0ghm.onrender.com/api/v1/docs/",
      healthUrl: "https://blogify-api-0ghm.onrender.com/health/",
      ownerConfirmedNote: ownerConfirmedDeploymentNote,
      urlSource: "repository documentation",
      availabilityCheckStatus: "Health request timed out on 2026-08-02; deployment status remains owner-confirmed."
    },
    deploymentNote:
      "Render deployment URL is documented in the repository and deployment is owner-confirmed. Automated health availability was not confirmed during the Phase 3 audit.",
    media: {
      status: "pending",
      pendingMessage: "Project media pending approval."
    },
    technicalDecisions: [
      "Use a modular Django monolith instead of separate services for each domain.",
      "Expose API routes under `/api/v1` with DRF routers and API views.",
      "Use Simple JWT for token-based authentication.",
      "Generate OpenAPI documentation with drf-spectacular."
    ],
    tradeoffs: ["CI/CD is documented as not configured in the repository README."],
    limitations: ["Final screenshots are not yet verified for portfolio use."],
    actions: [
      { label: "Live Demo", href: "https://blogify-api-0ghm.onrender.com/", kind: "live" },
      { label: "GitHub Repository", href: "https://github.com/shivaydwivedi/blogify-api.git", kind: "repository" },
      { label: "API Documentation", href: "https://blogify-api-0ghm.onrender.com/api/v1/docs/", kind: "documentation" },
      { label: "Architecture Notes", href: "docs/projects/blogify-verification.md", kind: "architecture" }
    ],
    requiresOwnerConfirmation: [
      "Final portfolio screenshot or approved visual treatment.",
      "Personal challenges, lessons, and outcome wording.",
      "Runtime availability at the time of publication."
    ]
  },
  {
    slug: "reduc-to",
    number: "02",
    name: "Reduc.to",
    category: "Full-stack URL shortener",
    status: "live",
    shortLabel: "Reduc.to",
    oneLine: "TypeScript URL shortener with cookie sessions, owner-scoped links, redirects, and PostgreSQL persistence.",
    summary:
      "Reduc.to is a full-stack TypeScript URL shortener with a React dashboard and Fastify API. Its strongest focus is authenticated ownership, safe redirect behavior, Prisma/PostgreSQL persistence, and verified API and web test coverage.",
    problem:
      "A URL shortener has to separate public redirect traffic from authenticated owner workflows. It also needs to validate destination URLs, preserve account boundaries, store redirect events, and keep authentication state manageable across the web and API layers.",
    solution:
      "The repository uses an npm workspaces structure with API, web, and shared package boundaries. Fastify exposes authentication, link management, health, readiness, and public redirect routes. Prisma models users, links, sessions, refresh tokens, click events, and daily statistics in PostgreSQL. The React/Vite dashboard calls the API with cookie-based session flows.",
    highlights: [
      "Fastify API separates authenticated link management from public redirect routes.",
      "HTTP-only cookie sessions use refresh-token rotation and reuse detection.",
      "Prisma schema captures users, links, refresh sessions, tokens, click events, and statistics.",
      "Destination URL validation and redirect error paths are code verified.",
      "API and web workspaces have verified Vitest coverage.",
      "Vercel web and Render API URLs are documented and owner-confirmed."
    ],
    architectureSummary:
      "The React/Vite dashboard calls the Fastify `/api/v1` backend for account and link management. Public visitors hit the `/:key` redirect route. Prisma writes to PostgreSQL, while Redis is an optional readiness dependency. The frontend is documented on Vercel and the API on Render.",
    testingEvidence: {
      framework: "Vitest, ESLint, TypeScript, Prisma validation",
      verifiedStatus: "Phase 3 checks passed",
      verifiedCount: "85 API tests and 9 web tests passed"
    },
    testingSummary:
      "Lint, Prisma validation, typecheck, 85 API tests, and 9 web tests passed during Phase 3.",
    deploymentEvidence: {
      liveUrl: "https://reduc-to-web.vercel.app",
      repositoryUrl: "https://github.com/shivaydwivedi/Reduc.to.git",
      apiUrl: "https://reduc-to.onrender.com",
      documentationUrl: "docs/api/01-endpoint-catalog.md",
      healthUrl: "https://reduc-to.onrender.com/health",
      ownerConfirmedNote: ownerConfirmedDeploymentNote,
      urlSource: "repository documentation",
      availabilityCheckStatus: "API health request timed out on 2026-08-02; deployment status remains owner-confirmed."
    },
    deploymentNote:
      "Repository documentation lists the Vercel web app and Render API, and deployment is owner-confirmed. Automated API health availability was not confirmed during the Phase 3 audit.",
    media: {
      status: "pending",
      pendingMessage: "Project media pending approval."
    },
    technicalDecisions: [
      "Use npm workspaces to separate API, web, and shared package boundaries.",
      "Store access and refresh flows through HTTP-only cookies.",
      "Use Prisma and PostgreSQL for link ownership, sessions, and redirect-event records.",
      "Keep Redis optional at readiness level rather than required for core redirect behavior."
    ],
    tradeoffs: [
      "Redirect caching and rate limiting are documented as planned, not implemented.",
      "Advanced analytics aggregation jobs are not implemented in the current codebase."
    ],
    limitations: ["Repository documentation says screenshots are planned but not present."],
    actions: [
      { label: "Live Demo", href: "https://reduc-to-web.vercel.app", kind: "live" },
      { label: "GitHub Repository", href: "https://github.com/shivaydwivedi/Reduc.to.git", kind: "repository" },
      { label: "API Documentation", href: "docs/api/01-endpoint-catalog.md", kind: "documentation" },
      { label: "Architecture Notes", href: "docs/projects/reduc-to-verification.md", kind: "architecture" }
    ],
    requiresOwnerConfirmation: [
      "Final screenshots for portfolio display.",
      "Personal lessons, outcomes, and challenge framing.",
      "Runtime availability at the time of publication."
    ]
  },
  {
    slug: "pagepulse",
    number: "03",
    name: "PagePulse",
    category: "Web page audit API and UI",
    status: "live",
    shortLabel: "PagePulse",
    oneLine: "Express audit service for public pages with SSRF-aware validation and deterministic static analysis.",
    summary:
      "PagePulse is a Node/Express service that audits public web pages through a JSON API and lightweight UI. Its focus is backend safety: URL validation, approved-address transport, bounded fetching, static HTML analysis, deterministic scoring, and operational limits.",
    problem:
      "A server-side page audit endpoint accepts user-submitted URLs, which creates risk around private-network access, redirects, slow responses, large payloads, and ambiguous scoring. The system needs clear resource bounds and predictable results without claiming browser-rendered performance data.",
    solution:
      "Express routes validate audit requests with Zod, then pass URLs through SSRF-aware destination checks before using an approved-address Undici transport. Cheerio extracts static page signals, a deterministic scorer returns issues and scores, and process-local cache, rate limiting, queueing, and concurrency controls bound repeated or expensive requests.",
    highlights: [
      "Destination checks block private, loopback, link-local, reserved, and unsafe host targets.",
      "Approved-address transport applies redirect, timeout, and response-size controls.",
      "Cheerio-based analysis returns deterministic static-page signals and scoring.",
      "Process-local cache, semaphore, queue, and rate limiter bound API work.",
      "Repository includes architecture, operations, deployment, diagrams, screenshots, and hygiene checks.",
      "Phase 3 Vitest run passed 285 tests across 43 files."
    ],
    architectureSummary:
      "Browser UI and API clients call Express. Audit requests move through request IDs, rate limiting, validation, cache, semaphore and queue controls, destination safety, Undici transport, Cheerio analysis, and scoring. The service has no database, Redis, worker, cron, or browser-rendering dependency.",
    testingEvidence: {
      framework: "Vitest, Supertest, ESLint, docs check, hygiene check",
      verifiedStatus: "Phase 3 checks passed",
      verifiedCount: "285 tests across 43 files passed"
    },
    testingSummary:
      "Lint, docs check, hygiene check, and the Vitest suite passed during Phase 3, including 285 tests across 43 files.",
    deploymentEvidence: {
      liveUrl: "https://pagepulse-3gub.onrender.com",
      repositoryUrl: "https://github.com/shivaydwivedi/PagePulse.git",
      apiUrl: "https://pagepulse-3gub.onrender.com/api/v1/audits",
      documentationUrl: "docs/architecture/README.md",
      healthUrl: "https://pagepulse-3gub.onrender.com/healthz",
      ownerConfirmedNote: ownerConfirmedDeploymentNote,
      urlSource: "repository documentation",
      availabilityCheckStatus: "Health request timed out on 2026-08-02; deployment status remains owner-confirmed."
    },
    deploymentNote:
      "Repository documentation lists the Render service URL, and deployment is owner-confirmed. Automated health availability was not confirmed during the Phase 3 audit.",
    media: {
      status: "pending",
      pendingMessage: "Project media pending approval."
    },
    technicalDecisions: [
      "Use static HTML analysis rather than browser rendering or Lighthouse measurement.",
      "Require destination safety checks before outbound fetches.",
      "Keep cache, limiter, semaphore, and queue state process-local.",
      "Leave `TRUST_PROXY` unset until proxy topology is separately verified."
    ],
    tradeoffs: [
      "Process-local cache, limiter, semaphore, and queue reset on restart.",
      "SSRF controls reduce risk but do not replace platform egress controls or a WAF.",
      "Render Free hosting may introduce cold-start delay."
    ],
    limitations: [
      "No database or persisted audit history.",
      "No Lighthouse, JavaScript execution, browser rendering, Core Web Vitals, or field data measurement."
    ],
    actions: [
      { label: "Live Demo", href: "https://pagepulse-3gub.onrender.com", kind: "live" },
      { label: "GitHub Repository", href: "https://github.com/shivaydwivedi/PagePulse.git", kind: "repository" },
      { label: "API Documentation", href: "https://pagepulse-3gub.onrender.com/api/v1/audits", kind: "documentation" },
      { label: "Architecture Notes", href: "docs/projects/pagepulse-verification.md", kind: "architecture" }
    ],
    requiresOwnerConfirmation: [
      "Whether the current Render URL should be portfolio-public.",
      "Personal lessons or outcomes beyond repository documentation.",
      "Runtime availability at the time of publication."
    ]
  },
  {
    slug: "chatwat",
    number: "04",
    name: "ChatWat",
    category: "Real-time chat application",
    status: "live",
    shortLabel: "ChatWat",
    oneLine: "React and Socket.io chat app with REST history, persistence, typing, and presence.",
    summary:
      "ChatWat is a real-time chat application with a React/Vite client, Express backend, Socket.io events, and SQLite persistence. Its engineering focus is keeping REST-created and socket-created messages on the same validation and persistence path.",
    problem:
      "A chat system has to coordinate historical reads, live writes, validation, persistence, typing indicators, and presence events. Without a shared service boundary, REST and Socket.io behavior can drift and create inconsistent message handling.",
    solution:
      "The Express backend exposes REST history and message endpoints while Socket.io handles join, message, typing, presence, and connection events. Both write paths call the same message service, which validates input and persists messages through a SQLite repository. The React client consumes REST for history and sockets for live updates.",
    highlights: [
      "REST and Socket.io message writes share one service layer.",
      "SQLite persistence stores chronological message history.",
      "Socket.io models live messages, online count, named presence, and typing updates.",
      "Input validation is applied before message persistence and broadcast.",
      "Custom integration check covers REST, Socket.io, persistence, typing, and presence.",
      "Deployment links are documented for Vercel frontend and Render backend."
    ],
    architectureSummary:
      "The React/Vite client calls Express REST endpoints for history and uses Socket.io for live chat events. Express and Socket.io both delegate message creation to a shared service. SQLite stores messages, while typing and presence stay realtime-only. Vercel hosts the frontend and Render hosts the backend.",
    testingEvidence: {
      framework: "ESLint, Node syntax checks, custom integration script",
      verifiedStatus: "Phase 3 checks passed"
    },
    testingSummary:
      "Client lint, server syntax checks, and a custom integration check passed during Phase 3. No conventional numeric unit-test count was verified.",
    deploymentEvidence: {
      liveUrl: "https://chatwat-mu.vercel.app",
      repositoryUrl: "https://github.com/shivaydwivedi/chatwat.git",
      apiUrl: "https://chatwat-api.onrender.com",
      documentationUrl: "docs/api.md",
      healthUrl: "https://chatwat-api.onrender.com/api/health",
      ownerConfirmedNote: ownerConfirmedDeploymentNote,
      urlSource: "repository documentation",
      availabilityCheckStatus: "Backend health request timed out on 2026-08-02; deployment status remains owner-confirmed."
    },
    deploymentNote:
      "Repository documentation lists the Vercel frontend and Render backend, and deployment is owner-confirmed. Automated backend availability was not confirmed during the Phase 3 audit.",
    media: {
      status: "pending",
      pendingMessage: "Project media pending approval."
    },
    technicalDecisions: [
      "Share message creation logic between REST and Socket.io write paths.",
      "Persist messages in SQLite and keep typing and presence realtime-only.",
      "Constrain CORS and Socket.io origins through `CLIENT_URL`.",
      "Use username-based demo identity rather than account authentication."
    ],
    tradeoffs: [
      "Username login is a demo identity mechanism, not password authentication.",
      "Deployed SQLite on Render Free may reset after restart or redeployment."
    ],
    limitations: [
      "No password authentication or account system.",
      "No rooms, private messages, file attachments, message deletion, or moderation tools."
    ],
    actions: [
      { label: "Live Demo", href: "https://chatwat-mu.vercel.app", kind: "live" },
      { label: "GitHub Repository", href: "https://github.com/shivaydwivedi/chatwat.git", kind: "repository" },
      { label: "API Documentation", href: "docs/api.md", kind: "documentation" },
      { label: "Architecture Notes", href: "docs/projects/chatwat-verification.md", kind: "architecture" }
    ],
    requiresOwnerConfirmation: [
      "Whether the Google Drive demo recording should be linked from the portfolio.",
      "Personal challenges, lessons, and outcomes.",
      "Runtime availability at the time of publication."
    ]
  },
  {
    slug: "sonica",
    number: "05",
    name: "Sonica",
    category: "Django music player",
    status: "live",
    shortLabel: "Sonica",
    oneLine: "Django music player recovered for safer mutations, tests, and Render deployment.",
    summary:
      "Sonica is a Django music player centered on legacy recovery and stabilization. The verified work covers public catalog browsing, authenticated favourites and playlists, listening history, POST-only mutation hardening, health/readiness probes, deployment settings, and regression coverage.",
    problem:
      "A recovered Django application needs safer authenticated collection flows and deployment configuration without relying on local-only assumptions. The system also needs regression protection around mutation routes, database settings, media handling, and operational probes.",
    solution:
      "The application uses server-rendered Django views for browsing, authentication, favourites, playlists, and listening history. Mutating collection actions are POST-only, tests cover safe redirects and production settings, SQLite remains the local default, PostgreSQL is selected through deployment configuration, and Cloudinary media storage is enabled only when configured.",
    highlights: [
      "POST-only routes harden favourite, playlist, and playback-history mutations.",
      "Django tests cover authentication, music routes, safe redirects, validators, and settings behavior.",
      "SQLite local defaults are separated from PostgreSQL deployment configuration.",
      "Cloudinary media storage activates only when `CLOUDINARY_URL` is configured.",
      "Render blueprint defines the web service, database, start script, and health path.",
      "Phase 3 Django test suite passed 216 tests."
    ],
    architectureSummary:
      "Browser requests hit Django template views for catalog, auth, favourites, playlists, profile, and history flows. Django models persist to SQLite locally or PostgreSQL in deployment. Media uses local filesystem storage unless Cloudinary is configured. Render runs Waitress with `/health/` and `/ready/` operational endpoints.",
    testingEvidence: {
      framework: "Django TestCase and manage.py checks",
      verifiedStatus: "Phase 3 checks passed",
      verifiedCount: "216 tests passed"
    },
    testingSummary:
      "Django system checks, migration dry-run, and the Django test suite passed during Phase 3, including 216 tests.",
    deploymentEvidence: {
      liveUrl: "https://sonica-music-player.onrender.com",
      repositoryUrl: "https://github.com/shivaydwivedi/Sonica.git",
      documentationUrl: "docs/deployment/RENDER_DEPLOYMENT.md",
      healthUrl: "https://sonica-music-player.onrender.com/health/",
      ownerConfirmedNote: ownerConfirmedDeploymentNote,
      urlSource: "repository configuration",
      availabilityCheckStatus: "Health request reset the connection on 2026-08-02; deployment status remains owner-confirmed."
    },
    deploymentNote:
      "Repository configuration identifies the Render service URL, and deployment is owner-confirmed. Automated health availability was not confirmed during the Phase 3 audit.",
    media: {
      status: "pending",
      pendingMessage: "Project media pending approval."
    },
    technicalDecisions: [
      "Keep SQLite as the local default and use `DATABASE_URL` for PostgreSQL deployment.",
      "Enable Cloudinary media storage only when `CLOUDINARY_URL` exists.",
      "Use POST-only mutation routes for favourites, playlists, and playback history.",
      "Expose `/health/` and `/ready/` endpoints for deployment checks."
    ],
    tradeoffs: [
      "Local filesystem media is not a durable deployment path.",
      "Google authentication UI requires a real Allauth SocialApp and is disabled by default."
    ],
    limitations: [
      "No screenshot files are committed.",
      "Repository does not include a music library.",
      "Authorized demo media and screenshots are still needed for portfolio display."
    ],
    actions: [
      { label: "Live Demo", href: "https://sonica-music-player.onrender.com", kind: "live" },
      { label: "GitHub Repository", href: "https://github.com/shivaydwivedi/Sonica.git", kind: "repository" },
      { label: "Architecture Notes", href: "docs/projects/sonica-verification.md", kind: "architecture" }
    ],
    requiresOwnerConfirmation: [
      "Authorized screenshots and media strategy for portfolio display.",
      "Whether optional Google authentication should be mentioned visibly.",
      "Personal challenges, lessons, and outcomes.",
      "Runtime availability at the time of publication."
    ]
  }
] satisfies ProjectPortfolioContent[];
