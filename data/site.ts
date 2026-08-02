import type { SiteProfile } from "@/types/portfolio";

export const siteProfile = {
  name: "Shivay Dwivedi",
  role: "Backend Developer | Python - Django - DRF",
  headline: "Building backend systems with Python and Django.",
  shortBiography:
    "I am a Computer Science undergraduate focused on backend engineering, APIs, authentication systems, and algorithmic problem solving.",
  metadataUrl: "https://shivay-dwivedi.dev", // TODO: Verify final owned domain before public deployment.
  portfolioUrl: "https://shivay-dwivedi.dev",
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

export const githubLink = siteProfile.contact.socialLinks.find((link) => link.platform === "github");
export const linkedinLink = siteProfile.contact.socialLinks.find((link) => link.platform === "linkedin");
export const leetcodeLink = siteProfile.contact.socialLinks.find((link) => link.platform === "leetcode");

export const verifiedEmail = siteProfile.contact.emailIsPlaceholder ? undefined : siteProfile.contact.email;
export const verifiedResume = siteProfile.contact.resume?.isPlaceholder ? undefined : siteProfile.contact.resume;
export const verifiedGithubLink = githubLink?.isPlaceholder ? undefined : githubLink;
export const verifiedLinkedinLink = linkedinLink?.isPlaceholder ? undefined : linkedinLink;
export const verifiedLeetcodeLink = leetcodeLink?.isPlaceholder ? undefined : leetcodeLink;
