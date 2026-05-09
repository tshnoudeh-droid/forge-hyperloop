"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const phases = [
  {
    id: "Phase 1",
    name: "The Asian Spine",
    km: "8,100 km",
    cities: "Singapore, Kuala Lumpur, Bangkok, Yangon, Dhaka, Kolkata, Kathmandu, Delhi, Mumbai",
    timeline: "Years 1–7",
  },
  {
    id: "Phase 2",
    name: "East Asia Integration",
    km: "7,200 km",
    cities: "Shanghai, Beijing, Seoul, Tokyo, Ho Chi Minh City, Manila",
    timeline: "Years 5–12",
  },
  {
    id: "Phase 3",
    name: "Europe–Middle East Link",
    km: "9,400 km",
    cities: "Dubai, Riyadh, Istanbul, Warsaw, Berlin, Paris, London",
    timeline: "Years 8–16",
  },
  {
    id: "Phase 4",
    name: "Africa + Americas",
    km: "11,600 km",
    cities: "Cairo, Lagos, Johannesburg, New York, Chicago, Los Angeles, São Paulo",
    timeline: "Years 12–22",
  },
  {
    id: "Phase 5",
    name: "Full Global Grid",
    km: "44,700 km total",
    cities: "37 cities. 6 continents. Every major trade corridor.",
    timeline: "Years 18–30",
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="flex flex-col px-8 py-24"
    >
      <FadeIn variant="left">
        <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-[12px] tracking-[0.35em] uppercase font-sans"
            style={{ color: "var(--text-subtle)" }}
          >
            03 // Vision
          </span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left: copy */}
        <FadeIn delay={0.1}>
          <div>
            <h2
              className="text-3xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] mb-8 font-sans"
              style={{ color: "var(--text)" }}
            >
              5 phases.<br />37 cities.<br />6 continents.
            </h2>
            <p
              className="text-base leading-[1.75] max-w-sm mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Build starts in Southeast Asia, where cargo demand is highest and political alignment is achievable. Each phase funds the next. The network reaches full global scale in 30 years.
            </p>
            <a
              href="https://network.forgehyperloop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.2em] uppercase font-sans transition-colors duration-200 hover:text-accent inline-flex items-center gap-2"
              style={{ color: "var(--accent)" }}
            >
              Explore the live 3D network →
            </a>
          </div>
        </FadeIn>

        {/* Right: phases table */}
        <FadeIn delay={0.2}>
          <div
            className="border"
            style={{ borderColor: "var(--accent-dim)" }}
          >
            {phases.map((phase, i) => (
              <div
                key={phase.id}
                className={`px-6 py-5 ${i < phases.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--accent-dim)" }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <span
                    className="text-[12px] tracking-[0.25em] uppercase font-sans"
                    style={{ color: "var(--accent)" }}
                  >
                    {phase.id}
                  </span>
                  <span
                    className="text-[12px] tracking-[0.15em] uppercase font-sans"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {phase.timeline}
                  </span>
                </div>
                <p
                  className="text-[15px] font-medium font-sans mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {phase.name}
                </p>
                <p
                  className="text-[13px] leading-relaxed font-sans"
                  style={{ color: "var(--text-muted)" }}
                >
                  {phase.cities}
                </p>
                <p
                  className="text-[12px] mt-1 font-sans"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {phase.km}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Phase 1 map — full width below */}
      <FadeIn delay={0.3}>
        <div
          className="mt-16 border overflow-hidden"
          style={{ borderColor: "var(--accent-dim)" }}
        >
          <div className="relative w-full" style={{ maxHeight: "520px", overflow: "hidden" }}>
            <Image
              src="/phase-1-map.png"
              alt="Phase 1 — The Asian Spine route map"
              width={1682}
              height={1810}
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>
          <div
            className="px-6 py-4 border-t"
            style={{ borderColor: "var(--accent-dim)" }}
          >
            <span
              className="text-[12px] tracking-[0.25em] uppercase font-sans"
              style={{ color: "var(--text-subtle)" }}
            >
              Phase 1 — The Asian Spine — 8,100 km
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
