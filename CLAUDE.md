# Exit Zero Labs — Website

Single-page marketing site for Exit Zero Labs. Dark-first design with terminal aesthetics, animated scroll sections, and a 3D globe.

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 16.1.6 (App Router) | React Compiler enabled, Turbopack |
| UI | React 19.2, Tailwind CSS v4 | CSS-first `@theme inline` in globals.css |
| Animations | Framer Motion | Scroll-triggered reveals, terminal typing, hover effects |
| 3D | Three.js + React Three Fiber + Drei | Dot-network globe, lazy-loaded |
| Language | TypeScript 5.x (strict) | Entire codebase |
| Linting | Biome 2.2 | Not ESLint/Prettier. `noUnknownAtRules: off` for Tailwind v4 |
| Package Manager | npm | Never use yarn or pnpm |
| Hosting | Vercel | — |

## Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Biome check
npm run format    # Biome format --write
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 @theme + brand tokens
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Main page — composes all sections
│   └── not-found.tsx        # Custom 404 (exit 1 theme)
├── components/
│   ├── ui/                  # Reusable primitives
│   │   ├── button.tsx
│   │   ├── pill-badge.tsx
│   │   ├── animated-text.tsx
│   │   └── section-wrapper.tsx
│   ├── hero/
│   │   ├── terminal-typer.tsx
│   │   └── hero-section.tsx
│   ├── scroll-hook.tsx
│   ├── kinnections/
│   │   ├── tilt-card.tsx
│   │   └── kinnections-section.tsx
│   ├── geo-spot/
│   │   ├── globe.tsx
│   │   ├── email-capture.tsx
│   │   └── geo-spot-section.tsx
│   ├── manifesto/
│   │   └── manifesto-section.tsx
│   └── footer/
│       └── footer.tsx
└── lib/
    └── cn.ts                # clsx + tailwind-merge utility
```

## Brand Tokens

### Colors

| Name | Hex | CSS Variable |
|------|-----|-------------|
| Zero | `#0A0F1E` | `--color-zero` |
| Dusk | `#1E293B` | `--color-dusk` |
| Signal | `#00D97E` | `--color-signal` |
| Ember | `#F97316` | `--color-ember` |
| Canvas | `#FAFAF8` | `--color-canvas` |
| Mist | `#94A3B8` | `--color-mist` |

### Fonts

- `--font-display`: Source Serif 4 (headings, 600/700)
- `--font-body`: Source Sans 3 (body/UI, 400/600)
- `--font-mono`: JetBrains Mono (code/terminal, 400)

## Conventions

### Files & Components

- Files: `kebab-case.ts`
- Components: `PascalCase`
- Functions/variables: `camelCase`
- Named exports only — no default exports

### Tailwind v4

- Config lives in `globals.css` via `@theme inline { }` — there is no `tailwind.config.js`
- Use Tailwind classes with brand tokens: `bg-zero`, `text-signal`, `font-display`
- Biome has `noUnknownAtRules: off` to support `@theme`, `@plugin`, `@import "tailwindcss"`

### Animations

- All entry animations: scroll-triggered via Framer Motion `useInView` with `once: true`
- Standard reveal: 20px slide-up + fade, 400ms, spring easing
- Always respect `prefers-reduced-motion: reduce` — skip transforms, show content immediately
- No decorative motion. Every animation has a reason.

### Accessibility

- WCAG AA contrast on all text
- Focus states: 2px Signal green outline, 2px offset
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on each section
- Globe is decorative — content in text, canvas gets `aria-hidden`

## Critical Rules

1. **Read before edit** — Always read files before modifying.
2. **Dark-first** — This site is dark by default. Canvas is for the manifesto section only.
3. **Max-width 1200px** — All content areas. No full-bleed text.
4. **No carousels, sliders, modals, or auto-play video.**
5. **Globe is lazy-loaded** — `next/dynamic` with `ssr: false`. Not in critical bundle.
6. **No CMS** — Content is hardcoded at launch.
7. **Biome, not ESLint** — Run `npm run lint` to check, `npm run format` to fix.

## Reference Docs

- `docs/brand-identity.md` — Colors, typography, voice, logo, spacing
- `docs/design-brief.md` — Full section specs, animation system, responsive rules
