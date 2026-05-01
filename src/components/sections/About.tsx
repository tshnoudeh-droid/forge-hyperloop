"use client";

import FadeIn from "@/components/FadeIn";
import { TiltCard } from "@/components/TiltCard";

const stats = [
  { label: "Founded", value: "2026" },
  { label: "Founder", value: "Tawfic Alexander Shnoudeh" },
  { label: "Role", value: "Founder / Engineer" },
  { label: "Discipline", value: "Systems Engineering" },
  { label: "Strategy", value: "Cargo first. Passengers second." },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
    >
      {/* Rule + label */}
      <FadeIn variant="left">
        <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase font-sans"
            style={{ color: "var(--text-subtle)" }}
          >
            02 // About
          </span>
        </div>
      </FadeIn>

      {/* Two-column: copy left, stats right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Copy */}
        <FadeIn delay={0.1}>
          <div>
            <h2
              className="text-3xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] mb-10 font-sans"
              style={{ color: "var(--text)" }}
            >
              Engineering the future
              <br />
              of ground transport.
            </h2>
            <div className="space-y-5 text-base leading-[1.75] max-w-sm" style={{ color: "var(--text-muted)" }}>
              <p>
                Forge Hyperloop is an independent engineering project building real hyperloop technology from first principles. Hardware, simulation, and systems design. One person.
              </p>
              <p>
                Hyperloop moves sealed pods through a near-vacuum tube at speeds above 1,000 km/h. No jet fuel. No container ships. No dependency on a canal that can be blocked by a single stuck freighter.
              </p>
              <p>
                My work spans mechanical engineering, electrical systems,
                software, and aerodynamics, driven by a single
                mission: connect the earth.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Stats table — TiltCard */}
        <FadeIn delay={0.2}>
          <TiltCard
            tiltLimit={6}
            scale={1.01}
            perspective={900}
            effect="gravitate"
            spotlight
            className="rounded-sm border"
            style={{ borderColor: "var(--accent-dim)", background: "rgba(255,255,255,0.02)" }}
          >
            <div>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-baseline justify-between px-6 py-5 ${i < stats.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase font-sans"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-sm font-medium font-sans"
                    style={{ color: "var(--accent)" }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </TiltCard>
        </FadeIn>

      </div>
    </section>
  );
}
