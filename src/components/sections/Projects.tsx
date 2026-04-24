"use client";

import FadeIn from "@/components/FadeIn";

interface Project {
  id: string;
  index: string;
  name: string;
  discipline: string;
  status: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "pod-structure",
    index: "001",
    name: "Pod Structure",
    discipline: "Mechanical Engineering",
    status: "In Development",
    description:
      "Carbon fiber monocoque chassis optimized for minimal drag inside a low-pressure tube environment.",
  },
  {
    id: "propulsion",
    index: "002",
    name: "Propulsion System",
    discipline: "Electrical / Mechanical",
    status: "Research Phase",
    description:
      "Linear induction motor array providing contactless acceleration along a passive aluminum track.",
  },
  {
    id: "levitation",
    index: "003",
    name: "Magnetic Levitation",
    discipline: "Electrical Engineering",
    status: "Prototyping",
    description:
      "Passive Halbach array configuration for stable levitation at low operational cost.",
  },
  {
    id: "track-sim",
    index: "004",
    name: "Track Simulation",
    discipline: "Software / CFD",
    status: "Active",
    description:
      "High-fidelity computational fluid dynamics model of the pod operating inside the tube.",
  },
  {
    id: "braking",
    index: "005",
    name: "Braking System",
    discipline: "Mechanical Engineering",
    status: "Design Review",
    description:
      "Eddy current braking with mechanical failsafe for controlled emergency deceleration.",
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
            className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase"
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
          Active systems.
        </h2>
      </FadeIn>

      {/* Project rows */}
      <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.06}>
            <div
              className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_11rem_8rem] items-baseline gap-x-8 gap-y-1 py-6 border-b"
              style={{ borderColor: "var(--accent-dim)" }}
            >
              {/* Index */}
              <span
                className="text-[10px] tracking-[0.2em] pt-px"
                style={{ color: "var(--accent)" }}
              >
                {project.index}
              </span>

              {/* Name + description */}
              <div>
                <p
                  className="text-[13px] font-medium mb-1.5 transition-colors duration-200 group-hover:text-accent"
                  style={{ color: "var(--text)" }}
                >
                  {project.name}
                </p>
                <p
                  className="text-[12px] leading-relaxed md:hidden"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
              </div>

              {/* Discipline — desktop only */}
              <span
                className="hidden md:block text-[10px] tracking-[0.15em] uppercase self-start pt-px"
                style={{ color: "var(--text-subtle)" }}
              >
                {project.discipline}
              </span>

              {/* Status — desktop only */}
              <span
                className="hidden md:block text-[10px] tracking-[0.15em] uppercase self-start pt-px text-right"
                style={{ color: "var(--text-subtle)" }}
              >
                {project.status}
              </span>

              {/* Description — desktop only */}
              <div className="hidden md:block col-start-2 col-end-5">
                <p
                  className="text-[12px] leading-relaxed mt-2 max-w-xl"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
