import Link from "next/link";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const BOOK =
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";
const LEAF = "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8";
const SEARCH = "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z";
const DOC =
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const GEAR =
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z";
const PHONE =
  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z";
const MONITOR =
  "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";
const MEGAPHONE =
  "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z";
const PUZZLE =
  "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z";
const STETHOSCOPE =
  "M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3M8 15v1a6 6 0 006 6 6 6 0 006-6v-4M20 10a2 2 0 100 4 2 2 0 000-4z";
const ARROW = "M5 12h14m-6-6l6 6-6 6";
const CHECK = "M5 13l4 4L19 7";
const FOLDER =
  "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z";
const TARGET =
  "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z";

/* ---------- Static content ---------- */

// `span` is a static class string so Tailwind can detect it.
const projects = [
  {
    title: "Health & Medical Projects",
    href: "/projects/health-medical",
    image: "/images/projects/medicalproject.png",
    items: [
      "Medical Camps",
      "Health Screenings",
      "Preventive Health",
      "Community Health Services",
      "Medical Outreach",
    ],
    span: "lg:col-span-3",
    bg: "from-emerald-50",
    bar: "from-emerald-500 to-emerald-300",
    wrap: "bg-emerald-100 text-emerald-800",
    tick: "text-emerald-700",
    link: "text-emerald-800",
    icon: STETHOSCOPE,
  },
  {
    title: "Health Education Projects",
    href: "/projects/health-education",
    image: "/images/projects/educationproject.png",
    items: [
      "Health Education Sessions",
      "School Awareness Programs",
      "Disease Prevention Campaigns",
      "Public Health Awareness",
      "Community Health Promotion",
    ],
    span: "lg:col-span-3",
    bg: "from-sky-50",
    bar: "from-sky-500 to-sky-300",
    wrap: "bg-sky-100 text-sky-700",
    tick: "text-sky-600",
    link: "text-sky-600",
    icon: BOOK,
  },
  {
    title: "Community Development Projects",
    href: "/projects/community-development",
    image: "/images/projects/communityproject.png",
    items: [
      "Community Outreach",
      "Community Engagement",
      "Community Mobilization",
      "Community Development",
      "Vulnerable Community Support",
      "Community-Based Initiatives",
    ],
    span: "lg:col-span-3",
    bg: "from-amber-50",
    bar: "from-amber-500 to-amber-300",
    wrap: "bg-amber-100 text-amber-700",
    tick: "text-amber-600",
    link: "text-emerald-800",
    icon: USERS,
  },
  {
    title: "Climate & Environment Projects",
    href: "/projects/climate-environment",
    image: "/images/projects/climateproject.png",
    items: [
      "Climate & Health Initiatives",
      "Environmental Health",
      "Environmental Awareness",
      "Plantation Initiatives",
      "Community Resilience",
    ],
    span: "lg:col-span-3",
    bg: "from-green-50",
    bar: "from-green-500 to-green-300",
    wrap: "bg-green-100 text-green-700",
    tick: "text-green-600",
    link: "text-emerald-800",
    icon: LEAF,
  },
  {
    title: "Social Support & Learning Projects",
    href: "/projects/social-support-learning",
    image: "/images/projects/socialsupport.png",
    items: [
      "Social Support",
      "Educational Support",
      "Youth Development",
      "Learning Initiatives",
      "Skills Development",
    ],
    span: "lg:col-span-3",
    bg: "from-rose-50",
    bar: "from-rose-500 to-rose-300",
    wrap: "bg-rose-100 text-rose-500",
    tick: "text-rose-500",
    link: "text-emerald-800",
    icon: USERS,
  },
  {
    title: "Research & Evidence Projects",
    href: "/projects/research-evidence",
    image: "/images/projects/research.png",
    items: [
      "Public Health Research",
      "Community-Based Research",
      "Data Collection & Analysis",
      "Evidence-Based Solutions",
      "Knowledge Sharing",
    ],
    span: "lg:col-span-3",
    bg: "from-sky-50",
    bar: "from-sky-500 to-sky-300",
    wrap: "bg-sky-100 text-sky-700",
    tick: "text-sky-600",
    link: "text-sky-600",
    icon: SEARCH,
  },
  {
    title: "Digital Health Projects",
    href: "/projects/digital-health",
    image: "/images/projects/digitalhealth.png",
    items: [
      "Telehealth Initiatives",
      "Digital Health Awareness",
      "Health Information Systems",
      "Community Health Apps",
      "Digital Training & Support",
    ],
    span: "lg:col-span-3",
    bg: "from-blue-50",
    bar: "from-blue-500 to-blue-300",
    wrap: "bg-blue-100 text-blue-700",
    tick: "text-blue-600",
    link: "text-emerald-800",
    icon: PHONE,
  },
  {
    title: "Technology Projects",
    href: "/projects/technology",
    image: "/images/projects/technology.png",
    items: [
      "Technology for Social Good",
      "Digital Innovation Initiatives",
      "IT Capacity Building",
      "Community Technology Access",
      "HopeTechSphere (Innovation & Digital Solutions)",
    ],
    span: "lg:col-span-3",
    bg: "from-blue-50",
    bar: "from-blue-500 to-blue-300",
    wrap: "bg-blue-100 text-blue-700",
    tick: "text-blue-600",
    link: "text-emerald-800",
    icon: MONITOR,
  },
  {
    title: "Entrepreneurship & Social Enterprise Projects",
    href: "/projects/entrepreneurship-social-enterprise",
    image: "/images/projects/enterpreneurship.png",
    items: [
      "Youth Entrepreneurship",
      "Skill-Based Economic Initiatives",
      "Social Enterprise Development",
      "Business Hub Initiatives",
      "Livelihood Support Programs",
    ],
    span: "lg:col-span-4",
    bg: "from-rose-50",
    bar: "from-rose-500 to-rose-300",
    wrap: "bg-rose-100 text-rose-600",
    tick: "text-rose-500",
    link: "text-emerald-800",
    icon: CHART,
  },
  {
    title: "Communications & Media Projects",
    href: "/projects/communications-media",
    image: "/images/projects/communications.png",
    items: [
      "Health & Social Awareness Campaigns",
      "Digital Media Content",
      "Community Storytelling",
      "Social Media Initiatives",
      "Advocacy Campaigns",
    ],
    span: "lg:col-span-4",
    bg: "from-rose-50",
    bar: "from-rose-500 to-rose-300",
    wrap: "bg-rose-100 text-rose-500",
    tick: "text-rose-500",
    link: "text-emerald-800",
    icon: MEGAPHONE,
  },
  {
    title: "Special / Cross-Program Projects",
    href: "/projects/special-cross-program",
    image: "/images/projects/crossprogram.png",
    items: [
      "Cross-Program Community Initiatives",
      "Partnership-Based Projects",
      "Innovative Pilot Projects",
      "Emergency Response Initiatives",
      "Thematic Campaigns (e.g. Blood Donation Drive, Internship Programs, Collaborative Initiatives with Partner Organizations)",
    ],
    span: "lg:col-span-4",
    bg: "from-purple-50",
    bar: "from-purple-500 to-purple-300",
    wrap: "bg-purple-100 text-purple-700",
    tick: "text-purple-600",
    link: "text-sky-600",
    icon: PUZZLE,
  },
];

const approachSteps = [
  {
    num: "01",
    title: "Identify Need",
    desc: "Understand community needs and priorities (or external proposals).",
    numBg: "bg-amber-500 text-white",
    wrap: "bg-amber-50 text-amber-600 ring-amber-200",
    icon: SEARCH,
  },
  {
    num: "02",
    title: "Design Project",
    desc: "Define objectives, strategy and measurable targets.",
    numBg: "bg-emerald-700 text-white",
    wrap: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: DOC,
  },
  {
    num: "03",
    title: "Implement",
    desc: "Work with communities, partners and volunteers to execute.",
    numBg: "bg-sky-600 text-white",
    wrap: "bg-sky-50 text-sky-600 ring-sky-200",
    icon: GEAR,
  },
  {
    num: "04",
    title: "Monitor & Evaluate",
    desc: "Track outcomes, learn and improve for greater impact.",
    numBg: "bg-[#1f4a2a] text-white",
    wrap: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: CHART,
  },
];

/*
  Strategic Alignment — official SDG artwork goes in:
    /public/images/sdg/sdg-wheel.png
    /public/images/sdg/sdg-3.png, sdg-4.png, sdg-10.png, sdg-11.png,
                      sdg-13.png, sdg-15.png, sdg-17.png
  x / y = position inside the stage, w = width (all in % of the stage).
*/
const sdgs = [
  { num: "3", label: "Good Health and Well-being", x: "5.5%", y: "15%", w: "8.8%", dur: "5s", delay: "0s" },
  { num: "4", label: "Quality Education", x: "18.5%", y: "40%", w: "8.8%", dur: "6s", delay: "-1.5s" },
  { num: "5", label: "Gender Equality", x: "30%", y: "72%", w: "8.4%", dur: "5.8s", delay: "-2.6s" },
  { num: "8", label: "Decent Work and Economic Growth", x: "28%", y: "8%", w: "8.4%", dur: "6.2s", delay: "-3.4s" },
  { num: "9", label: "Industry, Innovation and Infrastructure", x: "44%", y: "2%", w: "8.4%", dur: "5.4s", delay: "-0.4s" },
  { num: "10", label: "Reduced Inequalities", x: "6.5%", y: "70%", w: "8.2%", dur: "5.5s", delay: "-3s" },
  { num: "11", label: "Sustainable Cities and Communities", x: "62.5%", y: "7%", w: "8.6%", dur: "6.5s", delay: "-0.8s" },
  { num: "13", label: "Climate Action", x: "83%", y: "20%", w: "9%", dur: "5s", delay: "-2.2s" },
  { num: "15", label: "Life on Land", x: "71%", y: "51%", w: "8.4%", dur: "6s", delay: "-4s" },
  { num: "16", label: "Peace, Justice and Strong Institutions", x: "54%", y: "82%", w: "8.4%", dur: "6.3s", delay: "-1.8s" },
  { num: "17", label: "Partnerships for the Goals", x: "82%", y: "78%", w: "7%", dur: "5.5s", delay: "-1s" },
];

// Quick numbers for the hero, derived from the data above.
const stats = [
  { value: projects.length, label: "Focus areas", icon: FOLDER },
  { value: approachSteps.length, label: "Step approach", icon: TARGET },
  { value: sdgs.length, label: "SDGs supported", icon: LEAF },
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

function SectionTitle({ eyebrow, children, light = false }) {
  return (
    <div>
      {eyebrow && (
        <p
          className={`mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] ${
            light ? "text-lime-300" : "text-emerald-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-black tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-[#1f4a2a]"
        }`}
      >
        {children}
      </h2>
      
    </div>
  );
}

/* ---------- Page ---------- */

export default function Projects() {
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

        /* floating SDG goals */
        @keyframes sdg-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .sdg-float { animation: sdg-float 5s ease-in-out infinite; }

        /* subtle dotted texture */
        .dot-grid {
          background-image: radial-gradient(rgba(31,74,42,.14) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @media (prefers-reduced-motion: reduce) {
          .sdg-float, .hero-rise { animation: none; opacity: 1; }
        }
      `}</style>

      {/* soft background glows + texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_35%,transparent_70%,black)]" />
        <div className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-[130px]" />
        <div className="absolute -left-40 top-[55%] h-[460px] w-[460px] rounded-full bg-lime-200/30 blur-[120px]" />
        <div className="absolute right-0 top-[80%] h-[380px] w-[380px] rounded-full bg-sky-200/25 blur-[120px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative min-h-[480px] bg-[#0f3d2a]">
        {/* Full-width photo; green base shows if the image is slow or missing */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/projects/projects.png"
            alt="Two pairs of hands holding a young seedling growing from soil"
            className="h-full w-full object-cover object-center text-transparent"
          />
          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-white/80 lg:hidden" />
          {/* Desktop: soft fade on the left so text is readable, photo visible edge to edge */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_30%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_72%)] lg:block" />
          <div className="absolute inset-0 hidden bg-gradient-to-l from-[#0f3d2a]/50 via-transparent to-transparent lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f4faf6] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="hero-rise hero-d1 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs text-slate-600 shadow-sm ring-1 ring-emerald-900/10 backdrop-blur"
          >
            <Link href="/" className="transition hover:text-emerald-800">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-semibold text-slate-800">Projects</span>
          </nav>

          <div className="mt-8 max-w-2xl">
            

            <h1 className="hero-rise hero-d2 mt-5 font-serif text-6xl font-black leading-[1.02] tracking-tight text-[#0d3749] sm:text-7xl lg:text-[5.5rem]">
              Our{" "}
              <span className="bg-gradient-to-r from-[#1f4a2a] via-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="hero-rise hero-d3 mt-5 font-serif text-xl text-[#0d3749] sm:text-2xl">
              Ideas into Impact. Communities into Brighter Futures.
            </p>

            <p className="hero-rise hero-d3 mt-5 max-w-xl text-base leading-7 text-slate-700">
              Our projects turn community needs into practical solutions across
              health, education, environment, technology and social development.
              By bringing together people, knowledge and resources, we create
              sustainable change for healthier, more resilient communities.
            </p>

            <div className="hero-rise hero-d4 mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1f4a2a] to-emerald-800 px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(31,74,42,0.7)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(31,74,42,0.8)] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                Explore Our Projects
                <Icon
                  d={ARROW}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  stroke={2.2}
                />
              </a>
              <Link
                href="/projects/propose"
                className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-900/30 bg-white/80 px-7 py-3.5 text-sm font-bold text-emerald-950 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                Propose a Project
                <Icon
                  d={ARROW}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  stroke={2.2}
                />
              </Link>
            </div>

            <dl className="hero-rise hero-d4 mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-emerald-900/10 bg-white/85 p-4 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Icon d={s.icon} className="h-4 w-4" />
                  </span>
                  <dd className="mt-3 font-serif text-3xl font-black leading-none text-[#1f4a2a]">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* tagline glass card (dark glass so the white text is always readable) */}
          <div className="hero-rise hero-d4 pointer-events-none absolute bottom-16 right-12 hidden rounded-3xl border border-white/25 bg-[#0f3d2a]/55 px-9 py-7 font-serif text-3xl italic leading-10 text-white shadow-2xl backdrop-blur-md xl:block">
            <p>People</p>
            <p>Projects</p>
            <p>Partnerships</p>
            <p>A Healthier</p>
            <p>Tomorrow</p>
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-lime-300 to-emerald-300" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[90rem] px-5 pb-16 sm:px-8 lg:px-12">
        {/* ============ OUR PROJECTS ============ */}
        <section id="projects" className="scroll-mt-6 pt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="What we do">Our Projects</SectionTitle>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Explore all our projects across different focus areas. Each
              project is designed to create meaningful and sustainable impact.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`${p.span} group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_1px_2px_rgba(15,70,45,0.05),0_16px_40px_-16px_rgba(15,70,45,0.18)] ring-1 ring-emerald-900/10 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-18px_rgba(15,70,45,0.35)]`}
              >
                {/* whole card is clickable */}
                <Link
                  href={p.href}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="absolute inset-0 z-10"
                />

                {/* accent bar */}
                <div className={`absolute inset-x-0 top-0 z-[5] h-1 bg-gradient-to-r ${p.bar}`} />

                {/* photo header */}
                <div className="relative h-44 overflow-hidden bg-emerald-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/10" />
                </div>

                {/* body */}
                <div
                  className={`relative flex flex-1 flex-col bg-gradient-to-b ${p.bg} to-white px-6 pb-6 pt-11`}
                >
                  <span
                    className={`absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ring-4 ring-white ${p.wrap}`}
                  >
                    <Icon d={p.icon} className="h-7 w-7" />
                  </span>

                  <h3 className="font-serif text-lg font-extrabold leading-6 text-emerald-950">
                    {p.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-700"
                      >
                        <Icon
                          d={CHECK}
                          className={`mt-0.5 h-4 w-4 shrink-0 ${p.tick}`}
                          stroke={2.4}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={p.href}
                    className={`mt-auto inline-flex items-center gap-2.5 pt-6 text-sm font-bold focus:outline-none focus-visible:underline ${p.link}`}
                  >
                    View Projects
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
                      <Icon d={ARROW} className="h-3.5 w-3.5" stroke={2.2} />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR PROJECT APPROACH ============ */}
        <section className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="How we work">Our Project Approach</SectionTitle>
            <p className="max-w-md text-base leading-7 text-slate-600">
              A structured approach to ensure impactful and sustainable
              projects.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] bg-white/80 p-6 shadow-[0_20px_60px_-24px_rgba(15,70,45,0.25)] ring-1 ring-emerald-900/10 backdrop-blur-xl sm:p-10">
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {/* connecting line */}
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

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Global goals">Strategic Alignment</SectionTitle>
            <p className="max-w-md text-base leading-7 text-slate-600">
              Our projects contribute to the following Sustainable Development
              Goals (SDGs).
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-[#f4faf6] to-emerald-50 p-6 shadow-[0_20px_60px_-24px_rgba(15,70,45,0.25)] ring-1 ring-emerald-900/10 sm:p-8">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />

            {/* stage: wheel in the center, goals scattered + floating (desktop) */}
            <div className="relative flex flex-col items-center gap-8 lg:block lg:aspect-[1168/668] lg:gap-0">
              {/* orbit rings (desktop) */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-900/20 lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-900/10 lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl lg:block" />

              <img
                src="/images/sdg/sdg-wheel.png"
                alt="Sustainable Development Goals"
                className="relative h-72 w-72 object-contain drop-shadow-xl sm:h-80 sm:w-80 lg:absolute lg:left-1/2 lg:top-1/2 lg:h-auto lg:w-[24%] lg:-translate-x-1/2 lg:-translate-y-1/2"
              />

              <div className="relative flex flex-wrap justify-center gap-4 lg:contents">
                {sdgs.map((g) => (
                  <img
                    key={g.num}
                    src={`/images/sdg/sdg-${g.num}.png`}
                    alt={`SDG ${g.num}: ${g.label}`}
                    loading="lazy"
                    style={{
                      "--x": g.x,
                      "--y": g.y,
                      "--w": g.w,
                      animationDuration: g.dur,
                      animationDelay: g.delay,
                    }}
                    className="sdg-float h-28 w-28 rounded-xl object-contain shadow-[0_12px_28px_-8px_rgba(15,70,45,0.45)] ring-2 ring-white transition-shadow duration-300 hover:shadow-[0_20px_40px_-8px_rgba(15,70,45,0.55)] sm:h-32 sm:w-32 lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] lg:h-auto lg:w-[var(--w)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ BE PART OF THE CHANGE ============ */}
        {/* Team & Coordination block removed (it was commented out). */}
        <section className="relative mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0d3749] via-[#14503f] to-[#1f4a2a] p-8 shadow-[0_30px_80px_-30px_rgba(13,55,73,0.7)] sm:p-12">
          {/* decorative glows */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionTitle light eyebrow="Get Involved">
                Be Part of the Change
              </SectionTitle>
              <p className="mt-5 max-w-sm text-base leading-7 text-emerald-50/85">
                Support our projects and help us create meaningful impact.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Volunteer */}
              <article className="group flex h-full flex-col rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300 text-emerald-950 shadow-lg">
                  <Icon d={USERS} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold leading-6 text-white">
                  Become a Volunteer
                </h3>
                <Link
                  href="/get-involved/volunteer"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-4 py-2.5 text-xs font-bold text-emerald-950 transition duration-300 hover:bg-lime-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-lime-200/60"
                >
                  Apply Now
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </article>

              {/* Partner */}
              <article className="group flex h-full flex-col rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-200 text-[#0d3749] shadow-lg">
                  <Icon d={HEART} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold leading-6 text-white">
                  Partner With Us
                </h3>
                <Link
                  href="/get-involved/partner"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#0d3749] transition duration-300 hover:bg-sky-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200/60"
                >
                  Explore Opportunities
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </article>

              {/* Support */}
              <article className="group flex h-full flex-col rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-300 text-rose-900 shadow-lg">
                  <Icon d={HEART} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold leading-6 text-white">
                  Support Our Projects
                </h3>
                <Link
                  href="/get-involved/support"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-rose-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300/60"
                >
                  Donate Now
                  <Icon
                    d={ARROW}
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    stroke={2.4}
                  />
                </Link>
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}