import Link from "next/link";

/* ---------- Static content (matches the design) ---------- */

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

const focusAreas = [
  {
    title: "Community Outreach",
    desc: "Reaching communities to understand local needs and build strong relationships.",
    href: "/our-work/community-development-outreach/community-outreach",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: USERS,
  },
  {
    title: "Community Engagement",
    desc: "Involving community members in decision-making and collaborative actions.",
    href: "/our-work/community-development-outreach/community-engagement",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    icon: CHAT,
  },
  {
    title: "Community Mobilization",
    desc: "Encouraging local participation and collective action for positive change.",
    href: "/our-work/community-development-outreach/community-mobilization",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-700",
    icon: USERS,
  },
  {
    title: "Community Development",
    desc: "Supporting skill-building, resource access and long-term community growth.",
    href: "/our-work/community-development-outreach/community-development",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-600",
    icon: CHART,
  },
  {
    title: "Vulnerable Community Support",
    desc: "Providing targeted support to marginalized and at-risk communities.",
    href: "/our-work/community-development-outreach/vulnerable-community-support",
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-600",
    icon: HEART,
  },
];

const strategicGoals = [
  "Increase community participation.",
  "Strengthen local capacity and partnerships.",
  "Improve inclusion and access to support.",
  "Promote sustainable, community-led solutions.",
];

const workSteps = [
  {
    title: "Listen & Assess Needs",
    desc: "Understand local challenges and priorities through engagement.",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: DOC,
  },
  {
    title: "Co-design Local Actions",
    desc: "Work with communities to develop tailored solutions.",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: USERS,
  },
  {
    title: "Mobilize People & Partners",
    desc: "Bring together community members, volunteers and partners for implementation.",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: HAND,
  },
  {
    title: "Review Progress & Learn",
    desc: "Track outcomes, gather feedback and improve future efforts.",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: CHART,
  },
];

const team = [
  { role: "Program Director", sub: "[Assigned Lead]", wrap: "bg-emerald-100 text-emerald-800", icon: USER },
  { role: "Community Outreach Coordinator", sub: "[Assigned Coordinator]", wrap: "bg-sky-100 text-sky-600", icon: USERS },
  { role: "Field & Volunteer Team", sub: "Community facilitators and trained volunteers", wrap: "bg-rose-100 text-rose-500", icon: USERS },
  { role: "Community Partners", sub: "Local organizations and stakeholders", wrap: "bg-amber-100 text-amber-700", icon: USERS },
];

const impactStats = [
  { label: "Communities Engaged", wrap: "bg-emerald-100 text-emerald-800", icon: USERS },
  { label: "Outreach Activities", wrap: "bg-sky-100 text-sky-600", icon: DOC },
  { label: "Volunteers Involved", wrap: "bg-rose-100 text-rose-500", icon: USERS },
  { label: "Local Partnerships", wrap: "bg-amber-100 text-amber-700", icon: HAND },
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

function SectionTitle({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <h2 className="font-serif text-2xl font-extrabold text-[#1f4a2a] sm:text-3xl">
        {children}
      </h2>
      <span className="hidden h-0.5 w-10 rounded-full bg-[#1f4a2a] sm:block" />
    </div>
  );
}

/* ---------- Page ---------- */

export default function CommunityDevelopmentOutreach() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <img
            src="/images/community-development/hero.jpg"
            alt="Hopefelt volunteer speaking with community members at an outreach session"
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
              Community Development &amp; Outreach
            </span>
          </nav>

          <div className="mt-8 max-w-2xl">
            <h1 className="font-serif text-5xl font-black leading-[1.05] tracking-tight text-[#1f4a2a] sm:text-6xl">
              Community Development &amp; Outreach
            </h1>

            <p className="mt-4 text-xl text-slate-700">
              Stronger Communities. Shared Progress.
            </p>
            <div className="mt-4 h-0.5 w-14 rounded-full bg-emerald-700" />

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              At Hopefelt Foundation, we work with communities to identify
              local needs, strengthen participation, build capacity and support
              inclusive, community-led solutions for a healthier and more
              resilient society.
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
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-12 sm:px-8 lg:px-12">
        {/* ============ OUR FOCUS AREAS ============ */}
        <section id="focus-areas" className="pt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Focus Areas</SectionTitle>
            <p className="text-xs text-slate-600">
              Key areas through which we work with communities to create
              inclusive and sustainable change.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {focusAreas.map((f) => (
              <article
                key={f.title}
                className={`group rounded-3xl border border-emerald-900/5 bg-gradient-to-b ${f.bg} to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <Link href={f.href} className="block">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${f.wrap}`}
                  >
                    <Icon d={f.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-extrabold leading-6 text-emerald-950">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
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
                  Empowered, inclusive communities with improved wellbeing and
                  opportunities.
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
                  To work alongside communities through outreach, participation,
                  capacity-building and collaborative local action.
                </p>
              </div>
            </article>

            <article className="flex items-center gap-5 rounded-2xl bg-orange-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
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
            <SectionTitle>Strategic Alignment</SectionTitle>
            <p className="text-xs text-slate-600">
              Our work contributes to the following Sustainable Development
              Goals (SDGs).
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* SDG 3 */}
            <article className="flex items-center gap-5 rounded-2xl border border-emerald-900/5 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-32 w-32 shrink-0 flex-col justify-between bg-[#4c9f38] p-2 text-white">
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-black leading-none">3</span>
                  <span className="text-[8px] font-bold uppercase leading-3">
                    Good Health
                    <br />
                    and Well-being
                  </span>
                </div>
                <Icon d="M3 12h4l2-5 4 10 2-5h6" className="mx-auto h-12 w-12" stroke={2} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">SDG 3</h3>
                <p className="text-base font-bold leading-6 text-slate-900">
                  Good Health and Well-being
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Stronger, healthier communities with better access to
                  essential services.
                </p>
              </div>
            </article>

            {/* SDG 10 */}
            <article className="flex items-center gap-5 rounded-2xl border border-emerald-900/5 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                <p className="text-base font-bold leading-6 text-slate-900">
                  Reduced Inequalities
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  More inclusive communities with equal opportunities and
                  reduced disparities.
                </p>
              </div>
            </article>

            {/* SDG 17 */}
            <article className="flex items-center gap-5 rounded-2xl border border-emerald-900/5 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-32 w-32 shrink-0 flex-col justify-between bg-[#19486a] p-2 text-white">
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-black leading-none">17</span>
                  <span className="text-[8px] font-bold uppercase leading-3">
                    Partnerships
                    <br />
                    for the Goals
                  </span>
                </div>
                <span className="text-center text-5xl leading-none">❂</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">SDG 17</h3>
                <p className="text-base font-bold leading-6 text-slate-900">
                  Partnerships for the Goals
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Collaborative efforts to strengthen community development and
                  create lasting impact.
                </p>
              </div>
            </article>
          </div>

          <p className="mt-3 text-right text-[11px] text-slate-500">
            These alignments show how our work supports global goals. They do
            not imply official certification by the United Nations.
          </p>
        </section>

        {/* ============ HOW WE WORK ============ */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>How We Work</SectionTitle>
            <p className="text-xs text-slate-600">
              A community-centered approach from understanding needs to creating
              lasting impact.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step, idx) => (
              <div key={step.title} className="flex items-start gap-3">
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${step.wrap}`}
                  >
                    <Icon d={step.icon} className="h-8 w-8" />
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

                {idx < workSteps.length - 1 && (
                  <span className="mt-4 hidden text-slate-500 lg:block">›</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ============ TEAM + IMPACT ============ */}
        <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Program Team & Coordination */}
          <div>
            <SectionTitle>Program Team &amp; Coordination</SectionTitle>
            <p className="mt-2 text-xs text-slate-600">
              Our Community Development &amp; Outreach program is led and
              supported by a dedicated team.
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
            <SectionTitle>Community Impact</SectionTitle>
            <p className="mt-2 text-xs text-slate-600">
              Our reach and impact in communities. (To be updated)
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-emerald-900/5 bg-emerald-50/40 p-4"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.wrap}`}
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

        {/* ============ BE PART OF COMMUNITY PROGRESS ============ */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Be Part of Community Progress</SectionTitle>
            <p className="text-xs text-slate-600">
              There are many ways to support and contribute to our Community
              Development &amp; Outreach program.
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
                  Join outreach, engagement and field activities in communities.
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
                  Collaborate on community-led initiatives and create greater
                  impact together.
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
                  Contribute resources or sponsor local initiatives to
                  strengthen communities.
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
        <section className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f3d2a] via-[#2b4f35] to-[#3a5c40]">
          <img
            src="/images/community-development/cta-hands.jpg"
            alt=""
            loading="lazy"
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover lg:block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f3d2a] via-[#1f3d2a]/85 to-transparent" />

          <div className="relative grid items-center gap-6 px-6 py-10 sm:px-10 lg:grid-cols-2">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-100/90">
                Get in touch
              </span>
              <h3 className="mt-3 font-serif text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
                Let&apos;s Build Stronger Communities Together
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-emerald-50/90">
                Have questions or want to collaborate on our Community
                Development &amp; Outreach program? We&apos;d love to hear from
                you.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-xs font-extrabold text-emerald-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Contact the Community Development Team <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}