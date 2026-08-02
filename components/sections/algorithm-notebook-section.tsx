import { Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionPage } from "@/components/section-page";
import { futureAlgorithmProfile } from "@/data/notes";
import { verifiedLeetcodeLink } from "@/data/site";

const practiceFocus = [
  "Algorithm notes and problem-solving history will be added after profile verification.",
  "No solved-count, rating, streak, or heatmap data is currently published from unverified sources."
];

export function AlgorithmNotebookSection() {
  const hasVerifiedStats = futureAlgorithmProfile.stats.length > 0;
  const hasVerifiedPatterns = futureAlgorithmProfile.patterns.length > 0;
  const verifiedLeetCodeHref = futureAlgorithmProfile.profileUrl ?? verifiedLeetcodeLink?.href;
  const hasVerifiedProfileFields = Boolean(
    futureAlgorithmProfile.totalSolved ||
      futureAlgorithmProfile.easyCount ||
      futureAlgorithmProfile.mediumCount ||
      futureAlgorithmProfile.hardCount ||
      futureAlgorithmProfile.contestRating ||
      futureAlgorithmProfile.strongestTopics?.length ||
      futureAlgorithmProfile.lastVerifiedDate
  );

  return (
    <SectionPage id="algorithm-notebook" label="Algorithm Notebook">
      <h2 id="algorithm-notebook-title" className="mt-5 text-4xl font-bold tracking-tight">Algorithm notebook</h2>
      <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
        Coding-practice data is intentionally restrained until Shivay&apos;s profile statistics and topic history are verified.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
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

        <article className="rounded-[8px] border border-dashed border-border bg-background/55 p-5">
          <h3 className="text-xl font-semibold">Verified statistics</h3>
          {hasVerifiedStats || hasVerifiedPatterns || hasVerifiedProfileFields ? (
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {futureAlgorithmProfile.totalSolved ? (
                <p>
                  <strong>Total solved:</strong> {futureAlgorithmProfile.totalSolved}
                </p>
              ) : null}
              {futureAlgorithmProfile.easyCount ? (
                <p>
                  <strong>Easy:</strong> {futureAlgorithmProfile.easyCount}
                </p>
              ) : null}
              {futureAlgorithmProfile.mediumCount ? (
                <p>
                  <strong>Medium:</strong> {futureAlgorithmProfile.mediumCount}
                </p>
              ) : null}
              {futureAlgorithmProfile.hardCount ? (
                <p>
                  <strong>Hard:</strong> {futureAlgorithmProfile.hardCount}
                </p>
              ) : null}
              {futureAlgorithmProfile.contestRating ? (
                <p>
                  <strong>Contest rating:</strong> {futureAlgorithmProfile.contestRating}
                </p>
              ) : null}
              {futureAlgorithmProfile.stats.map((stat) => (
                <p key={stat.label}>
                  <strong>{stat.label}:</strong> {stat.value}
                </p>
              ))}
              {futureAlgorithmProfile.strongestTopics?.length ? <p>Strongest topics: {futureAlgorithmProfile.strongestTopics.join(", ")}</p> : null}
              {futureAlgorithmProfile.patterns.length ? <p>Patterns: {futureAlgorithmProfile.patterns.join(", ")}</p> : null}
              {futureAlgorithmProfile.lastVerifiedDate ? <p>Last verified: {futureAlgorithmProfile.lastVerifiedDate}</p> : null}
            </div>
          ) : (
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Statistics will be added after verification. The previous synthetic heatmap and placeholder counts are no longer visible.
            </p>
          )}

          <div className="mt-5">
            {verifiedLeetCodeHref ? (
              <Button asChild variant="outline">
                <a href={verifiedLeetCodeHref} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" aria-hidden="true" /> LeetCode profile
                </a>
              </Button>
            ) : (
              <Button variant="outline" disabled>
                <ExternalLink className="size-4" aria-hidden="true" /> LeetCode profile pending
              </Button>
            )}
          </div>
        </article>
      </div>
    </SectionPage>
  );
}
