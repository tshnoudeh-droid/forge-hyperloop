"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const GLSLHills = dynamic(
  () => import("@/components/GLSLHills").then((m) => m.GLSLHills),
  { ssr: false }
);
const HeroGlobe = dynamic(() => import("@/components/HeroGlobe"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Layer 0: GLSL Hills */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <GLSLHills width="100%" height="100%" speed={0.4} />
      </div>

      {/* Layer 1: Globe centered */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <HeroGlobe size={680} />
      </div>

      {/* Content above layers */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen pt-32 pb-12">
        {/* Section label */}
        <FadeIn delay={0.1} variant="left">
          <span className="px-8 text-[10px] tracking-[0.35em] uppercase text-accent/60">
            01 // Overview
          </span>
        </FadeIn>

        {/* Main headline — parallax on scroll */}
        <motion.div style={{ y }}>
          <FadeIn delay={0.2}>
            <h1 className="text-[9.5vw] font-medium leading-[0.88] tracking-[-0.02em] text-black dark:text-white uppercase whitespace-nowrap text-center">
              Forge Hyperloop
            </h1>
            <div className="border-t border-accent mt-4 mx-8" />
          </FadeIn>
        </motion.div>

        {/* Bottom row */}
        <FadeIn delay={0.35}>
          <div className="px-8">
            <div className="border-t border-accent/20 dark:border-accent/20 mb-8" />
            <div className="flex items-end justify-between">
              <p className="text-sm tracking-[0.03em] text-black/50 dark:text-white/50 leading-relaxed max-w-xs">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
