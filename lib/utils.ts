import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { githubLink, leetcodeLink, linkedinLink, siteProfile } from "@/data/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: siteProfile.name,
  role: siteProfile.role,
  tagline: siteProfile.headline,
  email: siteProfile.contact.email ?? "",
  github: githubLink?.href ?? "",
  linkedin: linkedinLink?.href ?? "",
  resume: siteProfile.contact.resumePath ?? "",
  leetcode: leetcodeLink?.href ?? ""
};
