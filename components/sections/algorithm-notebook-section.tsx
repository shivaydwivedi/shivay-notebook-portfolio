import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionPage } from "@/components/section-page";
import { futureAlgorithmProfile } from "@/data/notes";
import { verifiedLeetcodeLink } from "@/data/site";

const practiceFocus = [
  "Backend interview practice centered on data structures, APIs, and system reasoning.",
  "Notes emphasize problem patterns, tradeoffs, and clear implementation traces."
];

export function AlgorithmNotebookSection() {
  const verifiedLeetCodeHref = futureAlgorithmProfile.profileUrl ?? verifiedLeetcodeLink?.href;

  return (
    <SectionPage id="algorithm-notebook" label="Algorithm Notebook">
      <h2 id="algorithm-notebook-title" className="mt-5 text-4xl font-bold tracking-tight">Algorithm notebook</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-[8px] border border-border bg-background/55 p-5">
          <Code2 className="size-6 text-blue" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-semibold">Practice focus</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
            {practiceFocus.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {verifiedLeetCodeHref ? (
          <article className="rounded-[8px] border border-border bg-background/55 p-5">
            <div className="overflow-hidden rounded-[8px] border border-border bg-neutral-950 shadow-sm">
              <Image
                src="/images/profile/leetcode-profile-preview.png"
                alt="Screenshot preview of Shivay Dwivedi's LeetCode profile"
                width={1600}
                height={575}
                className="h-auto w-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <Button asChild variant="outline" className="mt-5 w-full sm:w-auto">
              <a href={verifiedLeetCodeHref} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" aria-hidden="true" /> Check my LeetCode profile
              </a>
            </Button>
          </article>
        ) : null}
      </div>
    </SectionPage>
  );
}
