import Link from "next/link";

/* ---------- Icon paths ---------- */

const ARROW = "M5 12h14m-6-6l6 6-6 6";
const CHECK = "M5 13l4 4L19 7";
const INFO = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
const BOOK =
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";
const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const USERS_SM =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z";
const USER = "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
const EYE =
  "M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-8C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8z";
const TARGET =
  "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-3a1 1 0 100-2 1 1 0 000 2zM12 12l7-7m0 0v3m0-3h-3";

/* ---------- Static content ---------- */

const heroChips = [
  {
    label: "Knowledge",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: BOOK,
  },
  {
    label: "Awareness",
    wrap: "bg-rose-100 text-rose-500",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    label: "Better Choices",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: USERS,
  },
  {
    label: "Healthier Communities",
    wrap: "bg-amber-100 text-amber-700",
    icon: HEART,
  },
];

const focusAreas = [
  {
    title: "Health Education",
    desc: "Delivering essential health knowledge through engaging sessions, workshops and educational materials.",
    href: "/our-work/health-education-awareness/health-education",
    bg: "from-emerald-50",
    bar: "from-emerald-600 to-emerald-300",
    wrap: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-800",
    btn: "bg-emerald-700",
    icon: BOOK,
  },
  {
    title: "Health Promotion",
    desc: "Encouraging positive health behaviours and healthier lifestyles through targeted awareness campaigns.",
    href: "/our-work/health-education-awareness/health-promotion",
    bg: "from-rose-50",
    bar: "from-rose-500 to-rose-300",
    wrap: "bg-rose-100 text-rose-500",
    text: "text-rose-500",
    btn: "bg-rose-500",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    title: "Disease Prevention",
    desc: "Raising awareness on preventive measures to reduce the risk of communicable and non-communicable diseases.",
    href: "/our-work/health-education-awareness/disease-prevention",
    bg: "from-sky-50",
    bar: "from-sky-500 to-sky-300",
    wrap: "bg-sky-100 text-sky-600",
    text: "text-sky-600",
    btn: "bg-sky-600",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Community Awareness",
    desc: "Engaging communities on key public health issues through campaigns, events and outreach activities.",
    href: "/our-work/health-education-awareness/community-awareness",
    bg: "from-amber-50",
    bar: "from-amber-500 to-amber-300",
    wrap: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
    btn: "bg-amber-500",
    icon: USERS,
  },
];

const strategicGoals = [
  "Increase health literacy in communities",
  "Promote preventive health behaviours",
  "Strengthen community engagement",
  "Support national and global health goals",
];

const sdgs = [
  {
    num: "3",
    title: "Good Health and Well-being",
    desc: "Ensure healthy lives and promote well-being for all at all ages.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(76,159,56,0.6)]",
    accent: "text-emerald-700",
  },
  {
    num: "4",
    title: "Quality Education",
    desc: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(197,25,45,0.55)]",
    accent: "text-red-700",
  },
  {
    num: "10",
    title: "Reduced Inequalities",
    desc: "Empower all individuals with equal access to health information and awareness.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(229,23,111,0.5)]",
    accent: "text-pink-600",
  },
];

const approachSteps = [
  {
    num: "01",
    title: "Identify Needs",
    desc: "Understand community health education needs.",
    numBg: "bg-amber-500 text-white",
    wrap: "bg-amber-50 text-amber-600 ring-amber-200",
    icon: USER,
  },
  {
    num: "02",
    title: "Develop Content",
    desc: "Create tailored and evidence-based materials.",
    numBg: "bg-emerald-700 text-white",
    wrap: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    num: "03",
    title: "Deliver Programs",
    desc: "Conduct sessions, campaigns and activities.",
    numBg: "bg-sky-600 text-white",
    wrap: "bg-sky-50 text-sky-600 ring-sky-200",
    icon: USERS_SM,
  },
  {
    num: "04",
    title: "Measure Impact",
    desc: "Track outcomes and improve future efforts.",
    numBg: "bg-[#1f4a2a] text-white",
    wrap: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: CHART,
  },
];

const team = [
  {
    role: "Program Director",
    sub: "[Assigned Lead]",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: USER,
  },
  {
    role: "Program Coordinator",
    sub: "[Assigned Coordinator]",
    wrap: "bg-sky-100 text-sky-600",
    icon: USERS_SM,
  },
  {
    role: "Education & Outreach Team",
    sub: "Health educators, volunteers and communication specialists",
    wrap: "bg-rose-100 text-rose-500",
    icon: USERS_SM,
  },
];

const impactStats = [
  {
    label: "People reached",
    wrap: "bg-emerald-300/20 text-emerald-200",
    icon: USERS_SM,
  },
  {
    label: "Sessions conducted",
    wrap: "bg-lime-300/20 text-lime-200",
    icon: "M3 4h18v12H3V4zm9 12v4m-4 0h8M7 8h4m-4 4h8",
  },
  {
    label: "Volunteer hours",
    wrap: "bg-sky-300/20 text-sky-200",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
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

function SectionTitle({ eyebrow, children, note }) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-wrap items-baseline gap-3">
        <h2 className="font-serif text-3xl font-black tracking-tight text-[#1f4a2a] sm:text-4xl">
          {children}
        </h2>
        {note && <span className="text-sm text-slate-500">{note}</span>}
      </div>
    </div>
  );
}

const card =
  "rounded-[1.75rem] bg-white ring-1 ring-emerald-900/10 shadow-[0_1px_2px_rgba(15,70,45,0.05),0_16px_40px_-16px_rgba(15,70,45,0.18)]";

/* ---------- Page ---------- */

export default function HealthEducationAwareness() {
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
      <header className="relative min-h-[480px] border-b border-emerald-900/5 bg-[#0f3d2a]">
  {/* Full-width photo */}
  <div className="pointer-events-none absolute inset-0">
    <img
      src="/images/Our Work/healtheducation.png"
      alt="Health educator presenting to a community group beside a whiteboard reading A Healthier Community Starts with Awareness"
      className="h-full w-full object-cover object-center text-transparent"
    />
    {/* Mobile: poori photo par dark overlay */}
    <div className="absolute inset-0 bg-[#0f3d2a]/70 lg:hidden" />
    {/* Desktop: left par dark (text ke liye), right par photo clear */}
    <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(10,40,28,0.88)_0%,rgba(10,40,28,0.7)_30%,rgba(10,40,28,0.35)_55%,rgba(10,40,28,0)_78%)] lg:block" />
  </div>

  <div className="relative mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
    <nav
      aria-label="Breadcrumb"
      className="hero-rise hero-d1 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs text-white/80 shadow-sm backdrop-blur"
    >
      <Link href="/" className="transition hover:text-lime-300">
        Home
      </Link>
      <span className="text-white/50">/</span>
      <Link href="/our-work" className="transition hover:text-lime-300">
        Our Work
      </Link>
      <span className="text-white/50">/</span>
      <span className="font-semibold text-white">
        Health Education &amp; Awareness
      </span>
    </nav>

    <div className="mt-8 max-w-2xl">
      <h1 className="hero-rise hero-d2 mt-5 font-serif text-5xl font-black leading-[1.04] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[4.5rem]">
        Health Education &amp;{" "}
        <span className="text-lime-300">Awareness</span>
      </h1>

      <p className="hero-rise hero-d3 mt-6 font-serif text-xl font-semibold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-2xl">
        Informed Communities. Healthier Lives.
      </p>

      <p className="hero-rise hero-d3 mt-5 max-w-xl text-base leading-7 text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
        At Hopefelt Foundation, we empower individuals and communities
        with the knowledge, skills and awareness needed to make
        healthier choices and build a more resilient society.
      </p>

      <div className="hero-rise hero-d4 mt-8 flex flex-wrap gap-3">
        <Link
          href="/get-involved"
          className="group inline-flex items-center gap-2.5 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-bold text-[#0f3d2a] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-lime-200/60"
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
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        >
          Explore Our Initiatives
        </a>
      </div>
    </div>

    {/* Highlights bar: ab hero ke bottom par, text ke neeche */}
    <div className="hero-rise hero-d4 mt-10 hidden max-w-4xl grid-cols-4 divide-x divide-white/15 rounded-2xl border border-white/20 bg-white/10 px-2 py-3 shadow-xl backdrop-blur-md lg:grid">
      {heroChips.map((chip) => (
        <div
          key={chip.label}
          className="flex flex-col items-center gap-2 px-2 text-center xl:flex-row xl:gap-3 xl:text-left"
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-4 ring-white/20 ${chip.wrap}`}
          >
            <Icon d={chip.icon} className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold leading-4 text-white xl:text-sm">
            {chip.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</header>

      <div className="mx-auto max-w-[90rem] px-5 pb-16 sm:px-8 lg:px-12">

        {/* ============ OUR FOCUS AREAS ============ */}
        <section id="focus-areas" className="scroll-mt-6 pt-14">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionTitle eyebrow="What we do">
              Our Focus Areas
            </SectionTitle>

            <p className="max-w-2xl text-base italic leading-7 text-slate-600">
              Creating awareness, building knowledge and promoting healthy
              behaviours across communities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f) => (
              <article
                key={f.title}
                className={`${card} group relative flex flex-col overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-18px_rgba(15,70,45,0.35)]`}
              >
                <Link
                  href={f.href}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="absolute inset-0 z-10"
                />
                <div className={`h-1.5 w-full bg-gradient-to-r ${f.bar}`} />

                <div
                  className={`flex flex-1 flex-col bg-gradient-to-b ${f.bg} to-white p-7`}
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white transition duration-500 group-hover:-rotate-6 group-hover:scale-110 ${f.wrap}`}
                  >
                    <Icon d={f.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {f.desc}
                  </p>

                  <Link
                    href={f.href}
                    className={`mt-auto flex items-center justify-between pt-6 text-sm font-bold focus:outline-none focus-visible:underline ${f.text}`}
                  >
                    Learn More
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md ring-4 ring-white transition duration-300 group-hover:translate-x-1 ${f.btn}`}
                    >
                      <Icon d={ARROW} className="h-4 w-4" stroke={2.4} />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ VISION / MISSION / GOALS ============ */}
        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <article className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-50 to-white p-8 ring-1 ring-emerald-900/10 shadow-[0_16px_40px_-20px_rgba(15,70,45,0.2)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,70,45,0.3)]">
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-600 to-emerald-300" />
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900 shadow-sm ring-4 ring-white">
              <Icon d={EYE} className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
              Our Vision
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A well-informed community that makes healthier choices for a
              better tomorrow.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sky-50 to-white p-8 ring-1 ring-emerald-900/10 shadow-[0_16px_40px_-20px_rgba(15,70,45,0.2)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,70,45,0.3)]">
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-600 to-sky-300" />
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-900 shadow-sm ring-4 ring-white">
              <Icon d={TARGET} className="h-8 w-8" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
              Our Mission
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              To promote health knowledge, awareness and positive behaviours
              through education, engagement and innovative communication.
            </p>
          </article>

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
        </section>

        {/* ============ ALIGNMENT WITH GLOBAL GOALS ============ */}
        <section className="mt-24">
          <div className="flex flex-col items-start gap-4">
            <SectionTitle eyebrow="Global goals">
              Alignment with Global Goals
            </SectionTitle>

            <p className="max-w-2xl text-base italic leading-7 text-slate-600">
              Our Health Education &amp; Awareness initiatives contribute to the
              following Sustainable Development Goals (SDGs).
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
                  <h3 className={`text-sm font-bold ${g.accent}`}>
                    SDG {g.num}
                  </h3>
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
        </section>

        {/* ============ OUR APPROACH ============ */}
        <section className="mt-24">
          <div className="flex flex-col items-start gap-4">
            <SectionTitle eyebrow="How we work">
              Our Approach
            </SectionTitle>

            <p className="max-w-2xl text-base italic leading-7 text-slate-600">
              A step-by-step approach to building informed and healthier
              communities.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] bg-white/80 p-6 shadow-[0_20px_60px_-24px_rgba(15,70,45,0.25)] ring-1 ring-emerald-900/10 backdrop-blur-xl sm:p-10">
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-emerald-900/20 lg:block" />

              {approachSteps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="relative inline-block">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-white ring-4 ${step.wrap}`}
                    >
                      <Icon d={step.icon} className="h-7 w-7" />
                    </span>
                    <span
                      className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black shadow-md ring-2 ring-white ${step.numBg}`}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-extrabold leading-5 text-emerald-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-6 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROGRAM TEAM + IMPACT ============ */}
        {/* <section className="mt-24 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <SectionTitle eyebrow="Who leads it">Program Team</SectionTitle>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Our Health Education &amp; Awareness program is led by a dedicated
              team.
            </p>

            <div className={`${card} mt-6 flex-1 overflow-hidden`}>
              <div className="grid divide-y divide-emerald-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {team.map((p) => (
                  <div key={p.role} className="flex items-center gap-3 p-5">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-4 ring-white ${p.wrap}`}
                    >
                      <Icon d={p.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-emerald-950">
                        {p.role}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                        {p.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 border-t border-emerald-900/10 bg-slate-50 px-5 py-3 text-[11px] text-slate-600">
                <Icon d={INFO} className="h-4 w-4 shrink-0" />
                Names and contacts are published after internal confirmation.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <SectionTitle eyebrow="Results" note="(To be updated)">
              Our Impact
            </SectionTitle>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Creating awareness today for a healthier tomorrow.
            </p>

            <div className="relative mt-6 flex-1 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#14503f] via-[#1c5a3a] to-[#2f4a2b] shadow-[0_24px_60px_-24px_rgba(20,80,63,0.7)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

              <div className="relative grid h-full grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center gap-3 p-6"
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.wrap}`}
                    >
                      <Icon d={stat.icon} className="h-5 w-5" />
                    </span>
                    <p className="font-serif text-4xl font-black leading-none text-white">
                      —
                    </p>
                    <div>
                      <p className="text-xs font-semibold text-emerald-100/90">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 text-[11px] text-emerald-100/55">
                        To be updated
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* ============ BE A PART OF THE CHANGE ============ */}
        <section className="mt-24">
          <div className="flex flex-col items-start gap-4">
            <SectionTitle eyebrow="Join us">
              Be a Part of the Change
            </SectionTitle>

            <p className="max-w-2xl text-base italic leading-7 text-slate-600">
              You can support our Health Education &amp; Awareness initiatives
              in different ways.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-rose-50 via-rose-50/60 to-white p-8 ring-1 ring-rose-900/10 shadow-[0_20px_50px_-26px_rgba(190,40,80,0.35)] transition duration-500 hover:-translate-y-1.5">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-rose-200/60 blur-3xl" />
              <div className="relative flex flex-1 flex-col">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-500 shadow-sm ring-4 ring-white">
                  <Icon d={HEART} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-rose-700">
                  Become a Volunteer
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Help us plan and deliver awareness sessions, campaigns and
                  community activities.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="group mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-rose-500 px-6 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(244,63,94,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
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

            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-sky-50 via-sky-50/60 to-white p-8 ring-1 ring-sky-900/10 shadow-[0_20px_50px_-26px_rgba(13,55,73,0.35)] transition duration-500 hover:-translate-y-1.5">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-sky-200/60 blur-3xl" />
              <div className="relative flex flex-1 flex-col">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 shadow-sm ring-4 ring-white">
                  <Icon d={USERS_SM} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-sky-800">
                  Sponsor Our Initiatives
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Support our awareness programs, educational materials and
                  community campaigns.
                </p>
                <Link
                  href="/get-involved/support"
                  className="group mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-[#0d3749] px-6 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(13,55,73,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2b39] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
                >
                  Discuss Sponsorship
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </div>
            </article>

            <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-white p-8 ring-1 ring-emerald-900/10 shadow-[0_20px_50px_-26px_rgba(15,70,45,0.35)] transition duration-500 hover:-translate-y-1.5">
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-emerald-200/50 blur-3xl" />
              <div className="relative flex flex-1 flex-col">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 shadow-sm ring-4 ring-white">
                  <Icon d={USERS} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                  Partner With Us
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Collaborate with us to create larger impact through joint
                  initiatives and programs.
                </p>
                <Link
                  href="/get-involved/partner"
                  className="group mt-auto inline-flex w-fit items-center gap-2.5 rounded-full bg-[#1f4a2a] px-6 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(31,74,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
                >
                  Become a Partner
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
      </div>
    </section>
  );
}