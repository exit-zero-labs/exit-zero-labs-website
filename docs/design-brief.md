# Exit Zero Labs — Website Design Brief

## The Feeling

Confident indie energy. Think: Linear meets Vercel meets a late-night hackathon demo that shipped perfectly. The moment someone lands, they feel: *these people build things I actually want to use.*

---

## Page Structure

Single page. Sections in order:

1. **Hero** — Terminal That Ships
2. **Scroll Hook** — Loading transition
3. **Kinnections Spotlight** — Product feature
4. **Geo Spot Teaser** — Coming soon
5. **Manifesto** — Why We Build
6. **Footer** — Minimal with easter egg

---

## Section Specs

### 1. Hero — Terminal That Ships

- **Background:** Full viewport, Zero (`#0A0F1E`). Subtle animated grid at 3% opacity. Optional giant `exit 0` watermark at 4% opacity in JetBrains Mono, positioned bottom-right.
- **Terminal animation:** Types `> building something that matters_` character by character (40ms/char), pauses 800ms, then resolves to `> Ship clean. Build forward.`
- **Subheadline:** "Indie software, made with care" — Source Serif 4, Mist color.
- **CTAs:**
  - "See our products" — solid Signal green button
  - "Our story" — ghost/outline button, white border
- **Layout:** Content vertically centered, left-aligned on desktop, centered on mobile.

### 2. Scroll Hook — The Transition

- As user scrolls past hero, terminal text exits with a fade-up.
- Brief flash: `> loading products...` in JetBrains Mono, Mist color, centered.
- Snaps into Kinnections section. Total transition: ~600ms scroll distance.

### 3. Kinnections Spotlight

- **Background:** Dusk (`#1E293B`).
- **Product image:** Large screenshot at 15° tilt — slowly rights itself on scroll (parallax). On hover: subtle 3D cursor-tracking tilt (±5° range).
- **Headline:** "Know your people" — Source Serif 4, 48px, Ember (`#F97316`).
- **Copy:** 2 sentences max. Source Sans 3, 18px, white.
- **Badge:** Pill badge, "Now Available" — Ember background, white text, rounded-full.
- **Layout:** Image on left, text on right (desktop). Stacked on mobile, text first.
- **Note:** Product screenshot asset TBD. Use a placeholder frame during development.

### 4. Geo Spot Teaser

- **Background:** Full-width, Zero (`#0A0F1E`).
- **Globe:** Stylized animated globe. Continents rendered as dot/node network (not photorealistic). Two glowing pulsing points: India + US, connected by animated arc line. Slow continuous rotation.
- **Label:** "coming soon" — Signal green, small caps, Source Sans 3 SemiBold, 14px.
- **Headline:** "The world is your playing field" — Source Serif 4, 48px, white.
- **Email capture:** Minimal. No labels. Just placeholder text ("Get notified") and a right-arrow submit button. Input border: Dusk. Focus border: Signal. Arrow button: Signal background.
- **Layout:** Globe on left, text + form on right (desktop). Stacked on mobile, text first, globe below at reduced size.

### 5. Manifesto — Why We Build

- **Background:** Canvas (`#FAFAF8`). This is the one light section.
- **Pull quote:** "We did not raise a round. We do not have a growth team. We have a good idea, sharp tools, and zero patience for software that does not work." — Source Serif 4, 28px, Zero color, centered.
- **Three columns:**
  - **Craft** — Built right, iterated until excellent.
  - **People** — Designed around humans, not funnels.
  - **Independence** — Bootstrapped by choice, accountable to users.
- Column headers: Source Serif 4 SemiBold, 24px, Zero. Body: Source Sans 3, 16px, Dusk.
- **Layout:** 3 columns on desktop, stacked on mobile.

### 6. Footer

- **Background:** Zero (`#0A0F1E`).
- **Content:** "© 2026 Exit Zero Labs" — Mist, Source Sans 3, 14px. Product links (Kinnections, Geo Spot). Contact/social link.
- **Easter egg:** Hover the "0" in "Zero" → tooltip appears: `exit 0 ✓ process exited successfully` in JetBrains Mono, Signal green.
- **Layout:** Simple, one or two rows. Not crowded.

---

## Animation System

### Core Rules

- **Entry animation:** 20px slide-up + fade-in, 400ms duration, spring easing (`type: "spring", stiffness: 100, damping: 20`).
- **Trigger:** Scroll-only. Nothing animates until it enters the viewport. Use Framer Motion `useInView` with `once: true`.
- **Stagger:** When multiple items animate together (e.g., manifesto columns), stagger by 100ms each.
- **Reduced motion:** Respect `prefers-reduced-motion: reduce`. Disable all transforms and opacity transitions. Show content immediately.
- **Rule:** Every animation has a reason. No decorative motion.

### Interactive States

| Element | Hover | Active |
|---------|-------|--------|
| Solid button | `scale: 1.03`, Signal glow (`box-shadow: 0 0 20px rgba(0,217,126,0.3)`), 150ms | `scale: 0.98`, 100ms |
| Ghost button | Border brightens to white, 150ms | `scale: 0.98`, 100ms |
| Kinnections card | 3D cursor-tracking tilt (±5°), 200ms spring | — |
| Footer "0" | Tooltip fade-in, 200ms | — |

### Terminal Typing

- Character interval: 40ms
- Cursor blink: 530ms on, 530ms off (CSS `@keyframes`)
- Resolve pause: 800ms between lines
- Cursor character: `_` (underscore), Signal green

---

## Responsive Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| Mobile | < 640px | Single column. Headings scale down (see type scale). Full-width CTAs. Globe hidden, show static fallback. Section padding: 48px top/bottom. |
| Tablet | 640–1024px | Two columns where possible. Globe at reduced size. Section padding: 64px. |
| Desktop | 1024–1440px | Full layout as designed. Three-column manifesto. Interactive globe. Section padding: 96px. |
| Wide | > 1440px | Content capped at max-width 1200px, centered. Extra margin on sides. |

---

## Accessibility

- All text meets WCAG AA contrast (4.5:1 minimum, 3:1 for large text).
- Focus states: 2px Signal green outline with 2px offset on all interactive elements.
- Skip-to-content link (visually hidden, visible on focus).
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`. Each section has an `aria-label`.
- Images: alt text on all `<img>`. Decorative elements use `aria-hidden="true"`.
- Globe: `aria-label="Animated globe showing connection between India and United States"`. Canvas is decorative — content is in text.
- `prefers-reduced-motion: reduce` disables all animations. Content renders static.

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | < 2.5s |
| First Contentful Paint (FCP) | < 1.8s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total bundle (gzipped) | < 200KB (excluding Three.js) |
| Three.js globe | Lazy-loaded, not in critical path |
| Lighthouse Performance | > 90 |

### Performance Rules

- Globe loads via `next/dynamic` with `ssr: false`. Not in initial bundle.
- Fonts: preload display fonts (`Source Serif 4 600`, `Source Sans 3 400`). Others load async.
- Images: Next.js `<Image>` with `priority` on hero assets only.
- No external scripts at launch (no analytics, no chat widgets).

---

## Micro-Details

1. **Cursor trail** — Faint Signal green trail following the mouse, fades over 300ms. Desktop only (`@media (pointer: fine)`). Disable when `prefers-reduced-motion`.
2. **Page load splash** — 400ms black screen. `>_` blinks once (JetBrains Mono, Signal green). Site fades in. Runs once per session (sessionStorage flag).
3. **Favicon** — E0L monogram, static. Dark background, white text.
4. **404 page** — Black background. `exit 1` in large JetBrains Mono. "process terminated unexpectedly" as subtext. Deadpan message: "Whatever you were looking for, it is not here." Link home: "Go back to exit 0."
5. **Mobile nav** — If needed: hamburger opens with character-by-character typed nav items, 300ms total. However, this is a single-page site — a nav may not be necessary. Default: no mobile nav, rely on scroll.

---

## Layout Principles

- **Asymmetry** — Product sections alternate left/right alignment (Kinnections: image-left/text-right, Geo Spot: globe-left/text-right).
- **Generous whitespace** — Never crowded. Content max-width 1200px.
- **No carousels.** No sliders. No auto-playing video. No modals on landing.
- **Section rhythm:** Each section is a full visual "scene." Breathing room between them.

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animations | Framer Motion |
| 3D Globe | Three.js + React Three Fiber + Drei |
| Fonts | Google Fonts via next/font |
| Linting | Biome |
| Hosting | Vercel |
| CMS | None at launch |
