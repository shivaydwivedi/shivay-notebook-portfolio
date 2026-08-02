import type { PortfolioProject } from "@/types/portfolio";

export const futureProjects = [
  {
    slug: "blogify",
    number: 1,
    name: "Blogify",
    shortLabel: "Blogify",
    category: "Backend REST API",
    status: "live",
    oneLine: "Django REST API for a blogging platform with authentication, publishing, engagement, notifications, and operational health checks.",
    summary:
      "Repository-verified Django/DRF backend organized as a modular monolith with domain apps for accounts, posts, taxonomy, comments, likes, bookmarks, notifications, and health.",
    role: "Backend project owner",
    problem: "A blogging platform needs account, publishing, engagement, and moderation workflows behind a consistent API contract.",
    solution:
      "Django REST Framework API with JWT authentication, custom user model, domain apps, OpenAPI documentation, Celery tasks, Redis-backed infrastructure settings, and Docker/Render deployment support.",
    stack: [
      "Python 3.12",
      "Django 5",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "drf-spectacular",
      "Docker",
      "Render"
    ],
    capabilities: [
      "REST API design",
      "JWT authentication",
      "Django domain modeling",
      "Background email workflow",
      "OpenAPI documentation",
      "Containerized deployment"
    ],
    highlights: [
      "Custom email-based user model with Simple JWT token lifecycle",
      "Post publishing workflow with categories, tags, comments, likes, and bookmarks",
      "Notification services for verification and engagement events",
      "Health endpoint checks database and Redis readiness"
    ],
    challenges: [],
    technicalDecisions: [
      "Modular monolith with separate Django apps for bounded domains",
      "DRF routers and APIView classes under `/api/v1`",
      "drf-spectacular schema and Swagger UI at versioned API paths"
    ],
    tradeoffs: [],
    lessons: [],
    limitations: ["CI/CD is documented as not configured in the repository README."],
    futureImprovements: [],
    metrics: [{ label: "Verified tests run", value: "163 passed", context: "pytest run during Phase 3" }],
    testing: "pytest and pytest-django; Phase 3 run completed with 163 passed tests.",
    deployment: "Docker, Gunicorn, WhiteNoise, Cloudinary media support, and Render-oriented documentation/configuration. Deployment is confirmed by the project owner; automated health availability was not confirmed in Phase 3.",
    deploymentEvidence: {
      ownerConfirmed: true,
      urlSource: "repository-documentation",
      healthCheckVerified: false,
      note: "Deployment confirmed by project owner; availability was not confirmed during the automated audit."
    },
    links: {
      repo: "https://github.com/shivaydwivedi/blogify-api.git",
      live: "https://blogify-api-0ghm.onrender.com/",
      api: "https://blogify-api-0ghm.onrender.com/",
      health: "https://blogify-api-0ghm.onrender.com/health/",
      documentation: "https://blogify-api-0ghm.onrender.com/api/v1/docs/"
    },
    actions: [
      { label: "Live Demo", priority: "primary", href: "https://blogify-api-0ghm.onrender.com/" },
      { label: "GitHub Repository", priority: "secondary", href: "https://github.com/shivaydwivedi/blogify-api.git" },
      { label: "API Documentation", priority: "optional", href: "https://blogify-api-0ghm.onrender.com/api/v1/docs/" },
      { label: "Architecture / Case Study", priority: "optional", href: "docs/projects/blogify-verification.md" }
    ],
    media: {},
    architecture: {
      summary: "Client applications call a Django REST API that delegates to domain apps and services backed by PostgreSQL, Redis, Celery, and optional Cloudinary storage.",
      nodes: [
        { id: "client", label: "Client" },
        { id: "api", label: "Django REST API" },
        { id: "postgres", label: "PostgreSQL" },
        { id: "redis", label: "Redis" },
        { id: "celery", label: "Celery" },
        { id: "cloudinary", label: "Cloudinary" }
      ],
      connections: [
        { from: "client", to: "api", label: "HTTP JSON" },
        { from: "api", to: "postgres", label: "ORM" },
        { from: "api", to: "redis", label: "health/broker config" },
        { from: "api", to: "celery", label: "verification email task" },
        { from: "api", to: "cloudinary", label: "production media" }
      ],
      notes: ["Evidence comes from code, requirements, URL configuration, tests, README, and deployment docs."]
    },
    accent: "bg-blue-600"
  },
  {
    slug: "reduc-to",
    number: 2,
    name: "Reduc.to",
    shortLabel: "Reduc.to",
    category: "Full-stack URL shortener",
    status: "live",
    oneLine: "TypeScript URL-shortening platform with a React dashboard, Fastify API, Prisma/PostgreSQL schema, secure cookie sessions, and redirect tracking.",
    summary:
      "Repository-verified npm-workspaces monorepo with separate API, web, and shared packages for registered-user link management and public redirects.",
    role: "Full-stack project owner",
    problem: "Short links need authenticated owner management, safe destination validation, redirect behavior, and privacy-aware click tracking.",
    solution:
      "Fastify API with Zod validation, cookie-based JWT sessions, Prisma/PostgreSQL persistence, React/Vite dashboard, and documented health/readiness endpoints.",
    stack: [
      "TypeScript",
      "Node.js",
      "Fastify 5",
      "React 19",
      "Vite",
      "Prisma 7",
      "PostgreSQL",
      "Redis optional",
      "Vitest"
    ],
    capabilities: [
      "Full-stack TypeScript",
      "Cookie-based authentication",
      "Prisma schema design",
      "Redirect services",
      "Frontend dashboard flows",
      "Automated testing"
    ],
    highlights: [
      "Access and refresh tokens are stored in HTTP-only cookies",
      "Refresh-token rotation and reuse detection are covered in code/tests",
      "Owned link CRUD, enable/disable, soft delete, generated keys, and custom aliases",
      "Public `/:key` redirect records minimized click events without blocking redirects"
    ],
    challenges: [],
    technicalDecisions: [
      "npm workspaces split API, web, and shared package boundaries",
      "Prisma schema defines six persisted PostgreSQL models",
      "Redis is optional at readiness level; redirect caching and rate limiting are documented as not implemented yet"
    ],
    tradeoffs: [
      "README documents optional Redis connectivity, while redirect caching and rate limiting remain planned rather than implemented."
    ],
    lessons: [],
    limitations: ["Advanced analytics aggregation jobs are not implemented in the current codebase."],
    futureImprovements: ["Redirect caching", "Rate limiting", "Richer analytics", "Custom domains"],
    metrics: [
      { label: "API tests", value: "85 passed", context: "Vitest API workspace run during Phase 3" },
      { label: "Web tests", value: "9 passed", context: "Vitest web workspace run during Phase 3" }
    ],
    testing: "Vitest for API and web tests; Phase 3 verified 85 API tests and 9 web tests passed.",
    deployment: "README documents Vercel frontend and Render API deployment; Docker Compose provides local PostgreSQL and Redis. Deployment is confirmed by the project owner; automated API health availability was not confirmed in Phase 3.",
    deploymentEvidence: {
      ownerConfirmed: true,
      urlSource: "repository-documentation",
      healthCheckVerified: false,
      note: "Deployment confirmed by project owner; availability was not confirmed during the automated audit."
    },
    links: {
      repo: "https://github.com/shivaydwivedi/Reduc.to.git",
      live: "https://reduc-to-web.vercel.app",
      api: "https://reduc-to.onrender.com",
      health: "https://reduc-to.onrender.com/health",
      documentation: "docs/api/01-endpoint-catalog.md"
    },
    actions: [
      { label: "Live Demo", priority: "primary", href: "https://reduc-to-web.vercel.app" },
      { label: "GitHub Repository", priority: "secondary", href: "https://github.com/shivaydwivedi/Reduc.to.git" },
      { label: "API Documentation", priority: "optional", href: "docs/api/01-endpoint-catalog.md" },
      { label: "Architecture / Case Study", priority: "optional", href: "docs/projects/reduc-to-verification.md" }
    ],
    media: {},
    architecture: {
      summary: "React/Vite frontend calls a Fastify `/api/v1` backend; PostgreSQL is the durable store and Redis is an optional readiness dependency.",
      nodes: [
        { id: "web", label: "React/Vite web" },
        { id: "api", label: "Fastify API" },
        { id: "postgres", label: "PostgreSQL" },
        { id: "redis", label: "Redis optional" },
        { id: "redirect", label: "Public redirect route" }
      ],
      connections: [
        { from: "web", to: "api", label: "cookie-authenticated API calls" },
        { from: "redirect", to: "api", label: "`/:key`" },
        { from: "api", to: "postgres", label: "Prisma" },
        { from: "api", to: "redis", label: "readiness when configured" }
      ],
      notes: ["Evidence comes from README, package scripts, Prisma schema, route modules, tests, and docs."]
    },
    accent: "bg-indigo-700"
  },
  {
    slug: "pagepulse",
    number: 3,
    name: "PagePulse",
    shortLabel: "PagePulse",
    category: "Web page audit API and UI",
    status: "live",
    oneLine: "Express service that audits public web pages with SSRF-aware destination checks, bounded HTML fetching, deterministic scoring, and a lightweight UI.",
    summary:
      "Repository-verified Node/Express application serving both UI and API from one Render-oriented service with explicit cache, concurrency, rate-limit, and security controls.",
    role: "Backend/API project owner",
    problem: "Server-side page auditing must handle user-submitted URLs without exposing private networks or unbounded resource usage.",
    solution:
      "Express API with Zod validation, destination safety checks, approved-address Undici transport, Cheerio static analysis, deterministic scoring, process-local cache, semaphore, queue, and rate limiter.",
    stack: ["Node.js", "Express 5", "JavaScript ES modules", "Zod", "Undici", "Cheerio", "Pino", "Vitest", "Render"],
    capabilities: [
      "API design",
      "SSRF-aware transport",
      "HTML analysis",
      "Deterministic scoring",
      "Rate limiting",
      "Operational documentation"
    ],
    highlights: [
      "`POST /api/v1/audits` audits public HTTP/HTTPS page URLs",
      "`GET /healthz` provides lightweight health checks",
      "Destination validation blocks private, loopback, link-local, reserved, and unsafe host targets",
      "Process-local TTL cache, bounded semaphore, queue, and fixed-window audit rate limiter"
    ],
    challenges: [
      "README documents that SSRF controls reduce risk but do not replace platform egress controls or a WAF."
    ],
    technicalDecisions: [
      "No browser rendering or Core Web Vitals measurement in backend audit execution",
      "Same-origin static UI and API served by the Express process",
      "TRUST_PROXY remains unset until proxy topology is separately verified"
    ],
    tradeoffs: [
      "Cache, semaphore, queue, and rate-limit state are process-local and reset on restart.",
      "Render Free hosting may introduce cold-start delay."
    ],
    lessons: [],
    limitations: [
      "No database or persisted audit history",
      "No Lighthouse, JavaScript execution, browser rendering, Core Web Vitals, or field data measurement"
    ],
    futureImprovements: [
      "Shared cache and distributed rate limiting for multi-instance deployments",
      "Persisted audit history",
      "Separate rendered-performance measurement feature"
    ],
    metrics: [{ label: "Verified tests run", value: "285 passed", context: "43 Vitest files during Phase 3" }],
    testing: "Vitest, Supertest, ESLint, documentation-link check, repository-hygiene check; Phase 3 tests passed.",
    deployment: "Render Free Web Service documented with root build/start commands, `/healthz` health path, and same-origin UI/API. Deployment is confirmed by the project owner; automated health availability was not confirmed in Phase 3.",
    deploymentEvidence: {
      ownerConfirmed: true,
      urlSource: "repository-documentation",
      healthCheckVerified: false,
      note: "Deployment confirmed by project owner; availability was not confirmed during the automated audit."
    },
    links: {
      repo: "https://github.com/shivaydwivedi/PagePulse.git",
      live: "https://pagepulse-3gub.onrender.com",
      api: "https://pagepulse-3gub.onrender.com/api/v1/audits",
      health: "https://pagepulse-3gub.onrender.com/healthz",
      documentation: "docs/architecture/README.md"
    },
    actions: [
      { label: "Live Demo", priority: "primary", href: "https://pagepulse-3gub.onrender.com" },
      { label: "GitHub Repository", priority: "secondary", href: "https://github.com/shivaydwivedi/PagePulse.git" },
      { label: "API Documentation", priority: "optional", href: "https://pagepulse-3gub.onrender.com/api/v1/audits" },
      { label: "Architecture / Case Study", priority: "optional", href: "docs/projects/pagepulse-verification.md" }
    ],
    media: {
      screenshot: "docs/screenshots/pagepulse-light-desktop.png",
      alt: "Repository-provided PagePulse UI screenshot"
    },
    architecture: {
      summary: "Browser UI and API clients call Express; audit requests pass through request IDs, rate limiting, validation, cache, semaphore/queue, destination safety, Undici transport, HTML analysis, and scoring.",
      nodes: [
        { id: "client", label: "Browser/API client" },
        { id: "express", label: "Express app" },
        { id: "safety", label: "Destination safety" },
        { id: "transport", label: "Undici transport" },
        { id: "analysis", label: "Cheerio analysis" },
        { id: "scoring", label: "Scoring" }
      ],
      connections: [
        { from: "client", to: "express", label: "HTTP" },
        { from: "express", to: "safety", label: "validated audit URL" },
        { from: "safety", to: "transport", label: "approved address" },
        { from: "transport", to: "analysis", label: "bounded HTML" },
        { from: "analysis", to: "scoring", label: "signals" }
      ],
      notes: ["Local repository branch was `main...origin/main`; older phase branches exist, including one gone remote-tracking branch."]
    },
    accent: "bg-emerald-700"
  },
  {
    slug: "chatwat",
    number: 4,
    name: "ChatWat",
    shortLabel: "ChatWat",
    category: "Real-time chat application",
    status: "live",
    oneLine: "React, Express, Socket.io, and SQLite chat app with REST history, live messages, typing indicators, and presence.",
    summary:
      "Repository-verified full-stack chat app with a Vite client, Express backend, Socket.io real-time layer, SQLite persistence, screenshots, and custom integration checks.",
    role: "Full-stack project owner",
    problem: "A chat app needs consistent message validation and persistence across REST and realtime write paths.",
    solution:
      "Express and Socket.io share the same message service and SQLite repository so REST-created and socket-created messages follow the same validation, persistence, and broadcast behavior.",
    stack: ["React", "Vite", "Node.js", "Express 5", "Socket.io", "SQLite", "better-sqlite3", "ESLint"],
    capabilities: [
      "Realtime UI",
      "Socket.io event design",
      "REST API design",
      "SQLite persistence",
      "Responsive React components",
      "Integration smoke testing"
    ],
    highlights: [
      "Username-based demo login",
      "Persistent message history through SQLite",
      "Online socket count and named online-user presence",
      "Typing start/stop updates and reconnection states"
    ],
    challenges: [],
    technicalDecisions: [
      "Message service is shared by REST and Socket.io write paths",
      "Presence and typing state are realtime-only and not persisted",
      "CORS and Socket.io origin are controlled by `CLIENT_URL`"
    ],
    tradeoffs: [
      "README documents that deployed SQLite uses Render's free ephemeral filesystem, so messages may reset after restart or redeployment.",
      "Username login is a demo identity mechanism, not password authentication."
    ],
    lessons: [],
    limitations: ["No password authentication or account system", "No rooms, private messages, file attachments, message deletion, or moderation tools"],
    futureImprovements: [],
    metrics: [],
    testing: "Client ESLint, server syntax checks, and custom integration-check script passed during Phase 3.",
    deployment: "README documents Vercel frontend and Render backend deployment; backend health endpoint is `/api/health`. Deployment is confirmed by the project owner; automated backend health availability was not confirmed in Phase 3.",
    deploymentEvidence: {
      ownerConfirmed: true,
      urlSource: "repository-documentation",
      healthCheckVerified: false,
      note: "Deployment confirmed by project owner; availability was not confirmed during the automated audit."
    },
    links: {
      repo: "https://github.com/shivaydwivedi/chatwat.git",
      live: "https://chatwat-mu.vercel.app",
      api: "https://chatwat-api.onrender.com",
      health: "https://chatwat-api.onrender.com/api/health",
      documentation: "docs/api.md"
    },
    actions: [
      { label: "Live Demo", priority: "primary", href: "https://chatwat-mu.vercel.app" },
      { label: "GitHub Repository", priority: "secondary", href: "https://github.com/shivaydwivedi/chatwat.git" },
      { label: "API Documentation", priority: "optional", href: "docs/api.md" },
      { label: "Architecture / Case Study", priority: "optional", href: "docs/projects/chatwat-verification.md" }
    ],
    media: {
      screenshot: "docs/screenshots/chat-light.png",
      alt: "Repository-provided ChatWat chat screenshot"
    },
    architecture: {
      summary: "React/Vite client uses REST for history and Socket.io for live chat; the Express backend persists messages in SQLite and broadcasts through Socket.io.",
      nodes: [
        { id: "client", label: "React/Vite client" },
        { id: "express", label: "Express REST API" },
        { id: "socket", label: "Socket.io" },
        { id: "service", label: "Message service" },
        { id: "sqlite", label: "SQLite" }
      ],
      connections: [
        { from: "client", to: "express", label: "REST history/messages" },
        { from: "client", to: "socket", label: "live events" },
        { from: "express", to: "service", label: "create/read messages" },
        { from: "socket", to: "service", label: "message send" },
        { from: "service", to: "sqlite", label: "better-sqlite3" }
      ],
      notes: ["Evidence comes from README, route files, Socket.io code, SQLite repository, docs, screenshots, and integration check."]
    },
    accent: "bg-cyan-700"
  },
  {
    slug: "sonica",
    number: 5,
    name: "Sonica",
    shortLabel: "Sonica",
    category: "Django music player",
    status: "live",
    oneLine: "Django music player for browsing songs, managing favourites and playlists, and recording listening history with deployment-readiness work.",
    summary:
      "Repository-verified Django application with template-rendered UI, local SQLite, PostgreSQL deployment configuration, optional Cloudinary media storage, health/readiness endpoints, and a large Django test suite.",
    role: "Django modernization project owner",
    problem: "A music player needs authenticated collection features while avoiding unsafe GET-side mutations and unsafe local-media deployment assumptions.",
    solution:
      "Django app with public browsing, authenticated favourites, normalized playlists, POST-only mutation routes, playback-history recording, health/readiness probes, and Render/PostgreSQL configuration.",
    stack: [
      "Python 3.12",
      "Django 5.2",
      "SQLite",
      "PostgreSQL",
      "Django Allauth",
      "WhiteNoise",
      "Waitress",
      "Cloudinary optional",
      "Bootstrap 4"
    ],
    capabilities: [
      "Django templates",
      "Authentication flows",
      "Relational modeling",
      "POST-only mutation hardening",
      "Deployment readiness",
      "Media upload validation"
    ],
    highlights: [
      "Public song browsing across home, all songs, language, detail, and recent views",
      "Authenticated favourites, playlists, playlist-song membership, profile, and history flows",
      "`/health/` process probe and `/ready/` database connectivity probe",
      "Render blueprint configures Python web service and PostgreSQL database"
    ],
    challenges: [
      "README warns that no music library or committed screenshots are included and only authorized media should be used."
    ],
    technicalDecisions: [
      "SQLite remains local default when `DATABASE_URL` is blank",
      "PostgreSQL is selected through `DATABASE_URL` for production deployment",
      "Cloudinary media storage is enabled only when `CLOUDINARY_URL` exists",
      "Favourite, playlist, and playback-history mutations use POST-only routes"
    ],
    tradeoffs: [
      "Deployment is confirmed by the project owner; automated health availability was not confirmed in Phase 3.",
      "Local development uses filesystem media; durable production media requires Cloudinary or equivalent storage."
    ],
    lessons: [],
    limitations: [
      "No screenshot files are committed",
      "Repository does not include a music library",
      "Google authentication UI requires a real Allauth SocialApp and is disabled by default"
    ],
    futureImprovements: ["Capture authorized portfolio screenshots", "Confirm durable media strategy"],
    metrics: [{ label: "Verified tests run", value: "216 passed", context: "Django test suite run during Phase 3" }],
    testing: "Django TestCase suite; Phase 3 run completed with 216 passed tests.",
    deployment: "Render blueprint with Waitress start script, `/health/` health check, PostgreSQL database, WhiteNoise static files, and optional Cloudinary media.",
    deploymentEvidence: {
      ownerConfirmed: true,
      urlSource: "repository-configuration",
      healthCheckVerified: false,
      note: "Deployment confirmed by project owner; availability was not confirmed during the automated audit."
    },
    links: {
      repo: "https://github.com/shivaydwivedi/Sonica.git",
      live: "https://sonica-music-player.onrender.com",
      health: "https://sonica-music-player.onrender.com/health/",
      documentation: "docs/deployment/RENDER_DEPLOYMENT.md"
    },
    actions: [
      { label: "Live Demo", priority: "primary", href: "https://sonica-music-player.onrender.com" },
      { label: "GitHub Repository", priority: "secondary", href: "https://github.com/shivaydwivedi/Sonica.git" },
      { label: "Architecture / Case Study", priority: "optional", href: "docs/projects/sonica-verification.md" }
    ],
    media: {},
    architecture: {
      summary: "Browser requests Django template views; Django auth, song, playlist, favourite, and history models persist to SQLite locally or PostgreSQL when configured.",
      nodes: [
        { id: "browser", label: "Browser" },
        { id: "django", label: "Django views/templates" },
        { id: "auth", label: "Django auth/allauth" },
        { id: "database", label: "SQLite/PostgreSQL" },
        { id: "media", label: "Filesystem/Cloudinary media" }
      ],
      connections: [
        { from: "browser", to: "django", label: "HTML forms/pages" },
        { from: "django", to: "auth", label: "sessions/auth" },
        { from: "django", to: "database", label: "ORM" },
        { from: "django", to: "media", label: "uploaded media" }
      ],
      notes: ["Repository is on `deployment/production-launch...origin/deployment/production-launch`."]
    },
    accent: "bg-stone-900"
  }
] satisfies PortfolioProject[];
