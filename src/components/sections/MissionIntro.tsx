"use client";

import FadeIn from "@/components/FadeIn";
import { TiltCard } from "@/components/TiltCard";

const cards = [
  {
    label: "The Problem",
    heading: "A world running on 20th-century infrastructure.",
    lines: [
      "30–45 day ocean voyages.",
      "602g CO₂ per tonne-km by air.",
      "$400B in food lost to spoilage.",
      "$8/kg freight for semiconductors.",
      "One canal blocks 12% of global trade.",
    ],
    accent: false,
  },
  {
    label: "The Solution",
    heading: "Hyperloop at 1,000 km/h. Zero carbon. Fraction of the cost.",
    lines: [
      "Shanghai to Singapore in under 5 hours.",
      "Near-zero CO₂ on renewable energy.",
      "$1.50–3.00/kg — between ocean and air.",
      "Sealed pods. Zero handling transfers.",
      "Continuous, automated, 24/7 network.",
    ],
    accent: true,
  },
  {
    label: "The Mission",
    heading: "Build the global cargo network. Then open it to the world.",
    lines: [
      "Cargo first — clearest financial case.",
      "5 phases. 44,700 km. 30 cities.",
      "$91B/year revenue at network maturity.",
      "Passengers on the same infrastructure.",
      "Make 30-day voyages a historical artifact.",
    ],
    accent: false,
  },
];

export default function MissionIntro() {
  return (
    <section
      className="px-8 py-16"
      style={{ background: "var(--bg)" }}
    >
      {/* Side-by-side mission statement */}
      <FadeIn>
        <div
          className="border-t pb-10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start"
          style={{ borderColor: "var(--hero-divider)" }}
        >
          {/* Left: big headline */}
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.05] font-sans"
            style={{ color: "var(--text)" }}
          >
            One engineer.<br />One mission.
          </p>

          {/* Right: subtitle */}
          <div className="flex items-center h-full">
            <p
              className="text-lg leading-relaxed font-sans"
              style={{ color: "var(--text-muted)" }}
            >
              Building the next generation<br />of hyperloop systems.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Problem / Solution / Mission cards */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {cards.map(({ label, heading, lines, accent }) => (
            <TiltCard
              key={label}
              tiltLimit={8}
              scale={1.02}
              perspective={1000}
              effect="gravitate"
              spotlight
              className="rounded-sm border p-6 flex flex-col gap-4"
              style={{
                borderColor: accent ? "rgba(195,169,132,0.5)" : "var(--accent-dim)",
                background: accent
                  ? "rgba(195,169,132,0.06)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              <span
                className="text-[9px] tracking-[0.35em] uppercase font-sans"
                style={{ color: accent ? "var(--accent)" : "var(--text-subtle)" }}
              >
                {label}
              </span>
              <p
                className="text-[13px] font-medium leading-snug font-sans"
                style={{ color: "var(--text)" }}
              >
                {heading}
              </p>
              <div
                className="border-t"
                style={{ borderColor: accent ? "rgba(195,169,132,0.3)" : "var(--accent-dim)" }}
              />
              <ul className="space-y-2">
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
  );
}
