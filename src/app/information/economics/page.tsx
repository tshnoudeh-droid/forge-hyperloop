import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Economics Model — Forge Hyperloop",
  description:
    "The financial case for a global hyperloop cargo network. Sourced from peer-reviewed studies, government feasibility analyses, and official statistics.",
};

const useCases = [
  {
    title: "1. Pharmaceutical Cold Chain — $60B Market",
    body: "The global healthcare cold chain logistics market was valued at $60 billion in 2024 (IMARC Group), growing at 9.9% CAGR through 2029. A single dose of CAR-T therapy can cost $400,000–$500,000. A 1°C deviation destroys the entire shipment. Hyperloop delivers in a sealed, continuously monitored, climate-controlled pod with zero handling transfers between origin and destination.",
  },
  {
    title: "2. Organ Transplantation — 46,000 Lives Per Year",
    body: "The US alone performed 46,632 organ transplants in 2023 (UNOS). Hearts and lungs must be transplanted within 4–6 hours. Every hour of transport delay reduces transplant success by 5–10%. Current charter aircraft costs $15,000–$50,000 per flight. Hyperloop dispatches a pod within minutes on a fixed schedule that cannot be cancelled by weather or slot availability.",
  },
  {
    title: "3. Semiconductor & Electronics JIT Manufacturing",
    body: "Manufacturing downtime consumes 11% of annual revenues for top companies — $1.4 trillion in losses (Siemens, 2024). Automotive lines lose $2.3 million per hour when supply chains stall. Semiconductor shipping costs on Asia-to-US routes have nearly doubled since 2024. Hyperloop at 1,000 km/h is a direct replacement for air freight dependency at lower cost and zero carbon.",
  },
  {
    title: "4. Fresh Flowers and Perishable Agriculture",
    body: "The global cut flower market is valued at $38.7 billion in 2026, growing at 6.4% CAGR. $3.7 billion in flower exports were transported by air in 2024. Colombia exports nearly $1 billion/year in flowers to the US. The Phase 3 Americas Spine connects Bogotá to New York in hours, at a fraction of current air freight cost and zero carbon.",
  },
  {
    title: "5. Food Spoilage and Perishable Goods",
    body: "The FAO estimates 14% of all food spoils before reaching retailers — a $400 billion annual loss. The perishable goods transportation market is $18.1 billion in 2024, projected to reach $33.8 billion by 2033. Air freight dominates at 45% of the perishable logistics market ($9.58 billion). Hyperloop captures the middle market with better speed, lower cost, and zero carbon.",
  },
  {
    title: "6. Luxury Goods",
    body: "The personal luxury goods market reached $390 billion in 2024 (Grand View Research). LVMH's fashion and leather goods segment alone generated $42 billion in 2023. These goods ship exclusively by air today — speed and security are non-negotiable. Hyperloop is faster (no airport dwell time), more secure (sealed automated tube, zero handling transfers), and lower cost per shipment at network scale.",
  },
];

const networkPhases = [
  ["Phase 1 (2028–2033)", "Asian Spine: Shanghai–Singapore", "4,700 km", "~$206B"],
  ["Phase 2 (2033–2038)", "Asia-Europe: Shanghai–Rotterdam", "11,000 km", "~$480B"],
  ["Phase 3 (2038–2045)", "Americas Spine: New York–São Paulo", "10,000 km", "~$435B"],
  ["Phase 4 (2045–2055)", "Transatlantic SFT: Rotterdam–New York", "7,000 km", "~$600B"],
  ["Phase 5 (2055+)", "Africa Spine + connectors", "12,000 km", "~$520B"],
];

const summaryStats = [
  ["Global merchandise trade (2024)", "$33 trillion/year"],
  ["Air cargo revenue (2024)", "$149 billion/year"],
  ["Air cargo CO₂ per tonne-km", "602 grams"],
  ["Hyperloop CO₂ per tonne-km", "~0 grams (renewable grid)"],
  ["Air freight cost per kg", "$4–8"],
  ["Forge toll cost per kg (projected)", "$1.50–3.00"],
  ["Phase 1 build cost (Shanghai–Singapore)", "~$206B"],
  ["Phase 1 pod fleet (5-min frequency)", "~440 pods"],
  ["Phase 1 Year 10 annual revenue", "~$3B/year"],
  ["Full network build cost (5 phases)", "~$2.24 trillion over 30 years"],
  ["Full network annual revenue at maturity", "~$91B/year"],
  ["Global logistics market (addressable)", "$10–12 trillion/year"],
  ["Forge capture to justify full build", "<1% of logistics market"],
];

export default function Economics() {
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
              Information / Economics Model
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-medium leading-[1.06] tracking-[-0.02em] mb-6 font-sans"
            style={{ color: "var(--text)" }}
          >
            Forge Hyperloop<br />Economics Model
          </h1>

          <p
            className="text-base leading-relaxed mb-16 font-sans"
            style={{ color: "var(--accent)" }}
          >
            All numbers sourced from peer-reviewed studies, government feasibility analyses, and UNCTAD/WTO/IATA official statistics.
          </p>

          <div className="font-sans" style={{ color: "var(--text-muted)" }}>

            {/* Overview */}
            <p className="text-base leading-[1.85] mb-8">
              Forge Hyperloop is a cargo-first global network. Passenger revenue is real and accounted for, but the primary financial case is built on cargo toll revenue from the world's highest-volume trade corridors.
            </p>

            {/* Cargo Opportunity */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Cargo Opportunity
            </h2>
            <div className="space-y-4 text-base leading-[1.85]">
              <p>Global merchandise trade hit a record <strong style={{ color: "var(--text)" }}>$33 trillion in 2024</strong> (UNCTAD). Of that physical freight:</p>
              <ul className="space-y-2 pl-4">
                <li>• Air freight: $149B in airline cargo revenue in 2024 (IATA). 127M tonnes transported. Growing 11.3% year-on-year.</li>
                <li>• Ocean freight: 183 million TEUs in 2024.</li>
                <li>• Global logistics total: $10–12 trillion addressable market, growing to $23 trillion by 2035.</li>
              </ul>
              <p>Hyperloop competes with air freight on speed-sensitive cargo, and with ocean freight on intercontinental cargo that currently accepts 30-day transit times because no faster land option exists.</p>
            </div>

            {/* Mode Comparison */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Mode Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b" style={{ borderColor: "var(--accent-dim)" }}>
                    {["Mode", "Transit Time", "CO₂/tonne-km", "Cost/kg"].map((h) => (
                      <th key={h} className="text-left py-3 pr-4 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--text-subtle)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ocean freight (container)", "30–45 days", "8g", "~$1.00"],
                    ["Air freight", "1–3 days", "602g", "$4–8"],
                    ["Forge Hyperloop (projected)", "Hours (overland corridors)", "~0g", "$1.50–3.00"],
                  ].map(([mode, time, co2, cost]) => (
                    <tr key={mode} className="border-b" style={{ borderColor: "var(--accent-dim)" }}>
                      <td className="py-4 pr-4 text-sm font-medium" style={{ color: "var(--text)" }}>{mode}</td>
                      <td className="py-4 pr-4 text-sm">{time}</td>
                      <td className="py-4 pr-4 text-sm">{co2}</td>
                      <td className="py-4 text-sm font-medium" style={{ color: "var(--accent)" }}>{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Six Use Cases */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Six Cargo Use Cases
            </h2>
            <div>
              {useCases.map(({ title, body }) => (
                <div key={title} className="border-t pt-6 pb-4" style={{ borderColor: "var(--accent-dim)" }}>
                  <h3 className="text-base font-medium mb-3" style={{ color: "var(--text)" }}>{title}</h3>
                  <p className="text-base leading-[1.85]">{body}</p>
                </div>
              ))}
            </div>

            {/* Build Cost */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Reference Route: Shanghai to Singapore — Build Cost
            </h2>
            <div className="space-y-3 text-base leading-[1.85]">
              {[
                ["Distance", "4,700 km, overland elevated construction"],
                ["Cost per km (elevated)", "$32M USD"],
                ["Total tube and track", "$150.4B"],
                ["Stations (6 major + 4 mid-route)", "$4.4B"],
                ["Pod fleet (initial 200 pods × $25M)", "$5B"],
                ["Control systems, vacuum pumps (8% of tube)", "$12B"],
                ["Contingency (20%)", "$34.4B"],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between border-b py-3" style={{ borderColor: "var(--accent-dim)" }}>
                  <span>{label}</span>
                  <span className="font-medium" style={{ color: "var(--accent)" }}>{val}</span>
                </div>
              ))}
              <div className="flex justify-between py-4">
                <span className="text-lg font-medium" style={{ color: "var(--text)" }}>Total build cost</span>
                <span className="text-lg font-medium" style={{ color: "var(--text)" }}>~$206B</span>
              </div>
            </div>

            {/* Pod Fleet Math */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Pod Fleet Math
            </h2>
            <div className="space-y-4 text-base leading-[1.85]">
              <p>At <strong style={{ color: "var(--text)" }}>5-minute cargo frequency</strong>: ~220 pods per direction, <span style={{ color: "var(--accent)" }}>440 pods total</span>. At 30-second peak: ~1,000 pods.</p>
              <p>Daily throughput (5-min, one direction): 288 dispatches × 20 tonnes = <span style={{ color: "var(--accent)" }}>5,760 tonnes/day</span></p>
              <p>Annual bidirectional throughput: <span style={{ color: "var(--accent)" }}>~4.2 million tonnes/year</span></p>
              <p>At full 30-second peak dispatch: <span style={{ color: "var(--accent)" }}>12.6 million tonnes/year</span></p>
            </div>

            {/* Operating Costs */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Annual Operating Cost — Shanghai to Singapore
            </h2>
            <div>
              {[
                ["Energy (full operations)", "~$85M/year"],
                ["Tube maintenance (0.5% of build cost)", "~$1.03B/year"],
                ["Staffing (1,200 FTE)", "~$84M/year"],
                ["Vacuum pump stations", "~$27M/year"],
                ["Insurance, regulatory, land lease", "~$300M/year"],
              ].map(([item, cost]) => (
                <div key={item} className="flex justify-between border-b py-3 text-base" style={{ borderColor: "var(--accent-dim)" }}>
                  <span>{item}</span>
                  <span className="font-medium" style={{ color: "var(--accent)" }}>{cost}</span>
                </div>
              ))}
              <div className="flex justify-between py-4">
                <span className="text-lg font-medium" style={{ color: "var(--text)" }}>Total annual operating cost</span>
                <span className="text-lg font-medium" style={{ color: "var(--text)" }}>~$1.53B/year</span>
              </div>
            </div>

            {/* Revenue Model */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Revenue Model — Shanghai to Singapore
            </h2>
            <div className="space-y-4 text-base leading-[1.85] mb-6">
              <p>Cargo toll: <strong style={{ color: "var(--text)" }}>$50/tonne</strong> (vs. air freight at $4,000–8,000/tonne). At 4.2M tonnes/year: <span style={{ color: "var(--accent)" }}>$210M/year</span> at 5-minute frequency, scaling to <span style={{ color: "var(--accent)" }}>$1.575B/year</span> at 30-second peak.</p>
              <p>Passenger revenue (20% passenger pods, 1.68M passengers/year at $200): <span style={{ color: "var(--accent)" }}>$336M/year</span></p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b" style={{ borderColor: "var(--accent-dim)" }}>
                    {["Period", "Revenue", "Operating Status"].map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--text-subtle)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Year 1", "~$546M", "Operating ramp-up (expected loss)"],
                    ["Year 5", "~$1.1B", "Near break-even"],
                    ["Year 10", "~$3B+", "Strong operating surplus"],
                  ].map(([period, rev, status]) => (
                    <tr key={period} className="border-b" style={{ borderColor: "var(--accent-dim)" }}>
                      <td className="py-4 pr-6 text-base font-medium" style={{ color: "var(--text)" }}>{period}</td>
                      <td className="py-4 pr-6 text-base font-medium" style={{ color: "var(--accent)" }}>{rev}</td>
                      <td className="py-4 text-base">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-[1.85] mt-6">
              This trajectory mirrors the Channel Tunnel: operating losses for the first 15 years, consistent profitability from Year 20. Infrastructure economics are not SaaS economics. The return is 50 years of economic throughput.
            </p>

            {/* 30-City Network */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The 30-City Network — Five-Phase Build-Out
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b" style={{ borderColor: "var(--accent-dim)" }}>
                    {["Phase", "Route", "Distance", "Build Cost"].map((h) => (
                      <th key={h} className="text-left py-3 pr-4 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--text-subtle)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {networkPhases.map(([phase, route, dist, cost]) => (
                    <tr key={phase} className="border-b" style={{ borderColor: "var(--accent-dim)" }}>
                      <td className="py-4 pr-4 text-xs" style={{ color: "var(--accent)" }}>{phase}</td>
                      <td className="py-4 pr-4 text-sm" style={{ color: "var(--text)" }}>{route}</td>
                      <td className="py-4 pr-4 text-sm">{dist}</td>
                      <td className="py-4 text-sm font-medium" style={{ color: "var(--accent)" }}>{cost}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 pr-4 text-base font-medium" style={{ color: "var(--text)" }}>Total</td>
                    <td className="py-4 pr-4"></td>
                    <td className="py-4 pr-4 text-base font-medium" style={{ color: "var(--text)" }}>~44,700 km</td>
                    <td className="py-4 text-base font-medium" style={{ color: "var(--text)" }}>~$2.24 trillion</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base leading-[1.85]">Delivered over 30 years: $74.7B/year in global infrastructure investment — within the appetite of sovereign wealth funds and multilateral development banks that already deploy capital at this scale.</p>

            {/* Full Network Revenue */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Full Network Revenue at Maturity (2060+)
            </h2>
            <div className="space-y-3 text-base leading-[1.85]">
              <div className="flex justify-between border-b py-3" style={{ borderColor: "var(--accent-dim)" }}>
                <span>Cargo toll revenue (3% of global goods trade, $50/tonne)</span>
                <span className="font-medium" style={{ color: "var(--accent)" }}>$16.5B/year</span>
              </div>
              <div className="flex justify-between border-b py-3" style={{ borderColor: "var(--accent-dim)" }}>
                <span>Passenger revenue (500M passengers/year at $150 avg)</span>
                <span className="font-medium" style={{ color: "var(--accent)" }}>$75B/year</span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-xl font-medium" style={{ color: "var(--text)" }}>Total network revenue</span>
                <span className="text-xl font-medium" style={{ color: "var(--text)" }}>$91.5B/year</span>
              </div>
              <p>Forge captures less than 1% of the global logistics market and builds a $90B/year revenue business.</p>
            </div>

            {/* Toll Model */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Why Forge Uses a Toll, Not a Ticket
            </h2>
            <div className="space-y-4 text-base leading-[1.85]">
              <p>Forge's cargo revenue model is a per-tonne-km toll — the same model used by every port, pipeline, and toll road on Earth. Cargo operators pay Forge a toll per tonne-km, integrated via API into their logistics software. Fully automated. No per-transaction negotiation.</p>
              <div>
                {[
                  ["At 1% of global goods trade", "$8.25B/year"],
                  ["At 3%", "$24.75B/year"],
                  ["At 5% (long-run target)", "$41.25B/year"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between border-b py-3" style={{ borderColor: "var(--accent-dim)" }}>
                    <span>{label}</span>
                    <span className="font-medium" style={{ color: "var(--accent)" }}>{val}</span>
                  </div>
                ))}
              </div>
              <p>Forge's toll ($0.015/tonne-km) is below current ocean freight rates ($0.02–0.03/tonne-km) and a fraction of air freight ($0.50–1.50/tonne-km). The middle option that did not previously exist.</p>
            </div>

            {/* Funding */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Funding Structure
            </h2>
            <div className="space-y-5 text-base leading-[1.85]">
              <p><span className="font-medium" style={{ color: "var(--text)" }}>Government co-investment (30–50% of capex)</span> — ADB, EU Rail Joint Undertaking, direct national co-investment. Phase 1: $82.4B from governments alone.</p>
              <p><span className="font-medium" style={{ color: "var(--text)" }}>Multilateral development banks</span> — World Bank, ADB, African Development Bank all fund transport infrastructure at this scale.</p>
              <p><span className="font-medium" style={{ color: "var(--text)" }}>Sovereign wealth funds</span> — Norway GPFG ($1.7T AUM), ADIA ($993B), Saudi PIF ($700B). A 30-year Forge infrastructure bond at 4% yield is the long-duration asset these funds actively seek.</p>
              <p><span className="font-medium" style={{ color: "var(--text)" }}>Private infrastructure funds</span> — Blackstone, Brookfield, Macquarie. They own toll roads, airports, and pipelines today. Forge's toll-road model is their existing asset class.</p>
            </div>

            {/* Summary Table */}
            <h2
              className="text-xl font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Numbers That Matter
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {summaryStats.map(([metric, value]) => (
                    <tr key={metric} className="border-b" style={{ borderColor: "var(--accent-dim)" }}>
                      <td className="py-3 pr-6 text-base" style={{ color: "var(--text-muted)" }}>{metric}</td>
                      <td className="py-3 text-base font-medium whitespace-nowrap" style={{ color: "var(--accent)" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Attribution */}
            <div className="border-t mt-12 pt-6" style={{ borderColor: "var(--accent-dim)" }}>
              <p className="text-sm" style={{ color: "var(--text-subtle)" }}>
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

          {/* Back */}
          <div className="mt-16 border-t pt-8" style={{ borderColor: "var(--accent-dim)" }}>
            <Link
              href="/information"
              className="inline-flex items-center text-sm tracking-[0.2em] uppercase transition-colors duration-200 font-sans group"
              style={{ color: "var(--text)" }}
            >
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" style={{ color: "var(--accent)" }}>←</span>
              Back to Information
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
