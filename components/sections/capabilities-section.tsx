import { Database, KeyRound, Radio, ServerCog, ShieldCheck, TestTube2, Wrench } from "lucide-react";
import { SectionPage } from "@/components/section-page";
import { futureCapabilityGroups } from "@/data/capabilities";

type CapabilityEvidence = {
  projects: string[];
  summary: string;
};

const capabilityEvidence: Record<string, CapabilityEvidence> = {
  "Backend Engineering": {
    projects: ["Blogify", "Reduc.to", "PagePulse", "ChatWat", "Sonica"],
    summary: "REST APIs, route boundaries, health endpoints, and server-rendered Django flows."
  },
  "Databases and Persistence": {
    projects: ["Blogify", "Reduc.to", "ChatWat", "Sonica"],
    summary: "PostgreSQL configuration, Prisma models, Django ORM models, and SQLite history storage."
  },
  "Authentication and Security": {
    projects: ["Blogify", "Reduc.to", "PagePulse", "Sonica"],
    summary: "JWT flows, secure cookies, owner scopes, SSRF-aware validation, and POST-only mutations."
  },
  "Background and Real-Time Systems": {
    projects: ["Blogify", "ChatWat"],
    summary: "Celery/Redis email verification support and Socket.io live chat events."
  },
  "Testing and Quality": {
    projects: ["Blogify", "Reduc.to", "PagePulse", "ChatWat", "Sonica"],
    summary: "pytest, Vitest, Supertest, Django TestCase, linting, and integration checks."
  },
  "Tooling and Deployment": {
    projects: ["Blogify", "Reduc.to", "PagePulse", "ChatWat", "Sonica"],
    summary: "Render, Vercel, Docker, Waitress, Gunicorn, WhiteNoise, and Cloudinary configuration."
  }
};

const icons = [ServerCog, Database, ShieldCheck, Radio, TestTube2, Wrench];

export function CapabilitiesSection() {
  return (
    <SectionPage id="capabilities" label="Engineering Capabilities">
      <h2 id="capabilities-title" className="mt-5 text-4xl font-bold tracking-tight">Engineering capabilities</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {futureCapabilityGroups.map((group, index) => {
          const Icon = icons[index] ?? KeyRound;
          const evidence = capabilityEvidence[group.title];
          return (
            <article key={group.title} className="rounded-[8px] border border-border bg-background/55 p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-blue text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{evidence.summary}</p>
                </div>
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Verified capabilities</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.capabilities.map((capability) => (
                    <li key={capability} className="rounded-md border border-border bg-paper px-2.5 py-1 text-sm">
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-[8px] border border-dashed border-border bg-paper p-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue">Demonstrated in</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{evidence.projects.join(" · ")}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionPage>
  );
}
