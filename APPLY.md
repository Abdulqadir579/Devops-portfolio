# Setup

This is a complete, self-contained repo. Replace the whole contents of
`Devops-portfolio` with this, then:

```bash
npm install
npm run dev
```

## Before you push

- `index.html` has `<link rel="canonical" href="https://abdulqadir.dev/" />`.
  Change it to your real domain, or delete the line.
- Add an OG image at `public/og.png` (1200x630) and add
  `<meta property="og:image" content="/og.png" />` inside `<head>` so
  LinkedIn shares render a card instead of a bare link.

## Editing content

`src/data.ts` holds every word on the site.
