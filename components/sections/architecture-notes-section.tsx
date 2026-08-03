import { ArchitectureNoteCard } from "@/components/architecture/architecture-note-card";
import type { SystemFlowNode } from "@/components/architecture/system-flow";
import { SectionPage } from "@/components/section-page";
import { projectPortfolioContent } from "@/data/project-content";

const architectureFlows: Record<string, { focus: string; flow: SystemFlowNode[] }> = {
  blogify: {
    focus: "Backend API breadth and operational checks",
    flow: [
      { label: "Client", detail: "HTTP JSON" },
      { label: "Django REST API", detail: "Versioned `/api/v1` routes", tone: "accent" },
      { label: "PostgreSQL", detail: "Production-oriented data store" },
      { label: "Redis/Celery", detail: "Verification email and readiness support" },
      { label: "Cloudinary", detail: "Optional media storage" }
    ]
  },
  "reduc-to": {
    focus: "Authentication, ownership, redirect, and persistence design",
    flow: [
      { label: "React app", detail: "Dashboard flows" },
      { label: "Fastify API", detail: "Auth and link routes", tone: "accent" },
      { label: "Prisma", detail: "Typed database boundary" },
      { label: "PostgreSQL", detail: "Users, links, sessions, clicks" },
      { label: "Redirect route", detail: "`/:key` public path" }
    ]
  },
  pagepulse: {
    focus: "SSRF-aware remote-resource analysis",
    flow: [
      { label: "Client", detail: "Public audit request" },
      { label: "Express API", detail: "Validation and envelopes", tone: "accent" },
      { label: "URL safety", detail: "DNS/IP/redirect checks" },
      { label: "Controlled fetch", detail: "Undici with bounds" },
      { label: "Audit result", detail: "Cheerio analysis and scoring" }
    ]
  },
  chatwat: {
    focus: "Shared REST and Socket.io message handling",
    flow: [
      { label: "React client", detail: "History and live events" },
      { label: "REST/Socket.io", detail: "Express plus realtime server", tone: "accent" },
      { label: "Message service", detail: "Shared validation and creation" },
      { label: "SQLite", detail: "Chronological message history" }
    ]
  },
  sonica: {
    focus: "Legacy recovery, safer mutations, and deployment readiness",
    flow: [
      { label: "Browser", detail: "Server-rendered pages" },
      { label: "Django app", detail: "Auth, music, playlist views", tone: "accent" },
      { label: "SQLite/PostgreSQL", detail: "Local default and deployment database" },
      { label: "Media storage", detail: "Filesystem or Cloudinary when configured" },
      { label: "Render", detail: "Waitress, health, readiness" }
    ]
  }
};

export function ArchitectureNotesSection() {
  return (
    <SectionPage id="architecture-notes" label="Architecture Notes">
      <h2 id="architecture-notes-title" className="mt-5 text-4xl font-bold tracking-tight">Architecture notes</h2>
      <div className="mt-6 grid gap-4">
        {projectPortfolioContent.map((project) => {
          const architecture = architectureFlows[project.slug];
          return (
            <ArchitectureNoteCard
              key={project.slug}
              number={project.number}
              projectName={project.name}
              designFocus={architecture.focus}
              summary={project.architectureSummary}
              decision={project.technicalDecisions[0]}
              flow={architecture.flow}
            />
          );
        })}
      </div>
    </SectionPage>
  );
}
