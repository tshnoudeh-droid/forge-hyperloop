"use client";

import FadeIn from "@/components/FadeIn";
import { TiltCard } from "@/components/TiltCard";

const deckRows = [
  { label: "Format", value: "15 slides" },
  { label: "Coverage", value: "Problem, technology, economics, roadmap" },
  { label: "Phases", value: "5 phases, 44,700 km, 37 cities" },
];

export default function Deck() {
  return (
    <section
      id="deck"
      className="flex flex-col px-8 py-24"
    >
      <FadeIn variant="left">
        <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase font-sans"
            style={{ color: "var(--text-subtle)" }}
          >
            05 // Deck
          </span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <FadeIn delay={0.1}>
          <div>
            <h2
              className="text-3xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] mb-8 font-sans"
              style={{ color: "var(--text)" }}
            >
              The full picture,
              <br />
              in one document.
            </h2>
            <p
              className="text-base leading-[1.75] max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Five phases. One planet. The complete Forge Hyperloop pitch deck covers the problem, the technology, the network buildout, and the economics in 15 slides.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col gap-4">
            <TiltCard
              tiltLimit={6}
              scale={1.01}
              perspective={900}
              effect="gravitate"
              spotlight
              className="rounded-sm border"
              style={{ borderColor: "var(--accent-dim)", background: "rgba(255,255,255,0.02)" }}
            >
              {deckRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between px-6 py-5 ${i < deckRows.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase font-sans"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="text-sm font-sans"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </TiltCard>

            <a
              href="/Forge_Hyperloop_Deck.pptx"
              download
              className="inline-flex items-center gap-3 group self-start"
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-sans transition-colors duration-200 group-hover:text-accent"
                style={{ color: "var(--text-muted)" }}
              >
                Download Deck
              </span>
              <span
                className="text-xs font-sans transform group-hover:translate-y-0.5 transition-transform duration-200"
                style={{ color: "var(--accent)" }}
              >
                ↓
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
