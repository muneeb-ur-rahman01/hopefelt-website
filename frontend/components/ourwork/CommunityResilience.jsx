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
const TREE = "M12 3l5 7h-3l4 6h-5v5h-2v-5H6l4-6H7l5-7z";
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
    title: "Climate & Health",
    desc: "Addressing the health impacts of climate change and promoting climate-resilient communities.",
    href: "/our-work/climate-environment-resilience/climate-health",
    bg: "from-emerald-50/80",
    wrap: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-800",
    btn: "bg-emerald-700",
    icon: GLOBE,
  },
  {
    title: "Environmental Health",
    desc: "Promoting clean air, safe water, proper waste management and healthier surroundings.",
    href: "/our-work/climate-environment-resilience/environmental-health",
    bg: "from-sky-50/80",
    wrap: "bg-sky-100 text-sky-700",
    text: "text-sky-700",
    btn: "bg-sky-500",
    icon: LEAF,
  },
  {
    title: "Environmental Awareness",
    desc: "Educating communities on sustainable practices and responsible environmental behaviour.",
    href: "/our-work/climate-environment-resilience/environmental-awareness",
    bg: "from-amber-50/80",
    wrap: "bg-amber-100 text-amber-700",
    text: "text-amber-700",
    btn: "bg-amber-500",
    icon: MEGAPHONE,
  },
  {
    title: "Plantation Initiatives",
    desc: "Tree plantation drives to build greener, cooler and healthier communities.",
    href: "/our-work/climate-environment-resilience/plantation-initiatives",
    bg: "from-green-50/80",
    wrap: "bg-green-100 text-green-700",
    text: "text-green-700",
    btn: "bg-green-600",
    icon: TREE,
  },
  {
    title: "Community Resilience",
    desc: "Strengthening community preparedness and adaptive capacity against environmental challenges.",
    href: "/our-work/climate-environment-resilience/community-resilience",
    bg: "from-rose-50/80",
    wrap: "bg-rose-100 text-rose-600",
    text: "text-rose-600",
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

const sdgs = [
  {
    num: "3",
    title: "Good Health and Well-being",
    desc: "Addressing the health impacts of climate change and environmental risks.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(76,159,56,0.6)]",
    accent: "text-emerald-700",
  },
  {
    num: "11",
    title: "Sustainable Cities and Communities",
    desc: "Promoting cleaner, safer and more resilient communities.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(253,157,36,0.6)]",
    accent: "text-orange-600",
  },
  {
    num: "13",
    title: "Climate Action",
    desc: "Supporting climate awareness, adaptation and local action.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(63,126,68,0.6)]",
    accent: "text-green-800",
  },
  {
    num: "15",
    title: "Life on Land",
    desc: "Protecting ecosystems through plantation and green initiatives.",
    shadow: "shadow-[0_12px_28px_-8px_rgba(86,192,43,0.6)]",
    accent: "text-lime-700",
  },
];

const workSteps = [
  {
    num: "01",
    title: "Assess Local Risks",
    desc: "Understand community environmental challenges and vulnerabilities.",
    numBg: "bg-amber-500 text-white",
    wrap: "bg-amber-50 text-amber-600 ring-amber-200",
    icon: SEARCH,
  },
  {
    num: "02",
    title: "Educate & Engage",
    desc: "Raise awareness and build community participation through sessions and campaigns.",
    numBg: "bg-emerald-700 text-white",
    wrap: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: USERS,
  },
  {
    num: "03",
    title: "Implement Community Actions",
    desc: "Carry out plantation drives, clean-up activities and sustainable initiatives.",
    numBg: "bg-green-600 text-white",
    wrap: "bg-green-50 text-green-700 ring-green-200",
    icon: LEAF,
  },
  {
    num: "04",
    title: "Monitor & Learn",
    desc: "Track feedback and improve future efforts.",
    numBg: "bg-[#1f4a2a] text-white",
    wrap: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: CHART,
  },
];

const team = [
  { role: "Program Director", sub: "[Assigned Lead]", wrap: "bg-emerald-100 text-emerald-800", icon: USER },
  { role: "Environment & Resilience Coordinator", sub: "[Assigned Coordinator]", wrap: "bg-sky-100 text-sky-700", icon: USERS },
  { role: "Field & Volunteer Team", sub: "Community facilitators and trained volunteers", wrap: "bg-rose-100 text-rose-600", icon: USERS },
  { role: "Community Partners", sub: "Local organizations, institutions and stakeholders", wrap: "bg-amber-100 text-amber-700", icon: USERS },
];

const impactStats = [
  { value: "5", label: "Community Activities", wrap: "bg-emerald-300/15 text-emerald-200", icon: LEAF },
  { value: "1", label: "People Reached", wrap: "bg-sky-300/15 text-sky-200", icon: USERS },
  { value: "500", label: "Trees Planted", wrap: "bg-lime-300/15 text-lime-200", icon: TREE },
  { value: "1", label: "Preparedness Initiatives", wrap: "bg-amber-300/15 text-amber-200", icon: SHIELD },
];

const involve = [
  {
    title: "Become a Volunteer",
    desc: "Join our plantation drives, awareness sessions and community activities.",
    cta: "Apply as a Volunteer",
    href: "/get-involved/volunteer",
    icon: USERS,
    glow: "bg-emerald-200/50",
    tint: "from-emerald-50 via-emerald-50/50 to-white",
    ring: "ring-emerald-900/[0.08]",
    tile: "bg-emerald-100 text-emerald-800",
    btn: "bg-[#1f4a2a] shadow-[0_12px_28px_-10px_rgba(31,74,42,0.8)] hover:bg-emerald-900 focus-visible:ring-emerald-300",
  },
  {
    title: "Become a Partner",
    desc: "Collaborate with us to implement environmental initiatives and create lasting impact.",
    cta: "Explore Partnerships",
    href: "/get-involved/partner",
    icon: HAND,
    glow: "bg-sky-200/60",
    tint: "from-sky-50 via-sky-50/50 to-white",
    ring: "ring-sky-900/[0.08]",
    tile: "bg-sky-100 text-sky-800",
    btn: "bg-[#0d3749] shadow-[0_12px_28px_-10px_rgba(13,55,73,0.8)] hover:bg-[#0a2b39] focus-visible:ring-sky-300",
  },
  {
    title: "Support Our Work",
    desc: "Contribute resources or sponsor plantation drives, awareness campaigns and community programs.",
    cta: "Discuss Support",
    href: "/get-involved/support",
    icon: HEART,
    glow: "bg-rose-200/60",
    tint: "from-rose-50 via-rose-50/50 to-white",
    ring: "ring-rose-900/[0.08]",
    tile: "bg-rose-100 text-rose-600",
    btn: "bg-rose-500 shadow-[0_12px_28px_-10px_rgba(244,63,94,0.8)] hover:bg-rose-600 focus-visible:ring-rose-300",
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

/* Title + description on a hairline, with a short deep-green marker on the line */
function SectionHeader({ title, desc }) {
  return (
    <div className="relative flex flex-col items-start gap-3 border-b border-emerald-950/10 pb-6">
      <h2 className="font-serif text-3xl font-black tracking-[-0.02em] text-[#1f4a2a] sm:text-4xl">
        {title}
      </h2>

      {desc && (
        <p className="max-w-none whitespace-nowrap text-sm italic leading-6 text-slate-600">
          {desc}
        </p>
      )}
    </div>
  );
}

function SubTitle({ children }) {
  return (
    <div className="relative border-b border-emerald-950/10 pb-5">
      <h2 className="font-serif text-3xl font-black tracking-[-0.02em] text-[#1f4a2a] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

const card =
  "rounded-3xl bg-white ring-1 ring-emerald-950/[0.07] shadow-[0_1px_1px_rgba(15,60,40,0.04),0_14px_36px_-16px_rgba(15,60,40,0.16)]";

const focusRing =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300";

/* ---------- Page ---------- */

export default function ClimateEnvironmentResilience() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800 antialiased">
      <style>{`
        /* one orchestrated moment: hero entrance */
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-settle {
          from { transform: scale(1.06); }
          to   { transform: scale(1); }
        }
        .hero-rise { opacity: 0; animation: hero-rise .9s cubic-bezier(.2,.7,.2,1) forwards; }
        .hero-d1 { animation-delay: .05s; }
        .hero-d2 { animation-delay: .18s; }
        .hero-d3 { animation-delay: .3s; }
        .hero-d4 { animation-delay: .42s; }
        .hero-settle { animation: hero-settle 2s cubic-bezier(.2,.7,.2,1) forwards; }

        .dot-grid {
          background-image: radial-gradient(rgba(31,74,42,.13) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-rise { animation: none; opacity: 1; }
          .hero-settle { animation: none; }
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
      <header className="relative min-h-[360px] overflow-hidden border-b border-emerald-900/5 bg-[#0f3d2a]">
  {/* Full-width photo */}
  <div className="pointer-events-none absolute inset-0">
    <img
      src="/images/Our Work/climate.png"
      alt="Volunteers planting a tree together at a community plantation drive"
      className="hero-settle h-full w-full object-cover object-center text-transparent"
    />
    {/* Mobile: dark overlay over the whole photo */}
    <div className="absolute inset-0 bg-[#0f3d2a]/70 lg:hidden" />
    {/* Desktop: dark on the left for text, photo clear on the right */}
    <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(10,40,28,0.88)_0%,rgba(10,40,28,0.7)_30%,rgba(10,40,28,0.35)_55%,rgba(10,40,28,0)_78%)] lg:block" />
  </div>

  <div className="relative mx-auto max-w-[100rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
    <nav
      aria-label="Breadcrumb"
      className="hero-rise hero-d1 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs text-white/80 shadow-sm backdrop-blur-md"
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
        Climate, Environment &amp; Community Resilience
      </span>
    </nav>

    <div className="mt-8 max-w-2xl">
      <h1 className="hero-rise hero-d2 font-serif text-5xl font-black leading-[1.02] tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[4.25rem]">
        Climate, <span className="text-lime-300">Environment &amp;</span>{" "}
        Community Resilience
      </h1>

      <p className="hero-rise hero-d3 mt-6 font-serif text-xl tracking-tight text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-2xl">
        Healthier Environments. Stronger Communities.
      </p>

      <p className="hero-rise hero-d3 mt-4 max-w-xl text-base leading-7 text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
        At Hopefelt Foundation, we work towards cleaner, greener and more
        resilient communities by promoting environmental awareness,
        sustainable practices and climate-conscious actions for a
        healthier tomorrow.
      </p>

      <div className="hero-rise hero-d4 mt-8 flex flex-wrap gap-3">
        <Link
          href="/get-involved"
          className={`group inline-flex items-center gap-2.5 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-bold text-[#0f3d2a] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-xl ${focusRing}`}
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
          className={`group inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg ${focusRing}`}
        >
          Explore Initiatives
          <Icon
            d={ARROW}
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            stroke={2.2}
          />
        </a>
      </div>
    </div>
  </div>
</header>

      <div className="mx-auto max-w-[100rem] px-5 pb-20 sm:px-8 lg:px-12">
        {/* ============ OUR FOCUS AREAS ============ */}
        <section id="focus-areas" className="scroll-mt-6 pt-10">
          <SectionHeader
            title="Our Focus Areas"
            desc="Key areas through which we work to create cleaner environments and more resilient communities."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {focusAreas.map((f) => (
              <article
                key={f.title}
                className={`${card} group relative flex flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(15,60,40,0.32)]`}
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${f.btn}`} />
                <div
                  className={`flex flex-1 flex-col bg-gradient-to-b ${f.bg} to-white p-6 pt-7`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white ${f.wrap}`}
                  >
                    <Icon d={f.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-lg font-extrabold leading-6 tracking-tight text-emerald-950">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-slate-600">
                    {f.desc}
                  </p>

                  <Link
                    href={f.href}
                    className={`mt-auto flex items-center justify-between border-t border-emerald-950/10 pt-5 text-sm font-bold focus:outline-none focus-visible:underline ${f.text}`}
                  >
                    Learn More
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition duration-300 group-hover:translate-x-1 ${f.btn}`}
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
        <section className="mt-24">
          <SectionHeader title="Our Purpose" />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {/* Vision */}
            <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-white p-8 ring-1 ring-emerald-950/[0.07] shadow-[0_14px_36px_-18px_rgba(15,60,40,0.2)]">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-600 to-emerald-300" />
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900 shadow-sm ring-4 ring-white">
                <Icon d={EYE} className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-serif text-xl font-extrabold tracking-tight text-emerald-950">
                Our Vision
              </h3>
              <p className="mt-3 font-serif text-base italic leading-7 text-slate-600">
                Cleaner, healthier and more resilient communities living in
                harmony with a sustainable environment.
              </p>
            </article>

            {/* Mission */}
            <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-white p-8 ring-1 ring-emerald-950/[0.07] shadow-[0_14px_36px_-18px_rgba(15,60,40,0.2)]">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-600 to-sky-300" />
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-900 shadow-sm ring-4 ring-white">
                <Icon d={TARGET} className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-serif text-xl font-extrabold tracking-tight text-emerald-950">
                Our Mission
              </h3>
              <p className="mt-3 font-serif text-base italic leading-7 text-slate-600">
                To promote environmental health, climate awareness and
                community resilience through education, engagement and
                sustainable action.
              </p>
            </article>

            {/* Strategic goals: the one deep-green card in this section */}
            <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#14503f] via-[#1c5a3a] to-[#2f4a2b] p-8 shadow-[0_24px_60px_-24px_rgba(20,80,63,0.7)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-lime-200 ring-1 ring-white/20">
                  <Icon d={CHART} className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-extrabold tracking-tight text-white">
                  Our Strategic Goals
                </h3>
                <ul className="mt-4 space-y-3">
                  {strategicGoals.map((g) => (
                    <li
                      key={g}
                      className="flex items-start gap-3 text-sm leading-6 text-emerald-50/90"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-300/20 text-lime-200">
                        <Icon d={CHECK} className="h-3 w-3" stroke={2.8} />
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-24">
          <SectionHeader
            title="Strategic Alignment"
            desc="Our work contributes to the following Sustainable Development Goals (SDGs)."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sdgs.map((g) => (
              <article
                key={g.num}
                className={`${card} flex items-center gap-4 p-4 transition duration-300 hover:-translate-y-0.5`}
              >
                <img
                  src={`/images/sdg/sdg-${g.num}.png`}
                  alt={`SDG ${g.num}: ${g.title}`}
                  loading="lazy"
                  className={`h-28 w-28 shrink-0 rounded-2xl object-cover ring-2 ring-white ${g.shadow}`}
                />
                <div className="min-w-0">
                  <h3 className={`text-sm font-bold ${g.accent}`}>
                    SDG {g.num}
                  </h3>
                  <p className="text-base font-bold leading-5 tracking-tight text-slate-900">
                    {g.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">
                    {g.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ HOW WE WORK ============ */}
        <section className="mt-24">
          <SectionHeader
            title="How We Work"
            desc="A community-driven approach from awareness to long-term impact."
          />

          <div className="mt-10 rounded-[2rem] bg-white/80 p-6 shadow-[0_1px_1px_rgba(15,60,40,0.04),0_24px_60px_-28px_rgba(15,60,40,0.25)] ring-1 ring-emerald-950/[0.07] backdrop-blur-xl sm:p-10">
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* connecting line */}
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-emerald-900/20 lg:block" />

              {workSteps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="relative inline-block">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-4 ${step.wrap}`}
                    >
                      <Icon d={step.icon} className="h-7 w-7" />
                    </span>
                    <span
                      className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black shadow-md ring-2 ring-white ${step.numBg}`}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-extrabold leading-5 tracking-tight text-emerald-950">
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
        <section className="mt-24 grid gap-12 lg:grid-cols-2">
          {/* Team */}
          <div className="flex flex-col">
            <SubTitle>Program Team &amp; Coordination</SubTitle>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
              Our Climate, Environment &amp; Community Resilience program is led
              and supported by a dedicated team.
            </p>

            <div className={`${card} mt-6 flex-1 overflow-hidden`}>
              <div className="grid divide-y divide-emerald-950/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
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
                      <p className="mt-1 text-xs leading-4 text-slate-500">
                        {p.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 border-t border-emerald-950/10 bg-slate-50/80 px-5 py-3 text-xs text-slate-600">
                <Icon d={INFO} className="h-4 w-4 shrink-0" />
                Names and reporting lines will be published after internal
                confirmation.
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="flex flex-col">
            <SubTitle>Community Impact</SubTitle>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
              Creating greener, healthier and more resilient communities.
            </p>

            <div className="relative mt-6 flex-1 overflow-hidden rounded-3xl bg-gradient-to-br from-[#14503f] via-[#1c5a3a] to-[#2f4a2b] shadow-[0_24px_60px_-24px_rgba(20,80,63,0.7)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

              <div className="relative grid h-full grid-cols-2 gap-px bg-white/10">
                {impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center gap-3 bg-[#173f35]/75 p-7"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl ring-1 ring-white/10 ${stat.wrap}`}
                    >
                      <Icon d={stat.icon} className="h-5 w-5" />
                    </span>
                    <p className="font-serif text-5xl font-black leading-none tracking-tight text-white">
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

        {/* ============ BE PART OF THE CHANGE ============ */}
        <section className="mt-24">
          <SectionHeader
            title="Be Part of the Change"
            desc="There are many ways to support and contribute to our Climate, Environment & Community Resilience program."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {involve.map((item) => (
              <article
                key={item.title}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.tint} p-8 ring-1 ${item.ring} shadow-[0_1px_1px_rgba(15,60,40,0.04),0_20px_50px_-28px_rgba(15,60,40,0.35)] transition duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full blur-3xl ${item.glow}`}
                />
                <div className="relative">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white ${item.tile}`}
                  >
                    <Icon d={item.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-extrabold tracking-tight text-emerald-950">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className={`group mt-7 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 ${item.btn}`}
                  >
                    {item.cta}
                    <Icon
                      d={ARROW}
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      stroke={2.4}
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ GET IN TOUCH ============ */}
        <section className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#12382a] via-[#1a4a35] to-[#2b5c40] shadow-[0_30px_80px_-30px_rgba(18,56,42,0.8)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#12382a] via-[#12382a]/85 to-transparent" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lime-300/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative flex flex-col items-start justify-between gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-emerald-50 backdrop-blur-md">
                Get in touch
              </span>
              <h3 className="mt-3 font-serif text-2xl font-black leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                Let&apos;s Build Resilient Communities Together
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-50/90">
                Have questions or want to collaborate on our Climate, Environment
                &amp; Community Resilience program? We&apos;d love to hear from you.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-lime-300 px-8 py-4 text-xs font-extrabold text-emerald-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_14px_34px_-10px_rgba(190,242,100,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-lime-200/60"
            >
              Contact the Program Team
              <Icon
                d={ARROW}
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                stroke={2.4}
              />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}