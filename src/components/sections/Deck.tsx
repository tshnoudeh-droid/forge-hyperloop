"use client";

import FadeIn from "@/components/FadeIn";

export default function Deck() {
  return (
    <section id="deck" className="px-8 py-16">
      <FadeIn variant="left">
        <div className="border-t mb-8" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase font-sans"
            style={{ color: "var(--text-subtle)" }}
          >
            05 // Deck
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <a
          href="/Forge_Hyperloop_Deck.pdf"
          download
          className="group inline-flex items-baseline gap-4"
        >
          <span
            className="text-sm font-sans transition-colors duration-200 group-hover:text-accent"
            style={{ color: "var(--text-muted)" }}
          >
            Forge Hyperloop — Pitch Deck
          </span>
          <span
            className="text-[11px] font-sans transform group-hover:translate-y-0.5 transition-transform duration-200"
            style={{ color: "var(--accent)" }}
          >
            ↓ PDF
          </span>
        </a>
      </FadeIn>
    </section>
  );
}
