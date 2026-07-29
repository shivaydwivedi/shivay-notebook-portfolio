# Shivay Notebook Portfolio Redesign Audit

## Executive summary

The repository is a compact single-page Next.js portfolio that already has a strong notebook identity: paper textures, page cards, right-side section tabs, command-palette navigation, handwritten hero type, project spreads, and static notebook-style content blocks. The redesign should preserve this identity and evolve it into a more credible engineering notebook rather than replacing it with a generic developer portfolio shell.

The current implementation is technically healthy for a small static portfolio. `npm.cmd run lint` passes with no warnings or errors, and `npm.cmd run build` completes a static export. The major risks are not build health; they are content truthfulness, placeholder links/files, fake/synthetic data, accessibility polish, mobile ergonomics, and the fact that most section composition lives in one large `app/page.tsx` file.

The five real projects planned for later phases are Blogify, Reduc.to, PagePulse, ChatWat, and Sonica. Current project content does not yet match that target set: only Blogify-like and URL-shortener-like entries exist, and the rest are placeholder or generic portfolio examples.

## Repository architecture

- Framework: Next.js App Router.
- Installed framework version: `next@15.5.20` according to `npm.cmd list`; `package.json` declares `^15.1.6`.
- React version: `react@19.2.7` and `react-dom@19.2.7`; `package.json` declares `^19.0.0`.
- Language: TypeScript with `strict: true`.
- Package manager: npm, with `package-lock.json` present.
- Build tooling: Next.js production build plus static export via `output: "export"` in `next.config.mjs`.
- Styling: Tailwind CSS 3.4.x, PostCSS, CSS custom properties in `app/globals.css`, `tailwindcss-animate`, and utility merging via `clsx` + `tailwind-merge`.
- Routing: App Router single route at `/`, rendered by `app/page.tsx`; no nested routes were found.
- Static output: `out/` exists and is ignored by Git.
- Build/cache output: `.next/` exists and is ignored by Git.
- Dependencies: `node_modules/` exists and is ignored by Git.

Application entry points:

- `app/layout.tsx`: root metadata, theme provider, scroll progress, cursor ink, notebook navigation, page children.
- `app/page.tsx`: all visible page sections and local helper components such as `Hero`, `About`, `Skills`, `Projects`, `SystemDesign`, `LeetCode`, `Blog`, `Timeline`, `Certificates`, `Contact`, `ListNote`, and `ContactLink`.
- `app/globals.css`: global CSS variables, dark theme variables, Tailwind base utilities, handwritten font helper, and animated caret.
- `data/portfolio.ts`: central static data source for navigation, profile notes, skills, projects, system-design notes, LeetCode stats, blog entries, timeline, and certificates.
- `lib/utils.ts`: `cn` helper and `siteConfig`.

## Current section map

The page renders sections in this order:

1. Hero: `id="opening"` in `app/page.tsx`; first viewport notebook cover/spread with hero image, name, role, tagline, resume/project/contact CTAs, and "Turn the page" link.
2. About: `id="about"`; intro paragraph plus mapped `aboutNotes`.
3. Skills: `id="skills"`; mapped `skillGroups`.
4. Projects: `id="projects"`; section copy plus `ProjectNotebook`.
5. System Design: `id="system-design"`; mapped `systemDesignNotes`.
6. Coding Practice / LeetCode: `id="leetcode"`; mapped stats, synthetic `LeetCodeHeatmap`, favorite problems, and algorithms.
7. Blog: `id="blog"`; mapped `blogEntries`.
8. Timeline: `id="timeline"`; mapped `timeline`.
9. Certificates: `id="certificates"`; mapped `certificates`.
10. Contact: `id="contact"`; `ContactForm` plus quick links.

All sections except Hero use `SectionPage`, which creates the paper card, grid background, page label, and scroll anchor behavior.

## Component map

- `NotebookNav`: sticky top nav, desktop-only right-side icon tabs, active-section tracking via `IntersectionObserver`, `Ctrl/Cmd+K` command palette, search filtering, and theme toggle.
- `CommandPalette`: local component inside `NotebookNav`; modal-like section search with anchor links.
- `SectionPage`: reusable notebook page wrapper for section cards.
- `ProjectNotebook`: interactive client component that selects a project from the static `projects` array and animates the open project sheet with Framer Motion.
- `ArchitectureDiagram`: local component inside `ProjectNotebook`; generic Client -> API -> Database schematic.
- `NoteBlock`: local component inside `ProjectNotebook`; repeated label/body display.
- `LeetCodeHeatmap`: synthetic 22-week practice heatmap generated from deterministic arithmetic.
- `ContactForm`: client-side form that redirects to a hardcoded `mailto:` address on submit.
- `ScrollProgress`: Framer Motion scroll progress bar.
- `CursorInk`: decorative pointer-following ink circle on medium screens and up.
- `ThemeProvider`: `next-themes` wrapper using class-based theming and system default.
- `ThemeToggle`: icon button that toggles resolved light/dark theme.
- `Button`: shadcn-style button primitive using Radix Slot and class variance authority.

No clearly unused source components were found. All component files are imported by either `app/layout.tsx`, `app/page.tsx`, or another component.

## Styling and design-system analysis

The visual system is notebook-specific and worth preserving:

- Paper color tokens: `--background`, `--paper`, `--ink`, `--muted`, `--border`.
- Notebook-blue accent token: `--notebook-blue`.
- Graph-paper/grid texture: `bg-paper-grid`.
- Subtle paper fiber texture: `bg-paper-fiber`.
- Section wrapper: rounded 8px paper cards with border and shadow.
- Typography mix: system sans, monospace labels, and handwritten hero type via local font stacks.
- Motion: page/project transitions and scroll progress via Framer Motion.
- Icons: Lucide React throughout.

Breakpoints are Tailwind defaults. The implementation primarily uses:

- `sm`: reveal secondary text in the top nav and create two-column feature/screenshot grid inside project pages.
- `md`: larger hero type, section padding, right-side nav visibility, certificate/project split line, multi-column grids.
- `lg`: three-column skills/blog grids, project notebook two-column layout, contact form/sidebar split.

Dark mode is implemented with a `.dark` class and `next-themes`. CSS custom properties are swapped in `app/globals.css`, and Tailwind consumes those variables through `tailwind.config.ts`.

Potential design-system issues:

- `font-inter` and `font-mono` are CSS variables but no actual `next/font` or imported webfont setup exists. The app falls back to system fonts.
- Some display text appears to contain mojibake/encoding artifacts in local command output, especially the role separator and arrow character in project diagrams. These should be verified visually before shipping.
- The page-card pattern is consistent, but a later redesign should avoid overusing identical bordered cards inside bordered page wrappers where hierarchy becomes visually repetitive.

## Content and placeholder inventory

Confirmed placeholders or unverified values:

- `lib/utils.ts` has `email: "shivay@example.com"`.
- `ContactForm` independently hardcodes `mailto:shivay@example.com` instead of using `siteConfig.email`.
- Project GitHub links are all `https://github.com/`.
- Project demo links are all `https://example.com`.
- Certificate records are explicitly marked `"PDF placeholder"`.
- `public/resume.pdf` is only 672 bytes and should be treated as a placeholder until Shivay confirms it is final.
- Certificate PDFs are 646-654 bytes and should be treated as placeholders until confirmed.
- `LeetCodeHeatmap` is synthetic.
- README states the LeetCode stats are static and the heatmap is synthetic.
- Blog cards are static titles with no destination URLs or article content.
- Timeline entries are broad and unverified.
- SEO `metadataBase` is `https://shivay-dwivedi.dev`, which should not be treated as a real deployment URL without confirmation.
- Hero eyebrow says "Recruiter-ready engineering notebook"; whether that is product direction or placeholder copy needs Shivay approval.
- Hero helper text says "Ctrl+K opens search"; the implementation also supports Cmd+K, but visible copy only mentions Ctrl+K.

Current project placeholders or mismatches against the future project list:

- Blogify API exists but needs to be reconciled with the real Blogify project facts.
- URL Shortener likely maps to Reduc.to but is named generically and contains unverified details.
- Real-Time Chat Application may map to ChatWat, but that is an inference and should not be used as fact until Shivay provides details.
- Hospital Management System, Notes App, Inventory Management API, and Authentication System do not match the requested future project list.
- PagePulse and Sonica are not represented.

Duplicated or drift-prone content:

- Role text appears in both `lib/utils.ts` and `app/page.tsx`.
- Email appears in both `lib/utils.ts` and `components/contact-form.tsx`.
- Navigation labels in `data/portfolio.ts` must stay aligned with section ids in `app/page.tsx`.
- Section headings are embedded in `app/page.tsx`, while nav labels live in `data/portfolio.ts`.

## Current project-data architecture

Project content is currently a flat `projects` array in `data/portfolio.ts`. Each record contains:

- `title`
- `problem`
- `solution`
- `stack`
- `features`
- `challenges`
- `lessons`
- `github`
- `demo`
- `accent`

`ProjectNotebook` assumes every project has the same fields and renders every entry with the same two-page layout. The visual architecture diagram is generic and generated from project title plus accent color, not from project-specific architecture data.

Recommended reusable structure for Blogify, Reduc.to, PagePulse, ChatWat, and Sonica:

```ts
type PortfolioProject = {
  slug: "blogify" | "reduc-to" | "pagepulse" | "chatwat" | "sonica";
  name: string;
  shortLabel: string;
  status: "live" | "case-study" | "in-progress" | "archived";
  oneLine: string;
  role: string;
  problem: string;
  outcome: string;
  stack: string[];
  capabilities: string[];
  links: {
    repo?: string;
    live?: string;
    caseStudy?: string;
  };
  notebook: {
    architectureNotes: string[];
    tradeoffs: string[];
    lessons: string[];
    nextSteps?: string[];
  };
  media: {
    hero?: string;
    screenshot?: string;
    alt?: string;
  };
  accent: string;
};
```

Use this as a structure, not as content. The values should be populated only from Shivay-provided project facts or verified repository facts.

## Navigation analysis

The right-side icon navigation is powered by `navItems` in `data/portfolio.ts` and `NotebookNav` in `components/notebook-nav.tsx`.

How it works:

- `navItems` defines each section `id`, visible `label`, and Lucide icon.
- The top logo links to `#opening`.
- The desktop right rail is a fixed `<nav>` at `right-0 top-28`.
- It is hidden below the `md` breakpoint and shown as a vertical flex column on medium screens and up.
- Each tab is an anchor link to `#${item.id}`.
- Tabs start as 48px-wide icon buttons and expand on hover to show the label.
- Active state is tracked with `IntersectionObserver`.
- The observer watches every section id from `navItems`, then stores the currently most visible section in local state.
- The command palette reuses `navItems`, maps them to hash links, filters by label, and closes on item click.

Difficulty to reduce the right-side navigation to:

- Home
- Selected Work
- Engineering Capabilities
- Architecture Notes
- About
- Algorithm Notebook
- Contact

Estimated difficulty: low to moderate.

The mechanics are simple because navigation is data-driven. The main work is not the nav UI; it is aligning new labels to actual section ids and possibly merging/removing visible sections in later phases. A minimal nav-only change would update `navItems` and the section ids. A complete product-direction change would also require reorganizing `app/page.tsx` sections so "Selected Work", "Engineering Capabilities", "Architecture Notes", and "Algorithm Notebook" correspond to real page sections and command-palette destinations.

Implementation notes for later phases:

- Keep a single source of truth for section ids and labels.
- Consider renaming `opening` to `home` only if all hero links and observers are updated together.
- On mobile, the right rail does not exist, so the top search/command palette currently carries navigation.
- If sections such as Blog, Timeline, and Certificates remain visible but are removed from the nav, active-state tracking will skip those scroll regions unless they are folded into another section or intentionally omitted.

## Responsive and accessibility risks

Accessibility risks:

- Command palette has `role="dialog"` and `aria-modal`, but no accessible name, no focus trap, and no focus restoration.
- The command palette overlay closes on background click, but keyboard navigation among results is not implemented.
- Right-side nav uses `title` for labels; hover-only expansion can be weak for keyboard and touch users.
- Project selector buttons use visible titles, but they do not expose selected state via `aria-pressed` or `aria-current`.
- Heatmap squares rely on color intensity and `title`; there is no visible legend or accessible per-cell text.
- Decorative bullet spans in lists are not `aria-hidden`.
- Contact form labels are present, which is good, but the submit action discards name/email and only sends subject/message in the mail body.
- External links open in new tabs but do not indicate that behavior in text.

Mobile-layout risks:

- Hero headline uses `text-6xl` on mobile; long names may crowd smaller screens.
- `ProjectNotebook` stacks project selector above a `min-h-[620px]` project sheet; this may produce a long, heavy mobile interaction.
- Project diagram uses a five-column grid that may squeeze labels on narrow screens.
- `LeetCodeHeatmap` uses `min-w-[620px]` with horizontal scrolling; acceptable but should have a clearer scroll affordance.
- Sticky header plus section `scroll-mt-24` should be checked after any nav height changes.
- Command palette margin top and fixed overlay should be tested on short mobile viewports.

Performance risks:

- `app/page.tsx`, `NotebookNav`, `ProjectNotebook`, `ScrollProgress`, `CursorInk`, and `ContactForm` create a client-heavy single-page experience for what is mostly static content.
- Framer Motion is loaded for scroll progress and project transitions; useful, but relatively heavy for a portfolio if animation scope grows.
- Cursor tracking updates React state on every pointer movement on desktop.
- The hero image is priority-loaded and absolute full-cover; its file size should be optimized and confirmed before final deployment.
- All portfolio content is rendered on the home page; no route-level splitting exists.

## Testing and build results

Commands run:

- `npm.cmd run lint`
- `npm.cmd run build`
- `npm.cmd list next react react-dom framer-motion lucide-react next-themes tailwindcss --depth=0`
- Repository inspection commands using `Get-ChildItem`, `Get-Content`, `rg`, `git status`, and `git ls-files`

Results:

- `npm.cmd run lint`: passed with no ESLint warnings or errors.
- Lint warning: `next lint` is deprecated and will be removed in Next.js 16.
- `npm.cmd run build`: passed.
- Build output: static route `/` at 12.2 kB, first-load JS 167 kB; `_not-found` at 990 B, first-load JS 104 kB.
- Static export completed to `out/`.
- No `test` script exists in `package.json`; no tests were run.

## Recommended target architecture

Keep the notebook identity, but make the content and section system more deliberate.

Recommended structure:

- `data/site.ts`: name, role, verified links, resume path, metadata defaults.
- `data/projects.ts`: typed project records for Blogify, Reduc.to, PagePulse, ChatWat, and Sonica.
- `data/sections.ts`: canonical section ids, labels, nav icons, and grouping.
- `data/skills.ts`: engineering capabilities grouped by backend, frontend, systems, tools, testing, and deployment.
- `data/notes.ts`: architecture notes, algorithm notebook entries, and optional writing/blog entries.
- `components/sections/*`: split each major section out of `app/page.tsx`.
- `components/project/*`: separate project list, project detail spread, project links, architecture notes, and media slot components.
- `components/navigation/*`: top nav, page tabs, and command palette with shared section config.
- `types/portfolio.ts`: shared content types.

Recommended target sections:

- Home: notebook cover and concise positioning.
- Selected Work: five verified projects with expandable notebook spreads.
- Engineering Capabilities: skills, tools, systems, testing, deployment, and work style.
- Architecture Notes: reusable engineering notes and project-specific system decisions.
- About: concise biography and learning/work principles.
- Algorithm Notebook: LeetCode/coding practice only if verified or clearly labeled as manual/static.
- Contact: real links and a contact flow Shivay approves.

## Files likely to change in later phases

- `app/page.tsx`: section extraction, hierarchy changes, section naming, and content placement.
- `app/layout.tsx`: metadata, global wrappers, possibly nav placement.
- `app/globals.css`: refined notebook theme, typography, motion/accessibility utilities.
- `tailwind.config.ts`: token and layout extensions.
- `data/portfolio.ts`: likely split into typed data modules and replaced with verified content.
- `lib/utils.ts`: site config cleanup, contact/resume link verification.
- `components/notebook-nav.tsx`: revised nav model, accessible command palette, mobile navigation.
- `components/project-notebook.tsx`: reusable project schema, real media, real architecture data, better mobile layout.
- `components/leetcode-heatmap.tsx`: verified data source or clearly static/manual model.
- `components/contact-form.tsx`: real destination, config-driven email, richer mail body, or service integration.
- `components/section-page.tsx`: refined notebook page wrapper and spacing.
- `components/theme-toggle.tsx`: hydration/fallback polish if needed.
- `README.md`: update after redesign decisions are implemented.
- `public/resume.pdf`: replace only when Shivay provides the final resume.
- `public/certificates/*`: replace only when real certificate files are provided.
- `public/images/*`: optimize and add real project imagery if available.

## Visual component classification

Preserve unchanged:

- Notebook concept and page-tab metaphor.
- CSS variable-based light/dark theme foundation.
- Lucide icon usage.
- Static export-friendly setup.

Preserve but refine:

- Hero notebook cover/spread.
- `SectionPage` paper page treatment.
- `NotebookNav` right-side tabs and command palette.
- `ThemeToggle`.
- `ScrollProgress`.
- `ProjectNotebook` interaction concept.
- `Button` primitive.

Redesign:

- Project content layout and data model.
- Architecture diagram area, which is currently generic.
- Screenshot slot, which is currently a placeholder visual.
- Skills section hierarchy.
- System Design section, which should become more specific architecture notes.
- Algorithm/LeetCode area, especially the synthetic heatmap.
- Contact form behavior.
- Blog and Timeline presentation, if these remain in the product direction.

Remove or fold into other sections:

- Placeholder project entries that do not correspond to Blogify, Reduc.to, PagePulse, ChatWat, or Sonica.
- Placeholder certificate cards if real certificates are not available.
- Blog cards if there are no actual posts or article destinations.
- Timeline entries if they cannot be made factual.
- Cursor ink effect if performance, accessibility, or visual restraint becomes a concern.

## Risks and unresolved questions

- What are the verified repository URLs, live URLs, stacks, and outcomes for Blogify, Reduc.to, PagePulse, ChatWat, and Sonica?
- Which resume file is final, and should it download or open in-browser?
- What is Shivay's real contact email?
- Is `https://shivay-dwivedi.dev` an owned/active domain?
- Should Blog, Timeline, and Certificates remain first-class sections, be folded into About, or be removed until factual content exists?
- Should Algorithm Notebook show manual stats, link to LeetCode, or fetch data from a verified source?
- Are the certificate PDFs placeholders or intentionally tiny files?
- Should deployment target Vercel, Netlify, GitHub Pages, or another platform?
- Should the command palette remain a simple section finder or grow into a notebook search pattern?
- Should the portfolio stay a single-page static export or use case-study routes for each project?

## Suggested implementation phases

1. Content truth pass: collect verified facts for Shivay, contact links, resume, certificates, and the five real projects.
2. Information architecture: reduce/rename sections to Home, Selected Work, Engineering Capabilities, Architecture Notes, About, Algorithm Notebook, and Contact.
3. Data model: split `data/portfolio.ts` into typed site, section, project, skills, and notes data modules.
4. Component extraction: move inline sections out of `app/page.tsx` into focused section components.
5. Project notebook redesign: build the five-project data-driven spread with real links, media slots, architecture notes, and truthful status labels.
6. Navigation refinement: update right-side tabs, command palette, mobile navigation behavior, and active-section tracking.
7. Accessibility and responsive polish: improve dialog semantics, focus behavior, selected states, keyboard navigation, heatmap labeling, and mobile project layout.
8. Performance pass: review client boundaries, Framer Motion usage, cursor tracking, image optimization, and first-load JavaScript.
9. SEO and docs pass: verify metadata, social image, README claims, deployment docs, and placeholder removals.
10. Final verification: run lint, build, visual checks, responsive checks, and any tests added in later phases.
