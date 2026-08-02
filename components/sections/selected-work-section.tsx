import { SectionPage } from "@/components/section-page";
import { ProjectNotebook } from "@/components/project-notebook";

export function SelectedWorkSection() {
  return (
    <SectionPage id="selected-work" label="Selected Work">
      <h2 id="selected-work-title" className="mt-5 text-4xl font-bold tracking-tight">Selected project notebook</h2>
      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
        Five deployed projects, translated from repository evidence into concise case-study pages. Availability checks remain separate from owner-confirmed deployment status.
      </p>
      <ProjectNotebook />
    </SectionPage>
  );
}
