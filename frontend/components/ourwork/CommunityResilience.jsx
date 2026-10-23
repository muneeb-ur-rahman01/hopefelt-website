import Link from "next/link";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const USER = "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const LEAF = "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8";
const GLOBE =
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
const MEGAPHONE =
  "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z";
const SHIELD =
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z";
const SEARCH = "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z";
const HAND =
  "M7 11.5V14m0-2.5v-6a1.5 1.5 0 013 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3.75";

/* ---------- Static content (matches the design) ---------- */

const focusAreas = [
  {
    title: "Climate & Health",
    desc: "Addressing the health impacts of climate change and promoting climate-resilient communities.",
    href: "/our-work/climate-environment-resilience/climate-health",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-800",
    btn: "bg-emerald-700",
    icon: GLOBE,
  },
  {
    title: "Environmental Health",
    desc: "Promoting clean air, safe water, proper waste management and healthier surroundings.",
    href: "/our-work/climate-environment-resilience/environmental-health",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    text: "text-sky-600",
    btn: "bg-sky-500",
    icon: LEAF,
  },
  {
    title: "Environmental Awareness",
    desc: "Educating communities on sustainable practices and responsible environmental behaviour.",
    href: "/our-work/climate-environment-resilience/environmental-awareness",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
    btn: "bg-amber-500",
    icon: MEGAPHONE,
  },
  {
    title: "Plantation Initiatives",
    desc: "Tree plantation drives to build greener, cooler and healthier communities.",
    href: "/our-work/climate-environment-resilience/plantation-initiatives",
    bg: "from-green-50",
    wrap: "bg-green-100 text-green-700",
    text: "text-green-700",
    btn: "bg-green-600",
    icon: "M12 3l5 7h-3l4 6h-5v5h-2v-5H6l4-6H7l5-7z",
  },
  {
    title: "Community Resilience",
    desc: "Strengthening community preparedness and adaptive capacity against environmental challenges.",
    href: "/our-work/climate-environment-resilience/community-resilience",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    text: "text-rose-500",
    btn: "bg-rose-500",
    icon: USERS,
  },
];

const strategicGoals = [
  "Improve local climate-health awareness.",
  "Promote cleaner and healthier environments.",
  "Encourage sustainable planting and green spaces.",
  "Strengthen community preparedness and resilience against environmental challenges.",
];

const workSteps = [
  {
    num: "01",
    title: "Assess Local Risks",
    desc: "Understand community environmental challenges and vulnerabilities.",
    numBg: "bg-amber-100 text-amber-700",
    wrap: "bg-amber-50 text-amber-600",
    icon: SEARCH,
  },
  {
    num: "02",
    title: "Educate & Engage",
    desc: "Raise awareness and build community participation through sessions and campaigns.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-700",
    icon: USERS,
  },
  {
    num: "03",
    title: "Implement Community Actions",
    desc: "Carry out plantation drives, clean-up activities and sustainable initiatives.",
    numBg: "bg-green-100 text-green-700",
    wrap: "bg-green-50 text-green-700",
    icon: LEAF,
  },
  {
    num: "04",
    title: "Monitor & Learn",
    desc: "Track feedback and improve future efforts.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-700",
    icon: CHART,
  },
];

const team = [
  { role: "Program Director", sub: "[Assigned Lead]", wrap: "bg-emerald-100 text-emerald-800", icon: USER },
  { role: "Environment & Resilience Coordinator", sub: "[Assigned Coordinator]", wrap: "bg-sky-100 text-sky-600", icon: USERS },
  { role: "Field & Volunteer Team", sub: "Community facilitators and trained volunteers", wrap: "bg-rose-100 text-rose-500", icon: USERS },
  { role: "Community Partners", sub: "Local organizations, institutions and stakeholders", wrap: "bg-amber-100 text-amber-700", icon: USERS },
];

const impactStats = [
  { label: "Community Activities", wrap: "bg-emerald-100 text-emerald-800", icon: LEAF },
  { label: "People Reached", wrap: "bg-sky-100 text-sky-600", icon: USERS },
  { label: "Trees Planted", wrap: "bg-green-100 text-green-700", icon: "M12 3l5 7h-3l4 6h-5v5h-2v-5H6l4-6H7l5-7z" },
  { label: "Preparedness Initiatives", wrap: "bg-emerald-100 text-emerald-800", icon: SHIELD },
];

/* ---------- Small helpers ---------- */

function Icon({ d, className = "h-6 w-6", stroke = 1.6 }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

function SectionTitle({ children, note, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <h2 className="font-serif text-2xl font-extrabold text-[#1f4a2a] sm:text-3xl">
        {children}
      </h2>
      {note && <span className="text-sm text-slate-500">{note}</span>}
      <span className="hidden h-0.5 w-10 rounded-full bg-[#1f4a2a] sm:block" />
    </div>
  );
}

function SdgTile({ num, label, color, children, title, desc }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-emerald-900/5 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex h-28 w-28 shrink-0 flex-col justify-between p-2 text-white ${color}`}
      >
        <div className="flex items-start gap-1">
          <span className="text-3xl font-black leading-none">{num}</span>
          <span className="text-[7px] font-bold uppercase leading-[10px]">
            {label}
          </span>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
      <div className="min-w-0">
        <h3 className="text-xs font-bold text-slate-900">SDG {num}</h3>
        <p className="text-sm font-bold leading-5 text-slate-900">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

export default function ClimateEnvironmentResilience() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <img
            src="/images/climate-resilience/hero.jpg"
            alt="Volunteers planting a tree together at a community plantation drive"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/30" />
        </div>

        <div className="relative mx-auto max-w-[100rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-slate-600"
          >
            <Link href="/" className="hover:text-emerald-800">Home</Link>
            <span>/</span>
            <Link href="/our-work" className="hover:text-emerald-800">Our Work</Link>
            <span>/</span>
            <span className="font-semibold text-slate-800">
              Climate, Environment &amp; Community Resilience
            </span>
          </nav>

          <div className="mt-6 max-w-2xl">
            <h1 className="font-serif text-5xl font-black leading-[1.05] tracking-tight text-[#0d3749] sm:text-6xl">
              Climate,{" "}
              <span className="text-[#1f4a2a]">Environment &amp;</span>{" "}
              Community Resilience
            </h1>

            <p className="mt-4 text-xl text-slate-700">
              Healthier Environments. Stronger Communities.
            </p>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-emerald-700" />

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              At Hopefelt Foundation, we work towards cleaner, greener and more
              resilient communities by promoting environmental awareness,
              sustainable practices and climate-conscious actions for a healthier
              tomorrow.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f4a2a] px-7 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
              >
                Get Involved <span>→</span>
              </Link>
              <a
                href="#focus-areas"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-900/40 bg-white/80 px-7 py-3 text-sm font-bold text-emerald-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Explore Initiatives <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-12 sm:px-8 lg:px-12">
        {/* ============ OUR FOCUS AREAS ============ */}
        <section id="focus-areas" className="pt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Focus Areas</SectionTitle>
            <p className="text-xs text-slate-600">
              Key areas through which we work to create cleaner environments and
              more resilient communities.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {focusAreas.map((f) => (
              <article
                key={f.title}
                className={`group flex flex-col rounded-3xl border border-emerald-900/5 bg-gradient-to-b ${f.bg} to-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${f.wrap}`}
                >
                  <Icon d={f.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-extrabold leading-6 text-emerald-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>

                <Link
                  href={f.href}
                  className={`mt-auto flex items-center justify-between pt-5 text-sm font-bold ${f.text}`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    Learn More <span>→</span>
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition duration-300 group-hover:translate-x-1 ${f.btn}`}
                  >
                    <Icon d="M5 12h14m-6-6l6 6-6 6" className="h-4 w-4" stroke={2.4} />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR PURPOSE ============ */}
        <section className="mt-10">
          <SectionTitle>Our Purpose</SectionTitle>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="flex items-center gap-5 rounded-2xl bg-emerald-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                <Icon
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-8C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8z"
                  className="h-9 w-9"
                />
              </span>
              <div>
                <h3 className="font-serif text-lg font-extrabold text-emerald-950">
                  Our Vision
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Cleaner, healthier and more resilient communities living in
                  harmony with a sustainable environment.
                </p>
              </div>
            </article>

            <article className="flex items-center gap-5 rounded-2xl bg-sky-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-900">
                <Icon
                  d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-3a1 1 0 100-2 1 1 0 000 2zM12 12l7-7m0 0v3m0-3h-3"
                  className="h-9 w-9"
                />
              </span>
              <div>
                <h3 className="font-serif text-lg font-extrabold text-emerald-950">
                  Our Mission
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  To promote environmental health, climate awareness and
                  community resilience through education, engagement and
                  sustainable action.
                </p>
              </div>
            </article>

            <article className="flex items-center gap-5 rounded-2xl bg-rose-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <Icon d={CHART} className="h-9 w-9" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-extrabold text-emerald-950">
                  Our Strategic Goals
                </h3>
                <ul className="mt-1 space-y-0.5">
                  {strategicGoals.map((g) => (
                    <li
                      key={g}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-700" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle note="(Suggested)">Strategic Alignment</SectionTitle>
            <p className="text-xs text-slate-600">
              Our work contributes to the following Sustainable Development
              Goals (SDGs).
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SdgTile
              num="3"
              label={<>Good Health<br />and Well-being</>}
              color="bg-[#4c9f38]"
              title="Good Health and Well-being"
              desc="Addressing the health impacts of climate change and environmental risks."
            >
              <Icon d="M3 12h4l2-5 4 10 2-5h6" className="h-10 w-10" stroke={2} />
            </SdgTile>

            <SdgTile
              num="11"
              label={<>Sustainable Cities<br />and Communities</>}
              color="bg-[#fd9d24]"
              title="Sustainable Cities and Communities"
              desc="Promoting cleaner, safer and more resilient communities."
            >
              <Icon
                d="M3 21h18M5 21V7l7-4v18M12 21V10l7 3v8M8 9h.01M8 13h.01M8 17h.01"
                className="h-10 w-10"
                stroke={2}
              />
            </SdgTile>

            <SdgTile
              num="13"
              label={<>Climate<br />Action</>}
              color="bg-[#3f7e44]"
              title="Climate Action"
              desc="Supporting climate awareness, adaptation and local action."
            >
              <Icon d={GLOBE} className="h-10 w-10" stroke={2} />
            </SdgTile>

            <SdgTile
              num="15"
              label={<>Life<br />on Land</>}
              color="bg-[#56c02b]"
              title="Life on Land"
              desc="Protecting ecosystems through plantation and green initiatives."
            >
              <Icon d="M12 3l5 7h-3l4 6h-5v5h-2v-5H6l4-6H7l5-7z" className="h-10 w-10" stroke={2} />
            </SdgTile>
          </div>
        </section>

        {/* ============ HOW WE WORK ============ */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>How We Work</SectionTitle>
            <p className="text-xs text-slate-600">
              A community-driven approach from awareness to long-term impact.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, idx) => (
              <div key={step.num} className="flex items-start gap-3">
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-black ${step.numBg}`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${step.wrap}`}
                  >
                    <Icon d={step.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold leading-5 text-emerald-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {idx < workSteps.length - 1 && (
                  <span className="mt-3 hidden text-slate-500 lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ============ TEAM + IMPACT ============ */}
        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Program Team & Coordination */}
          <div>
            <SectionTitle>Program Team &amp; Coordination</SectionTitle>
            <p className="mt-2 text-xs text-slate-600">
              Our Climate, Environment &amp; Community Resilience program is led
              and supported by a dedicated team.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-emerald-900/5 bg-white shadow-sm">
              <div className="grid divide-y divide-emerald-900/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
                {team.map((p) => (
                  <div key={p.role} className="flex items-start gap-3 p-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${p.wrap}`}
                    >
                      <Icon d={p.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold leading-4 text-emerald-950">
                        {p.role}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                        {p.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 border-t border-emerald-900/5 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-600">
                <Icon
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  className="h-4 w-4"
                />
                Names and reporting lines will be published after internal
                confirmation.
              </p>
            </div>
          </div>

          {/* Community Impact */}
          <div>
            <SectionTitle note="(To be updated)">Community Impact</SectionTitle>
            <p className="mt-2 text-xs text-slate-600">
              Creating greener, healthier and more resilient communities.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-emerald-900/5 bg-emerald-50/40 p-4 text-center"
                >
                  <span
                    className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full ${stat.wrap}`}
                  >
                    <Icon d={stat.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-extrabold leading-4 text-emerald-950">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">To be updated</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BE PART OF THE CHANGE ============ */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Be Part of the Change</SectionTitle>
            <p className="text-xs text-slate-600">
              There are many ways to support and contribute to our Climate,
              Environment &amp; Community Resilience program.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {/* Volunteer */}
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <Icon d={USERS} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-emerald-950">
                  Become a Volunteer
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Join our plantation drives, awareness sessions and community
                  activities.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1f4a2a] px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
                >
                  Apply as a Volunteer <span>→</span>
                </Link>
              </div>
            </article>

            {/* Partner */}
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-sky-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Icon d={HAND} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-emerald-950">
                  Become a Partner
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Collaborate with us to implement environmental initiatives and
                  create lasting impact.
                </p>
                <Link
                  href="/get-involved/partner"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0d3749] px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2b39]"
                >
                  Explore Partnerships <span>→</span>
                </Link>
              </div>
            </article>

            {/* Support */}
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-rose-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <Icon d={HEART} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-emerald-950">
                  Support Our Work
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Contribute resources or sponsor plantation drives, awareness
                  campaigns and community programs.
                </p>
                <Link
                  href="/get-involved/support"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  Discuss Support <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ============ GET IN TOUCH ============ */}
        <section className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#12382a] via-[#1a4a35] to-[#2b5c40]">
          <img
            src="/images/climate-resilience/cta-sapling.jpg"
            alt=""
            loading="lazy"
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover lg:block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12382a] via-[#12382a]/85 to-transparent" />

          <div className="relative grid items-center gap-6 px-6 py-10 sm:px-10 lg:grid-cols-2">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-100/90">
                Get in touch
              </span>
              <h3 className="mt-3 font-serif text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
                Let&apos;s Build Resilient Communities Together
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-emerald-50/90">
                Have questions or want to collaborate on our Climate,
                Environment &amp; Community Resilience program? We&apos;d love
                to hear from you.
              </p>
            </div>

            <div className="flex lg:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-xs font-extrabold text-emerald-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Contact the Program Team <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}