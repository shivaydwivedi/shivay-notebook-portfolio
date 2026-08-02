# Project Media Checklist

Use only real screenshots captured from Shivay-approved project environments. Do not stage credentials, private data, analytics from real users, admin secrets, API tokens, cookies, email addresses, database IDs tied to real people, or unlicensed media.

## Blogify

### Swagger/OpenAPI documentation
- What must be visible: Blogify API title, `/api/v1` documentation context, representative accounts/posts routes.
- Hide: auth tokens, cookies, private headers, real emails.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/blogify/openapi-docs.png`.
- Alt text guidance: "Blogify OpenAPI documentation showing versioned API endpoints."

### API endpoint response
- What must be visible: a successful JSON response from a safe public or demo endpoint.
- Hide: tokens, private user data, server secrets.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/blogify/api-response.png`.
- Alt text guidance: "Blogify API JSON response from a documented endpoint."

### Django Admin or content-management view
- What must be visible: safe demo content-management view or admin list with non-sensitive demo data.
- Hide: real users, real emails, permissions, staff account details.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/blogify/admin-content.png`.
- Alt text guidance: "Blogify content-management view with approved demo data."

### Deployment or health evidence
- What must be visible: health endpoint or deployment status with non-sensitive response data.
- Hide: logs containing secrets, environment variables, infrastructure account data.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/blogify/health-check.png`.
- Alt text guidance: "Blogify health endpoint response for deployment evidence."

## Reduc.to

### Authentication screen
- What must be visible: login or registration UI with empty or demo-safe fields.
- Hide: real emails, passwords, session cookies.
- Recommended viewport: desktop, 1440x900 and mobile, 390x844.
- Recommended filename: `public/images/projects/reduc-to/auth-screen.png`.
- Alt text guidance: "Reduc.to authentication screen."

### Link creation
- What must be visible: short-link creation form with a safe demo destination.
- Hide: private URLs, tokens, account identifiers.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/reduc-to/link-create.png`.
- Alt text guidance: "Reduc.to link creation workflow."

### Dashboard or owned-links list
- What must be visible: owned-links list with demo-safe links and status controls.
- Hide: private domains, real click data, account email.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/reduc-to/dashboard-links.png`.
- Alt text guidance: "Reduc.to dashboard showing owned short links."

### Redirect or analytics evidence
- What must be visible: safe redirect behavior or documented analytics/click-event evidence.
- Hide: real visitor data, IP addresses, private destinations.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/reduc-to/redirect-evidence.png`.
- Alt text guidance: "Reduc.to redirect or click-event evidence with demo data."

## PagePulse

### Audit submission
- What must be visible: audit form or request setup using a safe public URL.
- Hide: private targets, internal hostnames.
- Recommended viewport: desktop, 1440x900 and mobile, 390x844.
- Recommended filename: `public/images/projects/pagepulse/audit-submit.png`.
- Alt text guidance: "PagePulse audit submission form."

### Audit findings
- What must be visible: returned findings with issue labels and readable details.
- Hide: private URLs or sensitive page contents.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/pagepulse/audit-findings.png`.
- Alt text guidance: "PagePulse audit findings for a public demo page."

### Scoring/result view
- What must be visible: score, issue list, and result metadata.
- Hide: private request IDs if they expose infrastructure details.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/pagepulse/audit-result.png`.
- Alt text guidance: "PagePulse audit result with deterministic score and issues."

### API documentation if available
- What must be visible: documented request/response shape or endpoint notes.
- Hide: internal deployment notes that are not meant for publication.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/pagepulse/api-docs.png`.
- Alt text guidance: "PagePulse API documentation for audit endpoint."

## ChatWat

### Username entry
- What must be visible: username entry or demo login screen.
- Hide: real names if not approved.
- Recommended viewport: desktop, 1440x900 and mobile, 390x844.
- Recommended filename: `public/images/projects/chatwat/username-entry.png`.
- Alt text guidance: "ChatWat username entry screen."

### Active conversation
- What must be visible: approved demo messages in the conversation UI.
- Hide: real conversations, personal names, private message contents.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/chatwat/active-conversation.png`.
- Alt text guidance: "ChatWat active conversation with approved demo messages."

### Two-user real-time demonstration
- What must be visible: two clients or windows showing live message behavior.
- Hide: private browser profiles, bookmarks, account details.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/chatwat/two-user-realtime.png`.
- Alt text guidance: "ChatWat two-user real-time messaging demonstration."

### Persistent history after refresh
- What must be visible: messages still present after refresh or reconnect.
- Hide: real user history.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/chatwat/persistent-history.png`.
- Alt text guidance: "ChatWat persistent message history after refresh."

## Sonica

### Music library
- What must be visible: approved demo catalog or empty-state catalog with licensed/fictional media only.
- Hide: copyrighted songs, unapproved artwork, real user data.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/sonica/music-library.png`.
- Alt text guidance: "Sonica music library view with approved demo media."

### Player interface
- What must be visible: player controls and safe demo track information.
- Hide: unlicensed album art or private uploads.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/sonica/player-interface.png`.
- Alt text guidance: "Sonica player interface with approved demo track."

### Authentication screen
- What must be visible: login/signup screen with empty fields.
- Hide: real credentials, OAuth client data.
- Recommended viewport: desktop, 1440x900 and mobile, 390x844.
- Recommended filename: `public/images/projects/sonica/auth-screen.png`.
- Alt text guidance: "Sonica authentication screen."

### Empty-library handling
- What must be visible: empty state or no-media-safe state.
- Hide: local filesystem paths, deployment secrets.
- Recommended viewport: desktop, 1440x900.
- Recommended filename: `public/images/projects/sonica/empty-library.png`.
- Alt text guidance: "Sonica empty library handling state."

### Responsive/mobile screen
- What must be visible: a representative Sonica page at mobile width.
- Hide: browser personal data, unapproved media.
- Recommended viewport: mobile, 390x844.
- Recommended filename: `public/images/projects/sonica/mobile-view.png`.
- Alt text guidance: "Sonica responsive mobile view."
