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
              style={{ color: "var(--text)" }}
            >
              Forge Hyperloop
            </h1>
            {/* Top rule — rgba(195,169,132,0.4) in both dark and light */}
            <div
              className="border-t mt-4 mx-8"
              style={{ borderColor: "rgba(195, 169, 132, 0.4)" }}
            />
            {/* Tagline */}
            <p
              className="text-center mt-5 text-[15px] tracking-[0.08em] font-sans"
              style={{ color: "var(--text-muted)" }}
            >
              Exists to connect the Earth.
            </p>
          </FadeIn>
        </motion.div>

        {/* Site links — Network + Lab */}
        <FadeIn delay={1.08}>
          <div className="mx-8 grid grid-cols-1 sm:grid-cols-2">
            <a
              href="https://network.forgehyperloop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 sm:pr-8 sm:border-r border-b sm:border-b-0"
              style={{ borderColor: "var(--accent-dim)" }}
            >
              <div className="text-[9px] tracking-[0.3em] uppercase font-sans mb-2" style={{ color: "var(--text-subtle)" }}>Network</div>
              <div className="text-[11px] font-medium font-sans mb-1" style={{ color: "var(--accent)" }}>network.forgehyperloop.com</div>
              <div className="text-[11px] leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>A global infrastructure simulation connecting 29 cities across 6 continents.</div>
            </a>
            <a
              href="https://lab.forgehyperloop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 sm:pl-8"
            >
              <div className="text-[9px] tracking-[0.3em] uppercase font-sans mb-2" style={{ color: "var(--text-subtle)" }}>Lab</div>
              <div className="text-[11px] font-medium font-sans mb-1" style={{ color: "var(--accent)" }}>lab.forgehyperloop.com</div>
              <div className="text-[11px] leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>The blueprint behind the hyperloop infrastructure.</div>
            </a>
          </div>
        </FadeIn>

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
                className="text-base tracking-[0.03em] leading-relaxed max-w-xs"
                style={{ color: "var(--text-muted)" }}
              >
                One engineer. One mission.
                <br />
                Building the next generation of hyperloop systems.
              </p>
              <div className="flex flex-col items-center gap-3">
                <span
                  className="text-[9px] tracking-[0.3em] uppercase font-sans"
                  style={{ color: "var(--text-subtle)" }}
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
