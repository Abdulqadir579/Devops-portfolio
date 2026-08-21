# Setup

Complete, self-contained repo. Replace the contents of `Devops-portfolio`
with this, then:

```bash
npm install
npm run dev
```

## Languages

Three locales: English, German and French. The toggle sits in the nav
(a dropdown on desktop, buttons in the mobile menu).

- On first visit the site reads the browser language and picks a match,
  falling back to English. The choice is then saved in localStorage.

### Editing translations

`src/i18n/en.ts` is the source of truth and defines the `Dictionary` type.
`de.ts` and `fr.ts` are typed against it, so if you add a string to
English and forget the others, `npm run build` fails and names the missing
key. That is intentional — translations cannot silently rot.

`src/data.ts` holds everything language-neutral: tech names, repo links,
company names, project structure. Adding a project means one entry in
`data.ts` plus three short prose blocks, one per locale.

## Before you push

- `index.html` has `<link rel="canonical" href="https://abdulqadir.dev/" />`.
  Change it to your real domain, or delete the line.
- Have a native German and a native French speaker read those two files.
  See the note below.
- Add an OG image at `public/og.png` (1200x630) plus
  `<meta property="og:image" content="/og.png" />` in `<head>`.

## Note on the translations

These are careful translations, not machine output, and they deliberately
keep the English tech vocabulary that German and French engineering teams
actually use (Deployment, Pipeline, Observability). But a native speaker
will still catch register and phrasing that a non-native writer cannot.
Get them read before this goes in front of a recruiter.
