# Theme System Implementation — Forge Hyperloop

**Date:** 2026-04-24  
**Approach:** Token-first (globals.css foundation → component migration)  
**Scope:** Existing sections only (Hero, About, Projects, Contact, Nav). Globe tokens defined but no Globe component rebuilt.

---

## 1. Foundation

### globals.css

Complete rewrite. Order of declarations:

1. `@import "tailwindcss"`
2. Google Fonts import — Libre Baskerville 400, 700, italic
3. `@custom-variant dark (&:where(.dark, .dark *))`
4. `@theme` block — Tailwind token aliases:
   - `--font-serif: "Libre Baskerville", Georgia, serif`
   - `--font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif`
   - `--font-mono: "SF Mono", "JetBrains Mono", monospace`
   - `--color-accent: #C3A984`
5. `:root` block — dark mode CSS custom properties (dark is default):
   - `--bg: #0E0E0C`
   - `--bg-2: #161614`
   - `--bg-3: #1C1C1A`
   - `--text: #ffffff`
   - `--text-muted: rgba(203,201,196,0.6)`
   - `--text-subtle: rgba(203,201,196,0.3)`
   - `--accent: #C3A984`
   - `--accent-dim: rgba(195,169,132,0.3)`
   - `--panel-bg: rgba(14,14,12,0.75)`
6. `.light` override block — light mode values:
   - `--bg: #FFFFFF`
   - `--bg-2: #F5F3F0`
   - `--bg-3: #EAE7E2`
   - `--text: #0E0E0C`
   - `--text-muted: rgba(14,14,12,0.5)`
   - `--text-subtle: rgba(14,14,12,0.28)`
   - `--accent: #C3A984` (unchanged)
   - `--accent-dim: rgba(195,169,132,0.25)`
   - `--panel-bg: rgba(255,255,255,0.88)`
7. Globe section tokens (no component yet, defined for future use):
   - `--globe-arc-idle: rgba(195,169,132,0.95)`
   - `--globe-arc-hover: rgba(255,255,255,0.95)`
   - `--globe-city: rgba(195,169,132,0.95)`
   - `--globe-label: rgba(255,255,255,0.92)`
   - `--globe-atmo-dark: #1a3a6e`
   - `--globe-atmo-light: #4a90d9`
   - `--globe-panel-border: rgba(195,169,132,0.25)`
   - `--globe-tooltip-border: rgba(195,169,132,0.25)`
8. Box-sizing reset
9. `html { scroll-behavior: smooth }`
10. `body` — `font-family: var(--font-serif)`, `background-color: var(--bg)`, `color: var(--text)`, antialiasing

### layout.tsx

Add Google Fonts `<link>` tags in `<head>`:
- `<link rel="preconnect" href="https://fonts.googleapis.com" />`
- `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />`
- `<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />`

### ThemeProvider

Change `defaultTheme="light"` to `defaultTheme="dark"`.

---

## 2. Component Migration

All inline `style={{ fontFamily: ... }}` props are removed from section wrappers — the body font is now set globally.

### Nav

| Element | Current | New |
|---|---|---|
| Wordmark | `text-black dark:text-white` | `style={{ color: 'var(--text)' }}` |
| Nav links | `text-black/50 dark:text-white/50` | `style={{ color: 'var(--text-muted)' }}` |
| Link hover | `hover:text-accent` | unchanged (accent token same) |
| Toggle button | `text-black/50 dark:text-white/50` | `style={{ color: 'var(--text-muted)' }}` |

### Hero

| Element | Dark value | Light value | Implementation |
|---|---|---|---|
| Section background | `#0E0E0C` | `#FFFFFF` | `style={{ background: 'var(--bg)' }}` |
| Radial glow | `rgba(195,169,132,0.07)` | `rgba(195,169,132,0.09)` | inline style, theme-aware via JS |
| Top rule | `rgba(195,169,132,0.4)` | same | `style={{ borderColor: 'rgba(195,169,132,0.4)' }}` |
| "01 // Overview" label | `rgba(195,169,132,0.75)` | `rgba(195,169,132,0.85)` | inline style, theme-aware |
| H1 "Forge Hyperloop" | `#ffffff` dark / `#0E0E0C` light | same | `style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}` |
| Divider line | `rgba(195,169,132,0.5)` | `rgba(195,169,132,0.4)` | inline style, theme-aware |
| Subtitle text | `rgba(203,201,196,0.55)` | `rgba(14,14,12,0.5)` | `style={{ color: 'var(--text-muted)' }}` |
| Scroll cue "Scroll" | `rgba(203,201,196,0.35)` | `rgba(14,14,12,0.3)` | `style={{ color: 'var(--text-subtle)' }}` |
| Scroll cue line | `--accent-dim` | same | `style={{ background: 'var(--accent-dim)' }}` |

Hero uses `useTheme()` to select between dark/light variant values for elements with different per-mode values (glow, label, divider).

### About

| Element | New value |
|---|---|
| Section rule | `var(--accent-dim)` |
| Section label | `var(--text-subtle)` |
| H2 heading | `var(--text)` |
| Body paragraphs | `var(--text-muted)` |
| Stat row separator | `var(--accent-dim)` |
| Stat label | `var(--text-subtle)` |
| Stat value | `var(--accent)` |

### Projects

| Element | New value |
|---|---|
| Section rule | `var(--accent-dim)` |
| Section label | `var(--text-subtle)` |
| H2 heading | `var(--text)` |
| Project index | `var(--accent)` |
| Project name | `var(--text)` → hover `var(--accent)` |
| Description text | `var(--text-muted)` |
| Discipline / Status labels | `var(--text-subtle)` |
| Row separator | `var(--accent-dim)` |

### Contact

| Element | New value |
|---|---|
| Section rule | `var(--accent-dim)` |
| Section label | `var(--text-subtle)` |
| H2 heading | `var(--text)` |
| Row label | `var(--text-subtle)` |
| Row link | `var(--accent)` → hover `var(--text)` |
| Row separator | `var(--accent-dim)` |
| Footer rule | `var(--accent-dim)` |
| Footer wordmark | `var(--text-subtle)` |
| Footer year | `var(--text-subtle)` |

---

## 3. SocialIcons

SVG icons use `stroke="currentColor"` — no hardcoded fills. Only the link wrapper color needs updating:

| Element | Current | New |
|---|---|---|
| Icon links | `text-black/30 dark:text-white/30` | `style={{ color: 'var(--text-subtle)' }}` |
| Icon hover | `hover:text-accent` | unchanged |
| Font family inline style | present | remove (inherited from body) |

## 4. Accent Variable Clarification

Two separate variables coexist intentionally:
- `--color-accent: #C3A984` in `@theme` — Tailwind v4 generates `text-accent`, `bg-accent`, `border-accent` utilities from this
- `--accent: #C3A984` in `:root` — used in inline `style={{ color: 'var(--accent)' }}` expressions
- Both must stay in sync at `#C3A984`

Components that currently use `border-accent/20` or similar Tailwind opacity modifiers should migrate to `style={{ borderColor: 'var(--accent-dim)' }}` so the opacity value correctly switches between dark (`0.3`) and light (`0.25`) modes.

## 5. Out of Scope

- Globe component (removed). Tokens defined in globals.css for future use.
- GLSLHills shader — colours baked in GLSL, no change needed.
- CLAUDE.md update — should be updated after implementation to reflect new font and token rules.

---

## 6. Success Criteria

- `npm run build` passes with no type errors
- Dark mode is the default on first load
- All four sections render using `var(--*)` tokens — no hardcoded `#0A0A0A` / `#FFFFFF` / `/50` opacity utilities remaining
- Light mode toggle produces correct light values per the table
- Libre Baskerville loads for body/heading text; Hero H1 stays Helvetica Neue
