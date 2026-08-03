import { BriefcaseBusiness, CalendarDays, CheckCircle2 } from "lucide-react";
import { SectionPage } from "@/components/section-page";
import { portfolioExperience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <SectionPage id="experience" label="Experience">
      <h2 id="experience-title" className="mt-5 text-4xl font-bold tracking-tight">Experience</h2>

      <div className="mt-6 grid gap-4">
        {portfolioExperience.map((experience) => (
          <article key={`${experience.role}-${experience.organization}`} className="rounded-[8px] border border-border bg-background/55 p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-blue text-white">
                    <BriefcaseBusiness className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-tight">{experience.role}</h3>
                    <p className="mt-1 text-base text-muted-foreground">{experience.organization}</p>
                  </div>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{experience.context}</p>
              </div>

              <p className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-paper px-3 py-2 text-sm text-muted-foreground">
                <CalendarDays className="size-4 text-blue" aria-hidden="true" />
                <span>{experience.durationLabel}</span>
              </p>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-muted-foreground">{experience.summary}</p>

            <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground md:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-border pt-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Technologies used</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Experience technologies">
                {experience.technologies.map((technology) => (
                  <li key={technology} className="rounded-md border border-border bg-paper px-2.5 py-1 text-sm">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}
