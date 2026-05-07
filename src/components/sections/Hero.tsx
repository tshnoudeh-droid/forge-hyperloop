"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { TiltCard } from "@/components/TiltCard";
import { GLSLHills } from "@/components/GLSLHills";

const cards = [
  {
    label: "The Problem",
    heading: "A world running on 20th-century infrastructure.",
    lines: [
      "30–45 day ocean voyages.",
      "602g CO₂ per tonne-km by air.",
      "$400B in food lost to spoilage.",
      "$4–8/kg to air freight semiconductors from Asian fabs.",
      "One canal carries 12% of global trade. One stuck ship proved it.",
    ],
    accent: false,
  },
  {
    label: "The Solution",
    heading: "Hyperloop at 1,000 km/h. Zero carbon. Fraction of the cost.",
    lines: [
      "Shanghai to Singapore in under 5 hours.",
      "Near-zero CO₂ on renewable energy.",
      "$1.50–3.00/kg. Faster than ocean. Cheaper than air.",
      "Sealed pods. Zero handling transfers.",
      "Automated dispatch. 24/7. No port dwell time.",
    ],
    accent: true,
  },
  {
    label: "The Mission",
    heading: "Build the global cargo network. Then open it to the world.",
    lines: [
      "Cargo first — clearest financial case.",
      "5 phases. 44,700 km. ~30 cities.",
      "$91.5B/year at network maturity. Less than 1% of global logistics.",
      "Passengers on the same infrastructure.",
      "Turn 30-day ocean voyages into a historical artifact.",
    ],
    accent: false,
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      <section
        ref={ref}
        id="hero"
        className="relative h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* GLSL Hills background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GLSLHills width="100%" height="100%" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full pt-32 pb-12">
          {/* Section label */}
          <FadeIn delay={0.85} variant="left">
            <span
              className="px-8 text-[10px] tracking-[0.35em] uppercase font-sans"
              style={{ color: "var(--hero-label)" }}
            >
              01 // Overview
            </span>
          </FadeIn>

          {/* Main headline — parallax on scroll */}
          <motion.div style={{ y }}>
            <FadeIn delay={1.0}>
              <h1
                className="text-[12vw] md:text-[9vw] lg:text-[8vw] font-medium leading-none tracking-[-0.02em] uppercase whitespace-normal sm:whitespace-nowrap text-center font-sans px-4"
                style={{ color: "#ffffff" }}
              >
                Forge Hyperloop
              </h1>
              <div
                className="border-t mt-4 mx-8"
                style={{ borderColor: "rgba(195, 169, 132, 0.4)" }}
              />
              <p
                className="text-center mt-5 text-[15px] tracking-[0.08em] font-sans"
                style={{ color: "var(--text-muted)" }}
              >
                Exists to connect the Earth.
              </p>
            </FadeIn>
          </motion.div>

          {/* Spacer to push headline up and keep bottom clean */}
          <div />
        </div>
      </section>

      {/* Bottom block — Problem / Solution / Mission */}
      <section className="relative z-10 px-8 pt-28 pb-32 bg-[var(--bg)] border-t" style={{ borderColor: "var(--hero-divider)" }}>

        {/* Statement anchor */}
        <FadeIn delay={0.05}>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.025em] leading-[0.95] mb-6 font-sans max-w-4xl"
            style={{ color: "var(--text)" }}
          >
            The infrastructure the 21st century was promised.
          </h2>
          <div className="border-t mt-10 mb-14" style={{ borderColor: "var(--accent-dim)" }} />
        </FadeIn>

        {/* Cards */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {cards.map(({ label, heading, lines, accent }) => (
              <TiltCard
                key={label}
                tiltLimit={8}
                scale={1.02}
                perspective={1000}
                effect="gravitate"
                spotlight
                className="rounded-sm border p-8 flex flex-col gap-5"
                style={{
                  borderColor: accent ? "rgba(195,169,132,0.5)" : "var(--accent-dim)",
                  background: accent
                    ? "rgba(195,169,132,0.06)"
                    : "rgba(255,255,255,0.02)",
                  minHeight: "380px",
                }}
              >
                <span
                  className="text-[9px] tracking-[0.35em] uppercase font-sans"
                  style={{ color: accent ? "var(--accent)" : "var(--text-subtle)" }}
                >
                  {label}
                </span>
                <p
                  className="text-[16px] md:text-[18px] font-medium leading-snug font-sans"
                  style={{ color: "var(--text)" }}
                >
                  {heading}
                </p>
                <div
                  className="border-t"
                  style={{ borderColor: accent ? "rgba(195,169,132,0.3)" : "var(--accent-dim)" }}
                />
                <ul className="space-y-3 flex-1">
                  {lines.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-[12px] leading-snug font-sans"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="mt-[3px] shrink-0 text-[8px]"
                        style={{ color: accent ? "var(--accent)" : "var(--text-subtle)" }}
                      >
                        ◆
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
