# Future Codex work

- Treat `references/resume.pdf` as the authoritative source for personal and professional facts. Never invent portfolio claims, dates, results, tools, links, education, certifications, or statistics.
- Keep editable personal content in `src/data/portfolio.ts`. Do not scatter factual content through presentation components.
- Preserve the dark data-analytics visual direction established from `references/theme-reference.png`: near-black surfaces, violet and lavender accents, fine chart grids, compact data labels, and restrained glow.
- Do not add fake statistics, fabricated testimonials, placeholder projects, fake clients, or links that are not verified.
- Maintain semantic HTML, keyboard support, visible focus indicators, sufficient contrast, and meaningful accessible names.
- Preserve `prefers-reduced-motion` behavior. New animation must have a non-animated path and must not block access to content.
- Keep animation GPU-friendly, viewport-aware, and reduced on mobile or touch devices.
- Keep the public CV at `public/resume.pdf` and preserve working download links.
- Use React Server Components by default. Add client components only for browser state, animation, or browser APIs.
- Do not add a database, authentication, server backend, CMS, paid API, or environment variable unless a future requirement genuinely needs it.
- Preserve direct Vercel compatibility and the central site URL in `src/lib/site.ts`.
- After every code change, run `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`.
