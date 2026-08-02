# Blogify

## Verification scope

- Source path: `C:\Users\polma\Desktop\portfolio_projects\blogify-api`
- Inspected root files, README, docs, requirements, Django settings, URL routes, models, permissions, tasks, tests, Docker files, environment example, Git metadata, and latest commits.
- Evidence types used: Code verified, Configuration verified, Test verified, Documentation stated, Git metadata verified.

## Repository identity

- Official project name: Blogify API. Evidence: Documentation stated in `README.md`.
- Repository path: `C:\Users\polma\Desktop\portfolio_projects\blogify-api`. Evidence: Git metadata verified.
- Git remote: `https://github.com/shivaydwivedi/blogify-api.git`. Evidence: Git metadata verified.
- Branch/status: `main...origin/main`, clean. Evidence: Git metadata verified.
- Latest relevant commits inspected: `4e8a400 docs: fix README formatting` and nearby README/API documentation commits. Evidence: Git metadata verified.

## Purpose

Backend-only blogging platform REST API with account registration, JWT authentication, email verification, post publishing, categories, tags, comments, likes, bookmarks, notifications, admin management, OpenAPI documentation, background jobs, and deployment-oriented infrastructure. Evidence: Documentation stated; major app modules and routes are Code verified.

## Verified technology stack

- Python 3.12 and Django 5.x. Evidence: Configuration verified from Dockerfile and requirements.
- Django REST Framework, Simple JWT, django-filter, drf-spectacular. Evidence: Configuration verified.
- PostgreSQL support through `DATABASE_URL` and psycopg. Evidence: Configuration verified.
- Redis and Celery/Celery Beat. Evidence: Configuration verified.
- Cloudinary media support, WhiteNoise static serving, Gunicorn, Docker, Docker Compose, Render-oriented docs. Evidence: Configuration verified and Documentation stated.
- pytest and pytest-django. Evidence: Configuration verified and Test verified.

## Architecture

Code verified architecture is a modular Django monolith:

- `apps/accounts`: custom user model, JWT auth, email verification tasks.
- `apps/posts`: post CRUD, filtering, search, publishing workflow.
- `apps/content`: category and tag APIs.
- `apps/comments`, `apps/likes`, `apps/bookmarks`, `apps/notifications`: engagement domains.
- `apps/common`: shared response, exception, permission, pagination, serializer, utility foundations.
- `apps/core`: health endpoint and infrastructure tasks.
- `config`: settings, URLs, Celery, ASGI/WSGI.

## Core features

- Register, login, refresh, logout, current user, change password, resend verification, verify email. Evidence: Code verified in `apps/accounts/urls.py`.
- Posts router, categories router, tags router. Evidence: Code verified.
- Post comments, likes, bookmarks, notification listing/read/read-all. Evidence: Code verified.
- Health endpoint at `/health/`. Evidence: Code verified.
- OpenAPI schema and Swagger UI at `/api/v1/schema/` and `/api/v1/docs/`. Evidence: Code verified.

## Authentication and security

- Custom email-based user model. Evidence: Code verified.
- Simple JWT access/refresh tokens, refresh rotation, blacklist/logout. Evidence: Code verified and Test verified.
- DRF permissions include AllowAny, IsAuthenticated, staff/read-only, owner/read access, and object permissions. Evidence: Code verified.
- Email verification uses signed expiring tokens and Celery email task. Evidence: Code verified.
- Production settings include SSL redirect, HSTS, secure proxy header, and WhiteNoise. Evidence: Configuration verified.

## Data and persistence

- Domain models include User, Post, Category, Tag, Comment, Like, Bookmark, Notification, and shared UUID/timestamp/audit foundations. Evidence: Code verified.
- PostgreSQL is the production-oriented database; local/development settings support environment-driven database config. Evidence: Configuration verified.
- Redis is configured for Celery broker/result backend and health readiness. Evidence: Configuration verified.

## Background or real-time processing

- Celery tasks include email verification and core background ping; Celery Beat is configured. Evidence: Code verified and Configuration verified.
- No real-time WebSocket layer found. Evidence: Code search.

## API and documentation

- API prefix: `/api/v1`. Evidence: Code verified.
- Docs: `docs/API_GUIDE.md`, architecture/system-design docs, ADRs, and Swagger UI. Evidence: Documentation stated and Code verified.
- Health endpoint: `/health/`. Evidence: Code verified.

## Testing

- Command run: `$env:PYTHONDONTWRITEBYTECODE='1'; .\.venv\Scripts\python.exe manage.py check`.
- Result: passed, system check identified no issues. Evidence: Test verified.
- Command run: `$env:PYTHONDONTWRITEBYTECODE='1'; .\.venv\Scripts\python.exe -m pytest -q -p no:cacheprovider`.
- Result: `163 passed in 6.16s`. Evidence: Test verified.

## Deployment and operations

- Dockerfile uses Python 3.12 slim, installs requirements, runs as non-root `django`, exposes 8000, and uses `scripts/entrypoint.sh`. Evidence: Configuration verified.
- Docker Compose defines web, celery worker, celery beat, PostgreSQL 16, and Redis 7 services. Evidence: Configuration verified.
- README documents Render production base URL and live API/docs/admin/health links. Evidence: Documentation stated.
- CI/CD is documented as not configured. Evidence: Documentation stated.

## Verified links

- Repository: `https://github.com/shivaydwivedi/blogify-api.git`. Evidence: Git metadata verified.
- Production API: `https://blogify-api-0ghm.onrender.com/`. Evidence: Documentation stated.
- Swagger UI: `https://blogify-api-0ghm.onrender.com/api/v1/docs/`. Evidence: Documentation stated.
- OpenAPI schema: `https://blogify-api-0ghm.onrender.com/api/v1/schema/`. Evidence: Documentation stated.
- Health: `https://blogify-api-0ghm.onrender.com/health/`. Evidence: Documentation stated.
- Live URL: `https://blogify-api-0ghm.onrender.com/`. Evidence: Documentation stated and Owner confirmed.
- Availability check: `curl.exe -I --max-time 20 https://blogify-api-0ghm.onrender.com/health/` timed out with no response on 2026-08-02. Deployment confirmed by project owner; availability was not confirmed during the automated audit. Evidence: Unresolved availability.

## Evidence quality

- Strong: code structure, routes, settings, Docker, and test run.
- Medium: live deployment links are README-stated and deployment is owner-confirmed; a live health check was attempted during this phase but timed out.
- Unresolved: final portfolio screenshots, production uptime/current deployment health availability, personal lessons.

## Portfolio-ready summary

Blogify is a Django REST Framework blogging API with JWT authentication, publishing workflows, engagement features, notifications, OpenAPI documentation, Celery/Redis background infrastructure, and Docker/Render deployment support.

## Recommended engineering highlights

- Modular Django monolith with bounded app domains.
- JWT lifecycle and email verification workflows.
- Engagement model across comments, likes, bookmarks, and notifications.
- drf-spectacular OpenAPI documentation and health checks.
- Verified pytest suite passing in this phase.

## Recommended architecture diagram

Client -> Django REST API -> domain apps/services -> PostgreSQL, Redis/Celery, Cloudinary, email provider. Include `/api/v1` docs and `/health/`.

## Confirmed challenges or trade-offs

- CI/CD is not configured in the repository. Evidence: Documentation stated.
- Deployment status is owner-confirmed; live availability was not independently network-verified in this phase. Evidence: Owner confirmed and Unresolved availability.

## Missing information requiring Shivay confirmation

- Final screenshots.
- Whether the README production URL is currently available during runtime checks.
- Personal challenges, lessons learned, and project outcome wording.
