import type { SiteMetadataConfig, SiteProfile } from "@/types/portfolio";

export const siteProfile = {
  name: "Shivay Dwivedi",
  role: "Backend Developer | Python - Django - DRF",
  headline: "Building backend systems with Python and Django.",
  shortBiography:
    "I am a Computer Science undergraduate focused on backend engineering, APIs, authentication systems, and algorithmic problem solving.",
  contact: {
    email: "shivay@example.com", // TODO: Replace with Shivay's verified contact email.
    emailIsPlaceholder: true,
    resumePath: "/resume.pdf", // TODO: Replace the placeholder resume file with Shivay's final resume.
    resume: {
      path: "/resume.pdf",
      label: "Resume",
      isPlaceholder: true
    },
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/shivaydwivedi",
        platform: "github",
        isPlaceholder: true
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/shivaydwivedi",
        platform: "linkedin",
        isPlaceholder: true
      },
      {
        label: "LeetCode",
        href: "https://leetcode.com/",
        platform: "leetcode",
        isPlaceholder: true
      }
    ]
  }
} satisfies SiteProfile;

export const siteMetadata: SiteMetadataConfig = {
  title: "Shivay Dwivedi - Backend Engineer",
  titleTemplate: "%s | Shivay Dwivedi",
  description:
    "Backend engineer portfolio for Shivay Dwivedi, focused on Python, Django, Node.js, APIs, database-backed systems, and five deployed projects.",
  author: siteProfile.name,
  creator: siteProfile.name,
  keywords: [
    "Shivay Dwivedi",
    "Backend Engineer",
    "Backend Developer",
    "Python",
    "Django",
    "Django REST Framework",
    "Node.js",
    "APIs",
    "Database-backed systems",
    "Portfolio"
  ],
  portfolioUrl: undefined,
  portfolioUrlIsVerified: false,
  openGraph: {
    title: "Shivay Dwivedi - Backend Engineer",
    description:
      "Python, Django, Node.js, APIs, database-backed systems, and five deployed projects in an engineering notebook portfolio.",
    siteName: "Shivay Dwivedi Portfolio",
    url: undefined,
    image: undefined
  },
  twitter: {
    card: "summary",
    title: "Shivay Dwivedi - Backend Engineer",
    description:
      "Python, Django, Node.js, APIs, database-backed systems, and five deployed projects in an engineering notebook portfolio.",
    image: undefined
  }
};

export const githubLink = siteProfile.contact.socialLinks.find((link) => link.platform === "github");
export const linkedinLink = siteProfile.contact.socialLinks.find((link) => link.platform === "linkedin");
export const leetcodeLink = siteProfile.contact.socialLinks.find((link) => link.platform === "leetcode");

export const verifiedEmail = siteProfile.contact.emailIsPlaceholder ? undefined : siteProfile.contact.email;
export const verifiedResume = siteProfile.contact.resume?.isPlaceholder ? undefined : siteProfile.contact.resume;
export const verifiedGithubLink = githubLink?.isPlaceholder ? undefined : githubLink;
export const verifiedLinkedinLink = linkedinLink?.isPlaceholder ? undefined : linkedinLink;
export const verifiedLeetcodeLink = leetcodeLink?.isPlaceholder ? undefined : leetcodeLink;
