import type { PortfolioExperience } from "@/types/portfolio";

export const portfolioExperience = [
  {
    role: "Software Development Intern",
    organization: "Sitapur Shiksha Sansthan Group of Institutions",
    durationLabel: "4-month internship · 2026",
    context: "Full-stack maintenance and modernization of a legacy ASP.NET MVC application",
    summary:
      "Maintained and enhanced a production ASP.NET MVC admission-management portal while working across application, database, documentation, and deployment concerns.",
    highlights: [
      "Analyzed a legacy ASP.NET MVC codebase and traced Controller-Repository-SQL workflows to understand undocumented modules.",
      "Diagnosed and resolved production-impacting Student List issues caused by inconsistencies between application parameters and SQL stored procedures.",
      "Implemented searchable student records through coordinated updates to MVC controllers, repository classes, Razor views, and SQL Server stored procedures.",
      "Conducted architecture, database, security, and maintainability reviews, then produced technical documentation and a modernization roadmap for future developers."
    ],
    technologies: ["C#", "ASP.NET MVC 5", "SQL Server", "Stored Procedures", "Razor Views", "IIS", "Git"]
  }
] satisfies PortfolioExperience[];
