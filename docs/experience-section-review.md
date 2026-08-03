# Experience Section Review

## Files Created

- `components/sections/experience-section.tsx`
- `data/experience.ts`
- `docs/experience-section-review.md`

## Files Modified

- `app/page.tsx`
- `data/sections.ts`
- `types/portfolio.ts`
- `docs/phase-6-visual-review.md`
- `docs/phase-8-quality-review.md`
- `docs/phase-9-launch-readiness-review.md`

Note: `app/icon.png` was already untracked before this Experience task and is not part of the Experience section implementation.

## Typed Data Model

Added `PortfolioExperience` in `types/portfolio.ts` with:

- `role`
- `organization`
- `durationLabel`
- `context`
- `summary`
- `highlights`
- `technologies`

The visible content is stored in `data/experience.ts` and rendered by `components/sections/experience-section.tsx`.

## Final Visible Experience Copy

Role:

Software Development Intern

Organization:

Sitapur Shiksha Sansthan Group of Institutions

Duration:

3-month internship · 2026

Context:

Full-stack maintenance and modernization of a legacy ASP.NET MVC application

Summary:

Maintained and enhanced a production ASP.NET MVC admission-management portal while working across application, database, documentation, and deployment concerns.

Displayed bullets:

- Analyzed a legacy ASP.NET MVC codebase and traced Controller-Repository-SQL workflows to understand undocumented modules.
- Diagnosed and resolved production-impacting Student List issues caused by inconsistencies between application parameters and SQL stored procedures.
- Implemented searchable student records through coordinated updates to MVC controllers, repository classes, Razor views, and SQL Server stored procedures.
- Conducted architecture, database, security, and maintainability reviews, then produced technical documentation and a modernization roadmap for future developers.

Displayed technologies:

- C#
- ASP.NET MVC 5
- SQL Server
- Stored Procedures
- Razor Views
- IIS
- Git

## Section-Order Changes

The public portfolio now renders eight sections:

1. Home
2. Selected Work
3. Experience
4. Engineering Capabilities
5. Architecture Notes
6. About
7. Algorithm Notebook
8. Contact

`app/page.tsx` places `ExperienceSection` immediately after `SelectedWorkSection`.

## Navigation Changes

`data/sections.ts` now includes:

- `id`: `experience`
- `label`: `Experience`
- `icon`: `BriefcaseBusiness`

The existing right-side notebook tabs, active-section tracking, and command palette read from this shared section list, so Experience is included in each navigation surface.

## Responsive And Accessibility Behavior

- The section uses the existing `SectionPage` wrapper, preserving notebook styling, skip-link compatibility, scroll anchors, and section labeling.
- The entry is rendered as an `article`.
- The section heading is connected through `aria-labelledby`.
- The duration appears as readable text with a decorative calendar icon hidden from assistive technology.
- The technology tags are a semantic unordered list with an accessible label.
- The bullet list is limited to four items and uses decorative check icons hidden from assistive technology.
- The layout stacks naturally on narrow screens and uses a two-column bullet grid only from medium widths upward.

## Facts Intentionally Omitted

- Exact April 2026-July 2026 date range, because the approved public label is `3-month internship · 2026`.
- Detailed security vulnerability names or exploit descriptions.
- User counts, business metrics, revenue impact, performance percentages, or production ownership claims.
- A public organization link, because no verified organization URL was supplied.
- Full internship-report detail, secondary technologies, and implementation minutiae that would crowd the portfolio.
- Structured data changes, because exact dates and organization URL were not verified.

## Unresolved Exact Dates

The owner supplied April 2026-July 2026, but this can appear to span four calendar months. Until exact dates are confirmed, the public UI displays only:

3-month internship · 2026

## Verification Results

- `npm.cmd run lint`: passed
- `npm.cmd run build`: passed; Next.js static export completed and included `/icon.png`
- `git diff --check`: passed with Git line-ending warnings only

## Current Branch

`redesign/engineering-notebook`

## Git Status

```text
## redesign/engineering-notebook
 M app/page.tsx
 M data/sections.ts
 M docs/phase-6-visual-review.md
 M docs/phase-8-quality-review.md
 M docs/phase-9-launch-readiness-review.md
 M types/portfolio.ts
?? app/icon.png
?? components/sections/experience-section.tsx
?? data/experience.ts
```

## Deployment Status

Deployment remains paused. No deploy, commit, push, or merge was performed.
