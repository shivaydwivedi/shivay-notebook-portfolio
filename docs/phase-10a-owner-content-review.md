# Phase 10A Owner Content Review

## Profile Details Integrated

Canonical source: `data/site.ts`.

- Email: `shivayforwork@gmail.com`
- GitHub: `https://github.com/shivaydwivedi`
- LinkedIn: `https://www.linkedin.com/in/shivay-dwivedi-54785b304`
- LeetCode: `https://leetcode.com/u/shivay_d/`

These values are exposed through verified exports such as `verifiedEmail`, `verifiedGithubLink`, `verifiedLinkedinLink`, and `verifiedLeetcodeLink` so components do not duplicate or hardcode profile URLs.

## Availability Wording

Approved wording integrated into `siteProfile.availabilityStatus`:

> Open to backend engineering internships, junior developer roles, freelance work, and other relevant opportunities.

The Home section renders this wording from the canonical profile source.

## Contact Behavior

- Contact form renders because the email is now verified.
- Submitting the form opens a `mailto:shivayforwork@gmail.com` URL with subject and body populated from the form fields.
- The placeholder email is no longer present in the canonical profile.
- The email is not added to JSON-LD structured data.

## Social Links

Home and Contact render verified profile links from `data/site.ts`.

- GitHub opens in a new tab with `rel="noopener noreferrer"`.
- LinkedIn opens in a new tab with `rel="noopener noreferrer"`.
- LeetCode opens in a new tab with `rel="noopener noreferrer"`.
- Links have visible labels and accessible names.

## Résumé Handling

The final résumé is not ready.

- `public/resume.pdf` is not linked.
- `verifiedResume` remains undefined because the résumé record is still marked as a placeholder.
- The only public résumé action is the disabled label `Résumé coming soon`.

## LeetCode Behavior

- Algorithm Notebook links to `https://leetcode.com/u/shivay_d/`.
- No solved counts, ratings, rankings, streaks, contest history, or heatmaps were added.
- The optional statistics area remains hidden unless real statistics are supplied later.

## Screenshots Integrated By Project

All ten approved screenshots are integrated through `data/project-content.ts`. Each project now has an approved two-image media gallery.

### Blogify

1. `public/images/projects/blogify/api-documentation.png`
   - Public path: `/images/projects/blogify/api-documentation.png`
   - Dimensions: `1891 x 1018`
   - Type: `api-documentation`
   - Alt text: `Blogify API documentation page listing authentication and bookmark endpoints.`
   - Caption: `Interactive API documentation showing Blogify's authentication and bookmark routes.`

2. `public/images/projects/blogify/django_admin.png`
   - Public path: `/images/projects/blogify/django_admin.png`
   - Dimensions: `1919 x 1079`
   - Type: `dashboard`
   - Alt text: `Django administration dashboard for Blogify with content, account, bookmark, comment, like, notification, and post models.`
   - Caption: `Django admin interface for managing Blogify content and engagement models.`

### Reduc.to

1. `public/images/projects/reduc-to/create-link.png`
   - Public path: `/images/projects/reduc-to/create-link.png`
   - Dimensions: `1733 x 237`
   - Type: `application`
   - Alt text: `Reduc.to dashboard form for creating a short link with destination URL, custom alias, title, and expiry fields.`
   - Caption: `Short-link creation workflow with destination, alias, title, and expiry inputs.`

2. `public/images/projects/reduc-to/dashboard.png`
   - Public path: `/images/projects/reduc-to/dashboard.png`
   - Dimensions: `1919 x 1079`
   - Type: `dashboard`
   - Alt text: `Reduc.to dashboard showing a create-link form and active short-link cards with click counts and management buttons.`
   - Caption: `Link-management dashboard with active links, click counts, and owner actions.`

### PagePulse

1. `public/images/projects/pagepulse/audit-form.png`
   - Public path: `/images/projects/pagepulse/audit-form.png`
   - Dimensions: `1130 x 303`
   - Type: `application`
   - Alt text: `PagePulse audit form with a page URL field and Run audit button.`
   - Caption: `Public page audit form with a URL input and clear safety guidance.`

2. `public/images/projects/pagepulse/result.png`
   - Public path: `/images/projects/pagepulse/result.png`
   - Dimensions: `1228 x 446`
   - Type: `dashboard`
   - Alt text: `PagePulse report showing score, grade, final URL, HTTP status, response time, and issue counts.`
   - Caption: `Generated audit report with score, status, response time, and issue summaries.`

### ChatWat

1. `public/images/projects/chatwat/live-chat.png`
   - Public path: `/images/projects/chatwat/live-chat.png`
   - Dimensions: `1879 x 958`
   - Type: `application`
   - Alt text: `ChatWat welcome screen with a username field, light theme toggle, and Continue button.`
   - Caption: `Chat entry screen for choosing a display name before loading saved history.`

2. `public/images/projects/chatwat/message-history.png`
   - Public path: `/images/projects/chatwat/message-history.png`
   - Dimensions: `1911 x 1080`
   - Type: `dashboard`
   - Alt text: `ChatWat chat interface with message bubbles, online users, connection status, and a message composer.`
   - Caption: `Real-time chat view with persisted messages, presence, and message composer.`

### Sonica

1. `public/images/projects/sonica/dashboard.png`
   - Public path: `/images/projects/sonica/dashboard.png`
   - Dimensions: `1919 x 1079`
   - Type: `dashboard`
   - Alt text: `Sonica music library dashboard with recently played songs, all songs, search, navigation, and audio player.`
   - Caption: `Music-library dashboard with recent plays, catalog browsing, search, and player controls.`

2. `public/images/projects/sonica/song_details.png`
   - Public path: `/images/projects/sonica/song_details.png`
   - Dimensions: `1919 x 1079`
   - Type: `application`
   - Alt text: `Sonica song detail page with album artwork, song metadata, audio preview, playlist action, and favourite action.`
   - Caption: `Song detail and playback screen with metadata, playlist, and favourite actions.`

## Placeholder Cleanup Confirmation

- Completed placeholder-language cleanup remains in place.
- Project media no longer shows a public unfinished-state warning.
- Coding statistics remain omitted when absent.
- Missing résumé remains represented only by the disabled `Résumé coming soon` action.
- Obsolete `.gitkeep` files were removed from project image directories because real screenshots now exist.

## Structured Data

- Person JSON-LD now includes verified `sameAs` URLs for GitHub, LinkedIn, and LeetCode.
- Email was intentionally omitted from JSON-LD.
- No final site URL, canonical domain, metadataBase, sitemap URL, or domain-specific WebSite URL was added.

## Unresolved Items

- Final résumé.
- Final public domain.
- Canonical URL and sitemap.
- Open Graph image.
- Favicon and touch icons.
- Final production smoke checks on the deployment target.

## Remaining Launch Blockers

- Owner must supply the finished résumé before enabling the résumé action.
- Owner must confirm the final domain before canonical metadata or sitemap work.
- Project live URLs should be smoke-tested immediately before launch.
- Final Firefox, Safari, Chromium, keyboard, mobile, and dark-mode checks should be run against the production deployment.
