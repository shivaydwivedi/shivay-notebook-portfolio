import { SectionPage } from "@/components/section-page";
import { ProjectNotebook } from "@/components/project-notebook";

export function SelectedWorkSection() {
  return (
    <SectionPage id="selected-work" label="Selected Work">
      <h2 id="selected-work-title" className="mt-5 text-4xl font-bold tracking-tight">Selected project notebook</h2>
      <ProjectNotebook />
    </SectionPage>
  );
}
