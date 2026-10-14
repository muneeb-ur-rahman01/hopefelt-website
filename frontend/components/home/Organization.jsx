import Link from "next/link";
import Image from "next/image";
import hopefeltLogo from "../../public/images/logos/logo.png";

const LINE = "bg-[#4a6741]/50";

/* ---------- Connector helpers (visible on lg screens and up) ---------- */

function ArrowDown({ className = "" }) {
  return (
    <span
      className={`absolute h-0 w-0 -translate-x-1/2 border-x-[5px] border-t-[7px] border-x-transparent border-t-[#4a6741]/70 ${className}`}
    />
  );
}

function ArrowUp({ className = "" }) {
  return (
    <span
      className={`absolute h-0 w-0 -translate-x-1/2 border-x-[5px] border-b-[7px] border-x-transparent border-b-[#4a6741]/70 ${className}`}
    />
  );
}

/* Governance banner -> Board / Executive cards (tree going down) */
function GovernanceToCardsConnector() {
  return (
    <div className="relative hidden h-10 lg:block">
      <ArrowUp className="left-1/2 top-0" />
      <span className={`absolute left-1/2 top-[7px] h-[13px] w-0.5 -translate-x-1/2 ${LINE}`} />
      <span className={`absolute top-5 h-0.5 left-[calc(25%-6px)] right-[calc(25%-6px)] ${LINE}`} />
      <span className={`absolute top-5 h-5 w-0.5 -translate-x-1/2 left-[calc(25%-6px)] ${LINE}`} />
      <span className={`absolute top-5 h-5 w-0.5 -translate-x-1/2 left-[calc(75%+6px)] ${LINE}`} />
    </div>
  );
}

/* Board / Executive cards -> Core Departments (tree merging down) */
function CardsToCoreConnector() {
  return (
    <div className="relative hidden h-10 lg:block">
      <span className={`absolute top-0 h-[18px] w-0.5 -translate-x-1/2 left-[calc(25%-6px)] ${LINE}`} />
      <span className={`absolute top-0 h-[18px] w-0.5 -translate-x-1/2 left-[calc(75%+6px)] ${LINE}`} />
      <span className={`absolute top-[18px] h-0.5 left-[calc(25%-6px)] right-[calc(25%-6px)] ${LINE}`} />
      <span className={`absolute left-1/2 top-[18px] h-[22px] w-0.5 -translate-x-1/2 ${LINE}`} />
      <ArrowDown className="left-1/2 top-[33px]" />
    </div>
  );
}

/* Core Departments -> Specialized Units (one stem fanning out to 4 cards) */
function CoreToUnitsConnector() {
  return (
    <div className="hidden px-8 lg:block">
      <div className="relative h-10">
        <span className={`absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 ${LINE}`} />
        <span className={`absolute top-5 h-0.5 left-[calc(12.5%-6px)] right-[calc(12.5%-6px)] ${LINE}`} />
        {[
          "left-[calc(12.5%-6px)]",
          "left-[calc(37.5%-2px)]",
          "left-[calc(62.5%+2px)]",
          "left-[calc(87.5%+6px)]",
        ].map((pos) => (
          <span key={pos}>
            <span className={`absolute top-5 h-5 w-0.5 -translate-x-1/2 ${pos} ${LINE}`} />
            <ArrowDown className={`top-[33px] ${pos}`} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* Specialized Units -> Collective Impact */
function UnitsToImpactConnector() {
  return (
    <div className="relative hidden h-8 lg:block">
      <span className={`absolute left-1/2 top-0 h-[25px] w-0.5 -translate-x-1/2 ${LINE}`} />
      <ArrowDown className="left-1/2 top-[25px]" />
    </div>
  );
}

/* ---------- Data ---------- */

const coreDepartments = [
  {
    num: "01",
    title: "Public Health Research & Development",
    desc: "Research, innovation and evidence generation for better health outcomes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Community Outreach & Field Operations",
    desc: "On-ground programs, outreach and community engagement.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Monitoring, Evaluation, Accountability & Learning",
    desc: "Data, impact measurement and continuous improvement.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Partnerships, Advocacy & External Relations",
    desc: "Strategic partnerships, advocacy and stakeholder engagement.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Resource Mobilization & Fundraising",
    desc: "Resource mobilization, fundraising and sustainability.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Administration, HR & Logistics",
    desc: "People, operations, finance and organizational support.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
];

const specializedUnits = [
  {
    num: "07",
    title: "IT, Technology & Digital Innovation",
    desc: "Technology solutions and digital infrastructure.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Digital Health & Health Innovation",
    desc: "Digital solutions for better access and health systems.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    num: "09",
    title: "Programs, Training & Capacity Development",
    desc: "Skill development and program implementation.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    num: "10",
    title: "Business Hub",
    desc: "Enterprise and sustainability initiatives to scale our impact.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const collectiveImpactSteps = [
  {
    title: "Stronger Communities",
    icon: (
      <svg className="h-5 w-5 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Improved Health Outcomes",
    icon: (
      <svg className="h-5 w-5 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation in Public Health",
    icon: (
      <svg className="h-5 w-5 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Long-term Impact",
    icon: (
      <svg className="h-5 w-5 text-[#4a6741]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const governanceCards = [
  {
    title: "Board / Governing Body",
    description: "Strategic oversight, policy guidance and accountability.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Executive Leadership",
    description: "Leadership, coordination and organizational management.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
  },
];

const impactAreas = [
  { title: "Healthier Communities", path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { title: "Stronger Systems", path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Innovation for Good", path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { title: "Sustainable Impact", path: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

/* ---------- Component ---------- */

export default function Organization() {
  return (
    <section className="overflow-hidden bg-slate-50/50 py-20">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        {/* Header: intro | logo + governance (exact center) | impact areas */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_24rem_1fr]">
          {/* Left Intro Text */}
          <div>
           <span className="inline-flex rounded-full bg-forest px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
            OUR ORGANIZATION
          </span>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#0d3749] sm:text-4xl">
              People and departments working together for impact.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Hopefelt brings together multidisciplinary teams across public health, research, technology, community programs and operations to create sustainable and measurable impact.
            </p>
          </div>

          {/* Center Logo & Governance Badge */}
          <div className="flex w-full flex-col items-center justify-center space-y-3">
            <div className="w-full rounded-xl border border-slate-200 bg-white p-4 text-center shadow-xs transition-all hover:border-[#4a6741]">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#4a6741]/20 bg-[#4a6741]/10 p-1">
                  <Image
                    src={hopefeltLogo}
                    alt="Hopefelt Foundation Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-display text-base font-bold text-[#0d3749]">
                    Hopefelt Foundation
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    A Public Health Society
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#0d3749] bg-[#0d3749] p-3 text-center text-white shadow-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold">Governance & Strategic Direction</h4>
                <p className="mt-0.5 text-[10px] text-slate-300">
                  Board | Executive Leadership | Advisors
                </p>
              </div>
            </div>
          </div>

          {/* Right Impact Areas Grid */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d3749]">
              OUR IMPACT AREAS
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {impactAreas.map((area) => (
                <div key={area.title} className="flex flex-col items-center">
                  <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#4a6741] shadow-xs transition-all hover:bg-[#4a6741] hover:text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.path} />
                    </svg>
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-[#0d3749]">
                    {area.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Governance banner -> Board / Executive */}
        <div className="mx-auto max-w-4xl">
          <GovernanceToCardsConnector />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-0">
            {governanceCards.map((item) => (
              <div
                key={item.title}
                className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-[#4a6741] hover:shadow-md"
              >
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-[#0d3749] group-hover:text-[#4a6741]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <CardsToCoreConnector />
        </div>

        {/* Core Departments Section */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f4f7f5]/60 p-6 shadow-xs lg:mt-0 lg:p-8">
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d3749]">
              CORE DEPARTMENTS
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Working across functions to deliver our mission.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {coreDepartments.map((dept) => (
              <Link
                key={dept.num}
                href="/about/our-departments"
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all hover:-translate-y-1 hover:border-[#4a6741] hover:shadow-md"
              >
                <div>
                  <div className="relative h-24 w-full overflow-hidden bg-slate-100">
                    <img src={dept.image} alt={dept.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-2 top-2 rounded bg-[#0d3749] px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                      {dept.num}
                    </span>
                  </div>

                  <div className="p-3">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#4a6741]/20 bg-[#4a6741]/10">
                        {dept.icon}
                      </div>
                      <h4 className="line-clamp-2 font-display text-xs font-bold leading-tight text-[#0d3749] group-hover:text-[#4a6741]">
                        {dept.title}
                      </h4>
                    </div>
                    <p className="line-clamp-3 text-[11px] leading-relaxed text-slate-600">
                      {dept.desc}
                    </p>
                  </div>
                </div>

                <div className="mx-3 mb-3 h-1 w-8 rounded-full bg-[#4a6741]/40 transition-all group-hover:w-12 group-hover:bg-[#0d3749]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Core -> Specialized connector */}
        <div className="rounded-2xl border border-transparent lg:-mb-px">
          <CoreToUnitsConnector />
        </div>

        {/* Specialized Units & Initiatives */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f4f7f5]/60 p-6 shadow-xs lg:mt-0 lg:p-8">
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d3749]">
              SPECIALIZED UNITS & INITIATIVES
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Driving innovation and expanding impact through specialized teams and initiatives.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specializedUnits.map((dept) => (
              <Link
                key={dept.num}
                href="/about/our-departments"
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all hover:-translate-y-1 hover:border-[#4a6741] hover:shadow-md"
              >
                <div>
                  <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                    <img src={dept.image} alt={dept.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-2 top-2 rounded bg-[#0d3749] px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                      {dept.num}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#4a6741]/20 bg-[#4a6741]/10">
                        {dept.icon}
                      </div>
                      <h4 className="line-clamp-2 font-display text-sm font-bold leading-tight text-[#0d3749] group-hover:text-[#4a6741]">
                        {dept.title}
                      </h4>
                    </div>
                    <p className="line-clamp-3 text-xs leading-relaxed text-slate-600">
                      {dept.desc}
                    </p>
                  </div>
                </div>

                <div className="mx-4 mb-4 h-1 w-10 rounded-full bg-[#4a6741]/40 transition-all group-hover:w-16 group-hover:bg-[#0d3749]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Specialized -> Collective Impact connector */}
        <UnitsToImpactConnector />

        {/* Collective Impact Flow */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs lg:mt-0">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="lg:w-1/4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d3749]">
                OUR COLLECTIVE IMPACT
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                All departments and initiatives work together to create healthier, stronger and more resilient communities.
              </p>
            </div>

            <div className="flex w-full flex-wrap items-center justify-between gap-3 lg:w-3/4 lg:flex-nowrap">
              {collectiveImpactSteps.map((step, idx) => (
                <div key={step.title} className="flex min-w-[180px] flex-1 items-center gap-3">
                  <div className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-3 shadow-2xs transition-all hover:border-[#4a6741] hover:bg-white hover:shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#4a6741]/20 bg-[#4a6741]/10 transition-colors group-hover:bg-[#4a6741] group-hover:[&_svg]:text-white">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold leading-tight text-[#0d3749] group-hover:text-[#4a6741]">
                      {step.title}
                    </span>
                  </div>

                  {idx < collectiveImpactSteps.length - 1 && (
                    <span className="hidden text-sm font-bold text-[#4a6741]/50 lg:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}