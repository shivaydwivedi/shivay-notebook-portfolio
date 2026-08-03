# Shivay Dwivedi Portfolio

A production-ready portfolio built as a digital engineering notebook: paper texture, notebook tabs, command palette, dark mode, animated project spreads, system-design notes, LeetCode practice, blog cards, certificate folder, and contact page.

## Tech

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style UI primitives
- Lucide Icons
- SEO metadata
- Static export friendly

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

This project uses `output: "export"` in `next.config.mjs`, so a static site is emitted to `out/`.

## Customize

- Edit profile links in `lib/utils.ts`.
- Edit project, skills, timeline, blog, certificate, and system-design content in `data/portfolio.ts`.
- The final résumé is served from `public/Shivay_Dwivedi_Backend_Resume.pdf`.
- Replace files in `public/certificates/` with real certificates.
- Replace `public/images/engineering-notebook-hero.png` if a different hero image is preferred.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Build command: `npm run build`.

### Netlify

1. Push the project to GitHub.
2. Create a new Netlify site from the repository.
3. Build command: `npm run build`.
4. Publish directory: `out`.

### GitHub Pages

1. Ensure `next.config.mjs` keeps `output: "export"`.
2. Run `npm run build`.
3. Deploy the generated `out/` directory with a GitHub Actions Pages workflow.

Example workflow:

```yaml
name: Deploy portfolio

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

