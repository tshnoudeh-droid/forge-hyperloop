"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface WebProject {
  id: string;
  name: string;
  description: string;
  url: string;
  href: string;
  image: string;
}

const projects: WebProject[] = [
  {
    id: "orbit",
    name: "Orbit",
    description: "Hyperloop trip planner, booking and registration for your trip.",
    url: "orbit.tawficshnoudeh.com",
    href: "https://orbit.tawficshnoudeh.com",
    image: "/orbit.png",
  },
  {
    id: "network",
    name: "Network",
    description: "A global infrastructure simulation connecting 29 cities across 6 continents.",
    url: "network.forgehyperloop.com",
    href: "https://network.forgehyperloop.com",
    image: "/network.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
    >
      {/* Rule + label */}
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

      {/* Section heading */}
      <FadeIn delay={0.1}>
        <h2
          className="text-3xl md:text-[2.6rem] font-medium tracking-[-0.015em] mb-16"
          style={{ color: "var(--text)" }}
        >
          Software.
        </h2>
      </FadeIn>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.08}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              {/* Screenshot */}
              <div
                className="relative w-full aspect-[16/10] overflow-hidden border-b"
                style={{ borderColor: "var(--accent-dim)" }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Footer */}
              <div
                className="border border-t-0 px-5 py-4 flex flex-col gap-1"
                style={{ borderColor: "var(--accent-dim)" }}
              >
                <p
                  className="text-[13px] font-medium font-sans"
                  style={{ color: "var(--text)" }}
                >
                  {project.name}
                </p>
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
                <p
                  className="text-[10px] tracking-[0.1em] font-sans mt-1"
                  style={{ color: "var(--accent)" }}
                >
                  {project.url}
                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
