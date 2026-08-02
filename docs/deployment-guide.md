# Deployment Guide

## Scope

This portfolio is a static-exportable Next.js site. Do not deploy until Shivay approves the final public target, domain, profile details, resume, social links, favicon/icons, Open Graph image, and launch checklist.

## Clean Install

```powershell
npm.cmd ci
```

Use the lockfile already committed to the repository. Do not upgrade dependencies as part of launch unless a separate owner-approved maintenance task requires it.

## Verification Commands

```powershell
npm.cmd run lint
npm.cmd run build
git diff --check
```

The production build writes a static export to `out/` because `next.config.mjs` sets `output: "export"`.

## Local Preview

For development preview:

```powershell
npm.cmd run dev
```

For static export preview after `npm.cmd run build`, serve the `out/` directory with any trusted static server. Keep this local-only unless Shivay has approved publication.

## Environment Variables

No runtime environment variables are currently required by the portfolio.

Owner-supplied values still needed before launch:

- Final public portfolio URL
- Verified email or approved external contact mechanism
- Verified GitHub profile URL
- Verified LinkedIn profile URL
- Verified LeetCode profile URL
- Final resume file
- Final availability text

## Supported Deployment Approaches

### Vercel

1. Import the portfolio repository.
2. Use the default Next.js framework detection.
3. Confirm the build command is `npm.cmd run build` or Vercel's Linux equivalent `npm run build`.
4. Confirm static export output is supported from `out/`.
5. Add the final custom domain only after Shivay verifies ownership.
6. Verify HTTPS, metadata, robots, social preview, and all project links on the production URL.

### Netlify Or Static Hosting

1. Build with `npm run build`.
2. Publish the `out/` directory.
3. Configure redirects only if a host needs them for static root handling.
4. Verify `/robots.txt`, `/_next/static/*`, the hero image, and all public assets.
5. Add the final custom domain only after Shivay verifies ownership.

### GitHub Pages Caveats

- GitHub Pages may require a repository-specific base path unless hosted from a user/organization root domain.
- If a base path is required, update `next.config.mjs` in a separate owner-approved task and verify every asset path.
- Custom-domain GitHub Pages deployment should verify HTTPS enforcement and DNS before launch.

## Custom-Domain Checklist

- Confirm Shivay owns or controls the final domain.
- Add the domain to the selected hosting provider.
- Configure DNS records exactly as the provider specifies.
- Verify HTTPS certificate issuance.
- Update canonical metadata and sitemap only after the production URL is confirmed.
- Rebuild and redeploy after metadata changes.

## HTTPS Check

- Confirm the production URL redirects to HTTPS.
- Confirm all project links use HTTPS where available.
- Confirm no placeholder email or unverified profile URL is visible.

## Cache And Redeploy Notes

- Social platforms cache metadata aggressively; trigger a re-scrape after final Open Graph image and URL changes.
- If static assets change, redeploy from a fresh build and verify the generated file paths in `out/`.
- If a host serves stale output, clear deployment cache or create a fresh deployment.

## Rollback

- Keep the previous successful deployment available in the hosting provider.
- If launch smoke tests fail, roll back to the previous deployment and document the failing route, browser, and asset.
- Do not rewrite repository history for rollback; use the host's deployment rollback or a normal revert commit in a separately approved task.
