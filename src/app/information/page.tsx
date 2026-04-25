import Link from "next/link";
import FadeIn from "@/components/FadeIn";

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
              className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase font-sans"
              style={{ color: "var(--text-subtle)" }}
            >
              03 // Information
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] mb-10 font-sans"
            style={{ color: "var(--text)" }}
          >
            Project Information &<br /> Technical Details.
          </h1>

          {/* Content */}
          <div className="space-y-6 text-[13px] leading-[1.75]" style={{ color: "var(--text-muted)" }}>
            <p>
              This is an independent page designed to house extended information
              that doesn't fit on the main landing page. Here you can dive deeper into
              the engineering specifications, subsystem designs, and broader
              mission goals of Forge Hyperloop.
            </p>
            <p>
              As development continues, this section will be updated with
              test results, manufacturing logs, and detailed subsystem 
              breakdowns (e.g., levitation, propulsion, chassis design, and
              control software).
            </p>
            
            <h2 className="text-xl font-medium mt-10 mb-4 font-sans" style={{ color: "var(--text)" }}>
              Current Focus
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Finalizing the CAD for the primary chassis structure.</li>
              <li>Running thermal and aerodynamic simulations.</li>
              <li>Sourcing components for the linear induction motor (LIM) prototype.</li>
            </ul>
          </div>

          {/* Back button */}
          <div className="mt-16 border-t pt-8" style={{ borderColor: "var(--accent-dim)" }}>
            <Link
              href="/"
              className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase hover:text-accent transition-colors duration-200 font-sans group"
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
