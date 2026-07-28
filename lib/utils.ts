import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Shivay Dwivedi",
  role: "Backend Developer | Python • Django • DRF",
  tagline: "Building scalable backend systems with Python and Django.",
  email: "shivay@example.com",
  github: "https://github.com/shivaydwivedi",
  linkedin: "https://www.linkedin.com/in/shivaydwivedi",
  resume: "/resume.pdf",
  leetcode: "https://leetcode.com/"
};
