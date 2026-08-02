"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, Maximize2 } from "lucide-react";
import type { ProjectPortfolioContent } from "@/types/portfolio";
import { projectPortfolioContent } from "@/data/project-content";
import { Button } from "@/components/ui/button";
import { ProjectMediaGallery } from "@/components/project/project-media-gallery";
import { cn } from "@/lib/utils";

type EvidenceItem = {
  label: string;
  value: string;
};

const projectEvidence: Record<string, EvidenceItem[]> = {
  blogify: [
    { label: "Framework", value: "Django REST Framework" },
    { label: "Data", value: "PostgreSQL-ready" },
    { label: "Background", value: "Celery and Redis" },
    { label: "Testing", value: "163 pytest tests" },
    { label: "Deploy", value: "Render documented" }
  ],
  "reduc-to": [
    { label: "Stack", value: "Fastify and React" },
    { label: "Data", value: "Prisma/PostgreSQL" },
    { label: "Auth", value: "HTTP-only cookies" },
    { label: "Testing", value: "85 API, 9 web tests" },
    { label: "Deploy", value: "Vercel and Render" }
  ],
  pagepulse: [
    { label: "Framework", value: "Express" },
    { label: "Security", value: "SSRF-aware checks" },
    { label: "Analysis", value: "Cheerio scoring" },
    { label: "Testing", value: "285 Vitest tests" },
    { label: "Deploy", value: "Render documented" }
  ],
  chatwat: [
    { label: "Realtime", value: "Socket.io" },
    { label: "API", value: "Express REST" },
    { label: "Data", value: "SQLite history" },
    { label: "Testing", value: "Integration check" },
    { label: "Deploy", value: "Vercel and Render" }
  ],
  sonica: [
    { label: "Framework", value: "Django 5.2" },
    { label: "Data", value: "SQLite/PostgreSQL" },
    { label: "Safety", value: "POST-only mutations" },
    { label: "Testing", value: "216 Django tests" },
    { label: "Deploy", value: "Render blueprint" }
  ]
};

const previewStack: Record<string, string[]> = {
  blogify: ["Client", "Django REST API", "PostgreSQL", "Redis/Celery"],
  "reduc-to": ["React", "Fastify API", "Prisma", "PostgreSQL"],
  pagepulse: ["Client", "Express API", "URL safety", "HTML analysis"],
  chatwat: ["React", "REST/Socket.io", "Message service", "SQLite"],
  sonica: ["Browser", "Django views", "SQLite/PostgreSQL", "Cloudinary optional"]
};

const statusLabel = "Live";

export function ProjectNotebook() {
  const [open, setOpen] = useState(0);
  const project = projectPortfolioContent[open];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-8 grid gap-6 xl:grid-cols-[0.72fr_1.5fr]">
      <ProjectSelector open={open} onSelect={setOpen} />

      <AnimatePresence mode="wait">
        <motion.article
          key={project.slug}
          initial={shouldReduceMotion ? false : { opacity: 0, rotateY: -4, x: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, rotateY: 0, x: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, rotateY: 4, x: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative rounded-[8px] border border-border bg-paper p-4 shadow-paper md:p-7"
        >
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-border/70 lg:block" aria-hidden="true" />
          <div className="grid gap-7 lg:grid-cols-2">
            <div className="min-w-0">
              <ProjectIdentity project={project} />
              <ProjectActions project={project} />
              <EvidenceStrip project={project} />

              <SectionText title="Problem" body={project.problem} />
              <SectionText title="Engineering approach" body={project.solution} />
            </div>

            <div className="min-w-0">
              <ProjectMediaGallery
                projectName={project.name}
                architectureSummary={project.architectureSummary}
                stack={previewStack[project.slug] ?? []}
                media={project.media}
              />
              <Highlights project={project} />
              <SectionText title="Architecture summary" body={project.architectureSummary} />
              <EvidenceNotes project={project} />
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

function ProjectSelector({ open, onSelect }: { open: number; onSelect: (index: number) => void }) {
  return (
    <div className="-mx-1 overflow-x-auto px-1 pb-2 xl:mx-0 xl:overflow-visible xl:px-0 xl:pb-0">
      <div className="flex min-w-max gap-3 xl:grid xl:min-w-0">
        {projectPortfolioContent.map((item, index) => {
          const selected = open === index;
          const isFlagship = item.slug === "blogify";
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => onSelect(index)}
              aria-pressed={selected}
              aria-label={`${item.name}, ${item.category}, ${statusLabel}${selected ? ", selected project" : ""}`}
              className={cn(
                "group w-[17rem] rounded-[8px] border border-border bg-background/65 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-tab focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:w-auto",
                selected && "border-blue bg-blue/10 shadow-tab"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-muted-foreground">page {item.number}</span>
                <Maximize2 className="size-4 text-muted-foreground transition group-hover:text-blue" aria-hidden="true" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <StatusPill />
                {selected ? <span className="sr-only">Selected project</span> : null}
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-blue">{item.category}</p>
              {isFlagship ? (
                <span className="mt-3 inline-flex rounded-md border border-blue/40 bg-blue/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-blue">
                  Flagship backend project
                </span>
              ) : null}
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{item.oneLine}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectIdentity({ project }: { project: ProjectPortfolioContent }) {
  const isFlagship = project.slug === "blogify";

  return (
    <header>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">Project sheet / {project.number}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h3 className="text-3xl font-bold tracking-tight md:text-4xl">{project.name}</h3>
        <StatusPill />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">{project.category}</p>
        {isFlagship ? (
          <span className="rounded-md border border-blue/40 bg-blue/10 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-blue">
            Flagship backend project
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-base font-medium leading-7">{project.oneLine}</p>
      <p className="mt-4 max-w-prose text-sm leading-7 text-muted-foreground">{project.summary}</p>
    </header>
  );
}

function StatusPill() {
  return (
    <span className="rounded-md border border-emerald-600/35 bg-emerald-600/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
      {statusLabel}
    </span>
  );
}

function ProjectActions({ project }: { project: ProjectPortfolioContent }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3" aria-label={`${project.name} project actions`}>
      {project.actions.map((action) => (
        <Button
          key={`${project.slug}-${action.kind}`}
          asChild
          variant={action.kind === "live" ? "default" : "outline"}
          className="min-h-10"
        >
          <a href={action.href} target="_blank" rel="noreferrer" aria-label={`${action.label} for ${project.name}`}>
            {action.kind === "repository" ? <Github className="size-4" aria-hidden="true" /> : <ExternalLink className="size-4" aria-hidden="true" />}
            {action.label}
          </a>
        </Button>
      ))}
    </div>
  );
}

function EvidenceStrip({ project }: { project: ProjectPortfolioContent }) {
  const evidence = projectEvidence[project.slug] ?? [];

  return (
    <dl className="mt-6 grid gap-2 rounded-[8px] border border-dashed border-border bg-background/45 p-3 sm:grid-cols-2">
      {evidence.map((item) => (
        <div key={`${project.slug}-${item.label}`} className="min-w-0">
          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{item.label}</dt>
          <dd className="mt-1 text-sm font-medium leading-5">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Highlights({ project }: { project: ProjectPortfolioContent }) {
  return (
    <section className="mt-6" aria-labelledby={`${project.slug}-highlights-title`}>
      <h4 id={`${project.slug}-highlights-title`} className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Key systems
      </h4>
      <ul className="mt-3 grid gap-2 text-sm leading-6">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EvidenceNotes({ project }: { project: ProjectPortfolioContent }) {
  return (
    <section className="mt-6 border-t border-border pt-5" aria-labelledby={`${project.slug}-evidence-title`}>
      <h4 id={`${project.slug}-evidence-title`} className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Evidence
      </h4>
      <div className="mt-3 grid gap-3 text-sm leading-7 text-muted-foreground">
        <p>{project.testingSummary ?? project.testingEvidence.verifiedStatus}</p>
        <p>{project.deploymentNote}</p>
      </div>
    </section>
  );
}

function SectionText({ title, body }: { title: string; body: string }) {
  return (
    <section className="mt-6 border-t border-border pt-5">
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <p className="mt-2 max-w-prose text-sm leading-7 text-muted-foreground">{body}</p>
    </section>
  );
}
