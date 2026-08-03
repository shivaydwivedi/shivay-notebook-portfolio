import Image from "next/image";
import { BookOpenText } from "lucide-react";
import type { ProjectMediaAsset } from "@/types/portfolio";

export function ProjectMedia({
  projectName,
  architectureSummary,
  stack,
  asset
}: {
  projectName: string;
  architectureSummary: string;
  stack: string[];
  asset?: ProjectMediaAsset;
}) {
  if (asset) {
    return (
      <figure className="rounded-[8px] border border-border bg-background/45 p-4">
        <div className="overflow-hidden rounded-md border border-border bg-paper">
          <Image
            src={asset.src}
            alt={asset.alt}
            width={asset.width ?? 1440}
            height={asset.height ?? 900}
            className="h-auto w-full object-cover"
          />
        </div>
        <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">{asset.caption}</figcaption>
      </figure>
    );
  }

  return (
    <section className="rounded-[8px] border border-border bg-background/45 p-4" aria-labelledby={`${projectName.toLowerCase().replace(/\W+/g, "-")}-summary-title`}>
      <div className="flex items-center gap-2">
        <BookOpenText className="size-4 text-blue" aria-hidden="true" />
        <h4 id={`${projectName.toLowerCase().replace(/\W+/g, "-")}-summary-title`} className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Project summary
        </h4>
      </div>
      <div className="mt-4 rounded-md border border-border bg-paper-grid bg-[length:18px_18px] p-4">
        <div className="rounded-md border border-border bg-paper/90 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-blue">{projectName}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{architectureSummary}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${projectName} key stack labels`}>
            {stack.map((item) => (
              <li key={item} className="rounded-md border border-border bg-background/70 px-2.5 py-1 text-xs font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
