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
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Rule + label */}
      <FadeIn>
        <div className="border-t border-black/15 mb-12">
          <span className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase text-black/30">
            03 // Projects
          </span>
        </div>
      </FadeIn>

      {/* Section heading */}
      <FadeIn delay={0.1}>
        <h2 className="text-3xl md:text-[2.6rem] font-medium tracking-[-0.015em] text-black mb-16">
          Active systems.
        </h2>
      </FadeIn>

      {/* Project rows */}
      <FadeIn delay={0.2}>
        <div className="border-t border-black/15">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_11rem_8rem] items-baseline gap-x-8 gap-y-1 py-6 border-b border-black/10"
            >
              {/* Index */}
              <span className="text-[10px] tracking-[0.2em] text-black/25 pt-px">
                {project.index}
              </span>

              {/* Name + description */}
              <div>
                <p className="text-[13px] font-medium text-black mb-1.5 group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </p>
                <p className="text-[12px] text-black/45 leading-relaxed md:hidden">
                  {project.description}
                </p>
              </div>

              {/* Discipline — desktop only */}
              <span className="hidden md:block text-[10px] tracking-[0.15em] uppercase text-black/35 self-start pt-px">
                {project.discipline}
              </span>

              {/* Status — desktop only */}
              <span className="hidden md:block text-[10px] tracking-[0.15em] uppercase text-black/35 self-start pt-px text-right">
                {project.status}
              </span>

              {/* Description — desktop only, full width below */}
              <div className="hidden md:block col-start-2 col-end-5">
                <p className="text-[12px] text-black/40 leading-relaxed mt-2 max-w-xl">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
