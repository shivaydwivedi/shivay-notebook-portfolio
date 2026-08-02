import { FlowNode } from "@/components/architecture/flow-node";

export type SystemFlowNode = {
  label: string;
  detail?: string;
  tone?: "default" | "accent";
};

export function SystemFlow({ label, nodes }: { label: string; nodes: SystemFlowNode[] }) {
  return (
    <div role="group" aria-label={label}>
      <ol className="grid gap-2 md:grid-cols-[repeat(auto-fit,minmax(7.5rem,1fr))]">
        {nodes.map((node, index) => (
          <li key={`${node.label}-${index}`} className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
            <FlowNode label={node.label} detail={node.detail} tone={node.tone} />
            {index < nodes.length - 1 ? (
              <span className="hidden font-mono text-sm text-muted-foreground md:block" aria-hidden="true">
                -&gt;
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
