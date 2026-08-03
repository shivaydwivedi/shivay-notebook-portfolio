# Phase 10A Placeholder Language Audit

## Scope

This audit reviewed public UI and source strings matching:

- `pending`
- `placeholder`
- `unverified`
- `unavailable`
- `not supplied`
- `not configured`
- `coming later`
- `approval`
- `coming soon`

The goal was to keep the public portfolio from exposing development-process language while preserving truthful gates for content Shivay has not supplied yet.

## Public UI Decisions

| Location | Previous public text | Classification | Change |
| --- | --- | --- | --- |
| `components/project/project-media.tsx` | `Project media pending approval.` | Move from public UI into internal documentation | Removed the warning text. Projects without approved screenshots now render an intentional `Project summary` panel with architecture summary and stack labels. |
| `data/project-content.ts` | `Project media pending approval.` | Move from public UI into internal documentation | Removed all five `pendingMessage` values so the phrase cannot be rendered later by accident. |
| `components/sections/algorithm-notebook-section.tsx` | `Coding-practice data is intentionally restrained until Shivay's profile statistics and topic history are verified.` | Remove because optional content should be hidden | Replaced with a neutral section introduction that does not mention verification state. |
| `components/sections/algorithm-notebook-section.tsx` | `No solved-count, rating, streak, or heatmap data is currently published from unverified sources.` | Remove because optional content should be hidden | Replaced practice-focus copy with general algorithm-notebook positioning. |
| `components/sections/algorithm-notebook-section.tsx` | `Statistics will be added after verification. The previous synthetic heatmap and placeholder counts are no longer visible.` | Remove because optional content should be hidden | Removed the empty statistics message. The statistics card now renders only when real statistics or profile data exist. |
| `components/sections/algorithm-notebook-section.tsx` | `LeetCode profile pending` | Remove because optional content should be hidden | Removed the disabled LeetCode action when no verified profile URL exists. |
| `components/sections/contact-section.tsx` | `Contact details pending verification` | Remove because optional content should be hidden | Replaced the missing-contact state with an intentional profile/review panel. |
| `components/sections/contact-section.tsx` | `A verified email address or external form service has not been approved yet. The placeholder address is intentionally not exposed as a mailto form.` | Move from public UI into internal documentation | Removed the process explanation from the public interface. Placeholder email remains hidden by data gates. |
| `components/sections/contact-section.tsx` | `Pending owner verification` | Remove because optional content should be hidden | Removed the public status row. |
| `components/sections/contact-section.tsx` | `Final resume pending verification` | Retain only when an honest disabled action is necessary | Replaced with the allowed disabled action label `Résumé coming soon`. |
| `components/sections/contact-section.tsx` | `{label} pending` for missing profile links | Remove because optional content should be hidden | Missing GitHub and LinkedIn actions now render nothing. Missing résumé renders only `Résumé coming soon`. |
| `components/sections/home-section.tsx` | `Resume pending` | Retain only when an honest disabled action is necessary | Replaced with the allowed disabled action label `Résumé coming soon`. |

## Intentionally Retained Public Placeholder

The only retained public placeholder-style phrase is:

- `Résumé coming soon`

This appears as a small disabled résumé action in the Home and Contact sections until Shivay supplies the final résumé.

## Hidden Optional Content

The following content now stays hidden until verified owner content exists:

- Project screenshot/media gallery controls.
- Coding statistics and solved-count fields.
- LeetCode profile action.
- Contact email form.
- GitHub profile action.
- LinkedIn profile action.
- Active résumé link.

## Internal-Only Terms Retained

These strings remain in internal data types, verification fields, or documentation and are not public UI copy:

- `isPlaceholder`, `emailIsPlaceholder`, and related data-gating fields in `types/portfolio.ts` and `data/site.ts`.
- `status: "pending"` for project media state in `data/project-content.ts`; this is a non-rendered state flag.
- `not configured` in project evidence/limitations where it documents verified repository state, such as CI/CD status.
- Historical phase reports and verification docs that describe earlier placeholder and approval states.
- Placeholder PDF file contents under `public/resume.pdf` and `public/certificates/*.pdf`; these files remain unlinked while the relevant verified content is absent.

## Replacement Category Summary

- Replace with verified owner content later: email, GitHub, LinkedIn, LeetCode, résumé, project screenshots, project media alt text.
- Remove because optional content should be hidden: missing coding statistics, missing LeetCode action, missing GitHub/LinkedIn actions, public missing-contact explanations.
- Retain only when an honest disabled action is necessary: `Résumé coming soon`.
- Move from public UI into internal documentation: project-media approval language, placeholder email explanation, historical verification/process notes.
