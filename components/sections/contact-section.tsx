import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionPage } from "@/components/section-page";
import { githubLink, linkedinLink, siteProfile } from "@/data/site";

const emailIsPlaceholder = !siteProfile.contact.email || siteProfile.contact.email === "shivay@example.com";
const resumeIsPlaceholder = Boolean(siteProfile.contact.resumePath);

export function ContactSection() {
  return (
    <SectionPage id="contact" label="Contact">
      <h2 id="contact-title" className="mt-5 text-4xl font-bold tracking-tight">Final page: write back</h2>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[8px] border border-dashed border-border bg-background/55 p-5">
          <Send className="size-6 text-blue" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-semibold">Contact details pending verification</h3>
          <p className="mt-3 leading-7 text-muted-foreground">
            A verified email address or external form service has not been approved yet. The placeholder address is intentionally not exposed as a mailto form.
          </p>
          <div className="mt-5 grid gap-3">
            <StatusRow icon={<Mail className="size-4" aria-hidden="true" />} label="Email" status={emailIsPlaceholder ? "Pending owner verification" : siteProfile.contact.email} />
            <StatusRow icon={<Download className="size-4" aria-hidden="true" />} label="Resume" status={resumeIsPlaceholder ? "Final resume pending verification" : "Unavailable"} />
          </div>
        </div>

        <aside className="rounded-[8px] border border-border bg-background/55 p-5">
          <h3 className="text-xl font-semibold">Profile links</h3>
          <div className="mt-5 grid gap-3">
            <ProfileAction
              icon={<Github className="size-4" aria-hidden="true" />}
              label="GitHub"
              href={githubLink?.href}
              isPlaceholder={githubLink?.isPlaceholder}
            />
            <ProfileAction
              icon={<Linkedin className="size-4" aria-hidden="true" />}
              label="LinkedIn"
              href={linkedinLink?.href}
              isPlaceholder={linkedinLink?.isPlaceholder}
            />
          </div>
          <div className="mt-8 rounded-[8px] border border-dashed border-border bg-paper p-4">
            <p className="text-sm leading-6 text-muted-foreground">
              Best-fit positioning remains backend roles, Python/Django work, API-heavy products, and teams that value documented systems.
            </p>
          </div>
        </aside>
      </div>
    </SectionPage>
  );
}

function StatusRow({ icon, label, status }: { icon: React.ReactNode; label: string; status?: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-border bg-paper px-3 py-2 text-sm">
      {icon}
      <span className="font-medium">{label}</span>
      <span className="ml-auto text-right text-muted-foreground">{status}</span>
    </div>
  );
}

function ProfileAction({
  icon,
  label,
  href,
  isPlaceholder
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  isPlaceholder?: boolean;
}) {
  if (!href || isPlaceholder) {
    return (
      <Button variant="outline" disabled className="justify-start">
        {icon}
        {label} pending
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" className="justify-start">
      <a href={href} target="_blank" rel="noreferrer">
        {icon}
        {label}
      </a>
    </Button>
  );
}
