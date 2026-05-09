import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Origin I — The Vacuum Chamber — Forge Hyperloop",
  description:
    "A physical vacuum chamber built from scratch in 30 days. 99.9% vacuum achieved. 1,000x drag reduction at operating pressure.",
};

export default function OriginI() {
  return (
    <main
      className="min-h-screen flex flex-col pt-32 px-8 pb-24"
      style={{ background: "var(--bg)" }}
    >
      <FadeIn>
        <div className="max-w-3xl mx-auto w-full">

          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/information"
              className="inline-flex items-center text-sm tracking-[0.2em] uppercase transition-colors duration-200 font-sans group"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
                style={{ color: "var(--accent)" }}
              >
                ←
              </span>
              Back to Information
            </Link>
          </div>

          {/* Label */}
          <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
            <span
              className="inline-block mt-5 text-xs tracking-[0.35em] uppercase font-sans"
              style={{ color: "var(--text-subtle)" }}
            >
              Information / Build Log
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-medium leading-[1.06] tracking-[-0.02em] mb-6 font-sans"
            style={{ color: "var(--text)" }}
          >
            Origin I<br />The Vacuum Chamber
          </h1>

          {/* Tagline */}
          <p
            className="text-lg leading-relaxed mb-12 font-sans"
            style={{ color: "var(--text-muted)" }}
          >
            A physical vacuum chamber built from scratch in 30 days. 99.9% vacuum achieved. 1,000x drag reduction at operating pressure. Forge Hyperloop started here.
          </p>

          {/* Hero image */}
          <div
            className="w-full mb-16 border overflow-hidden"
            style={{ borderColor: "var(--accent-dim)" }}
          >
            <Image
              src="/origin-1.png"
              alt="Origin I vacuum chamber"
              width={800}
              height={223}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>

          {/* Stats row */}
          <div
            className="border mb-16"
            style={{ borderColor: "var(--accent-dim)" }}
          >
            {[
              { label: "Designation", value: "O — 01" },
              { label: "Build time", value: "30 days" },
              { label: "Vacuum achieved", value: "99.9%" },
              { label: "Operating pressure", value: "~0.1 mbar" },
              { label: "Drag reduction", value: "1,000x at operating pressure" },
              { label: "Status", value: "Core Platform" },
            ].map(({ label, value }, i, arr) => (
              <div
                key={label}
                className={`flex items-baseline justify-between px-6 py-5 ${i < arr.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--accent-dim)" }}
              >
                <span
                  className="text-[14px] tracking-[0.25em] uppercase font-sans"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {label}
                </span>
                <span
                  className="text-sm font-medium font-sans"
                  style={{ color: "var(--accent)" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Article body */}
          <div className="space-y-8 text-base leading-[1.85] font-sans" style={{ color: "var(--text-muted)" }}>

            <h2
              className="text-2xl font-medium tracking-[-0.01em] font-sans"
              style={{ color: "var(--text)" }}
            >
              Why a vacuum chamber first
            </h2>
            <p>
              Hyperloop only works inside a near-vacuum tube. Air resistance at 1,000 km/h would require more energy than the system could produce. Without vacuum, there is no hyperloop. Not a slow one. Not an expensive one. None at all.
            </p>
            <p>
              Origin I was built to prove the vacuum is achievable outside a corporate laboratory, with off-the-shelf components, by one person. If the fundamental environment cannot be created and sustained, every other engineering question is irrelevant.
            </p>

            <h2
              className="text-2xl font-medium tracking-[-0.01em] font-sans pt-4"
              style={{ color: "var(--text)" }}
            >
              The build
            </h2>
            <p>
              The chamber is fabricated from 6061-T6 aluminum tube with welded end flanges. Sealing uses Viton O-rings seated in precision-machined grooves. A two-stage rotary vane pump pulls the initial rough vacuum. A turbomolecular pump carries it the rest of the way down.
            </p>
            <p>
              Every joint was leak-tested with helium before final assembly. Helium, being the smallest non-reactive gas, finds paths that air does not. Any joint that passed helium leak detection was sealed. The chamber reached target pressure on the first full pumpdown.
            </p>
            <p>
              The pressure measurement system uses a combination of a Pirani gauge for rough vacuum and a cold cathode ionization gauge for high vacuum. Both were calibrated against NIST-traceable standards before installation.
            </p>

            <h2
              className="text-2xl font-medium tracking-[-0.01em] font-sans pt-4"
              style={{ color: "var(--text)" }}
            >
              What 99.9% vacuum means
            </h2>
            <p>
              Standard atmosphere is 1013 mbar. Origin I operates at approximately 0.1 mbar. That is a pressure reduction of roughly 10,000x. At that pressure, the mean free path of air molecules, the average distance a molecule travels before hitting another molecule, increases from roughly 70 nanometers at standard atmosphere to several centimeters.
            </p>
            <p>
              The practical consequence: drag falls by a factor of approximately 1,000. A pod moving at 1,000 km/h inside Origin I at operating pressure experiences aerodynamic drag equivalent to moving at approximately 32 km/h in open air. The energy math for the network becomes viable. The operating pressure of a full-scale commercial tube is lower still, around 1 Pa (0.01 mbar), reducing drag further. Origin I demonstrates the approach works at bench scale.
            </p>

            <h2
              className="text-2xl font-medium tracking-[-0.01em] font-sans pt-4"
              style={{ color: "var(--text)" }}
            >
              What comes next
            </h2>
            <p>
              Origin I is the environmental proof. Aether I is the propulsion and levitation proof. The next phase combines both: a magnetically levitated pod inside a vacuum environment, moving under its own power.
            </p>
            <p>
              That combination, levitation plus vacuum, is the core technical demonstration required to validate the hyperloop concept at small scale. Everything after that is engineering, not physics.
            </p>

          </div>

          {/* Back button bottom */}
          <div className="mt-16 border-t pt-8" style={{ borderColor: "var(--accent-dim)" }}>
            <Link
              href="/information"
              className="inline-flex items-center text-sm tracking-[0.2em] uppercase transition-colors duration-200 font-sans group"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
                style={{ color: "var(--accent)" }}
              >
                ←
              </span>
              Back to Information
            </Link>
          </div>

        </div>
      </FadeIn>
    </main>
  );
}
