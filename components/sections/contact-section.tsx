"use client";

import type { ReactNode } from "react";
import { Code2, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionPage } from "@/components/section-page";
import { siteProfile, verifiedEmail, verifiedGithubLink, verifiedLeetcodeLink, verifiedLinkedinLink, verifiedResume } from "@/data/site";

export function ContactSection() {
  return (
    <SectionPage id="contact" label="Contact">
      <h2 id="contact-title" className="mt-5 text-4xl font-bold tracking-tight">Final page: write back</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        {verifiedEmail ? <EmailForm email={verifiedEmail} /> : <ContactOverview />}

        <aside className="rounded-[8px] border border-border bg-background/55 p-5">
          <h3 className="text-xl font-semibold">Profile links</h3>
          <div className="mt-5 grid gap-3">
            <ProfileAction icon={<Github className="size-4" aria-hidden="true" />} label="GitHub" href={verifiedGithubLink?.href} />
            <ProfileAction icon={<Linkedin className="size-4" aria-hidden="true" />} label="LinkedIn" href={verifiedLinkedinLink?.href} />
            <ProfileAction icon={<Code2 className="size-4" aria-hidden="true" />} label="LeetCode" href={verifiedLeetcodeLink?.href} />
            <ProfileAction icon={<Download className="size-4" aria-hidden="true" />} label={verifiedResume?.label ?? "Résumé"} href={verifiedResume?.path} />
          </div>
        </aside>
      </div>
    </SectionPage>
  );
}

function EmailForm({ email }: { email: string }) {
  return (
    <form
      className="grid gap-4 rounded-[8px] border border-border bg-background/55 p-5"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") || "");
        const sender = String(data.get("sender") || "");
        const subject = encodeURIComponent(String(data.get("subject") || "Portfolio contact"));
        const message = String(data.get("message") || "");
        const body = encodeURIComponent(`Name: ${name}\nSender email: ${sender}\n\n${message}`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      }}
    >
      <div>
        <Send className="size-6 text-blue" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold">Send a note</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Submitting opens your email client with the message prefilled.</p>
      </div>
      <label className="grid gap-2 text-sm font-medium" htmlFor="contact-name">
        Name
        <input id="contact-name" className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="name" autoComplete="name" required />
      </label>
      <label className="grid gap-2 text-sm font-medium" htmlFor="contact-sender">
        Your email
        <input id="contact-sender" className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="sender" type="email" autoComplete="email" required />
      </label>
      <label className="grid gap-2 text-sm font-medium" htmlFor="contact-subject">
        Subject
        <input id="contact-subject" className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="subject" autoComplete="off" required />
      </label>
      <label className="grid gap-2 text-sm font-medium" htmlFor="contact-message">
        Message
        <textarea id="contact-message" className="min-h-32 rounded-md border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-ring" name="message" autoComplete="off" required />
      </label>
      <Button type="submit" className="w-fit">
        <Mail className="size-4" aria-hidden="true" /> Open email client
      </Button>
    </form>
  );
}

function ContactOverview() {
  return (
    <div className="rounded-[8px] border border-border bg-background/55 p-5">
      <Send className="size-6 text-blue" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-semibold">{siteProfile.name}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{siteProfile.role}</p>
      <p className="mt-3 leading-7 text-muted-foreground">
        Selected work, architecture notes, and live project links are available above for review.
      </p>
    </div>
  );
}

function ProfileAction({ icon, label, href }: { icon: ReactNode; label: string; href?: string }) {
  if (!href) {
    if (label !== "Résumé") return null;

    return (
      <Button variant="outline" disabled className="justify-start">
        {icon}
        Résumé coming soon
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" className="justify-start">
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open Shivay Dwivedi's ${label} profile`}>
        {icon}
        {label}
      </a>
    </Button>
  );
}
