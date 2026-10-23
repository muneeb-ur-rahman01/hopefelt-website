import Link from "next/link";

/* ---------- Static content (matches the design) ---------- */

const heroChips = [
  {
    label: "Knowledge",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    label: "Awareness",
    wrap: "bg-rose-100 text-rose-500",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    label: "Better Choices",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    label: "Healthier Communities",
    wrap: "bg-amber-100 text-amber-700",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const focusAreas = [
  {
    title: "Health Education",
    desc: "Delivering essential health knowledge through engaging sessions, workshops and educational materials.",
    href: "/our-work/health-education-awareness/health-education",
    bg: "bg-gradient-to-b from-emerald-50 to-white",
    wrap: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-800",
    btn: "bg-emerald-700",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Health Promotion",
    desc: "Encouraging positive health behaviours and healthier lifestyles through targeted awareness campaigns.",
    href: "/our-work/health-education-awareness/health-promotion",
    bg: "bg-gradient-to-b from-rose-50 to-white",
    wrap: "bg-rose-100 text-rose-500",
    text: "text-rose-500",
    btn: "bg-rose-500",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    title: "Disease Prevention",
    desc: "Raising awareness on preventive measures to reduce the risk of communicable and non-communicable diseases.",
    href: "/our-work/health-education-awareness/disease-prevention",
    bg: "bg-gradient-to-b from-sky-50 to-white",
    wrap: "bg-sky-100 text-sky-600",
    text: "text-sky-600",
    btn: "bg-sky-600",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Community Awareness",
    desc: "Engaging communities on key public health issues through campaigns, events and outreach activities.",
    href: "/our-work/health-education-awareness/community-awareness",
    bg: "bg-gradient-to-b from-amber-50 to-white",
    wrap: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
    btn: "bg-amber-500",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const strategicGoals = [
  "Increase health literacy in communities",
  "Promote preventive health behaviours",
  "Strengthen community engagement",
  "Support national and global health goals",
];

const approachSteps = [
  {
    num: "01",
    title: "Identify Needs",
    desc: "Understand community health education needs.",
    numBg: "bg-amber-100 text-amber-700",
    wrap: "bg-amber-50 text-emerald-800",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    num: "02",
    title: "Develop Content",
    desc: "Create tailored and evidence-based materials.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-800",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    num: "03",
    title: "Deliver Programs",
    desc: "Conduct sessions, campaigns and activities.",
    numBg: "bg-sky-100 text-sky-700",
    wrap: "bg-sky-50 text-sky-600",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    num: "04",
    title: "Measure Impact",
    desc: "Track outcomes and improve future efforts.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-800",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const team = [
  {
    role: "Program Director",
    sub: "[Assigned Lead]",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    role: "Program Coordinator",
    sub: "[Assigned Coordinator]",
    wrap: "bg-sky-100 text-sky-600",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    role: "Education & Outreach Team",
    sub: "Health educators, volunteers and communication specialists",
    wrap: "bg-rose-100 text-rose-500",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const impactStats = [
  {
    label: "People reached",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Sessions conducted",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: "M3 4h18v12H3V4zm9 12v4m-4 0h8M7 8h4m-4 4h8",
  },
  {
    label: "Volunteer hours",
    wrap: "bg-sky-100 text-sky-700",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
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

const card =
  "rounded-3xl border border-emerald-900/5 bg-white shadow-[0_10px_40px_rgba(15,70,45,0.06)]";

/* ---------- Page ---------- */

export default function HealthEducationAwareness() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        {/* background photo */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <img
            src="/images/health-education/hero.jpg"
            alt="Health educator presenting to a community group beside a whiteboard reading A Healthier Community Starts with Awareness"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40" />
        </div>

        <div className="relative mx-auto max-w-[100rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-slate-600"
          >
            <Link href="/" className="hover:text-emerald-800">
              Home
            </Link>
            <span>/</span>
            <Link href="/our-work" className="hover:text-emerald-800">
              Our Work
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-800">
              Health Education &amp; Awareness
            </span>
          </nav>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="font-serif text-5xl font-black leading-[1.05] tracking-tight text-[#1f4a2a] sm:text-6xl">
                Health Education &amp;{" "}
                <span className="text-rose-500">Awareness</span>
              </h1>

              <p className="mt-4 text-xl font-semibold text-slate-900">
                Informed Communities. Healthier Lives.
              </p>
              <div className="mt-4 h-0.5 w-14 rounded-full bg-[#1f4a2a]" />

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
                At Hopefelt Foundation, we empower individuals and communities
                with the knowledge, skills and awareness needed to make
                healthier choices and build a more resilient society.
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
                  Explore Our Initiatives
                </a>
              </div>
            </div>

            {/* floating chips */}
            <aside className="ml-auto hidden w-56 space-y-3 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur lg:block">
              {heroChips.map((chip) => (
                <div key={chip.label} className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${chip.wrap}`}
                  >
                    <Icon d={chip.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold leading-4 text-slate-800">
                    {chip.label}
                  </span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-16 sm:px-8 lg:px-12">
        {/* ============ OUR FOCUS AREAS ============ */}
        <section id="focus-areas" className="pt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Focus Areas</SectionTitle>
            <p className="text-xs text-slate-600">
              Creating awareness, building knowledge and promoting healthy
              behaviours across communities.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f) => (
              <article
                key={f.title}
                className={`${f.bg} group flex flex-col rounded-3xl border border-emerald-900/5 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${f.wrap}`}
                >
                  <Icon d={f.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
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

        {/* ============ VISION / MISSION / GOALS ============ */}
        <section className="mt-8 grid gap-4 lg:grid-cols-3">
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
                A well-informed community that makes healthier choices for a
                better tomorrow.
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
                To promote health knowledge, awareness and positive behaviours
                through education, engagement and innovative communication.
              </p>
            </div>
          </article>

          <article className="flex items-center gap-5 rounded-2xl bg-orange-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
              <Icon
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                className="h-9 w-9"
              />
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
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        {/* ============ ALIGNMENT WITH GLOBAL GOALS ============ */}
        <section className="mt-12">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Alignment with Global Goals</SectionTitle>
            <p className="text-xs text-slate-600">
              Our Health Education &amp; Awareness initiatives contribute to the
              following Sustainable Development Goals (SDGs).
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* SDG 3 */}
            <article className="flex items-center gap-5 rounded-2xl p-3 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <div className="flex h-32 w-32 shrink-0 flex-col justify-between bg-[#4c9f38] p-2 text-white">
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-black leading-none">3</span>
                  <span className="text-[8px] font-bold uppercase leading-3">
                    Good Health
                    <br />
                    and Well-being
                  </span>
                </div>
                <Icon
                  d="M3 12h4l2-5 4 10 2-5h6"
                  className="mx-auto h-12 w-12"
                  stroke={2}
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">SDG 3</h3>
                <p className="text-lg font-bold leading-6 text-slate-900">
                  Good Health and Well-being
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Ensure healthy lives and promote well-being for all at all
                  ages.
                </p>
              </div>
            </article>

            {/* SDG 4 */}
            <article className="flex items-center gap-5 rounded-2xl p-3 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <div className="flex h-32 w-32 shrink-0 flex-col justify-between bg-[#c5192d] p-2 text-white">
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-black leading-none">4</span>
                  <span className="text-[8px] font-bold uppercase leading-3">
                    Quality
                    <br />
                    Education
                  </span>
                </div>
                <Icon
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  className="mx-auto h-12 w-12"
                  stroke={2}
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">SDG 4</h3>
                <p className="text-lg font-bold leading-6 text-slate-900">
                  Quality Education
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Ensure inclusive and equitable quality education and promote
                  lifelong learning opportunities.
                </p>
              </div>
            </article>

            {/* SDG 10 */}
            <article className="flex items-center gap-5 rounded-2xl p-3 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <div className="flex h-32 w-32 shrink-0 flex-col justify-between bg-[#e5176f] p-2 text-white">
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-black leading-none">10</span>
                  <span className="text-[8px] font-bold uppercase leading-3">
                    Reduced
                    <br />
                    Inequalities
                  </span>
                </div>
                <span className="text-center text-5xl leading-none">⇅</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">SDG 10</h3>
                <p className="text-lg font-bold leading-6 text-slate-900">
                  Reduced Inequalities
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Empower all individuals with equal access to health
                  information and awareness.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ============ OUR APPROACH ============ */}
        <section className="mt-12">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Approach</SectionTitle>
            <p className="text-xs text-slate-600">
              A step-by-step approach to building informed and healthier
              communities.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, idx) => (
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
                    <h3 className="text-sm font-extrabold text-emerald-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {idx < approachSteps.length - 1 && (
                  <span className="mt-3 hidden text-slate-500 lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ============ PROGRAM TEAM + IMPACT ============ */}
        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Program Team */}
          <div>
            <SectionTitle>Program Team</SectionTitle>
            <p className="mt-2 text-sm text-slate-600">
              Our Health Education &amp; Awareness program is led by a dedicated
              team.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-emerald-900/5 bg-white shadow-sm">
              <div className="grid divide-y divide-emerald-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {team.map((p) => (
                  <div key={p.role} className="flex items-center gap-3 p-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${p.wrap}`}
                    >
                      <Icon d={p.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-emerald-950">
                        {p.role}
                      </p>
                      <p className="text-[11px] leading-4 text-slate-500">
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
                Names and contacts are published after internal confirmation.
              </p>
            </div>
          </div>

          {/* Our Impact */}
          <div>
            <SectionTitle note="(To be updated)">Our Impact</SectionTitle>
            <p className="mt-2 text-sm text-slate-600">
              Creating awareness today for a healthier tomorrow.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-start gap-3 rounded-2xl border border-emerald-900/5 bg-emerald-50/50 p-4"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${stat.wrap}`}
                  >
                    <Icon d={stat.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xl font-black leading-6 text-emerald-950">
                      —
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-700">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-slate-400">To be updated</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BE A PART OF THE CHANGE ============ */}
        <section className="mt-12">
          <SectionTitle>Be a Part of the Change</SectionTitle>
          <p className="mt-2 text-sm text-slate-600">
            You can support our Health Education &amp; Awareness initiatives in
            different ways.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {/* Volunteer */}
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-rose-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <Icon
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  className="h-8 w-8"
                />
              </span>
              <div>
                <h3 className="text-lg font-bold text-rose-600">
                  Become a Volunteer
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Help us plan and deliver awareness sessions, campaigns and
                  community activities.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  Apply as a Volunteer <span>→</span>
                </Link>
              </div>
            </article>

            {/* Sponsor */}
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-sky-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Icon
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  className="h-8 w-8"
                />
              </span>
              <div>
                <h3 className="text-lg font-bold text-sky-700">
                  Sponsor Our Initiatives
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Support our awareness programs, educational materials and
                  community campaigns.
                </p>
                <Link
                  href="/get-involved/support"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0d3749] px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2b39]"
                >
                  Discuss Sponsorship <span>→</span>
                </Link>
              </div>
            </article>

            {/* Partner */}
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <Icon
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  className="h-8 w-8"
                />
              </span>
              <div>
                <h3 className="text-lg font-bold text-emerald-950">
                  Partner With Us
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Collaborate with us to create larger impact through joint
                  initiatives and programs.
                </p>
                <Link
                  href="/get-involved/partner"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1f4a2a] px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
                >
                  Become a Partner <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}