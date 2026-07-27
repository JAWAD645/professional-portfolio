# Mohammad Jawadul Tashick — Data Portfolio

A production-ready professional portfolio built with Next.js and centred on a future career in data analytics, business intelligence, and data engineering.

The site presents verified experience in operational reporting, data quality, Power BI, Excel, machine learning, software development, research, and stakeholder communication. All public facts and links come from `references/resume.pdf`.

## Design concept

The interface translates `references/theme-reference.png` into an original responsive design system:

- near-black brown-violet backgrounds;
- layered dashboard surfaces and fine analytical grids;
- violet, lavender, and muted grey chart accents;
- monospace labels, data nodes, metric cards, and interface panels;
- restrained glow, depth, and glass effects;
- an abstract analytical hero instead of a stock portrait.

Decorative chart data is labelled as illustrative so it cannot be mistaken for a professional result. All prominent metrics are documented in the CV.

## Technology stack

- Next.js 16 App Router
- React 19
- strict TypeScript
- Tailwind CSS 4
- Motion for React
- Lucide React
- Recharts
- Vitest and React Testing Library
- ESLint

The app uses the Next.js Metadata API, `next/font`, `next/image`, generated Open Graph metadata, `robots.ts`, `sitemap.ts`, structured Person data, and a custom 404 page.

## Animation system

Reusable motion settings live in `src/lib/motion.ts`. The site includes:

- a short non-blocking intro sequence;
- word-by-word hero reveal;
- rotating role text;
- scroll progress;
- section and card entrances;
- dashboard chart drawing;
- floating interface cards and data nodes;
- drifting background signals, mesh nodes, and ambient glow fields;
- homepage analytics gestures with moving bars, scatter points, and a data pipeline;
- an automatic toolchain ticker that pauses on hover;
- pointer-reactive card depth, button gestures, and a desktop cursor indicator;
- hover lift, button shine, active navigation, and mobile menu transitions;
- CSS and JavaScript reduced-motion fallbacks.

Animations use opacity and transforms where possible. Pointer-only effects are disabled on touch devices, and `prefers-reduced-motion` removes non-essential movement.

## Local setup

Requirements:

- Node.js 22 LTS or another Next.js-supported Node.js version
- npm

Install and start:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production preview:

```bash
npm run build
npm run start
```

## Available commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:watch
npm run build
npm run start
```

## Contact form

The contact form submits name, email, and message fields to FormSubmit's AJAX
endpoint and displays success or failure feedback without leaving the portfolio.
It uses the public portfolio email from `src/data/portfolio.ts`; no email
password, API key, environment variable, or custom backend is required.

FormSubmit requires a one-time activation for a new recipient address. Submit
the deployed form once, then approve the activation message sent to the
portfolio email before relying on it for public enquiries.

## Edit portfolio content

All personal, career, project, research, education, certification, social, and contact content is centralised in:

```text
src/data/portfolio.ts
```

Update that file rather than hard-coding facts inside components. Keep every claim supported by the CV or another verified source approved for publication.

### Add a project

Add a new object to the `projects` array in `src/data/portfolio.ts`. A project needs:

- title;
- period;
- `Completed` or `In progress` status;
- factual summary;
- factual outcome;
- tools;
- verified link and accessible link label.

If the projects array is empty, the entire section is omitted cleanly.

### Replace the CV

1. Replace `references/resume.pdf` with the authoritative source file.
2. Copy the same file to `public/resume.pdf`.
3. Review `src/data/portfolio.ts` and update only changed facts.
4. Run all quality commands.

Do not rename `public/resume.pdf`; the navigation, hero, and contact download actions use `/resume.pdf`.

## Edit colours

Design tokens are CSS custom properties at the top of `src/app/globals.css`. Start with:

- `--background`
- `--surface`
- `--foreground`
- `--muted`
- `--border`
- `--accent`
- `--accent-bright`
- `--success`

Keep contrast high enough for body text, links, keyboard focus, and chart labels.

## Adjust animations

Shared Motion values are in `src/lib/motion.ts`. CSS animation keyframes and reduced-motion rules are in `src/app/globals.css`.

When changing animation:

- preserve the `prefers-reduced-motion` path;
- avoid layout properties such as width, height, top, or left for continuous motion;
- avoid rapid flashing;
- test touch and narrow screens;
- do not delay access to navigation or content.

## Project structure

```text
src/
  app/                 Routes, metadata, global styles, SEO files
  components/
    animations/        Reusable Motion components
    charts/             Recharts analytics visual
    navigation/         Accessible responsive navigation
    sections/           Portfolio sections
    ui/                 Reusable cards, buttons, and headings
  data/                 Typed portfolio facts
  lib/                  Site and motion configuration
  test/                 Test environment setup
  __tests__/            UI and asset tests
public/
  brand-mark.png        Original identity mark
  resume.pdf            Public CV
references/
  resume.pdf            Authoritative CV
  theme-reference.png   Visual direction reference
```

## Accessibility

- semantic sections and heading order;
- skip link and keyboard-friendly navigation;
- focus trapping, Escape handling, and background inertness in the mobile menu;
- visible focus indicators;
- screen-reader labels for icon-only controls;
- decorative visuals hidden from assistive technology;
- no clickable `div` elements;
- reduced-motion support;
- an accessible contact form with labelled fields and live status feedback.

## Performance

- static rendering for the main page;
- server components for content sections;
- dynamically loaded Recharts visual;
- optimised local fonts and `next/image`;
- no background video, tracking scripts, custom backend, database, or authentication;
- direct contact delivery through the external FormSubmit endpoint;
- CSS transforms and opacity for motion;
- effects reduced for touch and motion-sensitive users.

## Final domain configuration

`src/lib/site.ts` intentionally uses `http://localhost:3000` until a real deployment URL exists. After the first Vercel deployment:

1. copy the exact production URL from Vercel;
2. replace the `url` value in `src/lib/site.ts`;
3. rebuild and redeploy.

This updates canonical metadata, Open Graph URLs, robots, the sitemap, and structured data without inventing a production domain.

## Publish to GitHub

Create an empty public GitHub repository named `professional-portfolio` under
the `JAWAD645` account, then run from this folder:

```bash
git init
git add .
git commit -m "Build data analytics portfolio"
git branch -M main
git remote add origin https://github.com/JAWAD645/professional-portfolio.git
git push -u origin main
```

If you choose a different repository name, change only the remote URL. GitHub
Actions runs install, lint, type-checking, tests, and the production build on
pushes to `main` and on pull requests.

## Deploy to Vercel

Recommended dashboard workflow:

1. Push the repository to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep **Framework Preset: Next.js**, the root directory, and default build settings.
5. Do not add environment variables; the project does not require any.
6. Select **Deploy**.
7. Open the generated production URL and verify the home page and `/resume.pdf`.
8. Put that exact URL in `src/lib/site.ts`, commit, and push once more.

CLI alternative:

```bash
npx vercel
npx vercel --prod
```

Follow the prompts, use the current directory as the project root, and accept Next.js detection.

## Pre-publish review

Before publishing, manually confirm:

- current role and end dates are still accurate;
- all external repositories and research records are intentionally public;
- the email address and location are appropriate for public display;
- the deployed URL has replaced the localhost value;
- `/resume.pdf` opens and downloads on desktop and mobile.
- the FormSubmit recipient address has been activated and a real message arrives.
