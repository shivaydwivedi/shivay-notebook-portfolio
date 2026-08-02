"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Search } from "lucide-react";
import { futureSections } from "@/data/sections";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

type CommandItem = {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
};

export function NotebookNav() {
  const [active, setActive] = useState("home");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const commands = useMemo(() => futureSections.map((item) => ({ ...item, href: `#${item.id}` })), []);

  const closePalette = useCallback(() => {
    setPaletteOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    futureSections.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (event.key === "Escape") closePalette();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closePalette]);

  return (
    <>
      <header className="sticky top-3 z-40 mx-auto max-w-6xl px-3">
        <div className="flex items-center justify-between rounded-[8px] border border-border bg-paper/95 px-3 py-2 shadow-tab backdrop-blur">
          <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">SD</span>
            <span className="hidden sm:inline">Engineering Notebook</span>
          </a>
          <div className="flex items-center gap-2">
            <Button
              ref={triggerRef}
              variant="outline"
              size="sm"
              onClick={() => setPaletteOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={paletteOpen}
              aria-controls="notebook-command-palette"
            >
              <Search className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] md:inline">Ctrl K</kbd>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <nav className="fixed right-0 top-28 z-30 hidden flex-col gap-1 md:flex" aria-label="Notebook page tabs">
        {futureSections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.label}
            aria-label={item.label}
            aria-current={active === item.id ? "page" : undefined}
            className={cn(
              "group flex h-11 w-12 items-center justify-center rounded-l-md border border-r-0 border-border bg-paper shadow-tab transition hover:w-48 hover:justify-start hover:gap-2 hover:px-3 focus-visible:w-48 focus-visible:justify-start focus-visible:gap-2 focus-visible:px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active === item.id && "bg-blue text-white"
            )}
          >
            {item.icon ? <item.icon className="size-4 shrink-0" aria-hidden="true" /> : null}
            <span className="hidden text-sm font-medium group-hover:inline group-focus-visible:inline">{item.label}</span>
          </a>
        ))}
      </nav>

      {paletteOpen ? <CommandPalette commands={commands} onClose={closePalette} /> : null}
    </>
  );
}

function CommandPalette({ commands, onClose }: { commands: CommandItem[]; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const filtered = commands.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div
      id="notebook-command-palette"
      className="fixed inset-0 z-50 bg-black/35 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notebook-command-palette-title"
      onClick={onClose}
    >
      <div className="mx-auto mt-24 max-w-xl rounded-[8px] border border-border bg-paper p-2 shadow-paper" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <Search className="size-4 text-muted-foreground" aria-hidden="true" />
          <label id="notebook-command-palette-title" className="sr-only" htmlFor="notebook-command-search">
            Search notebook sections
          </label>
          <input
            id="notebook-command-search"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search notebook pages..."
            className="h-10 flex-1 bg-transparent text-sm outline-none"
          />
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.icon ? <item.icon className="size-4 text-blue" aria-hidden="true" /> : null}
              {item.label}
            </a>
          ))}
          {filtered.length === 0 ? <p className="px-3 py-4 text-sm text-muted-foreground">No matching notebook pages.</p> : null}
        </div>
      </div>
    </div>
  );
}
