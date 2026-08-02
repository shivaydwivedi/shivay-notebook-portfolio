import { Database, KeyRound, Radio, ServerCog, ShieldCheck, TestTube2, Wrench } from "lucide-react";
import { SectionPage } from "@/components/section-page";
import { futureCapabilityGroups } from "@/data/capabilities";

const capabilityProjects: Record<string, string[]> = {
  "Backend Engineering": ["Blogify", "Reduc.to", "PagePulse", "ChatWat", "Sonica"],
  "Databases and Persistence": ["Blogify", "Reduc.to", "ChatWat", "Sonica"],
  "Authentication and Security": ["Blogify", "Reduc.to", "PagePulse", "Sonica"],
  "Background and Real-Time Systems": ["Blogify", "ChatWat"],
  "Testing and Quality": ["Blogify", "Reduc.to", "PagePulse", "ChatWat", "Sonica"],
  "Tooling and Deployment": ["Blogify", "Reduc.to", "PagePulse", "ChatWat", "Sonica"]
};

const icons = [ServerCog, Database, ShieldCheck, Radio, TestTube2, Wrench];

export function CapabilitiesSection() {
  return (
    <SectionPage id="capabilities" label="Engineering Capabilities">
      <h2 id="capabilities-title" className="mt-5 text-4xl font-bold tracking-tight">Engineering capabilities</h2>
      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
        Capabilities are grouped by verified project evidence. This section avoids proficiency bars and unsupported experience levels.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {futureCapabilityGroups.map((group, index) => {
          const Icon = icons[index] ?? KeyRound;
          return (
            <article key={group.title} className="rounded-[8px] border border-border bg-background/55 p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-blue text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Verified in: {(capabilityProjects[group.title] ?? []).join(", ")}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.capabilities.map((capability) => (
                  <span key={capability} className="rounded-md border border-border bg-paper px-2.5 py-1 text-sm">
                    {capability}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionPage>
  );
}
