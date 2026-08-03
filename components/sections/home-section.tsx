import Image from "next/image";
import { ArrowDown, BookMarked, Code2, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteProfile, verifiedEmail, verifiedGithubLink, verifiedLeetcodeLink, verifiedLinkedinLink, verifiedResume } from "@/data/site";

export function HomeSection() {
  return (
    <section id="home" className="mx-auto min-h-[calc(100vh-76px)] max-w-6xl scroll-mt-24 pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[8px] border border-border bg-paper shadow-paper">
        <Image
          src="/images/engineering-notebook-hero.png"
          alt="Open engineering notebook with API sketches"
          width={1536}
          height={1024}
          priority
          sizes="100vw"
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
              <Sparkles className="size-4 text-blue" aria-hidden="true" /> Recruiter-ready engineering notebook
            </p>
            <h1 className="handwritten text-6xl font-bold leading-[0.95] tracking-normal md:text-8xl">
              Hi,
              <br />
              I&apos;m {siteProfile.name}
            </h1>
            <p className="type-caret mt-6 font-mono text-xl text-blue md:text-2xl">{siteProfile.role}</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{siteProfile.headline}</p>
            {siteProfile.availabilityStatus ? (
              <p className="mt-4 max-w-2xl rounded-[8px] border border-border bg-paper/75 px-4 py-3 text-sm leading-6 text-muted-foreground">
                {siteProfile.availabilityStatus}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#selected-work">
                  <BookMarked className="size-4" aria-hidden="true" /> View selected work
                </a>
              </Button>
              {verifiedResume ? (
                <Button asChild variant="outline">
                  <a href={verifiedResume.path} target="_blank" rel="noopener noreferrer">
                    <Download className="size-4" aria-hidden="true" /> {verifiedResume.label}
                  </a>
                </Button>
              ) : (
                <Button variant="outline" disabled>
                  <Download className="size-4" aria-hidden="true" /> Résumé coming soon
                </Button>
              )}
              {verifiedEmail ? (
                <Button asChild variant="outline">
                  <a href="#contact">
                    <Mail className="size-4" aria-hidden="true" /> Contact
                  </a>
                </Button>
              ) : null}
              {verifiedGithubLink ? (
                <Button asChild variant="outline">
                  <a href={verifiedGithubLink.href} target="_blank" rel="noopener noreferrer" aria-label="Open Shivay Dwivedi's GitHub profile">
                    <Github className="size-4" aria-hidden="true" /> GitHub
                  </a>
                </Button>
              ) : null}
              {verifiedLinkedinLink ? (
                <Button asChild variant="outline">
                  <a href={verifiedLinkedinLink.href} target="_blank" rel="noopener noreferrer" aria-label="Open Shivay Dwivedi's LinkedIn profile">
                    <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
                  </a>
                </Button>
              ) : null}
              {verifiedLeetcodeLink ? (
                <Button asChild variant="outline">
                  <a href={verifiedLeetcodeLink.href} target="_blank" rel="noopener noreferrer" aria-label="Open Shivay Dwivedi's LeetCode profile">
                    <Code2 className="size-4" aria-hidden="true" /> LeetCode
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
          <a href="#selected-work" className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground">
            Turn the page <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
