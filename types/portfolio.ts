import type { LucideIcon } from "lucide-react";

export type ProjectStatus =
  | "planned"
  | "in-progress"
  | "completed"
  | "case-study"
  | "live"
  | "archived";

export type SocialLink = {
  label: string;
  href: string;
  platform?: "github" | "linkedin" | "leetcode" | "email" | "other";
  isPlaceholder?: boolean;
};

export type ContactDetails = {
  email?: string;
  socialLinks: SocialLink[];
  resumePath?: string;
  notes?: string[];
};

export type SiteProfile = {
  name: string;
  role: string;
  headline: string;
  shortBiography: string;
  contact: ContactDetails;
  metadataUrl?: string;
};

export type PortfolioSection = {
  id: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
};

export type ProjectLinkSet = {
  repo?: string;
  repository?: string;
  live?: string;
  api?: string;
  health?: string;
  documentation?: string;
  caseStudy?: string;
};

export type ProjectDeploymentEvidence = {
  ownerConfirmed: boolean;
  urlSource?: "repository-documentation" | "repository-configuration" | "owner-supplied" | "unresolved";
  healthCheckVerified: boolean;
  note?: string;
};

export type ProjectAction = {
  label: "Live Demo" | "GitHub Repository" | "API Documentation" | "Architecture / Case Study";
  priority: "primary" | "secondary" | "optional";
  href?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
  context?: string;
};

export type ProjectMedia = {
  hero?: string;
  screenshot?: string;
  alt?: string;
};

export type ArchitectureNode = {
  id: string;
  label: string;
  description?: string;
};

export type ArchitectureConnection = {
  from: string;
  to: string;
  label?: string;
};

export type ProjectArchitecture = {
  summary?: string;
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
  notes: string[];
};

export type PortfolioProject = {
  slug: string;
  number: number;
  name: string;
  shortLabel?: string;
  category?: string;
  status?: ProjectStatus;
  oneLine?: string;
  summary?: string;
  role?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  stack: string[];
  capabilities: string[];
  highlights: string[];
  challenges: string[];
  technicalDecisions: string[];
  tradeoffs: string[];
  lessons: string[];
  limitations: string[];
  futureImprovements: string[];
  metrics: ProjectMetric[];
  testing?: string;
  deployment?: string;
  deploymentEvidence?: ProjectDeploymentEvidence;
  links: ProjectLinkSet;
  actions?: ProjectAction[];
  media: ProjectMedia;
  architecture: ProjectArchitecture;
  accent?: string;
};

export type EngineeringCapabilityGroup = {
  title: string;
  description?: string;
  capabilities: string[];
  icon?: LucideIcon;
  isProvisional?: boolean;
};

export type ArchitectureNote = {
  title: string;
  summary?: string;
  body?: string;
  projectSlugs?: string[];
  tags: string[];
};

export type AlgorithmProfile = {
  summary?: string;
  stats: ProjectMetric[];
  favoriteProblems: string[];
  patterns: string[];
  notes: string[];
};
