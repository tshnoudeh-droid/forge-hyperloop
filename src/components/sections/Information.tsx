"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const articles = [
  {
    href: "/information/master-plan",
    title: "The Forge Hyperloop Master Plan",
    description:
      "A phased global cargo network. Starting where trade flows fastest, building until every continent is connected.",
    label: "Master Plan",
  },
  {
    href: "/information/economics",
    title: "Economics Model",
    description:
      "The full financial case — cargo tolls, pod fleet math, build costs, and the $91B/year revenue case at network maturity.",
    label: "Economics",
  },
];

export default function InformationSection() {
  return (
    <section
      id="information"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
      style={{ background: "var(--bg)" }}
    >
      <FadeIn variant="left">
        <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
          <span
            className="inline-block mt-5 text-xs tracking-[0.35em] uppercase font-sans"
            style={{ color: "var(--text-subtle)" }}
          >
            03 // Information
          </span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left: heading + description */}
        <FadeIn delay={0.1}>
          <div>
            <h2
              className="text-3xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] mb-8 font-sans"
              style={{ color: "var(--text)" }}
            >
              In-depth reading<br />on every system.
            </h2>
            <p
              className="text-base leading-[1.75] max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Extended articles covering the engineering, economics, and strategic rationale behind Forge Hyperloop. Each piece is written to survive scrutiny from an informed investor or engineer.
            </p>
          </div>
        </FadeIn>

        {/* Right: article list */}
        <FadeIn delay={0.2}>
          <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
            {articles.map(({ href, title, description, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between py-6 border-b group"
                style={{ borderColor: "var(--accent-dim)" }}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase font-sans"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {label}
                  </span>
                  <p
                    className="text-base font-medium font-sans transition-colors duration-200 group-hover:text-accent"
                    style={{ color: "var(--text)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-sm leading-relaxed font-sans"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {description}
                  </p>
                </div>
                <span
                  className="text-base font-sans shrink-0 ml-8 transform group-hover:translate-x-1 transition-transform duration-200"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </span>
              </Link>
            ))}

            {/* View all */}
            <div className="pt-6">
              <Link
                href="/information"
                className="inline-flex items-center text-sm tracking-[0.2em] uppercase font-sans group transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                View all information
                <span
                  className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
