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

export type ResumeLink = {
  path: string;
  label: string;
  isPlaceholder?: boolean;
};

export type ContactDetails = {
  email?: string;
  emailIsPlaceholder?: boolean;
  socialLinks: SocialLink[];
  resumePath?: string;
  resume?: ResumeLink;
  notes?: string[];
};

export type SiteProfile = {
  name: string;
  role: string;
  headline: string;
  shortBiography: string;
  contact: ContactDetails;
  metadataUrl?: string;
  portfolioUrl?: string;
  location?: string;
  locationIsPlaceholder?: boolean;
  availabilityStatus?: string;
  availabilityIsPlaceholder?: boolean;
};

export type SiteMetadataConfig = {
  title: string;
  titleTemplate: string;
  description: string;
  author: string;
  creator: string;
  keywords: string[];
  portfolioUrl?: string;
  portfolioUrlIsVerified: boolean;
  openGraph: {
    title: string;
    description: string;
    siteName: string;
    url?: string;
    image?: {
      path: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  twitter: {
    card: "summary" | "summary_large_image";
    title: string;
    description: string;
    image?: string;
  };
};

export type PortfolioSection = {
  id: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
};

export type PortfolioExperience = {
  role: string;
  organization: string;
  durationLabel: string;
  context: string;
  summary: string;
  highlights: string[];
  technologies: string[];
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

export type PortfolioContentAction = {
  label: "Live Demo" | "GitHub Repository" | "API Documentation" | "Architecture Notes";
  href: string;
  kind: "live" | "repository" | "documentation" | "architecture";
};

export type PortfolioContentTestingEvidence = {
  framework: string;
  verifiedStatus: string;
  verifiedCount?: string;
};

export type PortfolioContentDeploymentEvidence = {
  liveUrl: string;
  repositoryUrl: string;
  apiUrl?: string;
  documentationUrl?: string;
  healthUrl?: string;
  ownerConfirmedNote: string;
  urlSource: "repository documentation" | "repository configuration" | "owner supplied";
  availabilityCheckStatus: string;
};

export type ProjectPortfolioContent = {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: "live";
  shortLabel: string;
  oneLine: string;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  architectureSummary: string;
  testingEvidence: PortfolioContentTestingEvidence;
  testingSummary?: string;
  deploymentEvidence: PortfolioContentDeploymentEvidence;
  deploymentNote: string;
  media?: ProjectMediaSet;
  technicalDecisions: string[];
  tradeoffs: string[];
  limitations: string[];
  actions: PortfolioContentAction[];
  requiresOwnerConfirmation: string[];
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

export type ProjectMediaKind = "application" | "api-documentation" | "dashboard" | "architecture" | "health" | "demo-video";

export type ProjectMediaAsset = {
  src: string;
  alt: string;
  caption: string;
  type: ProjectMediaKind;
  width?: number;
  height?: number;
};

export type ProjectMediaSet = {
  status: "approved" | "pending";
  primary?: ProjectMediaAsset;
  secondary?: ProjectMediaAsset[];
  externalDemoVideo?: string;
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
  profileUrl?: string;
  totalSolved?: string;
  easyCount?: string;
  mediumCount?: string;
  hardCount?: string;
  contestRating?: string;
  strongestTopics?: string[];
  lastVerifiedDate?: string;
  summary?: string;
  stats: ProjectMetric[];
  favoriteProblems: string[];
  patterns: string[];
  notes: string[];
};
