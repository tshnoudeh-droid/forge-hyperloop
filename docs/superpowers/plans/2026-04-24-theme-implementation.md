# Theme System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the full dark/light token system from the design spec across globals.css, layout.tsx, ThemeProvider, and all five components (Nav, Hero, About, Projects, Contact, SocialIcons).

**Architecture:** Token-first — rewrite globals.css with all CSS custom properties first, then migrate each component to consume those tokens via inline styles. Hero-specific per-mode values (glow, label, divider) get their own CSS vars in globals.css so no JS theme detection is needed inside Hero. Google Fonts loaded via `next/font/google` (self-hosted by Next.js — no FOUC, no external request at runtime).

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4, next/font/google, next-themes

---

## File Map

| File | Action |
|---|---|
| `src/app/globals.css` | Complete rewrite — new token system |
| `src/app/layout.tsx` | Add next/font/google; inject font CSS var on `<html>` |
| `src/components/ThemeProvider.tsx` | Change `defaultTheme` to `"dark"` |
| `src/components/Nav.tsx` | Migrate hardcoded colors to CSS vars |
| `src/components/sections/Hero.tsx` | Migrate colors; add radial glow; use CSS vars |
| `src/components/sections/About.tsx` | Migrate hardcoded colors to CSS vars |
| `src/components/sections/Projects.tsx` | Migrate hardcoded colors to CSS vars |
| `src/components/sections/Contact.tsx` | Migrate hardcoded colors to CSS vars |
| `src/components/SocialIcons.tsx` | Migrate link color to CSS var |

---

## Task 1: Rewrite globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the entire file with the new token system**

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-serif: "Libre Baskerville", Georgia, serif;
  --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", monospace;
  --color-accent: #C3A984;
}

/* Dark mode (default) */
:root {
  --bg: #0E0E0C;
  --bg-2: #161614;
  --bg-3: #1C1C1A;
  --text: #ffffff;
  --text-muted: rgba(203, 201, 196, 0.6);
  --text-subtle: rgba(203, 201, 196, 0.3);
  --accent: #C3A984;
  --accent-dim: rgba(195, 169, 132, 0.3);
  --panel-bg: rgba(14, 14, 12, 0.75);

  /* Hero per-mode values — differ between dark and light */
  --hero-glow: rgba(195, 169, 132, 0.07);
  --hero-label: rgba(195, 169, 132, 0.75);
  --hero-divider: rgba(195, 169, 132, 0.5);

  /* Globe tokens — no Globe component yet, reserved for future use */
  --globe-arc-idle: rgba(195, 169, 132, 0.95);
  --globe-arc-hover: rgba(255, 255, 255, 0.95);
  --globe-city: rgba(195, 169, 132, 0.95);
  --globe-label: rgba(255, 255, 255, 0.92);
  --globe-atmo: #1a3a6e;
  --globe-panel-border: rgba(195, 169, 132, 0.25);
  --globe-tooltip-border: rgba(195, 169, 132, 0.25);
}

/* Light mode overrides */
.light {
  --bg: #FFFFFF;
  --bg-2: #F5F3F0;
  --bg-3: #EAE7E2;
  --text: #0E0E0C;
  --text-muted: rgba(14, 14, 12, 0.5);
  --text-subtle: rgba(14, 14, 12, 0.28);
  --accent: #C3A984;
  --accent-dim: rgba(195, 169, 132, 0.25);
  --panel-bg: rgba(255, 255, 255, 0.88);

  --hero-glow: rgba(195, 169, 132, 0.09);
  --hero-label: rgba(195, 169, 132, 0.85);
  --hero-divider: rgba(195, 169, 132, 0.4);

  --globe-atmo: #4a90d9;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-libre-baskerville), "Libre Baskerville", Georgia, serif;
  background-color: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

> Note: `--font-libre-baskerville` is injected by next/font in Task 2. The fallback chain after it ensures the correct font even on first paint.

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds. (Font var `--font-libre-baskerville` is undefined at this point but the fallback chain handles it — no build error.)

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: replace globals.css with full dark/light token system"
```

---

## Task 2: Load Libre Baskerville via next/font

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx with the following**

```tsx
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Forge Hyperloop",
  description: "Student engineers designing and building the next generation of hyperloop systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={libreBaskerville.variable}>
      <body>
        <ThemeProvider>
          <PageTransition />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

> `libreBaskerville.variable` adds class `--font-libre-baskerville` (a CSS custom property) to `<html>`. `globals.css` body rule reads it. next/font self-hosts the font — no external Google CDN request at runtime.

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: load Libre Baskerville via next/font/google"
```

---

## Task 3: Set dark as default theme

**Files:**
- Modify: `src/components/ThemeProvider.tsx`

- [ ] **Step 1: Change defaultTheme from "light" to "dark"**

Replace the entire file:

```tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  )
}
```

> next-themes adds class `"dark"` or `"light"` to `<html>`. `:root` holds dark values. `.light` overrides them when the user switches. No class means dark (`:root` wins).

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/ThemeProvider.tsx
git commit -m "feat: set dark as default theme"
```

---

## Task 4: Migrate Nav colors

**Files:**
- Modify: `src/components/Nav.tsx`

- [ ] **Step 1: Replace Nav.tsx with the following**

```tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="w-4 h-4" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{ color: "var(--text-muted)" }}
      className="hover:text-accent transition-colors duration-200"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <span
        className="text-[11px] font-medium tracking-[0.25em] uppercase"
        style={{ fontFamily: "var(--font-sans)", color: "var(--text)" }}
      >
        Forge Hyperloop
      </span>
      <div className="flex items-center gap-10">
        <a
          href="#about"
          className="text-[11px] tracking-[0.2em] uppercase hover:text-accent transition-colors duration-200"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[11px] tracking-[0.2em] uppercase hover:text-accent transition-colors duration-200"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[11px] tracking-[0.2em] uppercase hover:text-accent transition-colors duration-200"
          style={{ fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}
        >
          Contact
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
```

> Nav wordmark and links use `font-sans` (Helvetica Neue) — these are UI chrome, not body content.

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat: migrate Nav colors to CSS token system"
```

---

## Task 5: Migrate Hero colors

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Replace Hero.tsx with the following**

```tsx
"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const GLSLHills = dynamic(
  () => import("@/components/GLSLHills").then((m) => m.GLSLHills),
  { ssr: false }
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Radial accent glow — switches opacity via --hero-glow CSS var */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, var(--hero-glow) 0%, transparent 100%)",
        }}
      />

      {/* GLSL Hills */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.62]">
        <GLSLHills width="100%" height="100%" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen pt-32 pb-12">
        {/* Section label */}
        <FadeIn delay={0.85} variant="left">
          <span
            className="px-8 text-[10px] tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: "var(--hero-label)" }}
          >
            01 // Overview
          </span>
        </FadeIn>

        {/* Main headline — parallax on scroll */}
        <motion.div style={{ y }}>
          <FadeIn delay={1.0}>
            <h1
              className="text-[9.5vw] font-medium leading-[0.88] tracking-[-0.02em] uppercase whitespace-nowrap text-center"
              style={{ fontFamily: "var(--font-sans)", color: "var(--text)" }}
            >
              Forge Hyperloop
            </h1>
            {/* Top rule — rgba(195,169,132,0.4) in both dark and light */}
            <div
              className="border-t mt-4 mx-8"
              style={{ borderColor: "rgba(195, 169, 132, 0.4)" }}
            />
          </FadeIn>
        </motion.div>

        {/* Bottom row */}
        <FadeIn delay={1.15}>
          <div className="px-8">
            {/* Divider — 0.5 dark / 0.4 light, switches via --hero-divider */}
            <div
              className="border-t mb-8"
              style={{ borderColor: "var(--hero-divider)" }}
            />
            <div className="flex items-end justify-between">
              <p
                className="text-sm tracking-[0.03em] leading-relaxed max-w-xs"
                style={{ color: "var(--text-muted)" }}
              >
                One engineer. One mission.
                <br />
                Building the next generation of hyperloop systems.
              </p>
              <div className="flex flex-col items-center gap-3">
                <span
                  className="text-[9px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--text-subtle)" }}
                >
                  Scroll
                </span>
                <div
                  className="w-px h-14"
                  style={{ background: "var(--accent-dim)" }}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
```

> Hero does NOT use `useTheme()`. Per-mode values (glow, label, divider) are CSS vars defined in `:root` and `.light` in globals.css — they switch automatically when next-themes adds/removes the `.light` class on `<html>`.

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: migrate Hero colors to CSS token system"
```

---

## Task 6: Migrate About colors

**Files:**
- Modify: `src/components/sections/About.tsx`

- [ ] **Step 1: Replace About.tsx with the following**

```tsx
"use client";

import FadeIn from "@/components/FadeIn";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Role", value: "Founder / Engineer" },
  { label: "Competition", value: "European Hyperloop Week" },
  { label: "Discipline", value: "Systems Engineering" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
    >
      {/* Rule + label */}
      <FadeIn variant="left">
        <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase"
            style={{ color: "var(--text-subtle)" }}
          >
            02 // About
          </span>
        </div>
      </FadeIn>

      {/* Two-column: copy left, stats right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Copy */}
        <FadeIn delay={0.1}>
          <div>
            <h2
              className="text-3xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] mb-10"
              style={{ color: "var(--text)" }}
            >
              Engineering the future
              <br />
              of ground transport.
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.75] max-w-sm" style={{ color: "var(--text-muted)" }}>
              <p>
                Forge Hyperloop is an independent engineering project focused on
                designing and testing competitive hyperloop technology. I build
                real hardware, run real simulations, and compete at international
                events.
              </p>
              <p>
                Hyperloop is a proposed mode of passenger and cargo transport
                in which pods travel through a near-vacuum tube at speeds
                exceeding 1,000 km/h. I am working to make it real.
              </p>
              <p>
                My work spans mechanical engineering, electrical systems,
                software, and aerodynamics, driven by a single
                mission: build a pod that competes.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Stats table */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col justify-start pt-1">
            <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between py-5 border-b"
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-[13px] font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/About.tsx
git commit -m "feat: migrate About colors to CSS token system"
```

---

## Task 7: Migrate Projects colors

**Files:**
- Modify: `src/components/sections/Projects.tsx`

- [ ] **Step 1: Replace Projects.tsx with the following**

```tsx
"use client";

import FadeIn from "@/components/FadeIn";

interface Project {
  id: string;
  index: string;
  name: string;
  discipline: string;
  status: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "pod-structure",
    index: "001",
    name: "Pod Structure",
    discipline: "Mechanical Engineering",
    status: "In Development",
    description:
      "Carbon fiber monocoque chassis optimized for minimal drag inside a low-pressure tube environment.",
  },
  {
    id: "propulsion",
    index: "002",
    name: "Propulsion System",
    discipline: "Electrical / Mechanical",
    status: "Research Phase",
    description:
      "Linear induction motor array providing contactless acceleration along a passive aluminum track.",
  },
  {
    id: "levitation",
    index: "003",
    name: "Magnetic Levitation",
    discipline: "Electrical Engineering",
    status: "Prototyping",
    description:
      "Passive Halbach array configuration for stable levitation at low operational cost.",
  },
  {
    id: "track-sim",
    index: "004",
    name: "Track Simulation",
    discipline: "Software / CFD",
    status: "Active",
    description:
      "High-fidelity computational fluid dynamics model of the pod operating inside the tube.",
  },
  {
    id: "braking",
    index: "005",
    name: "Braking System",
    discipline: "Mechanical Engineering",
    status: "Design Review",
    description:
      "Eddy current braking with mechanical failsafe for controlled emergency deceleration.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
    >
      {/* Rule + label */}
      <FadeIn variant="left">
        <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase"
            style={{ color: "var(--text-subtle)" }}
          >
            03 // Projects
          </span>
        </div>
      </FadeIn>

      {/* Section heading */}
      <FadeIn delay={0.1}>
        <h2
          className="text-3xl md:text-[2.6rem] font-medium tracking-[-0.015em] mb-16"
          style={{ color: "var(--text)" }}
        >
          Active systems.
        </h2>
      </FadeIn>

      {/* Project rows */}
      <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.06}>
            <div
              className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_11rem_8rem] items-baseline gap-x-8 gap-y-1 py-6 border-b"
              style={{ borderColor: "var(--accent-dim)" }}
            >
              {/* Index */}
              <span
                className="text-[10px] tracking-[0.2em] pt-px"
                style={{ color: "var(--accent)" }}
              >
                {project.index}
              </span>

              {/* Name + description */}
              <div>
                <p
                  className="text-[13px] font-medium mb-1.5 transition-colors duration-200 group-hover:text-accent"
                  style={{ color: "var(--text)" }}
                >
                  {project.name}
                </p>
                <p
                  className="text-[12px] leading-relaxed md:hidden"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
              </div>

              {/* Discipline — desktop only */}
              <span
                className="hidden md:block text-[10px] tracking-[0.15em] uppercase self-start pt-px"
                style={{ color: "var(--text-subtle)" }}
              >
                {project.discipline}
              </span>

              {/* Status — desktop only */}
              <span
                className="hidden md:block text-[10px] tracking-[0.15em] uppercase self-start pt-px text-right"
                style={{ color: "var(--text-subtle)" }}
              >
                {project.status}
              </span>

              {/* Description — desktop only */}
              <div className="hidden md:block col-start-2 col-end-5">
                <p
                  className="text-[12px] leading-relaxed mt-2 max-w-xl"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Projects.tsx
git commit -m "feat: migrate Projects colors to CSS token system"
```

---

## Task 8: Migrate Contact colors

**Files:**
- Modify: `src/components/sections/Contact.tsx`

- [ ] **Step 1: Replace Contact.tsx with the following**

```tsx
"use client";

import FadeIn from "@/components/FadeIn";
import SocialIcons from "@/components/SocialIcons";

const contactRows = [
  {
    label: "Email",
    display: "tawficshnoudeh@gmail.com",
    href: "mailto:tawficshnoudeh@gmail.com",
  },
  {
    label: "LinkedIn",
    display: "/in/tawficshnoudeh",
    href: "https://linkedin.com/in/tawficshnoudeh",
  },
  {
    label: "Website",
    display: "tawficshnoudeh.com",
    href: "https://tawficshnoudeh.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col justify-between px-8 py-24"
    >
      <div>
        {/* Rule + label */}
        <FadeIn variant="left">
          <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
            <span
              className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "var(--text-subtle)" }}
            >
              04 // Contact
            </span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-[2.6rem] font-medium tracking-[-0.015em] mb-16 leading-tight"
            style={{ color: "var(--text)" }}
          >
            Get in touch.
          </h2>
        </FadeIn>

        {/* Contact rows */}
        <FadeIn delay={0.2}>
          <div className="border-t max-w-sm" style={{ borderColor: "var(--accent-dim)" }}>
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between py-5 border-b"
                style={{ borderColor: "var(--accent-dim)" }}
              >
                <span
                  className="text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {row.label}
                </span>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[13px] hover:text-accent transition-colors duration-200"
                  style={{ color: "var(--accent)" }}
                >
                  {row.display}
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Footer — wordmark left, social icons center, year right */}
      <FadeIn delay={0.15}>
        <div
          className="flex items-center justify-between border-t pt-8"
          style={{ borderColor: "var(--accent-dim)" }}
        >
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "var(--text-subtle)" }}
          >
            Forge Hyperloop
          </span>
          <SocialIcons />
          <span
            className="text-[10px] tracking-[0.15em]"
            style={{ color: "var(--text-subtle)" }}
          >
            {new Date().getFullYear()}
          </span>
        </div>
      </FadeIn>
    </section>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Contact.tsx
git commit -m "feat: migrate Contact colors to CSS token system"
```

---

## Task 9: Migrate SocialIcons colors

**Files:**
- Modify: `src/components/SocialIcons.tsx`

- [ ] **Step 1: Replace SocialIcons.tsx with the following**

```tsx
"use client";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

const links: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:tawficshnoudeh@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tawficshnoudeh",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Website",
    href: "https://tawficshnoudeh.com",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="hover:text-accent transition-colors duration-200"
          style={{ color: "var(--text-subtle)" }}
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/SocialIcons.tsx
git commit -m "feat: migrate SocialIcons colors to CSS token system"
```

---

## Task 10: Final verification

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: Build succeeds with 0 errors, 0 TypeScript errors.

- [ ] **Step 2: Run dev server and visually verify**

```bash
npm run dev
```

Open `http://localhost:3000` and check:

| Check | Expected |
|---|---|
| First load, no stored preference | Page loads in dark mode (`#0E0E0C` background) |
| Hero H1 font | Helvetica Neue (sans-serif, no serifs) |
| Hero body subtitle | Libre Baskerville (serifs visible) |
| About/Projects/Contact headings | Libre Baskerville |
| Section dividers | Accent-dim gold, subtle — not white/black |
| Toggle to light mode | Background switches to `#FFFFFF`, text to `#0E0E0C` |
| Accent color in light mode | Same `#C3A984` gold |
| Section labels (01 //, 02 //, etc.) | Subtle gold, lighter than accent links |
| Stat values and project indices | Brighter gold `#C3A984` |
| Hero glow in dark mode | Very subtle warm radial gradient visible center |
| Hero glow in light mode | Slightly stronger (0.09 vs 0.07) but still subtle |

- [ ] **Step 3: Confirm no hardcoded legacy colors remain**

```bash
grep -rn "text-black\|text-white\|dark:text\|#0A0A0A\|#FFFFFF\|/50\|/55\|/45\|/40\|/30\|/20" src/components/ src/app/
```

Expected: Only matches inside `globals.css` comments or zero matches in components.

- [ ] **Step 4: Commit if any last-minute fixes were needed**

```bash
git add -p
git commit -m "fix: clean up any remaining legacy color references"
```
