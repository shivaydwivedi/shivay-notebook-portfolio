import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowDown, BookMarked, Download, Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionPage } from "@/components/section-page";
import { ContactForm } from "@/components/contact-form";
import { LeetCodeHeatmap } from "@/components/leetcode-heatmap";
import { ProjectNotebook } from "@/components/project-notebook";
import {
  aboutNotes,
  algorithms,
  blogEntries,
  certificates,
  favoriteProblems,
  leetcodeStats,
  skillGroups,
  systemDesignNotes,
  timeline
} from "@/data/portfolio";
import { siteConfig } from "@/lib/utils";

export default function Home() {
  return (
    <main className="px-3 pb-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SystemDesign />
      <LeetCode />
      <Blog />
      <Timeline />
      <Certificates />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section id="opening" className="mx-auto min-h-[calc(100vh-76px)] max-w-6xl scroll-mt-24 pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[8px] border border-border bg-paper shadow-paper">
        <Image
          src="/images/engineering-notebook-hero.png"
          alt="Open engineering notebook with API sketches"
          width={1536}
          height={1024}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-28 dark:opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/92 to-paper/62" aria-hidden="true" />
        <div className="relative grid min-h-[76vh] content-between p-5 md:p-10">
          <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>Vol. 01 / Backend Systems</span>
            <span className="hidden sm:inline">Ctrl+K opens search</span>
          </div>
          <div className="max-w-3xl py-12">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-border bg-paper/80 px-3 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-blue" /> Recruiter-ready engineering notebook
            </p>
            <h1 className="handwritten text-6xl font-bold leading-[0.95] tracking-normal md:text-8xl">
              Hi,
              <br />
              I&apos;m Shivay Dwivedi
            </h1>
            <p className="type-caret mt-6 font-mono text-xl text-blue md:text-2xl">Backend Developer | Python • Django • DRF</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{siteConfig.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">
                  <BookMarked className="size-4" /> View Projects
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.resume}>
                  <Download className="size-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">
                  <Mail className="size-4" /> Contact Me
                </a>
              </Button>
            </div>
          </div>
          <a href="#about" className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground">
            Turn the page <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionPage id="about" label="About">
      <h2 id="about-title" className="mt-5 text-4xl font-bold tracking-tight">Notes on the engineer</h2>
      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
        I am a Computer Science undergraduate passionate about backend engineering. I enjoy building APIs, authentication systems,
        scalable web applications, and solving algorithmic problems.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {aboutNotes.map((note) => (
          <article key={note.title} className="rounded-[8px] border border-border bg-background/55 p-5">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-blue">{note.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{note.body}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function Skills() {
  return (
    <SectionPage id="skills" label="Skills">
      <h2 id="skills-title" className="mt-5 text-4xl font-bold tracking-tight">Study notes by stack</h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-[8px] border border-border bg-background/55 p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-md bg-blue text-white">
                <group.icon className="size-5" />
              </span>
              <h3 className="text-xl font-semibold">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-paper px-2.5 py-1 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function Projects() {
  return (
    <SectionPage id="projects" label="Projects">
      <h2 id="projects-title" className="mt-5 text-4xl font-bold tracking-tight">Project notebook spreads</h2>
      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
        Each project opens like its own engineering page: problem, solution, architecture, features, challenges, and lessons learned.
      </p>
      <ProjectNotebook />
    </SectionPage>
  );
}

function SystemDesign() {
  return (
    <SectionPage id="system-design" label="System Design">
      <h2 id="system-design-title" className="mt-5 text-4xl font-bold tracking-tight">System design margins</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {systemDesignNotes.map((note) => (
          <article key={note.title} className="rounded-[8px] border border-border bg-background/55 p-5">
            <note.icon className="size-6 text-blue" />
            <h3 className="mt-4 text-xl font-semibold">{note.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{note.body}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function LeetCode() {
  return (
    <SectionPage id="leetcode" label="LeetCode">
      <h2 id="leetcode-title" className="mt-5 text-4xl font-bold tracking-tight">Coding practice log</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {leetcodeStats.map((stat) => (
          <article key={stat.label} className="rounded-[8px] border border-border bg-background/55 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
            <strong className="mt-3 block text-3xl">{stat.value}</strong>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{stat.note}</p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <LeetCodeHeatmap />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <ListNote title="Favorite problems" items={favoriteProblems} />
        <ListNote title="Algorithms learned" items={algorithms} />
      </div>
    </SectionPage>
  );
}

function Blog() {
  return (
    <SectionPage id="blog" label="Blog">
      <h2 id="blog-title" className="mt-5 text-4xl font-bold tracking-tight">Developer notebook entries</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogEntries.map((entry) => (
          <article key={entry.title} className="rounded-[8px] border border-border bg-background/55 p-5 transition hover:-translate-y-0.5 hover:shadow-tab">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue">{entry.topic}</p>
            <h3 className="mt-4 text-xl font-semibold leading-snug">{entry.title}</h3>
            <p className="mt-5 text-sm text-muted-foreground">{entry.read} read</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function Timeline() {
  return (
    <SectionPage id="timeline" label="Timeline">
      <h2 id="timeline-title" className="mt-5 text-4xl font-bold tracking-tight">Timeline ledger</h2>
      <div className="mt-8 grid gap-4">
        {timeline.map((item, index) => (
          <article key={item.label} className="grid gap-4 rounded-[8px] border border-border bg-background/55 p-5 md:grid-cols-[auto_1fr]">
            <span className="grid size-12 place-items-center rounded-md bg-blue text-white">
              <item.icon className="size-5" />
            </span>
            <div>
              <p className="font-mono text-xs text-muted-foreground">Entry {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.label}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function Certificates() {
  return (
    <SectionPage id="certificates" label="Certificates">
      <h2 id="certificates-title" className="mt-5 text-4xl font-bold tracking-tight">Notebook folder</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="rounded-[8px] border border-border bg-background/55 p-5">
            <div className="aspect-[4/3] rounded-md border border-dashed border-border bg-paper-grid bg-[length:20px_20px] p-4">
              <div className="h-full rounded-md border border-border bg-paper p-4 shadow-tab">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue">Certificate</p>
                <h3 className="mt-6 text-xl font-semibold">{certificate.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{certificate.status}</p>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-4 w-full">
              <a href={certificate.file}>Open certificate</a>
            </Button>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function Contact() {
  return (
    <SectionPage id="contact" label="Contact">
      <h2 id="contact-title" className="mt-5 text-4xl font-bold tracking-tight">Final page: write back</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <ContactForm />
        <aside className="rounded-[8px] border border-border bg-background/55 p-5">
          <h3 className="text-xl font-semibold">Quick links</h3>
          <div className="mt-5 grid gap-3">
            <ContactLink href={siteConfig.github} icon={<Github className="size-4" />} label="GitHub" />
            <ContactLink href={siteConfig.linkedin} icon={<Linkedin className="size-4" />} label="LinkedIn" />
            <ContactLink href={`mailto:${siteConfig.email}`} icon={<Mail className="size-4" />} label={siteConfig.email} />
            <ContactLink href={siteConfig.resume} icon={<Download className="size-4" />} label="Resume" />
          </div>
          <div className="mt-8 rounded-[8px] border border-dashed border-border bg-paper p-4">
            <Send className="size-5 text-blue" />
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Best fit: backend roles, Python/Django internships, API-heavy products, and teams that value documentation.
            </p>
          </div>
        </aside>
      </div>
    </SectionPage>
  );
}

function ListNote({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-[8px] border border-border bg-background/55 p-5">
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-blue">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1.5 rounded-full bg-blue" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ContactLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a className="flex items-center gap-3 rounded-md border border-border bg-paper px-3 py-2 text-sm hover:bg-accent" href={href}>
      {icon}
      <span>{label}</span>
    </a>
  );
}
