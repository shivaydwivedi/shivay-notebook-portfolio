import type { EngineeringCapabilityGroup } from "@/types/portfolio";

export const futureCapabilityGroups = [
  {
    title: "Backend Engineering",
    capabilities: [
      "Django REST Framework APIs",
      "Fastify route design",
      "Express API boundaries",
      "Django template applications",
      "Versioned REST endpoints",
      "Health and readiness endpoints"
    ]
  },
  {
    title: "Databases and Persistence",
    capabilities: [
      "PostgreSQL deployment configuration",
      "Prisma relational modeling",
      "SQLite message persistence",
      "Django ORM modeling",
      "Refresh-token and session persistence",
      "Click-event recording"
    ]
  },
  {
    title: "Authentication and Security",
    capabilities: [
      "Simple JWT authentication",
      "HTTP-only cookie sessions",
      "Refresh-token rotation",
      "Owner-scoped authorization",
      "SSRF-aware URL validation",
      "POST-only mutation hardening"
    ]
  },
  {
    title: "Background and Real-Time Systems",
    capabilities: [
      "Celery email verification tasks",
      "Redis-backed readiness checks",
      "Socket.io event handling",
      "Realtime typing and presence state",
      "Shared REST and socket service logic"
    ]
  },
  {
    title: "Testing and Quality",
    capabilities: [
      "pytest and pytest-django",
      "Vitest and Supertest",
      "Django TestCase coverage",
      "Custom integration checks",
      "ESLint and TypeScript checks",
      "Documentation and repository hygiene checks"
    ]
  },
  {
    title: "Tooling and Deployment",
    capabilities: [
      "Docker and Docker Compose",
      "Render service configuration",
      "Vercel frontend deployment",
      "Gunicorn, Waitress, and WhiteNoise",
      "Cloudinary media configuration",
      "Static export compatibility"
    ]
  }
] satisfies EngineeringCapabilityGroup[];
