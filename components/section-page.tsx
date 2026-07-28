import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionPage({
  id,
  label,
  children,
  className
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10 md:py-16", className)} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[8px] border border-border bg-paper bg-paper-grid bg-[length:28px_28px] p-5 shadow-paper md:p-9">
          <div className="pointer-events-none absolute inset-0 bg-paper-fiber opacity-80" />
          <div className="pointer-events-none absolute bottom-0 left-7 top-0 w-px bg-red-500/20" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Notebook page / {label}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
