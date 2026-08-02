"use client";

import { useState } from "react";
import type { ProjectMediaAsset, ProjectMediaSet } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "@/components/project/project-media";

export function ProjectMediaGallery({
  projectName,
  architectureSummary,
  stack,
  media
}: {
  projectName: string;
  architectureSummary: string;
  stack: string[];
  media?: ProjectMediaSet;
}) {
  const approvedMedia = media?.status === "approved" && media.primary ? [media.primary, ...(media.secondary ?? [])] : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = approvedMedia[activeIndex];

  if (!active) {
    return (
      <ProjectMedia
        projectName={projectName}
        architectureSummary={architectureSummary}
        stack={stack}
        media={media}
      />
    );
  }

  return (
    <div className="grid gap-3">
      <ProjectMedia projectName={projectName} architectureSummary={architectureSummary} stack={stack} media={media} asset={active} />
      {approvedMedia.length > 1 ? (
        <div className="flex flex-wrap gap-2" aria-label={`${projectName} media gallery`}>
          {approvedMedia.map((asset: ProjectMediaAsset, index) => (
            <button
              key={`${asset.src}-${asset.caption}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              aria-label={`${asset.type.replace("-", " ")} for ${projectName}${activeIndex === index ? ", selected media" : ""}`}
              className={cn(
                "min-h-10 rounded-md border border-border bg-paper px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeIndex === index && "border-blue bg-blue/10"
              )}
            >
              {asset.type.replace("-", " ")}
              {activeIndex === index ? <span className="sr-only">Selected media</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
