# Abdul Qadir — DevOps / SRE portfolio

React + TypeScript + Vite + Tailwind. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Opens on http://localhost:5173

## Build

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the built output
```

## Editing content

All copy lives in `src/data.ts` — profile, metrics ledger, projects,
experience, stack, certifications, education. Add a project by appending
to the `projects` array; the category filter counts update automatically.

Résumé PDF sits at `public/` and is linked from `profile.resume`.

## Deploying

Vercel auto-detects Vite. Framework preset: Vite. Build command
`npm run build`, output directory `dist`.
