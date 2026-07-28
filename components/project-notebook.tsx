"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectNotebook() {
  const [open, setOpen] = useState(0);
  const project = projects[open];

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.4fr]">
      <div className="grid gap-3">
        {projects.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setOpen(index)}
            className={cn(
              "group rounded-[8px] border border-border bg-background/65 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-tab",
              open === index && "border-blue bg-blue/10"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-muted-foreground">page {String(index + 1).padStart(2, "0")}</span>
              <Maximize2 className="size-4 text-muted-foreground transition group-hover:text-blue" />
            </div>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.problem}</p>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={project.title}
          initial={{ opacity: 0, rotateY: -7, x: 16 }}
          animate={{ opacity: 1, rotateY: 0, x: 0 }}
          exit={{ opacity: 0, rotateY: 7, x: -16 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="relative min-h-[620px] rounded-[8px] border border-border bg-paper p-5 shadow-paper md:p-7"
        >
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-border/70 md:block" aria-hidden="true" />
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue">Project sheet</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">{project.title}</h3>
              <NoteBlock title="Problem" body={project.problem} />
              <NoteBlock title="Solution" body={project.solution} />
              <div className="mt-5">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Tech stack</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-border bg-background/70 px-2.5 py-1 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <ArchitectureDiagram accent={project.accent} title={project.title} />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Features</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-blue" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[8px] border border-dashed border-border bg-background/45 p-4">
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Screenshot slot</h4>
                  <div className="mt-4 aspect-video rounded-md border border-border bg-paper-grid bg-[length:18px_18px] p-3">
                    <div className="h-3 w-20 rounded bg-foreground/15" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className={cn("h-16 rounded", project.accent)} />
                      <div className="h-16 rounded bg-foreground/10" />
                      <div className="h-16 rounded bg-foreground/10" />
                    </div>
                  </div>
                </div>
              </div>
              <NoteBlock title="Challenges" body={project.challenges} />
              <NoteBlock title="Lessons learned" body={project.lessons} />
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

function ArchitectureDiagram({ accent, title }: { accent: string; title: string }) {
  return (
    <div className="rounded-[8px] border border-border bg-background/55 p-4">
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Architecture diagram</h4>
      <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-xs font-medium">
        {["Client", "API", "Database"].map((label, index) => (
          <div key={label} className="contents">
            <div className={cn("rounded-md border border-border bg-paper p-3", index === 1 && `${accent} text-white`)}>
              {label}
            </div>
            {index < 2 ? <span className="font-mono text-muted-foreground">→</span> : null}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-dashed border-border bg-paper p-3 text-xs text-muted-foreground">
        {title} keeps business rules in services, persistence in models, and integration notes near the endpoints.
      </div>
    </div>
  );
}
