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

/* ---------- Static content (matches the design) ---------- */

// `span` is a static class string so Tailwind can detect it.
const projects = [
  {
    title: "Health & Medical Projects",
    href: "/projects/health-medical",
    image: "/images/projects/health-medical.jpg",
    items: [
      "Medical Camps",
      "Health Screenings",
      "Preventive Health",
      "Community Health Services",
      "Medical Outreach",
    ],
    span: "lg:col-span-3",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-800",
    dot: "bg-emerald-700",
    link: "text-emerald-800",
    icon: STETHOSCOPE,
  },
  {
    title: "Health Education Projects",
    href: "/projects/health-education",
    image: "/images/projects/health-education.jpg",
    items: [
      "Health Education Sessions",
      "School Awareness Programs",
      "Disease Prevention Campaigns",
      "Public Health Awareness",
      "Community Health Promotion",
    ],
    span: "lg:col-span-3",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-700",
    dot: "bg-sky-600",
    link: "text-sky-600",
    icon: BOOK,
  },
  {
    title: "Community Development Projects",
    href: "/projects/community-development",
    image: "/images/projects/community-development.jpg",
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
    wrap: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
    link: "text-emerald-800",
    icon: USERS,
  },
  {
    title: "Climate & Environment Projects",
    href: "/projects/climate-environment",
    image: "/images/projects/climate-environment.jpg",
    items: [
      "Climate & Health Initiatives",
      "Environmental Health",
      "Environmental Awareness",
      "Plantation Initiatives",
      "Community Resilience",
    ],
    span: "lg:col-span-3",
    bg: "from-green-50",
    wrap: "bg-green-100 text-green-700",
    dot: "bg-green-600",
    link: "text-emerald-800",
    icon: LEAF,
  },
  {
    title: "Social Support & Learning Projects",
    href: "/projects/social-support-learning",
    image: "/images/projects/social-support.jpg",
    items: [
      "Social Support",
      "Educational Support",
      "Youth Development",
      "Learning Initiatives",
      "Skills Development",
    ],
    span: "lg:col-span-3",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    dot: "bg-rose-500",
    link: "text-emerald-800",
    icon: USERS,
  },
  {
    title: "Research & Evidence Projects",
    href: "/projects/research-evidence",
    image: "/images/projects/research-evidence.jpg",
    items: [
      "Public Health Research",
      "Community-Based Research",
      "Data Collection & Analysis",
      "Evidence-Based Solutions",
      "Knowledge Sharing",
    ],
    span: "lg:col-span-3",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-700",
    dot: "bg-sky-600",
    link: "text-sky-600",
    icon: SEARCH,
  },
  {
    title: "Digital Health Projects",
    href: "/projects/digital-health",
    image: "/images/projects/digital-health.jpg",
    items: [
      "Telehealth Initiatives",
      "Digital Health Awareness",
      "Health Information Systems",
      "Community Health Apps",
      "Digital Training & Support",
    ],
    span: "lg:col-span-3",
    bg: "from-blue-50",
    wrap: "bg-blue-100 text-blue-700",
    dot: "bg-blue-600",
    link: "text-emerald-800",
    icon: PHONE,
  },
  {
    title: "Technology Projects",
    href: "/projects/technology",
    image: "/images/projects/technology.jpg",
    items: [
      "Technology for Social Good",
      "Digital Innovation Initiatives",
      "IT Capacity Building",
      "Community Technology Access",
      "HopeTechSphere (Innovation & Digital Solutions)",
    ],
    span: "lg:col-span-3",
    bg: "from-blue-50",
    wrap: "bg-blue-100 text-blue-700",
    dot: "bg-blue-600",
    link: "text-emerald-800",
    icon: MONITOR,
  },
  {
    title: "Entrepreneurship & Social Enterprise Projects",
    href: "/projects/entrepreneurship-social-enterprise",
    image: "/images/projects/entrepreneurship.jpg",
    items: [
      "Youth Entrepreneurship",
      "Skill-Based Economic Initiatives",
      "Social Enterprise Development",
      "Business Hub Initiatives",
      "Livelihood Support Programs",
    ],
    span: "lg:col-span-4",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-600",
    dot: "bg-rose-500",
    link: "text-emerald-800",
    icon: CHART,
  },
  {
    title: "Communications & Media Projects",
    href: "/projects/communications-media",
    image: "/images/projects/communications-media.jpg",
    items: [
      "Health & Social Awareness Campaigns",
      "Digital Media Content",
      "Community Storytelling",
      "Social Media Initiatives",
      "Advocacy Campaigns",
    ],
    span: "lg:col-span-4",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    dot: "bg-rose-500",
    link: "text-emerald-800",
    icon: MEGAPHONE,
  },
  {
    title: "Special / Cross-Program Projects",
    href: "/projects/special-cross-program",
    image: "/images/projects/cross-program.jpg",
    items: [
      "Cross-Program Community Initiatives",
      "Partnership-Based Projects",
      "Innovative Pilot Projects",
      "Emergency Response Initiatives",
      "Thematic Campaigns (e.g. Blood Donation Drive, Internship Programs, Collaborative Initiatives with Partner Organizations)",
    ],
    span: "lg:col-span-4",
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    dot: "bg-purple-600",
    link: "text-sky-600",
    icon: PUZZLE,
  },
];

const approachSteps = [
  {
    num: "01",
    title: "Identify Need",
    desc: "Understand community needs and priorities (or external proposals).",
    numBg: "bg-amber-100 text-amber-700",
    wrap: "bg-amber-50 text-amber-600",
    icon: SEARCH,
  },
  {
    num: "02",
    title: "Design Project",
    desc: "Define objectives, strategy and measurable targets.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-700",
    icon: DOC,
  },
  {
    num: "03",
    title: "Implement",
    desc: "Work with communities, partners and volunteers to execute.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-sky-50 text-sky-600",
    icon: GEAR,
  },
  {
    num: "04",
    title: "Monitor & Evaluate",
    desc: "Track outcomes, learn and improve for greater impact.",
    numBg: "bg-emerald-100 text-emerald-800",
    wrap: "bg-emerald-50 text-emerald-700",
    icon: CHART,
  },
];

const sdgs = [
  { num: "3", label: "Good Health and Well-being", color: "bg-[#4c9f38]", glyph: "♥" },
  { num: "4", label: "Quality Education", color: "bg-[#c5192d]", glyph: "📖" },
  { num: "10", label: "Reduced Inequalities", color: "bg-[#e5176f]", glyph: "⇅" },
  { num: "11", label: "Sustainable Cities and Communities", color: "bg-[#fd9d24]", glyph: "🏙" },
  { num: "13", label: "Climate Action", color: "bg-[#3f7e44]", glyph: "🌍" },
  { num: "15", label: "Life on Land", color: "bg-[#56c02b]", glyph: "🌳" },
  { num: "17", label: "Partnerships for the Goals", color: "bg-[#19486a]", glyph: "❂" },
];

const team = [
  { role: "Project Director", sub: "[Assigned Lead]", wrap: "bg-emerald-100 text-emerald-800", icon: USER },
  { role: "Project Coordinator", sub: "[Assigned Coordinator]", wrap: "bg-sky-100 text-sky-600", icon: USERS },
  { role: "Field & Volunteer Team", sub: "Implementation and outreach", wrap: "bg-rose-100 text-rose-500", icon: USERS },
  { role: "Community Partners", sub: "Local organizations and stakeholders", wrap: "bg-amber-100 text-amber-700", icon: USERS },
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

export default function Projects() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[65%]">
          <img
            src="/images/projects/hero.jpg"
            alt="Two pairs of hands holding a young seedling growing from soil"
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
            <span className="text-slate-800">Projects</span>
          </nav>

          <div className="mt-6 max-w-2xl">
            <h1 className="font-serif text-6xl font-black leading-[1.05] tracking-tight text-[#0d3749] sm:text-7xl">
              Our <span className="text-[#1f4a2a]">Projects</span>
            </h1>

            <p className="mt-4 font-serif text-xl text-[#0d3749] sm:text-2xl">
              Ideas into Impact. Communities into Brighter Futures.
            </p>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-emerald-700" />

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              Our projects turn community needs into practical solutions across
              health, education, environment, technology and social development.
              By bringing together people, knowledge and resources, we create
              sustainable change for healthier, more resilient communities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f4a2a] px-7 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
              >
                Explore Our Projects <span>→</span>
              </a>
              <Link
                href="/projects/propose"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-900/40 bg-white/80 px-7 py-3 text-sm font-bold text-emerald-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Propose a Project <span>→</span>
              </Link>
            </div>
          </div>

          {/* handwritten tagline */}
          <div className="pointer-events-none absolute right-12 top-10 hidden -rotate-3 font-serif text-3xl italic leading-9 text-white drop-shadow-md xl:block">
            <p>People</p>
            <p>Projects</p>
            <p>Partnerships</p>
            <p>A Healthier</p>
            <p>Tomorrow</p>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-lime-300" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-12 sm:px-8 lg:px-12">
        {/* ============ OUR PROJECTS ============ */}
        <section id="projects" className="pt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Projects</SectionTitle>
            <p className="max-w-xl text-xs text-slate-600">
              Explore all our projects across different focus areas. Each
              project is designed to create meaningful and sustainable impact.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`${p.span} group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-900/5 bg-gradient-to-b ${p.bg} to-white p-5 shadow-[0_10px_40px_rgba(15,70,45,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* icon + photo */}
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${p.wrap}`}
                  >
                    <Icon d={p.icon} className="h-7 w-7" />
                  </span>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-[4.5rem] flex-1 rounded-xl object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-4 font-serif text-lg font-extrabold leading-6 text-emerald-950">
                  {p.title}
                </h3>

                <ul className="mt-3 space-y-1">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] leading-5 text-slate-700"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold ${p.link}`}
                >
                  View Projects
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR PROJECT APPROACH ============ */}
        <section className="mt-12">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Project Approach</SectionTitle>
            <p className="text-xs text-slate-600">
              A structured approach to ensure impactful and sustainable
              projects.
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
                    <h3 className="text-sm font-extrabold leading-5 text-emerald-950">
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

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-12">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Strategic Alignment</SectionTitle>
            <p className="text-xs text-slate-600">
              Our projects contribute to the following Sustainable Development
              Goals (SDGs).
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {sdgs.map((g) => (
              <article
                key={g.num}
                className={`${g.color} group relative flex aspect-[4/3] flex-col justify-between p-3 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-start gap-1.5">
                  <span className="text-3xl font-black leading-none">{g.num}</span>
                  <span className="text-[9px] font-bold uppercase leading-3">
                    {g.label}
                  </span>
                </div>
                <span className="text-center text-4xl leading-none transition-transform duration-300 group-hover:scale-110">
                  {g.glyph}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* ============ TEAM + GET INVOLVED ============ */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Project Team & Coordination */}
          <div>
            <SectionTitle>Project Team &amp; Coordination</SectionTitle>
            <p className="mt-2 text-xs text-slate-600">
              Our projects are guided by a dedicated team to ensure effective
              implementation.
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

          {/* Be Part of the Change */}
          <div>
            <SectionTitle>Be Part of the Change</SectionTitle>
            <p className="mt-2 text-xs text-slate-600">
              Support our projects and help us create meaningful impact.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {/* Volunteer */}
              <article className="flex flex-col rounded-2xl bg-gradient-to-b from-emerald-50 to-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Icon d={USERS} className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold leading-4 text-emerald-950">
                    Become a Volunteer
                  </h3>
                </div>
                <Link
                  href="/get-involved/volunteer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#1f4a2a] px-4 py-2 text-xs font-bold text-white transition duration-300 hover:bg-emerald-900"
                >
                  Apply Now <span>→</span>
                </Link>
              </article>

              {/* Partner */}
              <article className="flex flex-col rounded-2xl bg-gradient-to-b from-sky-50 to-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <Icon d={HEART} className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold leading-4 text-emerald-950">
                    Partner With Us
                  </h3>
                </div>
                <Link
                  href="/get-involved/partner"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#0d3749] px-4 py-2 text-xs font-bold text-white transition duration-300 hover:bg-[#0a2b39]"
                >
                  Explore Opportunities <span>→</span>
                </Link>
              </article>

              {/* Support */}
              <article className="flex flex-col rounded-2xl bg-gradient-to-b from-rose-50 to-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    <Icon d={HEART} className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold leading-4 text-emerald-950">
                    Support Our Projects
                  </h3>
                </div>
                <Link
                  href="/get-involved/support"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-xs font-bold text-white transition duration-300 hover:bg-rose-600"
                >
                  Donate Now <span>→</span>
                </Link>
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}