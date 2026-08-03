import { projectPortfolioContent } from "@/data/project-content";
import { siteMetadata, siteProfile, verifiedGithubLink, verifiedLeetcodeLink, verifiedLinkedinLink } from "@/data/site";

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const sameAs = [verifiedGithubLink?.href, verifiedLinkedinLink?.href, verifiedLeetcodeLink?.href].filter(Boolean);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    jobTitle: "Backend Engineer",
    description: siteProfile.shortBiography,
    knowsAbout: ["Python", "Django", "Node.js", "APIs", "Database-backed systems"],
    ...(sameAs.length ? { sameAs } : {})
  };

  const projectList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected deployed projects",
    itemListElement: projectPortfolioContent.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.oneLine,
        url: project.deploymentEvidence.liveUrl,
        codeRepository: project.deploymentEvidence.repositoryUrl,
        creator: {
          "@type": "Person",
          name: siteProfile.name
        }
      }
    }))
  };

  const website = siteMetadata.portfolioUrl
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteMetadata.openGraph.siteName,
        url: siteMetadata.portfolioUrl,
        author: {
          "@type": "Person",
          name: siteProfile.name
        }
      }
    : undefined;

  const jsonLd = website ? [person, website, projectList] : [person, projectList];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
    />
  );
}
