"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { TiltCard } from "@/components/TiltCard";

const labModules = ["Conduit", "Flux", "Shell"];

function LabCard() {
  const [open, setOpen] = useState(false);

  return (
    <TiltCard
      tiltLimit={6}
      scale={1.02}
      perspective={900}
      effect="gravitate"
      spotlight
      className="rounded-sm"
      style={{ background: "transparent" }}
    >
      <a
        href="https://lab.forgehyperloop.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div
          className="relative w-full aspect-[16/10] overflow-hidden border-b"
          style={{ borderColor: "var(--accent-dim)" }}
        >
          <Image
            src="/lab.png"
            alt="Lab"
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </a>

      <div
        className="border border-t-0 px-5 py-4"
        style={{ borderColor: "var(--accent-dim)" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1 min-w-0">
            <p
              className="text-[13px] font-medium font-sans"
              style={{ color: "var(--text)" }}
            >
              Lab
            </p>
            <p
              className="text-[11px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Physics models, cost models, and route logic for every segment of the network. The engineering foundation, made transparent.
            </p>
            <p
              className="text-[10px] tracking-[0.1em] font-sans mt-1"
              style={{ color: "var(--accent)" }}
            >
              lab.forgehyperloop.com
            </p>
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle modules"
            className="shrink-0 text-[11px] font-sans transition-colors duration-200 mt-0.5"
            style={{ color: open ? "var(--accent)" : "var(--text-subtle)" }}
          >
            {open ? "▲" : "▼"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div
                className="border-t mt-4 pt-3"
                style={{ borderColor: "var(--accent-dim)" }}
              >
                {labModules.map((mod) => (
                  <div
                    key={mod}
                    className="flex items-center justify-between py-2.5 border-b last:border-b-0"
                    style={{ borderColor: "var(--accent-dim)" }}
                  >
                    <span
                      className="text-[12px] font-sans"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {mod}
                    </span>
                    <span
                      className="text-[9px] tracking-[0.25em] uppercase font-sans"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      Module
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TiltCard>
  );
}

function AppCard({
  href,
  src,
  alt,
  name,
  desc,
  url,
}: {
  href: string;
  src: string;
  alt: string;
  name: string;
  desc: string;
  url: string;
}) {
  return (
    <TiltCard
      tiltLimit={6}
      scale={1.02}
      perspective={900}
      effect="gravitate"
      spotlight
      className="rounded-sm"
      style={{ background: "transparent" }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
        <div
          className="relative w-full aspect-[16/10] overflow-hidden border-b"
          style={{ borderColor: "var(--accent-dim)" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div
          className="border border-t-0 px-5 py-4 flex flex-col gap-1"
          style={{ borderColor: "var(--accent-dim)" }}
        >
          <p className="text-[13px] font-medium font-sans" style={{ color: "var(--text)" }}>
            {name}
          </p>
          <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {desc}
          </p>
          <p className="text-[10px] tracking-[0.1em] font-sans mt-1" style={{ color: "var(--accent)" }}>
            {url}
          </p>
        </div>
      </a>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
    >
      <FadeIn variant="left">
        <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase font-sans"
            style={{ color: "var(--text-subtle)" }}
          >
            03 // Projects
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          className="text-3xl md:text-[2.6rem] font-medium tracking-[-0.015em] mb-16"
          style={{ color: "var(--text)" }}
        >
          Software. Built to prove the network is real.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Network */}
        <FadeIn delay={0}>
          <AppCard
            href="https://network.forgehyperloop.com"
            src="/network.png"
            alt="Network"
            name="Network"
            desc="A live 3D simulation of the full network. 30 cities. 6 continents. Every route, every phase."
            url="network.forgehyperloop.com"
          />
        </FadeIn>

        {/* Lab */}
        <FadeIn delay={0.08}>
          <LabCard />
        </FadeIn>

        {/* Orbit */}
        <FadeIn delay={0.16}>
          <AppCard
            href="https://orbit.tawficshnoudeh.com"
            src="/orbit.png"
            alt="Orbit"
            name="Orbit"
            desc="A trip planning simulation. Models cargo routing decisions, transit times, and cost comparisons against current logistics options. Built to show the use case is understood, not assumed."
            url="orbit.tawficshnoudeh.com"
          />
        </FadeIn>
      </div>
    </section>
  );
}
