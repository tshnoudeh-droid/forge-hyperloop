"use client";

import FadeIn from "@/components/FadeIn";

const stats = [
  { label: "Founded", value: "2026" },
  { label: "Founder", value: "Tawfic Alexander Shnoudeh" },
  { label: "Role", value: "Founder / Engineer" },
  { label: "Discipline", value: "Systems Engineering" },
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
                Forge Hyperloop is an independent engineering project focused on
                designing and testing competitive hyperloop technology. I build
                real hardware, run real simulations.
              </p>
              <p>
                Hyperloop is a proposed mode of passenger and cargo transport
                in which pods travel through a near-vacuum tube at speeds
                exceeding 1,000 km/h. I am working to make it real.
              </p>
              <p>
                My work spans mechanical engineering, electrical systems,
                software, and aerodynamics, driven by a single
                mission: connect the earth.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Stats table */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col justify-start pt-1">
            <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between py-5 border-b"
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
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
