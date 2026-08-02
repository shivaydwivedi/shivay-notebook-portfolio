import { ArrowRight, Workflow } from "lucide-react";
import { SectionPage } from "@/components/section-page";
import { projectPortfolioContent } from "@/data/project-content";

const primaryFocus: Record<string, string> = {
  blogify: "Backend API breadth and operational checks",
  "reduc-to": "Authentication, ownership, redirect, and persistence design",
  pagepulse: "SSRF-aware remote-resource analysis",
  chatwat: "Shared REST and Socket.io message handling",
  sonica: "Legacy recovery, safer mutations, and deployment readiness"
};

export function ArchitectureNotesSection() {
  return (
    <SectionPage id="architecture-notes" label="Architecture Notes">
      <h2 id="architecture-notes-title" className="mt-5 text-4xl font-bold tracking-tight">Architecture notes</h2>
      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
        Compact system flows from the five verified projects. Detailed diagrams are deferred to the later visual redesign phase.
      </p>
      <div className="mt-8 grid gap-4">
        {projectPortfolioContent.map((project) => (
          <article key={project.slug} className="rounded-[8px] border border-border bg-background/55 p-5">
            <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue">
                  {project.number} / {project.name}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{primaryFocus[project.slug]}</h3>
              </div>
              <div>
                <p className="text-sm leading-7 text-muted-foreground">{project.architectureSummary}</p>
                <div className="mt-4 rounded-[8px] border border-dashed border-border bg-paper p-4">
                  <div className="flex items-start gap-3">
                    <Workflow className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Verified decision</p>
                      <p className="mt-2 text-sm leading-6">{project.technicalDecisions[0]}</p>
                    </div>
                  </div>
                </div>
                <a href="#selected-work" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue hover:underline">
                  Open related project <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}
