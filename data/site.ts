import type { SiteProfile } from "@/types/portfolio";

export const siteProfile = {
  name: "Shivay Dwivedi",
  role: "Backend Developer | Python â€¢ Django â€¢ DRF",
  headline: "Building scalable backend systems with Python and Django.",
  shortBiography:
    "I am a Computer Science undergraduate passionate about backend engineering. I enjoy building APIs, authentication systems, scalable web applications, and solving algorithmic problems.",
  metadataUrl: "https://shivay-dwivedi.dev", // TODO: Verify final owned domain before public deployment.
  contact: {
    email: "shivay@example.com", // TODO: Replace with Shivay's verified contact email.
    resumePath: "/resume.pdf", // TODO: Replace the placeholder resume file with Shivay's final resume.
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
