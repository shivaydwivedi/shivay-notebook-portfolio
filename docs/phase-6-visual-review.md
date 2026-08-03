# Phase 6 Visual Review

## Files changed

- `components/project-notebook.tsx`
- `components/sections/selected-work-section.tsx`
- `components/sections/architecture-notes-section.tsx`
- `components/sections/capabilities-section.tsx`
- `components/architecture/architecture-note-card.tsx`
- `components/architecture/system-flow.tsx`
- `components/architecture/flow-node.tsx`

## Selected Work hierarchy decisions

- Phase 6 kept the approved page model unchanged at that time. The current public portfolio now uses an eight-section model with Experience placed after Selected Work.
- Kept Selected Work as one section, but made it the strongest technical area through clearer project identity, top actions, evidence strips, preview panels, and notebook subsections.
- Reordered project detail content to: identity, one-line positioning, summary, actions, evidence strip, problem, engineering approach, key systems, architecture summary, testing and deployment evidence.
- Removed dense technology-chip walls from the detail view and replaced them with three-to-five evidence items per project.

## Flagship treatment

- Blogify is labeled `Flagship backend project`.
- The label is restrained and appears in the selector and detail heading.
- Other projects keep equal selector weight, visible live status, and full detail/action treatment.

## Mobile layout decisions

- Project selector uses horizontal scrolling on smaller screens and a stacked notebook index on wide screens.
- Each selector item has a fixed compact width only inside the scroll strip, preventing the entire page from expanding.
- Project detail follows directly below the selector on mobile.
- Removed the previous tall minimum-height project detail.
- Architecture preview text and evidence items use wrapping, `min-w-0`, and one/two-column responsive grids to reduce overflow risk.

## Architecture flow implementation

- Added reusable architecture components:
  - `ArchitectureNoteCard`
  - `SystemFlow`
  - `FlowNode`
- Flows are semantic ordered lists with text labels.
- Arrows are decorative and not the only representation of flow order.
- All five project flows are represented:
  - Blogify: Client -> Django REST API -> PostgreSQL -> Redis/Celery -> Cloudinary
  - Reduc.to: React app -> Fastify API -> Prisma -> PostgreSQL -> Redirect route
  - PagePulse: Client -> Express API -> URL safety -> Controlled fetch -> Audit result
  - ChatWat: React client -> REST/Socket.io -> Message service -> SQLite
  - Sonica: Browser -> Django app -> SQLite/PostgreSQL -> Media storage -> Render

## Capability-to-project evidence mapping

- Backend Engineering: Blogify, Reduc.to, PagePulse, ChatWat, Sonica.
- Databases and Persistence: Blogify, Reduc.to, ChatWat, Sonica.
- Authentication and Security: Blogify, Reduc.to, PagePulse, Sonica.
- Background and Real-Time Systems: Blogify, ChatWat.
- Testing and Quality: Blogify, Reduc.to, PagePulse, ChatWat, Sonica.
- Tooling and Deployment: Blogify, Reduc.to, PagePulse, ChatWat, Sonica.

## Accessibility improvements

- Project selector exposes selected state through `aria-pressed` and `aria-current`.
- Selector and architecture actions have visible focus styles.
- Project actions include project-specific accessible labels.
- Status is shown as text, not only color.
- Architecture flows use semantic ordered lists and text labels.
- Project media placeholder is a `figure` with a labeled caption.
- Motion in project transitions respects `prefers-reduced-motion`.

## Unresolved screenshot/media requirements

- No fake screenshots were added.
- Each selected project shows a notebook-style preview with verified architecture text and stack labels.
- Each preview states `Project media pending approval.`
- Real media can be added later through project data after Shivay approves screenshots or visual assets.

## Manual visual checks still required

- Capture screenshots at approximately 320px, 375px, 390px, and 430px widths.
- Confirm horizontal selector scrolling is comfortable on touch devices.
- Confirm action buttons remain easy to tap.
- Confirm Architecture Notes stack cleanly in dark mode and light mode.
- Confirm no text overflow in the longest project names, categories, and evidence labels.

## Known limitations

- No final screenshot gallery or detailed architecture diagrams were added in this phase.
- Architecture cards are compact text flows, not full diagram canvases.
- Project preview areas remain placeholder regions until media is approved.
- No browser-based visual regression run was performed in this phase.

## Suggested screenshot checklist for Shivay

- Selected Work desktop with Blogify selected.
- Selected Work mobile at 320px with project selector visible.
- Selected Work mobile at 390px with action buttons visible.
- Architecture Notes desktop showing at least two flow cards.
- Architecture Notes mobile showing one complete stacked flow.
- Engineering Capabilities desktop and mobile.
- Light mode and dark mode versions of the same Selected Work view.
