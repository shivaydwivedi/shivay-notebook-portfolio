import { BookOpen, Compass, ListChecks } from "lucide-react";
import { SectionPage } from "@/components/section-page";
import { siteProfile } from "@/data/site";

const aboutGroups = [
  {
    title: "Current technical focus",
    icon: Compass,
    body: "Backend APIs, authentication flows, persistence design, deployment configuration, and regression testing across Python/Django, Node/Fastify, Express, and real-time systems."
  },
  {
    title: "Working principles",
    icon: ListChecks,
    body: "Prefer explicit boundaries, behavior-focused tests, documented deployment assumptions, and visible limitations over unsupported polish claims."
  },
  {
    title: "Portfolio journey",
    icon: BookOpen,
    body: "This notebook now centers five verified, owner-confirmed deployed projects: Blogify, Reduc.to, PagePulse, ChatWat, and Sonica."
  }
];

export function AboutSection() {
  return (
    <SectionPage id="about" label="About">
      <h2 id="about-title" className="mt-5 text-4xl font-bold tracking-tight">Notes on the engineer</h2>
      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{siteProfile.shortBiography}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {aboutGroups.map((group) => (
          <article key={group.title} className="rounded-[8px] border border-border bg-background/55 p-5">
            <group.icon className="size-6 text-blue" aria-hidden="true" />
            <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-blue">{group.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{group.body}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}
