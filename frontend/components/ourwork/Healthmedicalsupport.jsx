import Link from "next/link";

/* ---------- Static content (matches the design) ---------- */

const services = [
  {
    title: "Medical Outreach",
    desc: "Bringing essential health services to underserved areas.",
    href: "/our-work/health-medical-support/medical-outreach",
    tint: "bg-emerald-50 text-emerald-800",
    text: "text-emerald-800",
    btn: "bg-emerald-900",
    icon: "M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3M8 15v1a6 6 0 006 6 6 6 0 006-6v-4M20 10a2 2 0 100 4 2 2 0 000-4z",
  },
  {
    title: "Medical Camps",
    desc: "Organizing free medical camps in communities.",
    href: "/our-work/health-medical-support/medical-camps",
    tint: "bg-rose-50 text-rose-600",
    text: "text-rose-500",
    btn: "bg-rose-500",
    icon: "M3 21h18M12 3L4 21M12 3l8 18M12 21v-7l-3 7M12 14l3 7",
  },
  {
    title: "Health Screening",
    desc: "Screening for early detection and better health outcomes.",
    href: "/our-work/health-medical-support/health-screening",
    tint: "bg-sky-50 text-sky-600",
    text: "text-sky-600",
    btn: "bg-sky-600",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 11v4m-2-2h4",
  },
  {
    title: "Preventive Health",
    desc: "Promoting healthier lifestyles and disease prevention.",
    href: "/our-work/health-medical-support/preventive-health",
    tint: "bg-orange-50 text-orange-600",
    text: "text-orange-500",
    btn: "bg-orange-500",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Community Health Services",
    desc: "Linking communities with continued care and referrals.",
    href: "/our-work/health-medical-support/community-health-services",
    tint: "bg-green-50 text-green-700",
    text: "text-emerald-800",
    btn: "bg-emerald-900",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const purposes = [
  {
    title: "Our Vision",
    desc: "Healthier communities where essential care is accessible to all.",
    bg: "bg-emerald-50/80",
    iconWrap: "bg-emerald-100 text-emerald-800",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-8C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8z",
  },
  {
    title: "Our Mission",
    desc: "To deliver community-centered health support through outreach, screening, education and referrals.",
    bg: "bg-sky-50/80",
    iconWrap: "bg-sky-100 text-sky-800",
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-3a1 1 0 100-2 1 1 0 000 2zM12 12l7-7m0 0v3m0-3h-3",
  },
  {
    title: "Our Strategic Goals",
    desc: "To improve access to basic care, encourage early detection and strengthen community referral pathways.",
    bg: "bg-orange-50/80",
    iconWrap: "bg-orange-100 text-orange-700",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const careSteps = [
  {
    num: "01",
    title: "Assess Community Needs",
    desc: "Understand local health needs through engagement and assessment.",
    icon: "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z",
  },
  {
    num: "02",
    title: "Plan Outreach",
    desc: "Design targeted camps and service delivery plans.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7h6m-6 4h4",
  },
  {
    num: "03",
    title: "Deliver Services",
    desc: "Conduct camps, screenings and health support activities.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    num: "04",
    title: "Follow Up & Learn",
    desc: "Track outcomes, gather feedback and improve future efforts.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const people = [
  {
    role: "Program Director",
    sub: "[Assigned Lead]",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    role: "Program Coordinator",
    sub: "[Assigned Coordinator]",
    wrap: "bg-sky-100 text-sky-700",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    role: "Medical & Field Team",
    sub: "Healthcare professionals and trained volunteers",
    wrap: "bg-rose-100 text-rose-600",
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
    label: "Camps delivered",
    wrap: "bg-orange-100 text-orange-600",
    icon: "M3 21h18M12 3L4 21M12 3l8 18",
  },
  {
    label: "Volunteer hours",
    wrap: "bg-emerald-100 text-emerald-800",
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
      <h2 className="font-serif text-2xl font-extrabold text-[#2f4a2b] sm:text-3xl">
        {children}
      </h2>
      {note && <span className="text-sm text-slate-500">{note}</span>}
      <span className="hidden h-0.5 w-10 rounded-full bg-[#2f4a2b] sm:block" />
    </div>
  );
}

const card =
  "rounded-3xl border border-emerald-900/5 bg-white shadow-[0_10px_40px_rgba(15,70,45,0.06)]";

/* ---------- Page ---------- */

export default function HealthMedicalSupport() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        <div className="mx-auto grid max-w-[100rem] items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
          <div className="relative z-10">
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
              <span className="text-slate-700">Health &amp; Medical Support</span>
            </nav>

            <h1 className="mt-5 font-serif text-5xl font-black leading-[1.05] tracking-tight text-[#2f4a2b] sm:text-6xl lg:text-7xl">
              Health &amp; <br />
              Medical Support
            </h1>

            <p className="mt-5 max-w-xl text-xl leading-8 text-slate-800">
              Connecting communities with essential care, early screening and
              practical health support.
            </p>

            <div className="mt-5 h-0.5 w-16 rounded-full bg-[#2f4a2b]" />

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              At Hopefelt Foundation, we work to improve access to basic
              healthcare services through outreach, medical camps, screening,
              preventive care and community health support, with a focus on
              underserved and vulnerable communities.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative">
            <img
              src="/images/health/health-hero.jpg"
              alt="Healthcare worker checking a patient's blood pressure at a community medical camp"
              className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96 lg:h-[26rem]"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#f4faf6] to-transparent lg:block" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-16 sm:px-8 lg:px-12">
        {/* ============ OUR SERVICES ============ */}
        <section>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Services</SectionTitle>
            <p className="text-xs text-slate-600">
              Focused services that bring essential healthcare closer to
              communities.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s) => (
              <article
                key={s.title}
                className={`${card} group flex flex-col p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${s.tint}`}
                >
                  <Icon d={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-extrabold leading-6 text-emerald-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>

                <Link
                  href={s.href}
                  className={`mt-auto flex items-center justify-between pt-5 text-sm font-bold ${s.text}`}
                >
                  Explore service
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition duration-300 group-hover:translate-x-1 ${s.btn}`}
                  >
                    <Icon d="M5 12h14m-6-6l6 6-6 6" className="h-4 w-4" stroke={2.4} />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR PURPOSE ============ */}
        <section className="mt-12">
          <SectionTitle>Our Purpose</SectionTitle>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {purposes.map((p) => (
              <article
                key={p.title}
                className={`${p.bg} flex items-center gap-5 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${p.iconWrap}`}
                >
                  <Icon d={p.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-extrabold text-emerald-950">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-12">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle note="(Proposed)">Strategic Alignment</SectionTitle>
            <p className="text-xs text-slate-600">
              Our work contributes to global and organizational goals.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* SDG 3 */}
            <article className="flex items-center gap-5 rounded-2xl border border-emerald-900/5 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-28 w-28 shrink-0 flex-col justify-between rounded-md bg-[#4c9f38] p-2 text-white">
                <div className="flex items-start gap-1">
                  <span className="text-3xl font-black leading-none">3</span>
                  <span className="text-[8px] font-bold uppercase leading-3">
                    Good Health
                    <br />
                    and Well-being
                  </span>
                </div>
                <Icon
                  d="M3 12h4l2-5 4 10 2-5h6"
                  className="mx-auto h-10 w-10"
                  stroke={2}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-6 text-slate-900">
                  SDG 3
                  <br />
                  Good Health and Well-being
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Supporting healthier lives and well-being for all.
                </p>
              </div>
            </article>

            {/* SDG 10 */}
            <article className="flex items-center gap-5 rounded-2xl border border-emerald-900/5 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-28 w-28 shrink-0 flex-col justify-between rounded-md bg-[#e5176f] p-2 text-white">
                <div className="flex items-start gap-1">
                  <span className="text-3xl font-black leading-none">10</span>
                  <span className="text-[8px] font-bold uppercase leading-3">
                    Reduced
                    <br />
                    Inequalities
                  </span>
                </div>
                <span className="text-center text-4xl leading-none">⇅</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-6 text-slate-900">
                  SDG 10
                  <br />
                  Reduced Inequalities
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Improving access to essential health services for underserved
                  communities.
                </p>
              </div>
            </article>

            {/* Foundation goal */}
            <article className="flex items-center gap-5 rounded-2xl border border-emerald-900/5 bg-emerald-50/60 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <Icon
                  d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8"
                  className="h-14 w-14"
                />
              </span>
              <div>
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  Foundation Strategic Goal
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Accessible, equitable community health services.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  (Proposed Alignment)
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ============ HOW WE DELIVER CARE ============ */}
        <section className="mt-12">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>How We Deliver Care</SectionTitle>
            <p className="text-xs text-slate-600">
              A simple, community-focused approach from need to impact.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careSteps.map((step, idx) => (
              <div key={step.num} className="flex items-start gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-extrabold text-emerald-800">
                    {step.num}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 ring-4 ring-white">
                    <Icon d={step.icon} className="h-5 w-5" />
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

                {idx < careSteps.length - 1 && (
                  <span className="mt-2 hidden text-slate-400 lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ============ PEOPLE + IMPACT ============ */}
        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* People Behind the Work */}
          <div>
            <SectionTitle>People Behind the Work</SectionTitle>
            <p className="mt-2 text-sm text-slate-600">
              Our Health &amp; Medical Support program is led and supported by a
              dedicated team of professionals and volunteers.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-emerald-900/5 bg-white shadow-sm">
              <div className="grid divide-y divide-emerald-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {people.map((p) => (
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

          {/* Impact & Volunteer Contribution */}
          <div>
            <SectionTitle>Our Impact &amp; Volunteer Contribution</SectionTitle>
            <p className="mt-2 text-sm text-slate-600">
              Every contribution helps us reach more communities and create
              healthier futures.
            </p>

            <div className="mt-5 grid grid-cols-1 divide-y divide-emerald-900/5 rounded-2xl border border-emerald-900/5 bg-emerald-50/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {impactStats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3 p-4">
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

        {/* ============ VOLUNTEER + SPONSOR ============ */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Volunteer */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-rose-50/70 to-white p-6 shadow-sm sm:p-8">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-rose-200/50 blur-2xl" />
            <div className="relative flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <Icon
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  className="h-8 w-8"
                />
              </span>
              <div>
                <h3 className="font-serif text-xl font-extrabold text-emerald-950">
                  Volunteer With Us
                </h3>
                <p className="mt-2 max-w-md text-xs leading-5 text-slate-600">
                  Join our efforts and make a direct impact in communities
                  through your time and skills.
                </p>
                <p className="mt-2 max-w-md text-xs leading-5 text-slate-600">
                  Roles include: Medical support, registration, community
                  mobilization, logistics, data &amp; follow-up.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  Become a Volunteer <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Sponsor / Partner */}
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-sky-50/70 to-white p-6 shadow-sm sm:p-8">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-emerald-200/40 blur-2xl" />
            <div className="relative flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800">
                <Icon
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  className="h-8 w-8"
                />
              </span>
              <div>
                <h3 className="font-serif text-xl font-extrabold text-emerald-950">
                  Sponsor or Partner With Us
                </h3>
                <p className="mt-2 max-w-md text-xs leading-5 text-slate-600">
                  Support our health initiatives and help us reach more
                  communities with essential care.
                </p>
                <p className="mt-2 max-w-md text-xs leading-5 text-slate-600">
                  Options include: Sponsor a medical camp, support screening
                  supplies, provide clinical expertise, partner on referrals.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/get-involved/support"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0d3749] px-6 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2b39]"
                  >
                    Discuss Sponsorship <span>→</span>
                  </Link>
                  <Link
                    href="/get-involved/partner"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-bold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:shadow-md"
                  >
                    Become a Partner <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ============ GET INVOLVED ============ */}
        <section className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl border border-emerald-900/5 bg-white px-6 py-7 shadow-[0_10px_40px_rgba(15,70,45,0.06)] sm:px-10 lg:flex-row">
          <div className="flex items-center gap-5 text-center lg:text-left">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 sm:flex">
              <Icon d="M3 6h18v12H3V6zm0 0l9 7 9-7" className="h-8 w-8" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-extrabold text-emerald-950">
                Get Involved
              </h2>
              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
                Have questions or want to get involved in our Health &amp;
                Medical Support program? Reach out to our team and we'll be
                happy to guide you.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#2f4a2b] px-7 py-3 text-xs font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
            >
              Contact the Health Program Team <span>→</span>
            </Link>
            <p className="text-[10px] text-slate-500">
              All applications and inquiries are reviewed by Hopefelt
              Foundation.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}