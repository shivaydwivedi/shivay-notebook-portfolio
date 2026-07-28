"use client";

import { useEffect, useMemo, useState } from "react";
import { Command, Search } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function NotebookNav() {
  const [active, setActive] = useState("opening");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const commands = useMemo(() => navItems.map((item) => ({ ...item, href: `#${item.id}` })), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    navItems.forEach((item) => {
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
      if (event.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-3 z-40 mx-auto max-w-6xl px-3">
        <div className="flex items-center justify-between rounded-[8px] border border-border bg-paper/95 px-3 py-2 shadow-tab backdrop-blur">
          <a href="#opening" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">SD</span>
            <span className="hidden sm:inline">Engineering Notebook</span>
          </a>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setPaletteOpen(true)}>
              <Search className="size-4" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] md:inline">Ctrl K</kbd>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <nav className="fixed right-0 top-28 z-30 hidden flex-col gap-1 md:flex" aria-label="Notebook page tabs">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.label}
            className={cn(
              "group flex h-11 w-12 items-center justify-center rounded-l-md border border-r-0 border-border bg-paper shadow-tab transition hover:w-36 hover:justify-start hover:gap-2 hover:px-3",
              active === item.id && "bg-blue text-white"
            )}
          >
            <item.icon className="size-4 shrink-0" />
            <span className="hidden text-sm font-medium group-hover:inline">{item.label}</span>
          </a>
        ))}
      </nav>

      {paletteOpen ? <CommandPalette commands={commands} onClose={() => setPaletteOpen(false)} /> : null}
    </>
  );
}

function CommandPalette({
  commands,
  onClose
}: {
  commands: Array<{ id: string; label: string; href: string; icon: typeof Command }>;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const filtered = commands.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 bg-black/35 p-4" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="mx-auto mt-24 max-w-xl rounded-[8px] border border-border bg-paper p-2 shadow-paper" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <Search className="size-4 text-muted-foreground" />
          <input
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
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent"
            >
              <item.icon className="size-4 text-blue" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
