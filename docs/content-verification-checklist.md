# Content Verification Checklist

Use this checklist before replacing placeholder portfolio content. Do not publish claims until Shivay confirms them or they are verified directly from the relevant source repository, deployed application, or official profile.

## Profile

- Real email: Unresolved, owner confirmation required.
- GitHub URL: Unresolved for final profile link; project repository remotes verify `shivaydwivedi` ownership paths.
- LinkedIn URL: Unresolved, owner confirmation required.
- LeetCode URL: Unresolved, owner confirmation required.
- Final resume file: Unresolved, owner confirmation required.
- Final domain: Unresolved, owner confirmation required.
- Deployment target: Unresolved for portfolio deployment.
- Coding statistics: Unresolved, owner/profile verification required.
- Certificates: Unresolved, owner confirmation required.
- Whether technical articles currently exist: Unresolved, owner confirmation required.

## Blogify

- Repository URL: Verified from git remote, `https://github.com/shivaydwivedi/blogify-api.git`.
- Live application URL: Owner confirmed deployed; documentation states `https://blogify-api-0ghm.onrender.com/`. Deployment confirmed by project owner; availability was not confirmed during the automated audit.
- API URL: Documentation stated, `https://blogify-api-0ghm.onrender.com/`.
- Health endpoint: Code verified as `/health/`; documentation states `https://blogify-api-0ghm.onrender.com/health/`.
- Documentation URL: Code verified Swagger route `/api/v1/docs/`; documentation states Render URL.
- Project status: Owner confirmed deployed/live; current runtime availability not network-verified.
- Final stack: Verified from requirements, Dockerfile, settings, and README.
- Concise purpose: Verified from README and code modules.
- Problem solved: Partly documentation stated; final wording needs Shivay approval.
- Key architecture: Code verified modular Django monolith.
- Important features: Code verified from routes/models/tests.
- Authentication/security features: Code verified from Simple JWT, custom user, permissions, settings, and tests.
- Test framework: Verified, pytest/pytest-django.
- Verified test count: Verified in Phase 3, 163 passed.
- Deployment provider: Documentation stated Render; Docker configuration verified.
- Screenshots needed: Unresolved.
- Major challenges: Unresolved except CI/CD not configured per README.
- Technical decisions: Verified from ADR/docs and code.
- Tradeoffs: Limited verified evidence; owner confirmation recommended.
- Lessons learned: Unresolved, owner confirmation required.
- Limitations: CI/CD not configured per README; current health availability unresolved.
- Future improvements: Unresolved, owner confirmation required.

## Reduc.to

- Repository URL: Verified from git remote, `https://github.com/shivaydwivedi/Reduc.to.git`.
- Live application URL: Owner confirmed deployed; documentation states `https://reduc-to-web.vercel.app`. Deployment confirmed by project owner; availability was not confirmed during the automated audit.
- API URL: Documentation stated, `https://reduc-to.onrender.com`; health check timed out on 2026-08-02, so API availability was not confirmed during the automated audit.
- Health endpoint: Code verified `/health`; documentation states `https://reduc-to.onrender.com/health`.
- Documentation URL: Verified local docs, especially `docs/api/01-endpoint-catalog.md`.
- Project status: Owner confirmed deployed/live; current runtime availability not network-verified.
- Final stack: Verified from package manifests, Prisma schema, code, and README.
- Concise purpose: Verified from README and route/schema code.
- Problem solved: Documentation stated and code supported; final wording needs Shivay approval.
- Key architecture: Code verified npm workspaces with API/web/shared packages.
- Important features: Code verified from routes/services/tests.
- Authentication/security features: Code verified from auth routes, cookies, JWT, Argon2, origin checks, URL validation, and tests.
- Test framework: Verified, Vitest.
- Verified test count: Verified in Phase 3, 85 API tests and 9 web tests passed.
- Deployment provider: Documentation stated Vercel frontend and Render API.
- Screenshots needed: README says screenshots are planned; unresolved.
- Major challenges: Unresolved except documented planned Redis caching/rate limiting and analytics limits.
- Technical decisions: Verified from docs, Prisma schema, and code.
- Tradeoffs: Verified as documented planned/not-yet-implemented Redis caching/rate limiting and analytics aggregation.
- Lessons learned: Unresolved, owner confirmation required.
- Limitations: Verified from README/docs; current health availability unresolved.
- Future improvements: Documentation stated examples; owner confirmation needed for portfolio emphasis.

## PagePulse

- Repository URL: Verified from git remote, `https://github.com/shivaydwivedi/PagePulse.git`.
- Live application URL: Owner confirmed deployed; documentation states `https://pagepulse-3gub.onrender.com`. Deployment confirmed by project owner; availability was not confirmed during the automated audit.
- API URL: Code verified endpoint `/api/v1/audits`; documentation states same-origin Render URL, `https://pagepulse-3gub.onrender.com/api/v1/audits`.
- Health endpoint: Code verified `/healthz`; documentation states `https://pagepulse-3gub.onrender.com/healthz`.
- Documentation URL: Verified local docs under `docs/architecture` and `docs/deployment`.
- Project status: Owner confirmed deployed/live; current runtime availability not network-verified.
- Final stack: Verified from package manifest, source, tests, and README.
- Concise purpose: Verified from README and code.
- Problem solved: Documentation stated and code supported.
- Key architecture: Code verified Express audit pipeline.
- Important features: Code verified from routes, services, analyzers, scoring, cache/concurrency/rate-limit modules.
- Authentication/security features: Code verified as public unauthenticated API with SSRF-aware controls and first-party security headers.
- Test framework: Verified, Vitest/Supertest.
- Verified test count: Verified in Phase 3, 43 files and 285 tests passed.
- Deployment provider: Documentation stated Render Free Web Service.
- Screenshots needed: Repository contains PagePulse screenshots under `docs/screenshots`.
- Major challenges: Verified documented SSRF residual limits and Render/process-local tradeoffs.
- Technical decisions: Verified from architecture docs and code.
- Tradeoffs: Verified from README and architecture docs.
- Lessons learned: Unresolved, owner confirmation required.
- Limitations: Verified from README and docs.
- Future improvements: Documentation stated; owner confirmation needed for final portfolio wording.

## ChatWat

- Repository URL: Verified from git remote, `https://github.com/shivaydwivedi/chatwat.git`.
- Live application URL: Owner confirmed deployed; documentation states `https://chatwat-mu.vercel.app`. Deployment confirmed by project owner; availability was not confirmed during the automated audit.
- API URL: Documentation stated, `https://chatwat-api.onrender.com`; health check timed out on 2026-08-02, so API availability was not confirmed during the automated audit.
- Health endpoint: Code verified `/api/health`; documentation states Render URL.
- Documentation URL: Verified local docs: `docs/api.md`, `docs/socket-events.md`, `docs/architecture.md`, `docs/testing.md`.
- Project status: Owner confirmed deployed/live; current runtime availability not network-verified.
- Final stack: Verified from package manifests and code.
- Concise purpose: Verified from README and code.
- Problem solved: Documentation stated and code supported.
- Key architecture: Code verified React/Vite client plus Express/Socket.io/SQLite backend.
- Important features: Code verified from REST routes, socket handlers, service, repository, and client components.
- Authentication/security features: Verified demo username login only, CORS origin control, body limit, input validation; no password auth.
- Test framework: Custom Node integration script plus ESLint/server syntax checks.
- Verified test count: Unresolved; custom integration check passed but does not report a numeric test count.
- Deployment provider: Documentation stated Vercel frontend and Render backend.
- Screenshots needed: Repository contains screenshots under `docs/screenshots`.
- Major challenges: Verified documented ephemeral SQLite and demo-auth limitations.
- Technical decisions: Verified from code and docs.
- Tradeoffs: Verified from README/docs.
- Lessons learned: Unresolved, owner confirmation required.
- Limitations: Verified from README/docs.
- Future improvements: Unresolved, owner confirmation required.

## Sonica

- Repository URL: Verified from git remote, `https://github.com/shivaydwivedi/Sonica.git`.
- Live application URL: Owner confirmed deployed; Render configuration identifies `https://sonica-music-player.onrender.com`. Deployment confirmed by project owner; availability was not confirmed during the automated audit.
- API URL: Not applicable/currently unresolved; Sonica is primarily a Django template app.
- Health endpoint: Code verified `/health/`; Render blueprint uses `/health/`.
- Documentation URL: Verified local docs: `docs/deployment/RENDER_DEPLOYMENT.md` and modernization docs.
- Project status: Owner confirmed deployed/live; current runtime availability not network-verified.
- Final stack: Verified from requirements, settings, render config, and README.
- Concise purpose: Verified from README and code.
- Problem solved: Documentation stated and code supported; final wording needs Shivay approval.
- Key architecture: Code verified Django template app with auth/music/player modules.
- Important features: Code verified from routes/models/tests.
- Authentication/security features: Code verified Django auth, optional Allauth, POST-only mutation hardening, safe redirects, production settings, upload validation.
- Test framework: Verified, Django TestCase/manage.py test.
- Verified test count: Verified in Phase 3, 216 tests passed.
- Deployment provider: Configuration verified Render blueprint with PostgreSQL.
- Screenshots needed: README states no screenshot files are committed; unresolved.
- Major challenges: Verified no committed screenshots/music library and durable media requirements.
- Technical decisions: Verified from settings, docs, and tests.
- Tradeoffs: Verified local SQLite vs PostgreSQL deployment, local media vs Cloudinary.
- Lessons learned: Unresolved, owner confirmation required.
- Limitations: Verified from README/docs.
- Future improvements: Capture authorized screenshots and confirm durable media strategy.
