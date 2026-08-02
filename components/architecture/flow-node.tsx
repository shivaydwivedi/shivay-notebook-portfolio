import { cn } from "@/lib/utils";

export function FlowNode({
  label,
  detail,
  tone = "default"
}: {
  label: string;
  detail?: string;
  tone?: "default" | "accent";
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-[8px] border border-border bg-paper px-3 py-2",
        tone === "accent" && "border-blue/50 bg-blue/10"
      )}
    >
      <span className="block text-sm font-semibold leading-5">{label}</span>
      {detail ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{detail}</span> : null}
    </div>
  );
}
