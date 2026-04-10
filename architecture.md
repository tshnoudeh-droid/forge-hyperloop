# Architecture — Forge Hyperloop

## Site Type
Static marketing site. No server-side data fetching, no auth, no API routes.
Output is pure HTML/CSS/JS — suitable for Vercel static deployment.

## Page Structure
Single route: `/` (app/page.tsx)
Imports and stacks four section components in scroll order.
Each section is fullscreen (min-h-screen) with internal padding.

## Component Tree
```
App
└── RootLayout (layout.tsx)
    ├── Nav (fixed, top-0, z-50)
    └── Page (page.tsx)
        ├── Hero      (01 // Hero)
        ├── About     (02 // About)
        ├── Projects  (03 // Projects)
        └── Contact   (04 // Contact)
```

## Styling System
- Tailwind CSS v4 — no tailwind.config.ts
- Brand tokens defined in globals.css @theme block:
  - --color-black: #0A0A0A
  - --color-white: #FFFFFF
  - --color-accent: #C4A882
  - --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif
- No third-party UI library

## Scroll Animations
- Framer Motion useInView + motion.div on content blocks in each section
- Fade-up (opacity 0 -> 1, y 16 -> 0) on enter, once: true
- respects prefers-reduced-motion via Framer's built-in support

## Data
- All content is hardcoded in component files
- Projects data lives in Projects.tsx as a typed array
- Stats live in About.tsx as a typed array
- Replace placeholder content directly in those files

## Deployment
- Vercel (auto-deploy from GitHub main branch)
- No environment variables required
- No dynamic routes, no API routes, no middleware
