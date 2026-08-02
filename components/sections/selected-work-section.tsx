import { SectionPage } from "@/components/section-page";
import { ProjectNotebook } from "@/components/project-notebook";

export function SelectedWorkSection() {
  return (
    <SectionPage id="selected-work" label="Selected Work">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 id="selected-work-title" className="mt-5 text-4xl font-bold tracking-tight">Selected project notebook</h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
            Five deployed projects, translated from repository evidence into concise case-study pages. Availability checks remain separate from owner-confirmed deployment status.
          </p>
        </div>
        <p className="rounded-[8px] border border-dashed border-border bg-background/55 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-blue">
          Evidence-first project pages
        </p>
      </div>
      <ProjectNotebook />
    </SectionPage>
  );
}
