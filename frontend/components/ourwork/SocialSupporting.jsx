import Link from "next/link";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const USER = "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const BOOK =
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";
const BULB =
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
const GEAR =
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z";
const DOC =
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const SEARCH = "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z";
const HAND =
  "M7 11.5V14m0-2.5v-6a1.5 1.5 0 013 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3.75";

/* ---------- Static content (matches the design) ---------- */

const focusAreas = [
  {
    title: "Social Support",
    desc: "Providing guidance, mentorship and support to individuals and families in need.",
    href: "/our-work/social-support-learning/social-support",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-800",
    btn: "bg-emerald-700",
    icon: USERS,
  },
  {
    title: "Educational Support",
    desc: "Supporting access to quality education through resources, guidance and learning opportunities.",
    href: "/our-work/social-support-learning/educational-support",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-700",
    text: "text-sky-600",
    btn: "bg-sky-500",
    icon: BOOK,
  },
  {
    title: "Youth Development",
    desc: "Empowering young people with life skills, confidence and opportunities to grow.",
    href: "/our-work/social-support-learning/youth-development",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-700",
    text: "text-amber-600",
    btn: "bg-amber-500",
    icon: USERS,
  },
  {
    title: "Learning Initiatives",
    desc: "Organizing workshops, training sessions and community learning programs.",
    href: "/our-work/social-support-learning/learning-initiatives",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    text: "text-rose-500",
    btn: "bg-rose-500",
    icon: BULB,
  },
  {
    title: "Skills Development",
    desc: "Building practical skills for education, employment and entrepreneurship opportunities.",
    href: "/our-work/social-support-learning/skills-development",
    bg: "from-green-50",
    wrap: "bg-green-100 text-green-800",
    text: "text-emerald-800",
    btn: "bg-emerald-700",
    icon: GEAR,
  },
];

const strategicGoals = [
  "Increase access to education and learning.",
  "Support the personal and professional development of youth.",
  "Promote inclusion and equal opportunities.",
  "Strengthen community support systems.",
];

const workSteps = [
  {
    num: "01",
    title: "Identify Needs",
    desc: "Understand community challenges and needs through engagement.",
    numBg: "bg-amber-100 text-amber-700",
    wrap: "bg-amber-50 text-amber-600",
    icon: SEARCH,
  },
  {
    num: "02",
    title: "Design Support",
    desc: "Develop tailored programs, resources and learning pathways.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-700",
    icon: DOC,
  },
  {
    num: "03",
    title: "Deliver Learning & Support",
    desc: "Conduct training sessions, provide mentorship and offer continuous support.",
    numBg: "bg-sky-100 text-sky-700",
    wrap: "bg-sky-50 text-sky-600",
    icon: USERS,
  },
  {
    num: "04",
    title: "Review Progress",
    desc: "Track outcomes, gather feedback and improve future efforts.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-700",
    icon: CHART,
  },
];

const team = [
  { role: "Program Director", sub: "[Assigned Lead]", wrap: "bg-emerald-100 text-emerald-800", icon: USER },
  { role: "Social Support Coordinator", sub: "[Assigned Coordinator]", wrap: "bg-sky-100 text-sky-600", icon: BOOK },
  { role: "Learning & Skills Team", sub: "Educators and trained facilitators", wrap: "bg-rose-100 text-rose-500", icon: USERS },
  { role: "Community Volunteers", sub: "Local volunteers and youth mentors", wrap: "bg-amber-100 text-amber-700", icon: USERS },
];

const impactStats = [
  { label: "Learners Supported", wrap: "bg-emerald-100 text-emerald-800", icon: USERS },
  { label: "Sessions Delivered", wrap: "bg-sky-100 text-sky-600", icon: DOC },
  { label: "Youth Engaged", wrap: "bg-rose-100 text-rose-500", icon: USERS },
  { label: "Skills Pathways Created", wrap: "bg-amber-100 text-amber-700", icon: CHART },
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
    <article className="flex items-center gap-5 rounded-2xl border border-emerald-900/5 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex h-32 w-32 shrink-0 flex-col justify-between p-2 text-white ${color}`}
      >
        <div className="flex items-start gap-1">
          <span className="text-4xl font-black leading-none">{num}</span>
          <span className="text-[8px] font-bold uppercase leading-3">{label}</span>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-slate-900">SDG {num}</h3>
        <p className="text-base font-bold leading-6 text-slate-900">{title}</p>
        <p className="mt-1 text-sm leading-5 text-slate-600">{desc}</p>
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

export default function SocialSupportLearning() {
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
            src="/images/social-support/hero.jpg"
            alt="Facilitator leading a community learning session beside a Learning, People, Stronger Communities board"
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
              Social Support &amp; Learning
            </span>
          </nav>

          <div className="mt-6 max-w-2xl">
            <h1 className="font-serif text-5xl font-black leading-[1.05] tracking-tight text-[#1f4a2a] sm:text-6xl">
              Social Support &amp; Learning
            </h1>

            <p className="mt-4 text-xl text-slate-700">
              Supporting People. Unlocking Potential.
            </p>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-emerald-700" />

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              At <span className="font-semibold">Hopefelt Foundation</span>, we
              believe that every individual deserves the opportunity to learn,
              grow and reach their potential. Through social support, education
              and skills development, we help underserved communities build
              brighter, more inclusive futures.
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
                Explore Our Initiatives <span>→</span>
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
              Key areas through which we provide support and create inclusive
              learning opportunities.
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
                  An inclusive society where every individual has the support
                  and learning opportunities to reach their full potential.
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
                  To provide social support, education and skills development
                  through community-led initiatives, partnerships and inclusive
                  programs.
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
            <SectionTitle note="(Proposed)">Strategic Alignment</SectionTitle>
            <p className="text-xs text-slate-600">
              Our work contributes to the following Sustainable Development
              Goals (SDGs).
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <SdgTile
              num="4"
              label={<>Quality<br />Education</>}
              color="bg-[#c5192d]"
              title="Quality Education"
              desc="Ensure inclusive and equitable quality education and promote lifelong learning opportunities."
            >
              <Icon d={BOOK} className="h-12 w-12" stroke={2} />
            </SdgTile>

            <SdgTile
              num="10"
              label={<>Reduced<br />Inequalities</>}
              color="bg-[#e5176f]"
              title="Reduced Inequalities"
              desc="Empower all individuals with equal access to education, skills and opportunities."
            >
              <span className="text-5xl leading-none">⇅</span>
            </SdgTile>

            <SdgTile
              num="8"
              label={<>Decent Work and<br />Economic Growth</>}
              color="bg-[#a21942]"
              title="Decent Work and Economic Growth"
              desc="Promote inclusive economic growth through skills development and employment opportunities."
            >
              <Icon d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" className="h-12 w-12" stroke={2.2} />
            </SdgTile>
          </div>
        </section>

        {/* ============ HOW WE WORK ============ */}
        <section className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>How We Work</SectionTitle>
            <p className="text-xs text-slate-600">
              A community-focused approach from support to long-term impact.
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
              Our Social Support &amp; Learning program is led and supported by
              a dedicated team.
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
                Names and contacts are published after internal confirmation.
              </p>
            </div>
          </div>

          {/* Community Impact */}
          <div>
            <SectionTitle note="(To be updated)">Community Impact</SectionTitle>
            <p className="mt-2 text-xs text-slate-600">
              Creating stronger, more inclusive communities through learning and
              support.
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
              There are many ways to support and contribute to our Social
              Support &amp; Learning program.
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
                  Join our learning sessions, mentorship programs and community
                  support activities.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1f4a2a] px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
                >
                  Apply as a Volunteer <span>→</span>
                </Link>
              </div>
            </article>

            {/* Sponsor */}
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-sky-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Icon d={HAND} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-sky-700">
                  Sponsor Learning Initiatives
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Support educational resources, training sessions and youth
                  programs.
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
            <article className="flex items-start gap-5 rounded-2xl bg-gradient-to-br from-rose-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <Icon d={HEART} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-rose-600">
                  Become a Partner
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Collaborate with us to create more learning opportunities and
                  stronger communities.
                </p>
                <Link
                  href="/get-involved/partner"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  Explore Partnerships <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ============ GET IN TOUCH ============ */}
        <section className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#12382a] via-[#1a4a35] to-[#2b5c40]">
          <img
            src="/images/social-support/cta-books.jpg"
            alt=""
            loading="lazy"
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover lg:block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12382a] via-[#12382a]/85 to-transparent" />

          <div className="relative grid items-center gap-6 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-300">
                Get in touch
              </span>
              <h3 className="mt-3 font-serif text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
                Let&apos;s Create Opportunities Together
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-emerald-50/90">
                Have questions or want to collaborate on our Social Support &amp;
                Learning program? We&apos;d love to hear from you.
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