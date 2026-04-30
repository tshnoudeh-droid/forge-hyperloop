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
      className="relative h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Radial accent glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, var(--hero-glow) 0%, transparent 100%)",
        }}
      />

      {/* GLSL Hills — fills the whole viewport hero */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.62]">
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
              style={{ color: "var(--text)" }}
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

        {/* Bottom: scroll indicator only */}
        <FadeIn delay={1.1}>
          <div className="px-8">
            <div
              className="border-t mb-6"
              style={{ borderColor: "var(--hero-divider)" }}
            />
            <div className="flex justify-end">
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
