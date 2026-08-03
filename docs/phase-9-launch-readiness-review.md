# Phase 9 Launch Readiness Review

## Scope

Phase 9 prepared the approved notebook portfolio for SEO, metadata, performance, production-readiness, and launch planning. That pass preserved the public section structure in place at the time, verified project copy, all five Live Demo actions, all five GitHub Repository actions, and static-export compatibility. The current public portfolio now uses an eight-section structure with Experience placed after Selected Work.

No deployment, commit, push, dependency install, dependency upgrade, or project repository change was performed.

## Metadata Changes

- Added a canonical `siteMetadata` configuration in `data/site.ts`.
- Removed the unverified `shivay-dwivedi.dev` domain from publishable metadata.
- Updated `app/layout.tsx` to use factual recruiter-facing metadata:
  - Title: `Shivay Dwivedi - Backend Engineer`
  - Title template: `%s | Shivay Dwivedi`
  - Description mentions Python, Django, Node.js, APIs, database-backed systems, and five deployed projects.
  - Authors and creator use `Shivay Dwivedi`.
  - Keywords are limited to factual portfolio positioning and technologies already represented in the verified project content.
- Configured Open Graph and Twitter summary metadata without a broken or unapproved image URL.
- Preserved robots indexing directives through metadata.

## Unresolved Metadata Fields

- Final public portfolio URL is unresolved.
- `metadataBase` is intentionally not set.
- Open Graph URL is intentionally not set.
- Canonical URL is intentionally not set.
- Sitemap is intentionally not generated.
- Open Graph image is intentionally not configured until an approved file exists.
- Favicon, apple-touch icon, and manifest icons are missing.

## Structured Data Implementation

Added `components/structured-data.tsx` and rendered it from `app/page.tsx`.

Current JSON-LD includes:

- `Person` with name, approved backend engineer role wording, short biography, and factual technical focus.
- `ItemList` of the five selected deployed projects, using existing project names, one-line descriptions, live URLs, and repository URLs.

Current JSON-LD intentionally excludes:

- Placeholder email.
- Placeholder GitHub, LinkedIn, or LeetCode profile URLs.
- Unverified final domain.
- Employer, address, education, awards, testimonials, user counts, unsupported outcomes, or dates.

`WebSite` JSON-LD is prepared to appear only after `siteMetadata.portfolioUrl` is verified.

## Sitemap And Robots Status

- Added `public/robots.txt` with domain-neutral allow rules.
- Omitted sitemap because a final public base URL is not verified.
- Launch-time step: after the final domain is approved, add canonical metadata and sitemap generation or a static `sitemap.xml` containing the verified production URL.

## Performance Findings

- Static export remains enabled in `next.config.mjs`.
- `next/image` remains configured with `unoptimized: true`, which is compatible with static hosting.
- The hero image is real and used, but large at about `2.3 MB`.
- Project media does not load unavailable screenshots because all project media remains in the pending state.
- Framer Motion remains limited to project transitions and scroll progress.
- CursorInk already respects reduced motion and coarse pointers from Phase 8.
- First-load JavaScript should be monitored after build; no risky framework rewrite was performed.

## Performance Changes

- Added a responsive `sizes="100vw"` hint to the hero image.
- Removed definitely unused source files that contained placeholder/example content.
- Kept interactive client boundaries unchanged where they support navigation, theme, contact, and project selection.

## Image Audit

| File | Dimensions | Size | Used | Placeholder | Recommendation |
| --- | ---: | ---: | --- | --- | --- |
| `public/images/engineering-notebook-hero.png` | `1536 x 1024` | ~2275 KB | Yes | No | Keep visually; consider owner-approved compression/export later. |
| `public/images/projects/blogify/.gitkeep` | n/a | ~0 KB | No | Directory marker | Retain until approved project media is added. |
| `public/images/projects/reduc-to/.gitkeep` | n/a | ~0 KB | No | Directory marker | Retain until approved project media is added. |
| `public/images/projects/pagepulse/.gitkeep` | n/a | ~0 KB | No | Directory marker | Retain until approved project media is added. |
| `public/images/projects/chatwat/.gitkeep` | n/a | ~0 KB | No | Directory marker | Retain until approved project media is added. |
| `public/images/projects/sonica/.gitkeep` | n/a | ~0 KB | No | Directory marker | Retain until approved project media is added. |

Missing launch assets:

- `public/favicon.ico`
- `public/apple-touch-icon.png`
- Optional manifest icons such as `public/icon-192.png` and `public/icon-512.png`
- `public/images/social/portfolio-og.png`

## Bundle And Dead-Code Findings

Removed definitely unused source files:

- `components/contact-form.tsx`
- `components/leetcode-heatmap.tsx`
- `data/portfolio.ts`

Retained placeholders:

- `public/certificates/python-programming.pdf`
- `public/certificates/django-backend.pdf`
- `public/certificates/database-fundamentals.pdf`

The retained certificate PDFs are not currently exposed through verified live actions and should be replaced or removed in an owner-approved content phase. The final approved résumé is now integrated at `public/Shivay_Dwivedi_Backend_Resume.pdf`.

## Lint-Script Status

- Migrated from deprecated `next lint` to direct `eslint .`.
- Added `eslint.config.mjs` using the existing Next ESLint rules through `FlatCompat`.
- Removed legacy `.eslintrc.json`.
- Added ignores for `.next/`, `out/`, and `next-env.d.ts` so generated output is not linted.
- No dependencies were installed, removed, or upgraded.

## Security Review

- External links now use `rel="noopener noreferrer"` with `target="_blank"`.
- Placeholder email remains hidden because `emailIsPlaceholder` gates mailto rendering.
- Placeholder social links remain hidden behind verification gates.
- Placeholder resume remains hidden behind verification gates.
- JSON-LD is serialized with `<` escaped before insertion.
- Contact form still opens a local email client only when a verified recipient email exists.
- No client-side user content is injected.

## Production Compatibility

- `next.config.mjs` uses `output: "export"` and `images.unoptimized`, so static export remains compatible with Vercel, Netlify/static hosting, GitHub Pages with caveats, and similar static hosts.
- No runtime environment variables are required.
- No deployment platform was selected.
- GitHub Pages may require `basePath` or asset-prefix work if deployed under a repository subpath; that should be handled only after owner platform approval.

## Launch Blockers

- Final public domain is not verified.
- Canonical URL and sitemap cannot be finalized without the domain.
- Open Graph image is missing and unapproved.
- Favicon and touch icons are missing.
- Email, GitHub, LinkedIn, LeetCode, resume, location, and availability details remain placeholder-gated.
- Project screenshots/media are pending owner approval.
- Real Firefox and Safari launch checks are still required.
- Live project URLs should be smoke-tested immediately before publication, including expected cold-start behavior.

## Final Owner-Supplied Items Needed

- Final domain.
- Final resume PDF.
- Verified public email or approved contact workflow.
- Verified GitHub, LinkedIn, and LeetCode URLs.
- Approved Open Graph/social preview image.
- Favicon and touch icon assets.
- Approved screenshots or media for Blogify, Reduc.to, PagePulse, ChatWat, and Sonica.
- Final availability text.

## Recommended Deployment Approach

Use a platform-neutral static deployment from `out/` after `npm run build`. Vercel or Netlify/static hosting are both compatible. Do not choose or configure a platform until Shivay approves the hosting target and final domain.

See `docs/deployment-guide.md` and `docs/launch-checklist.md` for launch execution steps.
