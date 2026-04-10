"use client";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Members", value: "24" },
  { label: "University", value: "Placeholder University" },
  { label: "Competition", value: "European Hyperloop Week" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 py-24"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      {/* Rule + label */}
      <div className="border-t border-black/15 mb-12">
        <span className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase text-black/30">
          02 // About
        </span>
      </div>

      {/* Two-column: copy left, stats right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Copy */}
        <div>
          <h2 className="text-3xl md:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.015em] text-black mb-10">
            Engineering the future
            <br />
            of ground transport.
          </h2>
          <div className="space-y-5 text-[13px] text-black/55 leading-[1.75] max-w-sm">
            <p>
              Forge Hyperloop is a student-led engineering team focused on
              designing and testing competitive hyperloop technology. We build
              real hardware, run real simulations, and compete at international
              events.
            </p>
            <p>
              Hyperloop is a proposed mode of passenger and cargo transport
              in which pods travel through a near-vacuum tube at speeds
              exceeding 1,000 km/h. We are working to make it real.
            </p>
            <p>
              Our team spans mechanical engineering, electrical systems,
              software, and aerodynamics. Every member contributes to a
              single mission: build a pod that competes.
            </p>
          </div>
        </div>

        {/* Stats table */}
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
                <span className="text-[13px] font-medium text-black">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
