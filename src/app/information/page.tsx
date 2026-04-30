import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Information — Forge Hyperloop",
  description:
    "Extended articles on the engineering, economics, and strategy behind Forge Hyperloop.",
};

const articles = [
  {
    href: "/information/master-plan",
    label: "Master Plan",
    title: "The Forge Hyperloop Master Plan",
    description:
      "A phased global cargo network. Starting where trade flows fastest, building until every continent is connected.",
  },
  {
    href: "/information/economics",
    label: "Economics",
    title: "Economics Model",
    description:
      "The full financial case — cargo tolls, pod fleet math, build costs, six use cases, and the $91B/year revenue case at network maturity.",
  },
];

export default function Information() {
  return (
    <main
      className="min-h-screen flex flex-col pt-32 px-8 pb-24"
      style={{ background: "var(--bg)" }}
    >
      <FadeIn>
        <div className="max-w-3xl mx-auto w-full">
          {/* Section label */}
          <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
            <span
              className="inline-block mt-5 text-xs tracking-[0.35em] uppercase font-sans"
              style={{ color: "var(--text-subtle)" }}
            >
              03 // Information
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-[-0.015em] mb-10 font-sans"
            style={{ color: "var(--text)" }}
          >
            Project Information &<br /> Technical Details.
          </h1>

          {/* Intro content */}
          <div className="space-y-5 text-base leading-[1.75]" style={{ color: "var(--text-muted)" }}>
            <p>
              Extended articles covering the engineering specifications, strategic rationale, and economic case for Forge Hyperloop. Each piece is written to survive scrutiny from an informed investor or evaluator.
            </p>
            <p>
              As development continues, this section will be updated with test results, manufacturing logs, and detailed subsystem breakdowns.
            </p>

            <h2 className="text-xl font-medium mt-10 mb-3 font-sans" style={{ color: "var(--text)" }}>
              Current Focus
            </h2>
            <ul className="space-y-2">
              <li>• Finalizing the CAD for the primary chassis structure.</li>
              <li>• Running thermal and aerodynamic simulations.</li>
              <li>• Sourcing components for the linear induction motor (LIM) prototype.</li>
            </ul>
          </div>

          {/* Articles */}
          <div className="mt-16 border-t" style={{ borderColor: "var(--accent-dim)" }}>
            <span
              className="inline-block mt-5 mb-8 text-xs tracking-[0.35em] uppercase font-sans"
              style={{ color: "var(--text-subtle)" }}
            >
              Articles
            </span>
            <div>
              {articles.map(({ href, label, title, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between py-6 border-t group"
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
            </div>
          </div>

          {/* Back button */}
          <div className="mt-12 border-t pt-8" style={{ borderColor: "var(--accent-dim)" }}>
            <Link
              href="/"
              className="inline-flex items-center text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors duration-200 font-sans group"
              style={{ color: "var(--text)" }}
            >
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" style={{ color: "var(--accent)" }}>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
