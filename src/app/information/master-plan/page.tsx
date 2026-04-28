import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Master Plan — Forge Hyperloop",
  description:
    "A phased global cargo network. Starting where trade flows fastest, building until every continent is connected.",
};

const phases = [
  {
    number: "Phase 1",
    years: "2028 – 2033",
    name: "The Asian Spine",
    meta: [
      "Route: Shanghai to Singapore via Guangzhou, Hanoi, Bangkok, Kuala Lumpur",
      "Distance: 4,700 km, entirely overland",
      "Build cost: $150 – 180 billion",
    ],
    body: [
      "This is the first phase because it is the busiest trade corridor on Earth. The five cities on this spine, Shanghai, Guangzhou, Hanoi, Bangkok, Singapore, collectively handle the majority of global manufacturing exports. Asia Pacific holds 39.5 percent of global air freight market share. Hong Kong and Shanghai are the world's top two cargo airports by volume. The Strait of Malacca, which this spine parallels and ultimately replaces for time-sensitive cargo, handles nearly 30 percent of all global trade.",
      "The cargo case is immediate. Semiconductors manufactured at TSMC facilities in Taiwan and shipped to Samsung facilities in South Korea and manufacturing partners in Southeast Asia currently move by air freight. A single production delay costs $2.3 million per hour. Hyperloop at 1,000 km/h connects Shanghai to Singapore in under 5 hours. Pharmaceutical manufacturers in Singapore, the region's primary pharmaceutical export hub, ship cold chain cargo to markets throughout Asia. Fresh produce from Vietnam and Thailand moves to Chinese and Korean consumers. The entire JIT manufacturing ecosystem of the most productive industrial region on Earth is served by this single corridor.",
      "This phase establishes Forge's commercial foundation. Revenue comes from per-tonne-km cargo tolls paid by logistics operators, pharmaceutical companies, and manufacturers. The pod fleet is 80 percent cargo-configured at launch, with 20 percent passenger-configured for the business travel market that immediately wants to move between these cities.",
    ],
  },
  {
    number: "Phase 2",
    years: "2033 – 2038",
    name: "The Asia-Europe Land Bridge",
    meta: [
      "Route: Shanghai to Rotterdam via Almaty, Tehran, Istanbul, Warsaw, Berlin",
      "Distance: 11,000 km, primarily overland through Central Asia",
      "Connects to: Phase 1 at Shanghai terminus",
    ],
    body: [
      "This phase exists because 12 percent of all global trade passes through the Suez Canal, a single geographic chokepoint that, when blocked by a single container ship for six days in 2021, cost global trade an estimated $9.6 billion. The same goods, traveling by hyperloop through Central Asia, arrive in 11 hours instead of 25 days. There is no version of the future in which a 25-day ocean voyage at 8g CO2/tonne-km is a preferred solution when an 11-hour land route at 0g CO2 exists.",
      "Central Asia has been courting infrastructure investment for decades. Kazakhstan, Uzbekistan, and the countries on this corridor have every economic incentive to participate. The Belt and Road infrastructure precedent already exists along much of this route, meaning right-of-way and construction access are less politically complex than a greenfield build in contested territory.",
      "The cargo case: European pharmaceutical exports to Asia. Asian electronics and manufactured goods to European markets. Luxury goods moving both directions between the world's two largest luxury consumption markets. Cold chain products that currently cannot survive a 25-day ocean voyage, entire categories of perishable goods, become viable intercontinental trade once the transit time drops from weeks to hours.",
      "When Phase 2 connects to Phase 1 at Shanghai, the combined network serves the two largest trade corridors on Earth simultaneously. The network effect is immediate.",
    ],
  },
  {
    number: "Phase 3",
    years: "2038 – 2045",
    name: "The Americas Spine",
    meta: [
      "Route: New York to São Paulo via Washington, Atlanta, Miami, Mexico City, Bogotá, Lima",
      "Distance: 10,000 km",
    ],
    body: [
      "This phase connects North and South American trade. Colombia is the world's second-largest cut flower exporter, shipping nearly $1 billion annually by air freight to US markets, a product that currently requires air freight because the shelf life cannot survive ocean transit. Brazil is the world's largest agricultural exporter. Mexico's industrial zones in Monterrey and Guadalajara manufacture for the North American market using just-in-time supply chains. The Americas Spine turns a continent-spanning agricultural and manufacturing economy into a single integrated market.",
      "The passenger case accelerates in this phase. The New York to Miami corridor, the Chicago to Atlanta corridor, the Mexico City to Bogotá corridor, these are high-density people-movement routes that currently rely on short-haul aviation. As Phase 3 builds out, the passenger-to-cargo pod ratio shifts toward 40 percent passenger. The infrastructure is identical. The same tube serves both.",
    ],
  },
  {
    number: "Phase 4",
    years: "2045 – 2055",
    name: "The Transatlantic Connection",
    meta: [
      "Route: Rotterdam to New York via Lisbon, Azores waypoints, Newfoundland",
      "Distance: 7,000 km",
      "Engineering: Submerged floating cargo tube",
    ],
    body: [
      "This is Forge's signature engineering challenge, the crossing that makes the global network genuinely global. A full tunnel through the Atlantic floor is not the path. The deepest point of the Atlantic reaches 8,376 meters, where pressure is 800 times the world record for tunnel boring machines. Cost estimates for a full tunnel run from $12 to $20 trillion. That is not Phase 1, 2, or 3.",
      "The viable path is a submerged floating tube anchored to the seabed by cables, neutrally buoyant at depth, using the Azores as a natural waypoint. The mid-Atlantic Ridge between Portugal and the Azores sits at manageable depths. Norway has been developing submerged floating tunnel technology for fjord crossings since the 1990s. This is not science fiction. It is proven technology at small scale that Forge scales to an intercontinental cargo corridor.",
      "Cargo only for this crossing. No passenger pressurization requirements. No life support systems. Simplified engineering, singular purpose: moving physical goods between the world's two largest economic blocs in hours instead of weeks.",
      "When Phase 4 connects, Phase 1 through Phase 3 form a closed loop. Goods manufactured in Asia flow through the Asian Spine and Asia-Europe Land Bridge to Rotterdam, cross the Atlantic to New York, and distribute through the Americas Spine to South America. The global cargo network is complete.",
    ],
  },
  {
    number: "Phase 5",
    years: "2055 and Beyond",
    name: "Full Integration",
    meta: [],
    body: [
      "With four phases operational and cash-flowing, Phase 5 is expansion and densification. The Africa Spine, connecting Cairo through Nairobi to Johannesburg, joins the network at Istanbul where it connects to Phase 2. Shorter connectors bridge regional gaps that Phase 1 through 4 did not address. The Bering Strait link, 82 km of shallow water, the easiest ocean crossing on Earth, connects the Asian Spine to the Americas Spine via a land alternative to the transatlantic route. And across all existing routes, passenger pod integration scales toward 50/50 with cargo as Forge's revenue base funds the certification and infrastructure for full passenger operations at scale.",
    ],
  },
];

const portfolio = [
  {
    name: "Forge Hyperloop Aether",
    desc: "A working magnetic levitation demonstrator. A PID controller written in C++ running on an ESP32 microcontroller holds a physical object in stable magnetic suspension against gravity. Levitation is not theoretical for Forge. It is working hardware on the bench.",
  },
  {
    name: "Forge Hyperloop Origin",
    desc: "A physical vacuum chamber demonstrator representing the physics of the tube pressure environment. It demonstrates the pressure differential that makes hyperloop propulsion viable, the core engineering challenge that separates hyperloop from conventional high-speed rail.",
  },
  {
    name: "Forge Hyperloop Conduit",
    desc: "The first module of the network operating software, built and running at lab.forgehyperloop.com. It goes deep into the actual structural engineering and physics of hyperloop technology, making the technical foundation transparent and verifiable.",
  },
  {
    name: "FusynCAD",
    desc: "An AI-powered CAD design tool. It takes a spoken or typed description of a component and produces a finished 3D CAD model in seconds. A design task that would take an engineer several hours is done in moments. This is the tool Forge uses to accelerate its own pod and tube design iteration.",
  },
  {
    name: "network.forgehyperloop.com",
    desc: "A live 3D simulation of the Earth connected by the Forge Hyperloop network. It makes the global cargo network tangible: routes, distances, transit times, and the scale of what is being proposed rendered as an interactive globe.",
  },
  {
    name: "Forge Hyperloop Orbit",
    desc: "A trip planning simulation that answers a direct question: if hyperloop existed tomorrow, how would people and companies actually use it? It models cargo routing decisions, transit time comparisons, and cost comparisons against current logistics options.",
  },
];

const timeline = [
  {
    period: "Now – 2026",
    text: "Prove the concept at small scale. Aether demonstrates working levitation. Origin demonstrates vacuum physics. Conduit, FusynCAD, network.forgehyperloop.com, and Orbit demonstrate that the team builds at speed and with depth.",
  },
  {
    period: "2026 – 2028",
    text: "Engage the first corridor partner. The EU's active regulatory push and existing feasibility funding make an Asian or European corridor the most likely first agreement. Present the Phase 1 business case to the Asian Development Bank and the first national government on the Shanghai-Singapore spine.",
  },
  {
    period: "2028 – 2033",
    text: "Phase 1 under construction. Cargo operations begin on completed segments. The Asian Spine generates its first toll revenue. The network effect begins the moment the first segment opens.",
  },
  {
    period: "2033 – 2038",
    text: "Phase 2 extends from Shanghai to Rotterdam. Asia-Europe cargo shifts from the Suez Canal to the Land Bridge. Forge becomes the world's first profitable hyperloop network operator.",
  },
  {
    period: "2038 – 2055",
    text: "Phases 3 and 4. The Americas Spine and the Transatlantic connection complete the global cargo loop.",
  },
  {
    period: "2055 and beyond",
    text: "Phase 5 densification, Africa, full passenger integration, and the network that makes 30-day ocean voyages a historical artifact.",
  },
];

export default function MasterPlan() {
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
              className="inline-block mt-5 text-[10px] tracking-[0.35em] uppercase font-sans"
              style={{ color: "var(--text-subtle)" }}
            >
              Information / Master Plan
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-[2.8rem] font-medium leading-[1.06] tracking-[-0.02em] mb-8 font-sans"
            style={{ color: "var(--text)" }}
          >
            The Forge Hyperloop<br />Master Plan
          </h1>

          {/* Tagline */}
          <p
            className="text-[15px] leading-relaxed mb-16 font-sans"
            style={{ color: "var(--accent)" }}
          >
            We are going to connect the Earth. Here is exactly how.
          </p>

          {/* Article */}
          <div className="font-sans" style={{ color: "var(--text-muted)" }}>

            {/* Opening */}
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>
                The rest of the world is moving fast. AI is embedding itself into every industry. Autonomy is spreading through factories, vehicles, and logistics. Robotics is transforming manufacturing. And yet, the way goods move across the surface of this planet has not fundamentally changed in 70 years.
              </p>
              <p>
                We still load cargo onto container ships that take 30 to 45 days to cross an ocean. We still fly pharmaceuticals and electronics across the world in aluminum tubes burning jet fuel, emitting 602 grams of CO2 per tonne-kilometer. We still accept that a critical semiconductor component manufactured in Taiwan cannot reach an automobile factory in Germany in less than 48 hours and hundreds of dollars in air freight costs.
              </p>
              <p>
                That is not good enough. It has not been good enough for a long time. And the cost, in dollars, in carbon, and in economic potential destroyed by slow logistics, is now measurable in the trillions.
              </p>
              <p>
                Forge Hyperloop exists to fix it. The goal is concrete: build a global hyperloop cargo network connecting the world's major trade corridors, then open that same infrastructure to passengers. Not one city pair. Not a regional pilot. A phased, logically sequenced global network, starting where trade volume is highest and expanding until every continent is connected.
              </p>
              <p>This is the master plan.</p>
            </div>

            {/* The Problem */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Problem: Global Trade Is Bottlenecked by Infrastructure Built for the 20th Century
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>
                Every product you use traveled to reach you. The phone in your pocket was assembled in China from components made in Taiwan, South Korea, Japan, and Germany. The medication in your cabinet was manufactured in India or Singapore and shipped cold. The food on your table moved through three continents before arriving. The engine of global prosperity is trade, and that engine runs on logistics infrastructure that is slow, carbon-intensive, and structurally incapable of meeting the demands of the world we now live in.
              </p>
              <p>The numbers make the problem concrete.</p>
              <p>
                Global merchandise trade hit a record $33 trillion in 2024, according to UNCTAD. The logistics infrastructure that moves those goods emits roughly 1 billion tonnes of CO2 per year from shipping alone, plus another 149 billion dollars worth of air freight that emits 602 grams of CO2 per tonne-kilometer, 75 times more carbon-intensive than ocean shipping. The world's largest trade corridor, connecting Asia to North America across the Pacific, moves 30 million containers per year. The Asia-Europe corridor, routing through the Suez Canal, carries 12 percent of all global trade through a single geographic chokepoint.
              </p>
              <p>
                Pharma companies ship $60 billion worth of temperature-sensitive cargo annually, where a single degree of temperature deviation can destroy $500,000 worth of CAR-T cell therapy. Food producers lose $400 billion per year to spoilage before goods reach retailers, 14 percent of all food produced, because the cold chain breaks down across transit times measured in days. Semiconductor manufacturers pay $4 to $8 per kilogram to air freight chips from Asian fabs to global assembly lines, because ocean freight at 30 to 45 days is incompatible with just-in-time manufacturing. When one supplier fails, automotive lines lose $2.3 million per hour. The Toyota shutdown of 2022, all 28 production lines at 14 factories stopped by a single supplier failure, made this visceral.
              </p>
              <p>
                These are not edge cases. These are the everyday costs of logistics infrastructure that has not kept pace with the complexity and speed of the global economy it is supposed to serve.
              </p>
              <p>
                The question is not whether the global logistics system needs to be rebuilt. It clearly does. The question is what rebuilds it.
              </p>
            </div>

            {/* Alternatives */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Why the Proposed Alternatives Are Not the Answer
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>
                Before presenting Forge Hyperloop's solution, it is worth being precise about what does not work.
              </p>
              <p>
                Incremental improvements to existing modes, more efficient container ships, electric trucks, sustainable aviation fuel, reduce the carbon footprint of the current system but do not change its fundamental speed and reliability limitations. Ocean freight at 30 days with SAF is still 30 days. Air freight at 602g CO2/tonne-km with 10 percent SAF blending is still 540g CO2/tonne-km and still costs $4 to $8 per kilogram.
              </p>
              <p>
                SpaceX's Earth-to-Earth rocket proposal addresses one variable: time. New York to London in 25 minutes is genuinely fast. But it is still methane-fueled. It requires coastal launch pads with mile-wide noise exclusion zones and FAA airspace closures that affect commercial aviation for hundreds of miles per flight. It costs a projected $1,200 to $2,000 per seat and cannot carry meaningful cargo volumes. A rocket is a discrete expensive event. It does not become more useful when you add more of them. It has no network effect. It will never move 30 million containers per year. It will never deliver a pharmaceutical cold chain at scale. The SpaceX proposal solves fast travel for wealthy individuals. It does not solve global trade.
              </p>
              <p>
                Previous hyperloop companies tried and, largely, failed. Virgin Hyperloop burned $450 million and shut down in December 2023. The failure is instructive. Virgin's majority shareholder, DP World, pivoted the company to cargo in 2022 because 15 of their potential customers wanted cargo capacity, not passenger seats. But Virgin was still thinking in domestic US corridors, port-to-port within a single country. A New York to Chicago cargo hyperloop still competes with trucks at $2 per kilometer. You do not need hyperloop to beat trucks. You need hyperloop to beat 30-day ocean voyages and $8-per-kilogram air freight on intercontinental corridors. Virgin never made that mental leap. That is why they failed.
              </p>
              <p>
                Forge Hyperloop's starting point is global trade scale, not domestic corridors. That is the distinction that matters.
              </p>
            </div>

            {/* Technology */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Technology
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>
                Hyperloop combines two systems. One is commercially deployed. The other is the gap being closed.
              </p>
              <p>
                Magnetic levitation is not a prototype. Japan's SCMaglev achieved 603 km/h in testing. China's Shanghai Maglev has moved passengers commercially since 2004 at 431 km/h. China's T-Flight system hit 623 km/h inside a vacuum tube in February 2024, the highest speed ever recorded in a hyperloop-style environment. The levitation physics is proven. The engineering is deployed at commercial scale.
              </p>
              <p>
                The vacuum tube is the gap. When a maglev vehicle travels inside a low-pressure tube, aerodynamic drag drops by a factor of more than 1,000. At 100 Pa operating pressure, 99.9 percent vacuum, the drag on a pod traveling at 1,000 km/h is approximately 37 Newtons, equivalent to cycling through still air. This is what makes 1,000-plus km/h energetically viable. The physics is not in question. The challenge is sealing and maintaining a near-vacuum environment at scale across hundreds of kilometers of tube.
              </p>
              <p>
                At short distances, this is solved. The European Hyperloop Centre in Venlo, Netherlands opened in 2024 with a 420-meter tube operating at 1 millibar. Hardt Hyperloop ran full integrated system tests there in September 2025, validating levitation, guidance, and propulsion together. China's T-Flight runs a 2-kilometer vacuum tube at Datong and holds the world speed record. India completed a new test track at IIT Madras in December 2024.
              </p>
              <p>
                What remains unproven at commercial scale is vacuum tube integrity across hundreds of kilometers. The path to solving it runs through three enabling technologies that already exist. POSCO's PosLoop355 steel, developed specifically for hyperloop, is 27 percent lighter than conventional steel with 1.7 times better vibration damping and is commercially available now. Distributed fiber optic sensing, the same technology monitoring 2.5 million miles of US natural gas pipeline continuously, can detect a seal breach to within one meter in under one second. And the European Union, having mandated a hyperloop regulatory framework by 2030, is spending public money right now through CEN-CENELEC and the EU Rail Joint Undertaking to close the final certification gap.
              </p>
              <p>
                The tech gap closes by 2030. Not because of a single discovery, but because every component of the solution exists and the regulatory infrastructure is being built around it.
              </p>
              <p>
                Lane switching, considered one of the hardest systems-level problems for networked hyperloop, was solved in late 2024. Hardt demonstrated magnetic guidance switching at 85 km/h with no moving parts inside the tube. The switch is in the magnetic field, not the structure. This enables a true network, not just point-to-point lines.
              </p>
            </div>

            {/* Radical Solution */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Radical Solution: A Global Cargo Network, Then the World
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>
                Forge Hyperloop's thesis is this: the highest-leverage application of hyperloop technology is not passenger transit between nearby cities. It is global trade infrastructure. Build the network where trade volume is highest, prove the economics on cargo, then open the same infrastructure to passengers.
              </p>
              <p>
                This is how every major transportation network in history has worked. Ports were built for cargo before passengers. Airports were built for cargo before commercial aviation scaled. The internet was built for data before consumer applications existed.
              </p>
              <p>
                The sequence matters. Cargo comes first because cargo has the clearest financial case, the fewest regulatory barriers (no human safety certification), the most consistent demand, and the most willing corporate customers who are already paying for air freight at 75 times the carbon cost. Passengers come second because the infrastructure they need is identical to what cargo built.
              </p>
              <p>
                The network is designed in five phases, each selected because it addresses the highest-volume, highest-value trade corridor that is physically buildable at that stage.
              </p>
            </div>

            {/* Phases */}
            <div className="mt-10">
              {phases.map((phase) => (
                <div
                  key={phase.number}
                  className="border-t pt-7 pb-2 mt-2"
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <div className="flex items-baseline gap-6 mb-3">
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      {phase.number}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.15em]"
                      style={{ color: "var(--accent)" }}
                    >
                      {phase.years}
                    </span>
                  </div>
                  <h3
                    className="text-[15px] font-medium mb-4"
                    style={{ color: "var(--text)" }}
                  >
                    {phase.name}
                  </h3>
                  {phase.meta.length > 0 && (
                    <div className="space-y-1 mb-5 text-[11px]" style={{ color: "var(--text-subtle)" }}>
                      {phase.meta.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                  <div className="space-y-4 text-[13px] leading-[1.85]">
                    {phase.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Economics */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Economics
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>
                Infrastructure is not a startup. The investment case for Forge Hyperloop does not look like a SaaS business. It looks like every major transportation investment in history: large upfront capital, long payback period, and economic returns that vastly exceed the direct revenue.
              </p>
              <p>
                The revenue model is a per-tonne-km cargo toll, the same model used by every port, pipeline, and toll road in the world. Forge operates the tube, maintains the network standard, and manages pod dispatch. Cargo operators pay to use the network. At 1 percent of global goods trade by weight captured across Phase 1 and 2, at an average toll of $75 per tonne, the network generates $8.25 billion per year in cargo toll revenue. At full five-phase build-out capturing 5 percent of global goods trade, toll revenue reaches $40 to $80 billion per year.
              </p>
              <p>
                These numbers do not include passenger revenue, which is additive. They do not include the economic multiplier effects on the GDP of every corridor served, which the World Bank has historically measured at 3 to 7 times the build cost. They do not include the carbon credit value of displacing air freight, which trades at $50 to $150 per tonne of CO2 in European markets. The cargo toll is conservative. The total economic picture is transformative.
              </p>
              <p>
                For a single Phase 1 route, Shanghai to Singapore at $160 billion build cost: at 24/7 operations with 200 cargo pods cycling per direction, 12 million tonnes of cargo per year at $75 per tonne average toll, annual revenue is $900 million before passenger revenue. Operating break-even is achievable by Year 3. This is the same trajectory as the Channel Tunnel, which carried debt for 20 years before becoming consistently profitable, and the US Interstate system, which cost $530 billion in today's dollars with no direct revenue and generated trillions in GDP.
              </p>
              <p>
                The funding structure is identical to how all major transportation infrastructure has been built: government co-investment (30 to 50 percent of capex) from countries along the corridor who have direct economic interest, multilateral development banks including the World Bank and Asian Development Bank who specifically fund transport infrastructure, sovereign wealth funds seeking 30-year infrastructure bonds, and private infrastructure funds from Blackstone, Brookfield, and Macquarie who own airports, toll roads, and pipelines today.
              </p>
              <p>
                Forge does not need to raise $160 billion. Forge needs to prove the first corridor at test scale, get one government committed, and the financial infrastructure of global infrastructure investment does the rest. That is how every corridor in history was built.
              </p>
            </div>

            {/* What Forge Is Building Now */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              What Forge Is Building Now
            </h2>
            <p className="text-[13px] leading-[1.85] mb-6">
              The gap between vision and credibility is closed by building. Forge Hyperloop is not a paper company. It is a builder, and the current build portfolio is the proof.
            </p>
            <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
              {portfolio.map(({ name, desc }) => (
                <div
                  key={name}
                  className="border-b py-5"
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <p
                    className="text-[12px] font-medium mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {name}
                  </p>
                  <p className="text-[12px] leading-[1.8]">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] leading-[1.85] mt-6">
              These are not demos for the sake of demos. Each one is evidence that this team understands the physics, the infrastructure, and the network. Aether proves levitation. Origin proves pressure physics. Conduit proves structural engineering. FusynCAD proves design velocity. The network globe proves the vision is specific, not vague. Orbit proves the use case is understood, not assumed.
            </p>

            {/* Why Different */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              Why This Is Different From Everything That Came Before
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>
                The hyperloop companies of the first wave, Virgin Hyperloop One, Hyperloop Transportation Technologies in their early form, thought about domestic corridors. They competed with trains and buses. They needed passenger certification from day one. They tried to raise money before the regulatory framework existed. They overclaimed the timeline and underprepared the engineering. Virgin burned $450 million and produced one human passenger test at 172 km/h, less than half the speed of a Japanese bullet train, before shutting down.
              </p>
              <p>
                Forge Hyperloop starts with global trade because that is where the financial case is strongest, the regulatory path is clearest (cargo, not passengers), the competition is most vulnerable (30-day ocean freight versus hours), and the impact is most measurable. The six cargo categories, pharmaceuticals, organs, semiconductors, fresh produce, perishable food, and luxury goods, represent hundreds of billions of dollars in addressable annual revenue with clear willingness to pay. These are companies that already pay $4 to $8 per kilogram in air freight costs and would pay a fraction of that for Forge's cargo toll.
              </p>
              <p>
                And unlike every company that came before, Forge is designing a network, not a corridor. The network effect is the moat. Metcalfe's Law applied to physical infrastructure: every city node added multiplies the value of every existing connection. The 31st cargo hub connected to the Forge network makes the previous 30 more valuable. That compounding does not exist in a point-to-point system. It is the reason the internet became indispensable. It is the reason the container shipping standard created more wealth than the ships themselves.
              </p>
              <p>
                We are not building trains. We are building the protocol layer for physical goods movement on Earth.
              </p>
            </div>

            {/* Timeline */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              The Timeline
            </h2>
            <div className="border-t" style={{ borderColor: "var(--accent-dim)" }}>
              {timeline.map(({ period, text }) => (
                <div
                  key={period}
                  className="flex gap-8 border-b py-5"
                  style={{ borderColor: "var(--accent-dim)" }}
                >
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase shrink-0 w-24 pt-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {period}
                  </span>
                  <p className="text-[12px] leading-[1.8]">{text}</p>
                </div>
              ))}
            </div>

            {/* One Sentence */}
            <h2
              className="text-[17px] font-medium tracking-[-0.01em] mt-14 mb-5 pt-8 border-t"
              style={{ color: "var(--text)", borderColor: "var(--accent-dim)" }}
            >
              One Sentence
            </h2>
            <div className="space-y-5 text-[13px] leading-[1.85]">
              <p>Forge Hyperloop exists to connect the Earth.</p>
              <p>
                Not one city pair. Not one corridor. The Earth. Starting where trade flows fastest, building phase by phase, until the movement of goods and people across this planet is no longer the bottleneck on what human civilization can accomplish.
              </p>
              <p>
                The technology is ready. The economics work. The trade corridors are identified. The cargo customers exist and are already paying more for worse.
              </p>
              <p
                className="text-[14px] font-medium"
                style={{ color: "var(--text)" }}
              >
                We are building it.
              </p>
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

          {/* Back */}
          <div className="mt-16 border-t pt-8" style={{ borderColor: "var(--accent-dim)" }}>
            <Link
              href="/information"
              className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 font-sans group"
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
