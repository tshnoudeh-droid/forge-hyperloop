"use client";

import FadeIn from "@/components/FadeIn";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Role", value: "Founder / Engineer" },
  { label: "Competition", value: "European Hyperloop Week" },
  { label: "Discipline", value: "Systems Engineering" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Rule + label */}
      <FadeIn variant="left">
        <div className="border-t border-black/15 mb-12">
          <span className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase text-accent/60">
            02 // About
          </span>
        </div>
      </FadeIn>

      {/* Two-column: copy left, stats right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Copy */}
        <FadeIn delay={0.1}>
          <div>
            <h2 className="text-3xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] text-black mb-10">
              Engineering the future
              <br />
              of ground transport.
            </h2>
            <div className="space-y-5 text-[13px] text-black/55 leading-[1.75] max-w-sm">
              <p>
                Forge Hyperloop is an independent engineering project focused on
                designing and testing competitive hyperloop technology. I build
                real hardware, run real simulations, and compete at international
                events.
              </p>
              <p>
                Hyperloop is a proposed mode of passenger and cargo transport
                in which pods travel through a near-vacuum tube at speeds
                exceeding 1,000 km/h. I am working to make it real.
              </p>
              <p>
                My work spans mechanical engineering, electrical systems,
                software, and aerodynamics, driven by a single
                mission: build a pod that competes.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Stats table */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col justify-start pt-1">
            <div className="border-t border-black/15">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between py-5 border-b border-black/10"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase text-black/35">
                    {stat.label}
                  </span>
                  <span className="text-[13px] font-medium text-accent">
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
