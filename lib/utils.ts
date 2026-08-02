import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteProfile, verifiedEmail, verifiedGithubLink, verifiedLeetcodeLink, verifiedLinkedinLink, verifiedResume } from "@/data/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: siteProfile.name,
  role: siteProfile.role,
  tagline: siteProfile.headline,
  email: verifiedEmail ?? "",
  github: verifiedGithubLink?.href ?? "",
  linkedin: verifiedLinkedinLink?.href ?? "",
  resume: verifiedResume?.path ?? "",
  leetcode: verifiedLeetcodeLink?.href ?? ""
};
