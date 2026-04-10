# CLAUDE.md — Forge Hyperloop

## Stack
- Next.js 16 App Router + TypeScript
- Tailwind CSS v4 (config via @theme in globals.css — no tailwind.config.ts)
- Framer Motion (scroll animations only)
- No auth, no database, no CMS — pure static site

## Design Rules (NON-NEGOTIABLE)
- Font: "Helvetica Neue", Helvetica, Arial, sans-serif — every text element, no exceptions
- Colors: #0A0A0A (black), #FFFFFF (white), #C4A882 (accent/sand)
- NO gradients, NO glassmorphism, NO rounded cards, NO box shadows on content
- Numbered section labels: 01 // Hero, 02 // About, 03 // Projects, 04 // Contact
- Thin horizontal rules (border-t border-black/15) between sections
- Specs/stats in clean data rows — NOT cards
- Generous negative space — resist the urge to fill it

## Tailwind v4 Notes
- Brand tokens live in globals.css under @theme: --color-accent, --font-sans, etc.
- Use class names like text-accent, bg-black, font-sans — they map to those tokens
- No tailwind.config.ts needed

## No-Em-Dash Rule
- Never use em dashes in copy. Use a comma, period, or rewrite the sentence.

## Chunk Discipline
- Read this file before every chunk
- One chunk at a time — commit and push after each
- Never overwrite working code without explicit instruction
- npm run build must pass before every push

## File Structure
```
src/
  app/
    layout.tsx          — root layout, metadata (no Google Fonts — system font only)
    page.tsx            — assembles all sections
    globals.css         — Tailwind v4 @import, @theme brand tokens, body reset
  components/
    Nav.tsx
    FadeIn.tsx
    sections/
      Hero.tsx
      About.tsx
      Projects.tsx
      Contact.tsx
```

## Commands
- Dev server: npm run dev
- Production build: npm run build
- Type check: npx tsc --noEmit

## Deployment
- Target: Vercel
- No environment variables required at runtime
