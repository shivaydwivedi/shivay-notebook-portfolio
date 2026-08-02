"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenText, CheckCircle2, ExternalLink, Github, Maximize2 } from "lucide-react";
import { projectPortfolioContent } from "@/data/project-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const statusLabel = "Live";

export function ProjectNotebook() {
  const [open, setOpen] = useState(0);
  const project = projectPortfolioContent[open];

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.4fr]">
      <div className="grid gap-3">
        {projectPortfolioContent.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setOpen(index)}
            aria-pressed={open === index}
            className={cn(
              "group rounded-[8px] border border-border bg-background/65 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-tab focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              open === index && "border-blue bg-blue/10"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-muted-foreground">page {item.number}</span>
              <Maximize2 className="size-4 text-muted-foreground transition group-hover:text-blue" aria-hidden="true" />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="rounded-md border border-emerald-600/35 bg-emerald-600/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                {statusLabel}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-blue">{item.category}</p>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.oneLine}</p>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={project.slug}
          initial={{ opacity: 0, rotateY: -7, x: 16 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          exit={{ opacity: 0, rotateY: 7, x: -16 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="relative min-h-[720px] rounded-[8px] border border-border bg-paper p-5 shadow-paper md:p-7"
        >
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-border/70 md:block" aria-hidden="true" />
          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">Project sheet / {project.number}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h3 className="text-3xl font-bold tracking-tight">{project.name}</h3>
                <span className="rounded-md border border-emerald-600/35 bg-emerald-600/10 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                  {statusLabel}
                </span>
              </div>
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">{project.category}</p>
              <p className="mt-4 text-base font-medium leading-7">{project.oneLine}</p>

              <NoteBlock title="Summary" body={project.summary} />
              <NoteBlock title="Problem" body={project.problem} />
              <NoteBlock title="Engineering solution" body={project.solution} />

              <div className="mt-6 flex flex-wrap gap-3">
                {project.actions.map((action) => (
                  <Button key={`${project.slug}-${action.kind}`} asChild variant={action.kind === "live" ? "default" : "outline"}>
                    <a href={action.href} target="_blank" rel="noreferrer">
                      {action.kind === "repository" ? <Github className="size-4" /> : <ExternalLink className="size-4" />}
                      {action.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <PreviewPanel projectName={project.name} />

              <div className="mt-5">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Strongest highlights</h4>
                <ul className="mt-3 grid gap-2 text-sm leading-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <NoteBlock title="Architecture summary" body={project.architectureSummary} />
              <NoteBlock title="Testing evidence" body={project.testingSummary ?? project.testingEvidence.verifiedStatus} />
              <NoteBlock title="Deployment evidence" body={project.deploymentNote} />
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

function NoteBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-5">
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{body}</p>
    </div>
  );
}

function PreviewPanel({ projectName }: { projectName: string }) {
  return (
    <div className="rounded-[8px] border border-dashed border-border bg-background/45 p-4">
      <div className="flex items-center gap-2">
        <BookOpenText className="size-4 text-blue" aria-hidden="true" />
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Project preview</h4>
      </div>
      <div className="mt-4 aspect-video rounded-md border border-border bg-paper-grid bg-[length:18px_18px] p-4">
        <div className="flex h-full flex-col justify-between rounded-md border border-border bg-paper/85 p-4">
          <div>
            <div className="h-2 w-20 rounded bg-foreground/15" />
            <div className="mt-3 h-2 w-32 rounded bg-foreground/10" />
          </div>
          <p className="max-w-[16rem] text-sm leading-6 text-muted-foreground">
            Preview slot for {projectName}. Final screenshot gallery is intentionally deferred.
          </p>
        </div>
      </div>
    </div>
  );
}
