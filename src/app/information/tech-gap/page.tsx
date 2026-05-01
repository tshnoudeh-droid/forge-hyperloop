import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "The Sub-5-Year Tech Gap — Forge Hyperloop",
  description:
    "Every core engineering barrier to commercial hyperloop will be demonstrably solved at test-track scale by 2030. The case for the first commercial cargo corridor.",
};

const milestones = [
  {
    milestone: "Levitation at 500+ km/h",
    status: "Done",
    detail: "Shanghai 2004, SCMaglev testing, T-Flight 623 km/h Feb 2024",
  },
  {
    milestone: "Vacuum tube under 2 km",
    status: "Done",
    detail: "Venlo 420m 2024, Datong 2 km, IIT Madras 2024",
  },
  {
    milestone: "Lane switching in vacuum",
    status: "Done",
    detail: "Hardt, late 2024",
  },
  {
    milestone: "Cargo pod certification (no passengers)",
    status: "Achievable 2027 to 2029",
    detail: "Dramatically simpler than passenger rating",
  },
  {
    milestone: "Vacuum tube at 50 to 100 km test scale",
    status: "Achievable 2027 to 2028",
    detail: "Current funding trajectory",
  },
  {
    milestone: "EU regulatory framework",
    status: "Mandated by 2030",
    detail: "Actively funded via CEN-CENELEC and EU Rail Joint Undertaking",
  },
  {
    milestone: "First commercial cargo corridor investable",
    status: "2028 to 2030",
    detail: "",
  },
  {
    milestone: "Phase 1 Asian Spine construction begins",
    status: "2028 to 2030",
    detail: "",
  },
  {
    milestone: "Phase 1 first cargo revenue",
    status: "2033",
    detail: "First segments operational",
  },
];

const objections = [
  {
    q: "You still cannot seal a tube across hundreds of kilometers.",
    a: "Correct, and Forge does not claim otherwise. The enabling technologies for solving it, PosLoop355 steel, AI fiber optic monitoring at pipeline scale, and industrial expansion joint technology from cryogenic applications, are all proven in adjacent industries. The gap is integration and scale, not new physics. That is the kind of gap that closes with capital, engineering time, and the regulatory pull already underway in Europe.",
  },
  {
    q: "Virgin Hyperloop failed at cargo.",
    a: "Virgin failed at domestic cargo with domestic thinking. They competed with trucks. Forge competes with ocean freight and air freight on intercontinental corridors. The corridors are different. The competitors are different. The financial case is an order of magnitude stronger.",
  },
  {
    q: "Geopolitical barriers make a global network impossible.",
    a: "Acknowledged. The Phase 1 Asian Spine is deliberately chosen for its geopolitical feasibility: ASEAN Economic Community infrastructure cooperation, existing bilateral relationships between the Phase 1 corridor countries, and the Asian Development Bank as a ready institutional funder. Each subsequent phase is selected in part for corridor stability. Transoceanic crossings and politically contested corridors are Phase 4 and beyond, where Forge's existing operational phases provide the commercial and political leverage to negotiate.",
  },
  {
    q: "Cargo pods compete with much cheaper alternatives on short routes.",
    a: "Forge does not build short routes in Phase 1 through 3. The minimum economic corridor length for hyperloop cargo economics is approximately 1,000 km, where transit time savings over road freight and cost savings over air freight both become compelling. The Phase 1 Asian Spine at 4,700 km, Phase 2 at 11,000 km, and Phase 3 at 10,000 km are all above that threshold by a wide margin.",
  },
];

const sources = [
  "China T-Flight 623 km/h test, February 2024: South China Morning Post",
  "European Hyperloop Centre Venlo, 420m, 1 mbar, opened 2024",
  "Hardt Hyperloop full-system test, September 2025: Hardt press release",
  "POSCO PosLoop355 steel: POSCO Newsroom",
  "EU regulatory framework mandate by 2030: European Parliament Legislative Train",
  "EU Rail Joint Undertaking 2026 call, EUR 6.1M: Railway Supply",
  "Hardt lane switching, no moving parts, late 2024: Hardt press release",
  "Virgin Hyperloop cargo pivot February 2022: Interesting Engineering, Disruption Banking",
  "Virgin Hyperloop closure December 2023: Reuters, Bloomberg",
  "DP World 76% stake, 15 cargo customers: Disruption Banking",
  "Shanghai Maglev $43.6M/km, 431 km/h since 2004: Wikipedia / ChinaDiscovery",
  "US gas pipeline network 2.5M miles monitored: American Gas Association",
];

export default function TechGap() {
  return (
    <main
      className="min-h-screen flex flex-col pt-32 px-8 pb-24"
      style={{ background: "var(--bg)" }}
    >
      <FadeIn>
        <div className="max-w-3xl mx-auto w-full">

          {/* Label */}
          <div className="border-t mb-12" style={{ borderColor: "var(--accent-dim)" }}>
            <span
              className="inline-block mt-5 text-xs tracking-[0.35em] uppercase font-sans"
              style={{ color: "var(--text-subtle)" }}
            >
              Information / Tech Gap
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-medium leading-[1.06] tracking-[-0.02em] mb-8 font-sans"
            style={{ color: "var(--text)" }}
          >
            Forge Hyperloop:<br />The Sub-5-Year Tech Gap
          </h1>

          {/* Tagline */}
          <p
            className="text-base leading-relaxed mb-16 font-sans"
            style={{ color: "var(--accent)" }}
          >
            Every engineering barrier will be solved at test-track scale by 2030. Here is exactly why.
          </p>

          <div className="font-sans" style={{ color: "var(--text-muted)" }}>

            {/* Argument */}
            <div className="space-y-5 text-base leading-[1.85]">
              <p>
                Claim: Every core engineering barrier to commercial hyperloop will be demonstrably solved at test-track scale by 2030. The first commercial cargo corridor will be investable and contractable within that window. This is not a physics problem. It is a capital and coordination problem, and those are solvable.
              </p>
            </div>

            {/* What Tech Gap Closes Means */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              What "Tech Gap Closes in 5 Years" Actually Means
            </h2>
            <div className="space-y-5 text-base leading-[1.85]">
              <p>
                This claim does not mean a global network is operational by 2030. It means this: by 2030, every individual engineering barrier will be proven at scale, the regulatory framework will exist, and the investment case for the first commercial cargo corridor will be airtight. That is what "tech gap closes" means. Deployment follows investment. Investment follows proof. Proof arrives by 2030.
              </p>
            </div>

            {/* Cargo First */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Why Cargo First Changes the Tech Gap Timeline
            </h2>
            <div className="space-y-5 text-base leading-[1.85]">
              <p>
                Previous hyperloop companies built their tech gap arguments around passenger certification. That was the wrong framing. Passenger-rated hyperloop requires the full weight of aviation-class human safety certification, life support systems, emergency egress from a near-vacuum tube, and regulatory approval processes that take a decade.
              </p>
              <p>
                Cargo-rated hyperloop requires none of that at the same stringency. The cargo tube is sealed. Cargo pods do not require pressurized cabins, emergency oxygen systems, or evacuation protocols. The operational risk profile is dramatically lower. This means the path from test track to commercial cargo operations is faster than the path from test track to commercial passenger operations, which is precisely why Virgin Hyperloop's majority stakeholder DP World found 15 cargo customers before finding any credible passenger revenue.
              </p>
              <p>
                Forge Hyperloop starts with cargo because the tech gap to commercial cargo operations is shorter, more fundable, and more immediately profitable than the gap to commercial passenger operations.
              </p>
            </div>

            {/* Three Core Technologies */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Three Core Technologies
            </h2>
            <p className="text-base leading-[1.85] mb-8">
              Hyperloop has three engineering layers: levitation, vacuum tube, and network control. Here is the honest status of each.
            </p>

            {/* Levitation */}
            <div className="border-t pt-7 pb-2 mt-2" style={{ borderColor: "var(--accent-dim)" }}>
              <div className="flex items-baseline gap-6 mb-3">
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--text-subtle)" }}>
                  Layer 1
                </span>
                <span className="text-[10px] tracking-[0.15em]" style={{ color: "var(--accent)" }}>
                  Magnetic Levitation
                </span>
              </div>
              <h3 className="text-[15px] font-medium mb-4" style={{ color: "var(--text)" }}>
                Already Solved
              </h3>
              <div className="space-y-4 text-base leading-[1.85]">
                <p>
                  This is not a gap. This is done.
                </p>
                <p>
                  Shanghai Maglev has operated commercially since 2004. Top commercial speed: 431 km/h. Cost: $43.6M per km. Japan's SCMaglev L0 Series hit 603 km/h in testing, and the Chuo Shinkansen line is under active construction for commercial opening. China's CRRC unveiled a 600 km/h prototype in 2021. China's T-Flight system hit 623 km/h inside a vacuum tube in February 2024, the highest speed ever recorded in a hyperloop-style environment.
                </p>
                <p>
                  Levitation is not the gap. Every major hyperloop nation has proven it at commercial scale.
                </p>
              </div>
            </div>

            {/* Vacuum Tube */}
            <div className="border-t pt-7 pb-2 mt-2" style={{ borderColor: "var(--accent-dim)" }}>
              <div className="flex items-baseline gap-6 mb-3">
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--text-subtle)" }}>
                  Layer 2
                </span>
                <span className="text-[10px] tracking-[0.15em]" style={{ color: "var(--accent)" }}>
                  Vacuum Tube at Scale
                </span>
              </div>
              <h3 className="text-[15px] font-medium mb-4" style={{ color: "var(--text)" }}>
                The Real Gap, Closing Fast
              </h3>
              <div className="space-y-4 text-base leading-[1.85]">
                <p>
                  This is the one genuine unsolved problem, and here is exactly what is and is not solved.
                </p>
                <p>
                  Solved at short distances: The European Hyperloop Centre in Venlo, Netherlands opened in 2024 with a 420-meter tube at 1 millibar, 99.9 percent vacuum. Hardt Hyperloop completed full integrated system tests there in September 2025, validating levitation, guidance, and propulsion together in a vacuum environment. China's T-Flight Datong facility runs a 2-kilometer vacuum tube and holds the world speed record at 623 km/h. India's Avishkar track at IIT Madras reached completion in December 2024.
                </p>
                <p>
                  What remains unproven: vacuum tube sealing across hundreds of kilometers. This is the one genuine gap.
                </p>
                <p className="text-[14px] font-medium" style={{ color: "var(--text)" }}>
                  Why this gap closes by 2030 — three specific reasons:
                </p>
                <p>
                  Reason 1: The materials exist. POSCO's PosLoop355 steel is 27 percent lighter than conventional structural steel with 1.7 times better vibration damping. It was developed specifically for hyperloop tube construction, is already supplied to the European Hyperloop Centre, and is commercially available now. The material bottleneck is gone.
                </p>
                <p>
                  Reason 2: AI-driven monitoring makes seals maintainable at scale. The seal-per-kilometer problem sounds catastrophic until you apply the monitoring technology already used on 2.5 million miles of US natural gas pipeline. Distributed fiber optic sensing detects a breach to within 1 meter in under 1 second. The US pipeline system maintains near-continuous pressure integrity across millions of miles using this technology. Applying it to hyperloop tube seals is an engineering integration problem, not a physics discovery. It is a solved category of problem.
                </p>
                <p>
                  Reason 3: The regulatory and funding infrastructure is being built now, with public money. The EU has mandated a hyperloop regulatory framework by 2030. CEN-CENELEC is actively developing hyperloop standards. Europe's Rail Joint Undertaking has an open call for proposals in 2026 worth EUR 6.1M specifically to validate hyperloop safety requirements at scale. This is public money closing the regulatory gap on a mandated timeline. When the regulation exists, commercial contracts become signable. Capital follows.
                </p>
              </div>
            </div>

            {/* Lane Switching */}
            <div className="border-t pt-7 pb-2 mt-2" style={{ borderColor: "var(--accent-dim)" }}>
              <div className="flex items-baseline gap-6 mb-3">
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--text-subtle)" }}>
                  Layer 3
                </span>
                <span className="text-[10px] tracking-[0.15em]" style={{ color: "var(--accent)" }}>
                  Lane Switching and Network Control
                </span>
              </div>
              <h3 className="text-[15px] font-medium mb-4" style={{ color: "var(--text)" }}>
                Solved in 2024
              </h3>
              <div className="space-y-4 text-base leading-[1.85]">
                <p>
                  Hardt Hyperloop demonstrated lane switching at 85 km/h with no moving parts inside the infrastructure in late 2024. Magnetic guidance switching means the switch is in the magnetic field, not the tube structure. This solves one of the hardest systems-level problems for a networked hyperloop system. It is no longer a gap.
                </p>
              </div>
            </div>

            {/* Timeline Table */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Honest Timeline
            </h2>
            <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
              {milestones.map(({ milestone, status, detail }) => (
                <div
                  key={milestone}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8 border-b py-4"
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <span
                    className="text-sm font-medium shrink-0 sm:w-64 mb-1 sm:mb-0"
                    style={{ color: "var(--text)" }}
                  >
                    {milestone}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm" style={{ color: "var(--accent)" }}>
                      {status}
                    </span>
                    {detail && (
                      <span className="text-[11px]" style={{ color: "var(--text-subtle)" }}>
                        {detail}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What This Means */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              What This Means for Forge Hyperloop's Claim
            </h2>
            <div className="space-y-5 text-base leading-[1.85]">
              <p>
                The pitch is this: the engineering barriers to hyperloop are falling one by one. Levitation is done. Lane switching is done. Vacuum at short scale is done. The materials exist. The monitoring technology exists. The regulatory framework is being built with public money right now. For cargo, which requires no passenger certification, the path to commercial operation is 5 years away. Forge Hyperloop is building the global network layer on top of that foundation.
              </p>
              <p>
                Every data point in that claim is real and sourced.
              </p>
            </div>

            {/* Why Previous Companies Failed */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Why Previous Companies Failed, and Why Forge Is Different
            </h2>
            <div className="space-y-5 text-base leading-[1.85]">
              <p>
                Virgin Hyperloop One burned $450 million and shut down in December 2023. This failure is instructive. Virgin's majority stakeholder, DP World (a state-owned Dubai logistics group with a 76 percent stake), found 15 potential cargo customers and pivoted the company to freight in February 2022. Then it still failed. Why?
              </p>
              <p>
                Virgin was thinking in domestic US corridors. DP World is a port operator. They were connecting US ports to US inland destinations. A New York to Chicago cargo hyperloop still competes with trucks at $2 per kilometer. You do not need hyperloop technology to beat trucks. You need hyperloop to beat 30-day ocean voyages between continents, where trucks are not an option and air freight charges $4 to $8 per kilogram.
              </p>
              <p>
                Virgin never made the leap from domestic logistics to global trade infrastructure. That is why they failed. Not because cargo hyperloop does not work. Because they picked corridors where the financial case for hyperloop over trucks is marginal.
              </p>
              <p>
                Forge's corridors are intercontinental. The Asian Spine connects the world's top cargo airports across 4,700 km. The Asia-Europe Land Bridge replaces a 25-day ocean route. The competition is not trucking. The competition is the Suez Canal and 30-year-old Boeing 747 freighters burning 602g CO2/tonne-km. That is the financial case that works at hyperloop's cost structure.
              </p>
              <p>
                The broader lesson from first-wave hyperloop companies: they overclaimed the timeline before the regulatory framework existed and the vacuum tube engineering was proven at even test-track scale. The second wave, Hardt, T-Flight, Avishkar, is doing it correctly: build the test track first, prove the physics, let regulation develop, then commercialize. Forge follows the second-wave discipline and applies it to a first-wave vision: global scale.
              </p>
            </div>

            {/* Objections */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Key Objections and Responses
            </h2>
            <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
              {objections.map(({ q, a }) => (
                <div
                  key={q}
                  className="border-b py-6"
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--text)" }}
                  >
                    {q}
                  </p>
                  <p className="text-sm leading-[1.8]">{a}</p>
                </div>
              ))}
            </div>

            {/* Sources */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Sources
            </h2>
            <div className="space-y-2">
              {sources.map((source) => (
                <p
                  key={source}
                  className="text-[12px] leading-[1.7]"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {source}
                </p>
              ))}
            </div>

            {/* Attribution */}
            <div
              className="border-t mt-12 pt-6"
              style={{ borderColor: "var(--accent-dim)" }}
            >
              <p className="text-[11px]" style={{ color: "var(--text-subtle)" }}>
                Forge Hyperloop. Tawfic Shnoudeh, Founder.{" "}
                <a
                  href="https://forgehyperloop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: "var(--accent)" }}
                >
                  forgehyperloop.com
                </a>
              </p>
            </div>

          </div>

          {/* Read Next */}
          <div className="mt-16 border-t pt-8" style={{ borderColor: "var(--accent-dim)" }}>
            <span
              className="text-xs tracking-[0.3em] uppercase font-sans block mb-4"
              style={{ color: "var(--text-subtle)" }}
            >
              Read Next
            </span>
            <Link
              href="/information/master-plan"
              className="flex items-center justify-between py-5 border-t group"
              style={{ borderColor: "var(--accent-dim)" }}
            >
              <div className="flex flex-col gap-1.5">
                <p
                  className="text-base font-medium font-sans transition-colors duration-200 group-hover:text-accent"
                  style={{ color: "var(--text)" }}
                >
                  The Forge Hyperloop Master Plan
                </p>
                <p
                  className="text-sm leading-relaxed font-sans"
                  style={{ color: "var(--text-muted)" }}
                >
                  The full network buildout. Phase by phase, city by city. From the first Southeast Asia corridor to a 30-city global grid.
                </p>
              </div>
              <span
                className="text-base font-sans shrink-0 ml-8 transform group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: "var(--accent)" }}
              >
                →
              </span>
            </Link>
          </div>

          {/* Back */}
          <div className="mt-8 border-t pt-8" style={{ borderColor: "var(--accent-dim)" }}>
            <Link
              href="/information"
              className="inline-flex items-center text-sm tracking-[0.2em] uppercase transition-colors duration-200 font-sans group"
              style={{ color: "var(--text)" }}
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
