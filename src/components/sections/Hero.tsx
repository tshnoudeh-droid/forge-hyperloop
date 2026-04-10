"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-8 pt-32 pb-12 overflow-hidden"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Section label */}
      <FadeIn delay={0.1} variant="left">
        <span className="text-[10px] tracking-[0.35em] uppercase text-accent/60">
          01 // Overview
        </span>
      </FadeIn>

      {/* Main headline — parallax on scroll */}
      <motion.div style={{ y }}>
        <FadeIn delay={0.2}>
          <h1 className="text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.88] tracking-[-0.02em] text-black uppercase">
            Forge
            <br />
            Hyperloop
          </h1>
        </FadeIn>
      </motion.div>

      {/* Bottom row */}
      <FadeIn delay={0.35}>
        <div className="border-t border-black/15 mb-8" />
        <div className="flex items-end justify-between">
          <p className="text-sm tracking-[0.03em] text-black/50 leading-relaxed max-w-xs">
            One engineer. One mission.
            <br />
            Building the next generation of hyperloop systems.
          </p>
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-accent/50">
              Scroll
            </span>
            <div className="w-px h-14 bg-accent/40" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
