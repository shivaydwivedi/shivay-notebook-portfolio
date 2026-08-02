import { ArrowRight, Workflow } from "lucide-react";
import { SystemFlow, type SystemFlowNode } from "@/components/architecture/system-flow";

export function ArchitectureNoteCard({
  number,
  projectName,
  designFocus,
  summary,
  decision,
  flow,
  projectHref = "#selected-work"
}: {
  number: string;
  projectName: string;
  designFocus: string;
  summary: string;
  decision: string;
  flow: SystemFlowNode[];
  projectHref?: string;
}) {
  return (
    <article className="rounded-[8px] border border-border bg-background/55 p-5">
      <div className="grid gap-5 lg:grid-cols-[0.58fr_1.42fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue">
            {number} / {projectName}
          </p>
          <h3 className="mt-3 text-xl font-semibold">{designFocus}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{summary}</p>
        </div>

        <div className="min-w-0">
          <SystemFlow label={`${projectName} architecture flow`} nodes={flow} />

          <div className="mt-4 rounded-[8px] border border-dashed border-border bg-paper p-4">
            <div className="flex items-start gap-3">
              <Workflow className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Verified decision</p>
                <p className="mt-2 text-sm leading-6">{decision}</p>
              </div>
            </div>
          </div>

          <a href={projectHref} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Open related project <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
