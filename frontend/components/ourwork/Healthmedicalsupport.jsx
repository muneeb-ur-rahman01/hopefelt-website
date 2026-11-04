import Link from "next/link";

/* ---------- Icon paths ---------- */

const ARROW = "M5 12h14m-6-6l6 6-6 6";
const INFO = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
const MAIL = "M3 6h18v12H3V6zm0 0l9 7 9-7";
const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const LEAF = "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8";

/* ---------- Static content ---------- */

const services = [
  {
    title: "Medical Outreach",
    desc: "Bringing essential health services to underserved areas.",
    href: "/our-work/health-medical-support/medical-outreach",
    tint: "bg-emerald-100 text-emerald-800",
    top: "from-emerald-50",
    text: "text-emerald-800",
    btn: "bg-emerald-900",
    icon: "M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3M8 15v1a6 6 0 006 6 6 6 0 006-6v-4M20 10a2 2 0 100 4 2 2 0 000-4z",
  },
  {
    title: "Medical Camps",
    desc: "Organizing free medical camps in communities.",
    href: "/our-work/health-medical-support/medical-camps",
    tint: "bg-rose-100 text-rose-600",
    top: "from-rose-50",
    text: "text-rose-500",
    btn: "bg-rose-500",
    icon: "M3 21h18M12 3L4 21M12 3l8 18M12 21v-7l-3 7M12 14l3 7",
  },
  {
    title: "Health Screening",
    desc: "Screening for early detection and better health outcomes.",
    href: "/our-work/health-medical-support/health-screening",
    tint: "bg-sky-100 text-sky-600",
    top: "from-sky-50",
    text: "text-sky-600",
    btn: "bg-sky-600",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 11v4m-2-2h4",
  },
  {
    title: "Preventive Health",
    desc: "Promoting healthier lifestyles and disease prevention.",
    href: "/our-work/health-medical-support/preventive-health",
    tint: "bg-orange-100 text-orange-600",
    top: "from-orange-50",
    text: "text-orange-500",
    btn: "bg-orange-500",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Community Health Services",
    desc: "Linking communities with continued care and referrals.",
    href: "/our-work/health-medical-support/community-health-services",
    tint: "bg-green-100 text-green-700",
    top: "from-green-50",
    text: "text-emerald-800",
    btn: "bg-emerald-900",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const purposes = [
  {
    title: "Our Vision",
    desc: "Healthier communities where essential care is accessible to all.",
    bg: "from-emerald-50 to-white",
    iconWrap: "bg-emerald-100 text-emerald-800",
    bar: "from-emerald-600 to-emerald-300",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-8C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8z",
  },
  {
    title: "Our Mission",
    desc: "To deliver community-centered health support through outreach, screening, education and referrals.",
    bg: "from-sky-50 to-white",
    iconWrap: "bg-sky-100 text-sky-800",
    bar: "from-sky-600 to-sky-300",
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-3a1 1 0 100-2 1 1 0 000 2zM12 12l7-7m0 0v3m0-3h-3",
  },
  {
    title: "Our Strategic Goals",
    desc: "To improve access to basic care, encourage early detection and strengthen community referral pathways.",
    bg: "from-orange-50 to-white",
    iconWrap: "bg-orange-100 text-orange-700",
    bar: "from-orange-500 to-amber-300",
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
    value: "10K+",
    label: "People reached",
    wrap: "bg-emerald-300/20 text-emerald-200",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    value: "12",
    label: "Camps delivered",
    wrap: "bg-orange-300/20 text-orange-200",
    icon: "M3 21h18M12 3L4 21M12 3l8 18",
  },
  {
    value: "72",
    label: "Volunteer hours",
    wrap: "bg-sky-300/20 text-sky-200",
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
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

function SectionTitle({ children, note, light = false }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-3">
        <h2
          className={`font-serif text-3xl font-black tracking-tight sm:text-4xl ${
            light ? "text-white" : "text-[#2f4a2b]"
          }`}
        >
          {children}
        </h2>
        {note && (
          <span
            className={`text-sm ${light ? "text-emerald-100/70" : "text-slate-500"}`}
          >
            {note}
          </span>
        )}
      </div>
    </div>
  );
}

const card =
  "rounded-[1.75rem] bg-white ring-1 ring-emerald-900/10 shadow-[0_1px_2px_rgba(15,70,45,0.05),0_16px_40px_-16px_rgba(15,70,45,0.18)]";

/* ---------- Page ---------- */

export default function HealthMedicalSupport() {
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
          background-image: radial-gradient(rgba(47,74,43,.14) 1px, transparent 1px);
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
        <div className="absolute -left-40 top-[40%] h-[460px] w-[460px] rounded-full bg-lime-200/30 blur-[120px]" />
        <div className="absolute right-0 top-[85%] h-[380px] w-[380px] rounded-full bg-sky-200/25 blur-[120px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        <div className="mx-auto grid max-w-[100rem] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-16">
          <div className="relative z-10">
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
                Health &amp; Medical Support
              </span>
            </nav>

            <h1 className="hero-rise hero-d2 mt-7 bg-gradient-to-br from-[#1f3a1c] via-[#2f4a2b] to-emerald-600 bg-clip-text font-serif text-5xl font-black leading-[1.04] tracking-tight text-transparent sm:text-6xl lg:text-[4.75rem]">
              Health &amp; <br />
              Medical Support
            </h1>

            <p className="hero-rise hero-d3 mt-6 max-w-xl font-serif text-xl leading-8 text-slate-800 sm:text-2xl sm:leading-9">
              Connecting communities with essential care, early screening and
              practical health support.
            </p>

            <p className="hero-rise hero-d3 mt-5 max-w-xl text-base leading-7 text-slate-700">
              At Hopefelt Foundation, we work to improve access to basic
              healthcare services through outreach, medical camps, screening,
              preventive care and community health support, with a focus on
              underserved and vulnerable communities.
            </p>
          </div>

          {/* Hero image */}
          <div className="hero-rise hero-d4 relative">
            {/* offset frame + glow */}
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-[2.25rem] bg-gradient-to-br from-emerald-200/70 to-lime-100/40" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl" />
            <img
              src="/images/Our Work/medicalsupport.png"
              alt="Healthcare worker checking a patient's blood pressure at a community medical camp"
              className="relative h-72 w-full rounded-[2rem] object-cover shadow-[0_30px_70px_-25px_rgba(15,70,45,0.55)] ring-4 ring-white sm:h-96 lg:h-[27rem]"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-16 sm:px-8 lg:px-12">
        {/* ============ OUR SERVICES ============ */}
        <section className="pt-4">
         <div className="flex flex-col items-start gap-3">
            <SectionTitle>Our Services</SectionTitle>
            <p className="max-w-md text-sm italic leading-6 text-slate-600">
              Focused services that bring essential healthcare closer to
              communities.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s) => (
              <article
                key={s.title}
                className={`${card} group relative flex flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[0_28px_60px_-18px_rgba(15,70,45,0.35)]`}
              >
                <div
                  className={`flex flex-1 flex-col bg-gradient-to-b ${s.top} to-white p-6`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white ${s.tint}`}
                  >
                    <Icon d={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-extrabold leading-6 text-emerald-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {s.desc}
                  </p>

                  <Link
                    href={s.href}
                    className={`mt-auto flex items-center justify-between pt-6 text-sm font-bold focus:outline-none focus-visible:underline ${s.text}`}
                  >
                    Explore More
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition duration-300 group-hover:translate-x-1 ${s.btn}`}
                    >
                      <Icon d={ARROW} className="h-4 w-4" stroke={2.4} />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR PURPOSE ============ */}
        <section className="mt-20">
          <SectionTitle>Our Purpose</SectionTitle>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {purposes.map((p) => (
              <article
                key={p.title}
                className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${p.bg} p-7 ring-1 ring-emerald-900/10 shadow-[0_16px_40px_-20px_rgba(15,70,45,0.2)]`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${p.bar}`}
                />
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white ${p.iconWrap}`}
                >
                  <Icon d={p.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-extrabold text-emerald-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-20">
          <div className="flex flex-col items-start gap-3">
          <SectionTitle note="(Proposed)">Strategic Alignment</SectionTitle>
          <p className="max-w-md text-sm italic leading-6 text-slate-600">
            Our work contributes to global and organizational goals.
          </p>
        </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {/* SDG 3 */}
            <article className={`${card} flex items-center gap-5 p-5`}>
              <img
                src="/images/sdg/sdg-3.png"
                alt="SDG 3: Good Health and Well-being"
                loading="lazy"
                className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-[0_12px_28px_-8px_rgba(76,159,56,0.6)] ring-2 ring-white"
              />
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
            <article className={`${card} flex items-center gap-5 p-5`}>
              <img
                src="/images/sdg/sdg-10.png"
                alt="SDG 10: Reduced Inequalities"
                loading="lazy"
                className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-[0_12px_28px_-8px_rgba(229,23,111,0.5)] ring-2 ring-white"
              />
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
            <article className="flex items-center gap-5 rounded-[1.75rem] bg-gradient-to-br from-emerald-50 to-white p-5 ring-1 ring-dashed ring-emerald-700/30 shadow-[0_16px_40px_-20px_rgba(15,70,45,0.2)]">
              <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 ring-4 ring-white">
                <Icon d={LEAF} className="h-14 w-14" />
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
        <section className="mt-20">
          <div className="flex flex-col items-start gap-3">
          <SectionTitle>How We Deliver Care</SectionTitle>
          <p className="max-w-md text-sm italic leading-6 text-slate-600">
            A simple, community-focused approach from need to impact.
          </p>
        </div>

          <div className="mt-8 rounded-[2rem] bg-white/80 p-6 shadow-[0_20px_60px_-24px_rgba(15,70,45,0.25)] ring-1 ring-emerald-900/10 backdrop-blur-xl sm:p-10">
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* connecting line */}
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-emerald-900/20 lg:block" />

              {careSteps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="relative inline-block">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-emerald-800 ring-4 ring-emerald-100">
                      <Icon d={step.icon} className="h-7 w-7" />
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#2f4a2b] text-[11px] font-black text-white shadow-md ring-2 ring-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-extrabold leading-5 text-emerald-950">
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

        {/* ============ PEOPLE + IMPACT ============ */}
        <section className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* People Behind the Work */}
          <div className="flex flex-col">
            <SectionTitle>People Behind the Work</SectionTitle>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              Our Health &amp; Medical Support program is led and supported by a
              dedicated team of professionals and volunteers.
            </p>

            <div className={`${card} mt-6 overflow-hidden`}>
              <div className="grid divide-y divide-emerald-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {people.map((p) => (
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
                <Icon d={INFO} className="h-4 w-4" />
                Names and contacts are published after internal confirmation.
              </p>
            </div>
          </div>

          {/* Impact & Volunteer Contribution */}
          <div className="flex flex-col">
            <SectionTitle>Our Impact &amp; Volunteer Contribution</SectionTitle>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              Every contribution helps us reach more communities and create
              healthier futures.
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

        {/* ============ VOLUNTEER + SPONSOR ============ */}
        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          {/* Volunteer */}
          <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-50 via-rose-50/70 to-white p-7 ring-1 ring-rose-900/10 shadow-[0_20px_60px_-28px_rgba(190,40,80,0.35)] sm:p-9">
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-rose-200/60 blur-3xl" />
            <div className="relative flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-500 shadow-sm ring-4 ring-white">
                <Icon d={HEART} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-extrabold text-emerald-950">
                  Volunteer With Us
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Join our efforts and make a direct impact in communities
                  through your time and skills.
                </p>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  Roles include: Medical support, registration, community
                  mobilization, logistics, data &amp; follow-up.
                </p>
                <Link
                  href="/get-involved/volunteer"
                  className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-rose-500 px-7 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(244,63,94,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
                >
                  Become a Volunteer
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* Sponsor / Partner */}
          <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-50 via-sky-50/70 to-white p-7 ring-1 ring-sky-900/10 shadow-[0_20px_60px_-28px_rgba(13,55,73,0.35)] sm:p-9">
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="relative flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 shadow-sm ring-4 ring-white">
                <Icon
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  className="h-8 w-8"
                />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-extrabold text-emerald-950">
                  Sponsor or Partner With Us
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Support our health initiatives and help us reach more
                  communities with essential care.
                </p>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  Options include: Sponsor a medical camp, support screening
                  supplies, provide clinical expertise, partner on referrals.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/get-involved/support"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[#0d3749] px-7 py-3 text-xs font-bold text-white shadow-[0_12px_28px_-10px_rgba(13,55,73,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a2b39] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
                  >
                    Discuss Sponsorship
                    <Icon
                      d={ARROW}
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      stroke={2.4}
                    />
                  </Link>
                  <Link
                    href="/get-involved/partner"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white/80 px-7 py-3 text-xs font-bold text-slate-800 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
                  >
                    Become a Partner
                    <Icon
                      d={ARROW}
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      stroke={2.4}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ============ GET INVOLVED ============ */}
        <section className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0d3749] via-[#14503f] to-[#2f4a2b] px-6 py-9 shadow-[0_30px_80px_-30px_rgba(13,55,73,0.7)] sm:px-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-5 text-center lg:text-left">
              <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-lime-200 backdrop-blur-md sm:flex">
                <Icon d={MAIL} className="h-8 w-8" />
              </span>
              <div>
                <h2 className="font-serif text-3xl font-black text-white">
                  Get Involved
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-50/85">
                  Have questions or want to get involved in our Health &amp;
                  Medical Support program? Reach out to our team and we&apos;ll
                  be happy to guide you.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 lg:items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-lime-300 px-8 py-3.5 text-xs font-extrabold text-emerald-950 shadow-[0_14px_34px_-10px_rgba(190,242,100,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-lime-200/60"
              >
                Contact the Health Program Team
                <Icon
                  d={ARROW}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  stroke={2.4}
                />
              </Link>
              <p className="text-[11px] text-emerald-100/70">
                All applications and inquiries are reviewed by Hopefelt
                Foundation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}