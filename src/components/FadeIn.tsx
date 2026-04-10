"use client";

import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "framer-motion";

type Variant = "up" | "left";

const variants: Record<Variant, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  up: {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
  },
  left: {
    initial: { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0 },
  },
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
}

export default function FadeIn({ children, delay = 0, className, variant = "up" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const v = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial={v.initial}
      animate={isInView ? v.animate : v.initial}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
