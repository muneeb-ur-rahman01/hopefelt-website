import Link from "next/link";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const USER = "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const DOC =
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const CHAT =
  "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z";
const HAND =
  "M7 11.5V14m0-2.5v-6a1.5 1.5 0 013 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3.75";
const ARROW = "M5 12h14m-6-6l6 6-6 6";
const CHECK = "M5 13l4 4L19 7";
const INFO = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
const EYE =
  "M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-8C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8z";
const TARGET =
  "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-3a1 1 0 100-2 1 1 0 000 2zM12 12l7-7m0 0v3m0-3h-3";

/* ---------- Static content ---------- */

const focusAreas = [
  {
    title: "Community Outreach",
    desc: "Reaching communities to understand local needs and build strong relationships.",
    href: "/our-work/community-development-outreach/community-outreach",
    bg: "from-emerald-50",
    bar: "from-emerald-600 to-emerald-300",
    wrap: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-800",
    icon: USERS,
  },
  {
    title: "Community Engagement",
    desc: "Involving community members in decision-making and collaborative actions.",
    href: "/our-work/community-development-outreach/community-engagement",
    bg: "from-sky-50",
    bar: "from-sky-500 to-sky-300",
    wrap: "bg-sky-100 text-sky-600",
    text: "text-sky-600",
    icon: CHAT,
  },
  {
    title: "Community Mobilization",
    desc: "Encouraging local participation and collective action for positive change.",
    href: "/our-work/community-development-outreach/community-mobilization",
    bg: "from-amber-50",
    bar: "from-amber-500 to-amber-300",
    wrap: "bg-amber-100 text-amber-700",
    text: "text-amber-700",
    icon: USERS,
  },
  {
    title: "Community Development",
    desc: "Supporting skill-building, resource access and long-term community growth.",
    href: "/our-work/community-development-outreach/community-development",
    bg: "from-rose-50",
    bar: "from-rose-500 to-rose-300",
    wrap: "bg-rose-100 text-rose-600",
    text: "text-rose-600",
    icon: CHART,
  },
  {
    title: "Vulnerable Community Support",
    desc: "Providing targeted support to marginalized and at-risk communities.",
    href: "/our-work/community-development-outreach/vulnerable-community-support",
    bg: "from-purple-50",
    bar: "from-purple-500 to-purple-300",
    wrap: "bg-purple-100 text-purple-600",
    text: "text-purple-600",
    icon: HEART,
  },
];

const strategicGoals = [
  "Increase community participation.",
  "Strengthen local capacity and partnerships.",
  "Improve inclusion and access to support.",
  "Promote sustainable, community-led solutions.",
];

const sdgs = [
  {
    num: "3",
    title: "Good Health and Well-being",
    desc: "Stronger, healthier communities with better access to essential services.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(76,159,56,0.6)]",
    accent: "text-emerald-700",
  },
  {
    num: "10",
    title: "Reduced Inequalities",
    desc: "More inclusive communities with equal opportunities and reduced disparities.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(229,23,111,0.5)]",
    accent: "text-pink-600",
  },
  {
    num: "17",
    title: "Partnerships for the Goals",
    desc: "Collaborative efforts to strengthen community development and create lasting impact.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(25,72,106,0.6)]",
    accent: "text-[#19486a]",
  },
];

const workSteps = [
  {
    num: "01",
    title: "Listen & Assess Needs",
    desc: "Understand local challenges and priorities through engagement.",
    icon: DOC,
  },
  {
    num: "02",
    title: "Co-design Local Actions",
    desc: "Work with communities to develop tailored solutions.",
    icon: USERS,
  },
  {
    num: "03",
    title: "Mobilize People & Partners",
    desc: "Bring together community members, volunteers and partners for implementation.",
    icon: HAND,
  },
  {
    num: "04",
    title: "Review Progress & Learn",
    desc: "Track outcomes, gather feedback and improve future efforts.",
    icon: CHART,
  },
];

const team = [
  { role: "Program Director", sub: "Alishba Noor", wrap: "bg-emerald-100 text-emerald-800", icon: USER },
  { role: "Community Outreach Coordinator", sub: "Alishba Noor", wrap: "bg-sky-100 text-sky-600", icon: USERS },
  { role: "Field & Volunteer Team", sub: "Community facilitators and trained volunteers", wrap: "bg-rose-100 text-rose-500", icon: USERS },
  { role: "Community Partners", sub: "Local organizations and stakeholders", wrap: "bg-amber-100 text-amber-700", icon: USERS },
];

const impactStats = [
  { value: "500+", label: "Communities Engaged", wrap: "bg-emerald-300/20 text-emerald-200", icon: USERS },
  { value: "10", label: "Outreach Activities", wrap: "bg-sky-300/20 text-sky-200", icon: DOC },
  { value: "40", label: "Volunteers Involved", wrap: "bg-rose-300/20 text-rose-200", icon: USERS },
  { value: "5", label: "Local Partnerships", wrap: "bg-amber-300/20 text-amber-200", icon: HAND },
];

/* ---------- Small helpers ---------- */

function Icon({ d, className = "h-6 w-6", stroke = 1.7 }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

function SectionTitle({ eyebrow, children }) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-black tracking-tight text-[#1f4a2a] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

const card =
  "rounded-[1.75rem] bg-white ring-1 ring-emerald-900/10 shadow-[0_1px_2px_rgba(15,70,45,0.05),0_16px_40px_-16px_rgba(15,70,45,0.18)]";

/* ---------- Page ---------- */

export default function CommunityDevelopmentOutreach() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      <style>{`
        /* one orchestrated moment: hero entrance */
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-rise { opacity: 0; animation: hero-rise .8s cubic-bezier(.2,.7,.2,1) forwards; }
        .hero-d1 { animation-delay: .05s; }
        .hero-d2 { animation-delay: .18s; }
        .hero-d3 { animation-delay: .3s; }
        .hero-d4 { animation-delay: .42s; }

        .dot-grid {
          background-image: radial-gradient(rgba(31,74,42,.14) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-rise { animation: none; opacity: 1; }
        }
      `}</style>

      {/* soft background glows + texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_30%,transparent_75%,black)]" />
        <div className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-[130px]" />
        <div className="absolute -left-40 top-[55%] h-[460px] w-[460px] rounded-full bg-lime-200/30 blur-[120px]" />
        <div className="absolute right-0 top-[85%] h-[380px] w-[380px] rounded-full bg-sky-200/25 blur-[120px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative min-h-[480px] bg-[#f4faf6]">
        {/* Full-width photo with a soft fade on the left for readable text */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/Our Work/community.png"
            alt="Hopefelt volunteer speaking with community members at an outreach session"
            className="h-full w-full object-cover object-center"
          />
          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-white/80 lg:hidden" />
          {/* Desktop fade */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_30%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_72%)] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f4faf6] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="hero-rise hero-d1 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs text-slate-600 shadow-sm ring-1 ring-emerald-900/10 backdrop-blur"
          >
            <Link href="/" className="transition hover:text-emerald-800">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link href="/our-work" className="transition hover:text-emerald-800">
              Our Work
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-semibold text-slate-800">
              Community Development &amp; Outreach
            </span>
          </nav>

          <div className="mt-8 max-w-2xl">
              <h1 className="hero-rise hero-d2 mt-5 bg-gradient-to-br from-[#12301a] via-[#1f4a2a] to-emerald-600 bg-clip-text font-serif text-5xl font-black leading-[1.04] tracking-tight text-transparent sm:text-6xl lg:text-[4.5rem]">
              Community Development &amp; Outreach
            </h1>

            <p className="hero-rise hero-d3 mt-6 font-serif text-xl text-slate-800 sm:text-2xl">
              Stronger Communities. Shared Progress.
            </p>

            <p className="hero-rise hero-d3 mt-5 max-w-xl text-base leading-7 text-slate-700">
              At Hopefelt Foundation, we work with communities to identify
              local needs, strengthen participation, build capacity and support
              inclusive, community-led solutions for a healthier and more
              resilient society.
            </p>

            <div className="hero-rise hero-d4 mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-involved"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1f4a2a] to-emerald-800 px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(31,74,42,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(31,74,42,0.8)] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                Get Involved
                <Icon
                  d={ARROW}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  stroke={2.2}
                />
              </Link>
              <a
                href="#focus-areas"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-900/30 bg-white/80 px-7 py-3.5 text-sm font-bold text-emerald-950 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                Explore Our Initiatives
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[90rem] px-5 pb-16 sm:px-8 lg:px-12">
        {/* ============ OUR FOCUS AREAS ============ */}
        <section id="focus-areas" className="scroll-mt-6 pt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="What we do">Our Focus Areas</SectionTitle>
            <p className="max-w-md text-base leading-7 text-slate-600">
              Key areas through which we work with communities to create
              inclusive and sustainable change.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {focusAreas.map((f) => (
              <article
                key={f.title}
                className={`${card} group relative overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-18px_rgba(15,70,45,0.35)]`}
              >
                <Link
                  href={f.href}
                  className={`flex h-full flex-col bg-gradient-to-b ${f.bg} to-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300`}
                >
                  <span className={`block h-1.5 w-full bg-gradient-to-r ${f.bar}`} />
                  <span className="flex flex-1 flex-col p-6">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white transition duration-500 group-hover:-rotate-6 group-hover:scale-110 ${f.wrap}`}
                    >
                      <Icon d={f.icon} className="h-8 w-8" />
                    </span>
                    <span className="mt-5 block font-serif text-xl font-extrabold leading-6 text-emerald-950">
                      {f.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {f.desc}
                    </span>
                    <span
                      className={`mt-auto flex items-center gap-2 pt-6 text-sm font-bold ${f.text}`}
                    >
                      Learn more
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
                        <Icon d={ARROW} className="h-3.5 w-3.5" stroke={2.2} />
                      </span>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR PURPOSE ============ */}
        <section className="mt-24">
          <SectionTitle eyebrow="Why we exist">Our Purpose</SectionTitle>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Vision */}
            <article className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-50 to-white p-8 ring-1 ring-emerald-900/10 shadow-[0_16px_40px_-20px_rgba(15,70,45,0.2)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,70,45,0.3)]">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 to-emerald-300" />
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900 shadow-sm ring-4 ring-white">
                <Icon d={EYE} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                Our Vision
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Empowered, inclusive communities with improved wellbeing and
                opportunities.
              </p>
            </article>

            {/* Mission */}
            <article className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sky-50 to-white p-8 ring-1 ring-emerald-900/10 shadow-[0_16px_40px_-20px_rgba(15,70,45,0.2)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,70,45,0.3)]">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-600 to-sky-300" />
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-900 shadow-sm ring-4 ring-white">
                <Icon d={TARGET} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                Our Mission
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                To work alongside communities through outreach, participation,
                capacity-building and collaborative local action.
              </p>
            </article>

            {/* Strategic goals */}
            <article className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-orange-50 to-white p-8 ring-1 ring-emerald-900/10 shadow-[0_16px_40px_-20px_rgba(15,70,45,0.2)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,70,45,0.3)]">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-300" />
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 shadow-sm ring-4 ring-white">
                <Icon d={CHART} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                Our Strategic Goals
              </h3>
              <ul className="mt-3 space-y-2">
                {strategicGoals.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
                  >
                    <Icon
                      d={CHECK}
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-600"
                      stroke={2.4}
                    />
                    {g}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Global goals">Strategic Alignment</SectionTitle>
            <p className="max-w-md text-base leading-7 text-slate-600">
              Our work contributes to the following Sustainable Development
              Goals (SDGs).
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sdgs.map((g) => (
              <article
                key={g.num}
                className={`${card} flex h-full items-center gap-5 p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,70,45,0.3)]`}
              >
                <img
                  src={`/images/sdg/sdg-${g.num}.png`}
                  alt={`SDG ${g.num}: ${g.title}`}
                  loading="lazy"
                  className={`h-32 w-32 shrink-0 rounded-2xl object-cover ring-2 ring-white ${g.shadow}`}
                />
                <div>
                  <h3 className={`text-sm font-bold ${g.accent}`}>SDG {g.num}</h3>
                  <p className="font-serif text-lg font-bold leading-6 text-slate-900">
                    {g.title}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {g.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 flex items-start justify-end gap-2 text-right text-[11px] leading-4 text-slate-500">
            <Icon d={INFO} className="mt-px h-3.5 w-3.5 shrink-0" />
            These alignments show how our work supports global goals. They do
            not imply official certification by the United Nations.
          </p>
        </section>

        {/* ============ HOW WE WORK ============ */}
        <section className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Our approach">How We Work</SectionTitle>
            <p className="max-w-md text-base leading-7 text-slate-600">
              A community-centered approach from understanding needs to creating
              lasting impact.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] bg-white/80 p-6 shadow-[0_20px_60px_-24px_rgba(15,70,45,0.25)] ring-1 ring-emerald-900/10 backdrop-blur-xl sm:p-10">
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* connecting line */}
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-emerald-900/20 lg:block" />

              {workSteps.map((step) => (
                <div key={step.title} className="relative">
                  <div className="relative inline-block">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-emerald-800 ring-4 ring-emerald-100">
                      <Icon d={step.icon} className="h-7 w-7" />
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1f4a2a] text-[11px] font-black text-white shadow-md ring-2 ring-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-extrabold leading-5 text-emerald-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[17rem] text-sm leading-6 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TEAM + IMPACT ============ */}
        <section className="mt-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Program Team & Coordination */}
          <div className="flex flex-col">
            <SectionTitle eyebrow="Who leads it">
              Program Team &amp; Coordination
            </SectionTitle>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Our Community Development &amp; Outreach program is led and
              supported by a dedicated team.
            </p>

            <div className={`${card} mt-6 flex-1 overflow-hidden`}>
              <div className="grid divide-y divide-emerald-900/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
                {team.map((p) => (
                  <div key={p.role} className="flex items-start gap-3 p-5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-4 ring-white ${p.wrap}`}
                    >
                      <Icon d={p.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold leading-4 text-emerald-950">
                        {p.role}
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {p.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 border-t border-emerald-900/10 bg-slate-50 px-5 py-3 text-[11px] text-slate-600">
                <Icon d={INFO} className="h-4 w-4 shrink-0" />
                Names and reporting lines will be published after internal
                confirmation.
              </p>
            </div>
          </div>

          {/* Community Impact */}
          <div className="flex flex-col">
            <SectionTitle eyebrow="Results">Community Impact</SectionTitle>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Our reach and impact in communities. (To be updated)
            </p>

            <div className="relative mt-6 flex-1 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#14503f] via-[#1c5a3a] to-[#2f4a2b] shadow-[0_24px_60px_-24px_rgba(20,80,63,0.7)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

              <div className="relative grid h-full grid-cols-2 gap-px bg-white/10">
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center gap-3 bg-[#173f35]/70 p-6"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl ${stat.wrap}`}
                    >
                      <Icon d={stat.icon} className="h-5 w-5" />
                    </span>
                    <p className="font-serif text-4xl font-black leading-none text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-emerald-100/85">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ BE PART OF COMMUNITY PROGRESS ============ */}
        <section className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Join us">
              Be Part of Community Progress
            </SectionTitle>
            <p className="max-w-md text-base leading-7 text-slate-600">
              There are many ways to support and contribute to our Community
              Development &amp; Outreach program.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Volunteer */}
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-white p-8 ring-1 ring-emerald-900/10 shadow-[0_20px_50px_-26px_rgba(15,70,45,0.35)] transition duration-500 hover:-translate-y-1.5">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-emerald-200/50 blur-3xl" />
              <div className="relative flex flex-1 flex-col">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 shadow-sm ring-4 ring-white">
                  <Icon d={USERS} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                  Become a Volunteer
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Join outreach, engagement and field activities in
                  communities.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="group mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-[#1f4a2a] px-6 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(31,74,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
                >
                  Apply as a Volunteer
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </div>
            </article>

            {/* Partner */}
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sky-50 via-sky-50/60 to-white p-8 ring-1 ring-sky-900/10 shadow-[0_20px_50px_-26px_rgba(13,55,73,0.35)] transition duration-500 hover:-translate-y-1.5">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-sky-200/60 blur-3xl" />
              <div className="relative flex flex-1 flex-col">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 shadow-sm ring-4 ring-white">
                  <Icon d={HAND} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                  Become a Partner
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Collaborate on community-led initiatives and create greater
                  impact together.
                </p>
                <Link
                  href="/get-involved/partner"
                  className="group mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-[#0d3749] px-6 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(13,55,73,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2b39] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
                >
                  Explore Partnerships
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </div>
            </article>

            {/* Support */}
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-rose-50 via-rose-50/60 to-white p-8 ring-1 ring-rose-900/10 shadow-[0_20px_50px_-26px_rgba(190,40,80,0.35)] transition duration-500 hover:-translate-y-1.5">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-rose-200/60 blur-3xl" />
              <div className="relative flex flex-1 flex-col">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-500 shadow-sm ring-4 ring-white">
                  <Icon d={HEART} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                  Support Our Work
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Contribute resources or sponsor local initiatives to
                  strengthen communities.
                </p>
                <Link
                  href="/get-involved/support"
                  className="group mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-rose-500 px-6 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(244,63,94,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
                >
                  Discuss Support
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ============ GET IN TOUCH ============ */}
        <section className="relative mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#1f3d2a] via-[#2b4f35] to-[#3a5c40] shadow-[0_30px_80px_-30px_rgba(31,61,42,0.8)]">
          <img
            src="/images/community-development/cta-hands.jpg"
            alt=""
            loading="lazy"
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover lg:block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f3d2a] via-[#1f3d2a]/85 to-transparent" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lime-300/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative grid items-center gap-8 px-6 py-14 sm:px-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-emerald-50 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                Get in touch
              </span>
              <h3 className="mt-4 font-serif text-3xl font-black leading-tight text-white sm:text-4xl">
                Let&apos;s Build Stronger Communities Together
              </h3>
              <div className="mt-4 h-1 w-14 rounded-full bg-lime-300" />
              <p className="mt-4 max-w-md text-sm leading-6 text-emerald-50/90">
                Have questions or want to collaborate on our Community
                Development &amp; Outreach program? We&apos;d love to hear from
                you.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-lime-300 px-8 py-4 text-xs font-extrabold text-emerald-950 shadow-[0_14px_34px_-10px_rgba(190,242,100,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-lime-200/60"
              >
                Contact the Community Development Team
                <Icon
                  d={ARROW}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  stroke={2.4}
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}