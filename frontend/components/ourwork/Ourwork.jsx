import Link from "next/link";

/* ---------- Static content (matches the design) ---------- */

const ARROW = "M5 12h14m-6-6l6 6-6 6";
const LEAF_ICON = "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8";
const HEART_ICON =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
const DOC_ICON =
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const BULB_ICON =
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
const GRID_ICON =
  "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z";
const CHECK_ICON = "M5 13l4 4L19 7";

const workAreas = [
  {
    num: "01",
    title: "Health & Medical Support",
    desc: "Providing essential health services and medical support to underserved communities.",
    href: "/our-work/health-medical-support",
    image: "/images/our-work/health-medical.jpg",
    points: [
      "Medical Camps",
      "Screenings & Referrals",
      "Health Services Support",
      "Emergency & Humanitarian Support",
    ],
    badge: "bg-rose-50 text-rose-500",
    tile: "bg-rose-50 text-rose-500",
    dot: "bg-rose-500",
    btn: "bg-rose-500",
    bar: "from-rose-500 to-rose-300",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    num: "02",
    title: "Health Education & Awareness",
    desc: "Creating awareness and promoting healthy behaviours through education and engagement.",
    href: "/our-work/health-education-awareness",
    image: "/images/our-work/health-education.jpg",
    points: [
      "School & Youth Sessions",
      "Community Awareness",
      "Campaigns & Advocacy",
      "Educational Resources",
    ],
    badge: "bg-emerald-50 text-emerald-700",
    tile: "bg-emerald-50 text-emerald-800",
    dot: "bg-emerald-700",
    btn: "bg-emerald-700",
    bar: "from-emerald-600 to-emerald-300",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    num: "03",
    title: "Community Development & Outreach",
    desc: "Empowering communities through outreach, skill-building and local development.",
    href: "/our-work/community-development-outreach",
    image: "/images/our-work/community-development.jpg",
    points: [
      "Community Engagement",
      "Skill Development",
      "Local Partnerships",
      "Volunteer Mobilization",
    ],
    badge: "bg-blue-50 text-blue-600",
    tile: "bg-blue-50 text-blue-600",
    dot: "bg-blue-500",
    btn: "bg-blue-500",
    bar: "from-blue-500 to-blue-300",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    num: "04",
    title: "Climate, Environment & Community Resilience",
    desc: "Promoting a cleaner, greener and more resilient environment for healthier communities.",
    href: "/our-work/climate-environment-resilience",
    image: "/images/our-work/climate-environment.jpg",
    points: [
      "Tree Plantation",
      "Environmental Awareness",
      "Disaster Preparedness",
      "Community Resilience Initiatives",
    ],
    badge: "bg-lime-50 text-lime-700",
    tile: "bg-green-50 text-green-700",
    dot: "bg-green-600",
    btn: "bg-green-600",
    bar: "from-green-600 to-lime-300",
    icon: "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8",
  },
  {
    num: "05",
    title: "Social Support & Learning",
    desc: "Supporting individuals and communities through learning opportunities and social care initiatives.",
    href: "/our-work/social-support-learning",
    image: "/images/our-work/social-support.jpg",
    points: [
      "Youth & Student Support",
      "Mental Health Support",
      "Learning & Skill-building",
      "Inclusion & Social Care",
    ],
    badge: "bg-pink-50 text-pink-500",
    tile: "bg-pink-50 text-pink-500",
    dot: "bg-pink-500",
    btn: "bg-pink-500",
    bar: "from-pink-500 to-pink-300",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    num: "06",
    title: "Research, Evidence & Innovation",
    desc: "Generating evidence, fostering innovation and using research to guide impactful solutions.",
    href: "/our-work/research-evidence-innovation",
    image: "/images/our-work/research-innovation.jpg",
    points: [
      "Public Health Research",
      "Data & Evidence Generation",
      "Innovation Projects",
      "Policy & Knowledge Sharing",
    ],
    badge: "bg-purple-50 text-purple-600",
    tile: "bg-purple-50 text-purple-600",
    dot: "bg-purple-500",
    btn: "bg-purple-600",
    bar: "from-purple-500 to-purple-300",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    num: "07",
    title: "Digital Health & Health Innovation",
    desc: "Leveraging digital solutions to improve healthcare access, quality and efficiency.",
    href: "/our-work/digital-health-innovation",
    image: "/images/our-work/digital-health.jpg",
    points: [
      "Digital Health Platforms",
      "Telehealth & Remote Support",
      "Health Data & Systems",
      "Innovation in Service Delivery",
    ],
    badge: "bg-blue-50 text-blue-600",
    tile: "bg-blue-50 text-blue-600",
    dot: "bg-blue-500",
    btn: "bg-blue-500",
    bar: "from-blue-500 to-sky-300",
    icon: "M12 4v16m8-8H4",
  },
  {
    num: "08",
    title: "Technology & Digital Innovation",
    desc: "Using technology and digital tools to create sustainable solutions for public health and community development.",
    href: "/our-work/technology-digital-innovation",
    image: "/images/our-work/technology.jpg",
    points: [
      "IT Solutions & Platforms",
      "Automation & Digital Tools",
      "Community Tech Initiatives",
      "Tech for Social Impact",
    ],
    badge: "bg-amber-50 text-amber-600",
    tile: "bg-amber-50 text-amber-600",
    dot: "bg-amber-500",
    btn: "bg-amber-400",
    bar: "from-amber-500 to-amber-300",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zm2 4h6v6H9V9z",
  },
  {
    num: "09",
    title: "Entrepreneurship & Social Enterprise",
    desc: "Supporting youth and communities through entrepreneurship and social enterprise initiatives.",
    href: "/our-work/entrepreneurship-social-enterprise",
    image: "/images/our-work/entrepreneurship.jpg",
    points: [
      "Youth Entrepreneurship",
      "Social Business Models",
      "Incubation & Mentorship",
      "Livelihood Opportunities",
    ],
    badge: "bg-emerald-50 text-emerald-700",
    tile: "bg-emerald-50 text-emerald-800",
    dot: "bg-green-600",
    btn: "bg-green-600",
    bar: "from-green-600 to-emerald-300",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    num: "10",
    title: "Communications, Media & Digital Marketing",
    desc: "Sharing our impact, building awareness and engaging communities through strategic communication and digital media.",
    href: "/our-work/communications-media",
    image: "/images/our-work/communications.jpg",
    points: [
      "Content Creation",
      "Digital Campaigns",
      "Media & Public Relations",
      "Brand & Storytelling",
    ],
    badge: "bg-rose-50 text-rose-500",
    tile: "bg-rose-50 text-rose-500",
    dot: "bg-rose-500",
    btn: "bg-rose-500",
    bar: "from-rose-500 to-rose-300",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
];

// Quick numbers for the hero, derived from the data above.
const stats = [
  { value: workAreas.length, label: "Focus areas", icon: GRID_ICON },
  {
    value: workAreas.reduce((n, a) => n + a.points.length, 0),
    label: "Key activities",
    icon: CHECK_ICON,
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

function SectionTitle({ eyebrow, children }) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-black tracking-tight text-[#1f3d1f] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

/* ---------- Page ---------- */

export default function OurWork() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-800">
      <style>{`
        @keyframes ow-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .ow-float { animation: ow-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ow-float { animation: none; }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden border-b border-emerald-900/5 bg-gradient-to-br from-[#eef6ef] via-white to-[#e4f0e6]">
        {/* soft glows + dotted texture */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-lime-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(31,74,42,.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="relative mx-auto grid max-w-[90rem] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-20">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-1.5 text-xs text-slate-600 shadow-sm backdrop-blur"
            >
              <Link href="/" className="transition hover:text-emerald-800">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-slate-800">Our Work</span>
            </nav>

            <h1 className="mt-5 font-serif text-4xl font-black leading-[1.1] tracking-tight text-[#1f3d1f] sm:text-5xl lg:text-6xl">
              Turning Commitment into Community Impact
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              At Hopefelt Foundation, we work across interconnected areas to
              create healthier, more resilient and empowered communities through
              knowledge, action and innovation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1f4a2a] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-xl"
              >
                Explore Our Work
                <Icon
                  d={ARROW}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  stroke={2.4}
                />
              </a>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-900/30 bg-white/80 px-7 py-3.5 text-sm font-bold text-emerald-950 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Get Involved
              </Link>
            </div>

            <dl className="mt-10 grid max-w-sm grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-emerald-900/10 bg-white/85 p-4 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Icon d={s.icon} className="h-4 w-4" />
                  </span>
                  <dd className="mt-3 font-serif text-3xl font-black leading-none text-[#1f3d1f]">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero illustration */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* decorative offset frame + glow */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-dashed border-emerald-900/15" />
            <div className="pointer-events-none absolute -left-8 -top-8 h-44 w-44 rounded-full bg-lime-300/30 blur-3xl" />

            {/* framed photo */}
            <div className="relative overflow-hidden rounded-[2rem] bg-emerald-50 shadow-2xl shadow-emerald-900/20 ring-1 ring-emerald-900/10">
              <img
                src="/images/Our Work/blocks.png"
                alt="Hand holding wooden blocks with health, education, community and innovation icons"
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f3d2a]/60 via-transparent to-transparent" />

              {/* tagline glass bar */}
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl border border-white/25 bg-[#0f3d2a]/55 px-4 py-3 font-serif text-sm italic text-white backdrop-blur-md sm:text-base">
                <span>People</span>
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>Knowledge</span>
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>Action</span>
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                <span>Impact</span>
              </div>
            </div>

            {/* floating icons, sitting on the frame corners */}
            <span className="ow-float absolute -top-5 left-[14%] flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-800 shadow-lg ring-1 ring-emerald-900/10">
              <Icon d={LEAF_ICON} />
            </span>
            <span
              className="ow-float absolute -left-5 top-[34%] hidden h-14 w-14 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-lg ring-1 ring-emerald-900/10 sm:flex"
              style={{ animationDelay: "-1.5s" }}
            >
              <Icon d={HEART_ICON} />
            </span>
            <span
              className="ow-float absolute -right-5 top-[12%] hidden h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-lg ring-1 ring-emerald-900/10 sm:flex"
              style={{ animationDelay: "-3s" }}
            >
              <Icon d={DOC_ICON} />
            </span>
            <span
              className="ow-float absolute -top-4 right-[18%] flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-500 shadow-lg ring-1 ring-emerald-900/10"
              style={{ animationDelay: "-4.2s" }}
            >
              <Icon d={BULB_ICON} />
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[90rem] px-5 pb-16 pt-16 sm:px-8 lg:px-12">
        {/* ============ EXPLORE OUR WORK ============ */}
       <div
  id="work"
  className="flex scroll-mt-6 flex-col gap-2"
>
  <SectionTitle eyebrow="Focus areas">Explore Our Work</SectionTitle>

  <p className="text-base leading-7 text-slate-600 italic">
    Discover how we create change through our focused areas, each contributing to healthier, more inclusive and sustainable communities.
  </p>
</div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {workAreas.map((area) => (
            <article
              key={area.num}
              className="group relative flex min-h-[13rem] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_10px_40px_rgba(15,70,45,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-lime-400/60 hover:shadow-2xl hover:shadow-emerald-900/10 sm:block"
            >
              {/* whole card is clickable */}
              <Link
                href={area.href}
                aria-hidden="true"
                tabIndex={-1}
                className="absolute inset-0 z-10"
              />

              {/* left accent bar */}
              <div
                className={`absolute inset-y-0 left-0 z-[5] w-1.5 bg-gradient-to-b ${area.bar}`}
              />

              {/* image: banner on mobile, fading in from the right on larger screens */}
              <div className="pointer-events-none relative h-36 w-full shrink-0 overflow-hidden bg-emerald-50 sm:absolute sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[46%]">
                <img
                  src={area.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/60 sm:to-transparent" />
              </div>

              <div className="relative flex gap-4 p-6 pl-7 sm:gap-5">
                {/* badge + icon tile */}
                <div className="flex shrink-0 flex-col items-start gap-3">
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-extrabold ${area.badge}`}
                  >
                    {area.num}
                  </span>
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ring-4 ring-white transition duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-16 sm:w-16 ${area.tile}`}
                  >
                    <Icon d={area.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                  </span>
                </div>

                {/* content */}
                <div className="min-w-0 sm:max-w-[24rem]">
                  <h3 className="font-serif text-lg font-extrabold leading-6 text-emerald-950">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {area.desc}
                  </p>

                  <ul className="mt-3 space-y-1">
                    {area.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-[13px] leading-5 text-slate-600"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${area.dot}`}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* arrow button */}
              <Link
                href={area.href}
                aria-label={`Explore ${area.title}`}
                className={`absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white transition duration-300 group-hover:translate-x-1 group-hover:scale-105 ${area.btn}`}
              >
                <Icon d={ARROW} className="h-5 w-5" stroke={2.4} />
              </Link>
            </article>
          ))}
        </div>

        {/* ============ CTA BANNER ============ */}
        <section className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f4a2a] via-[#2b5c33] to-[#3d6e43] shadow-2xl shadow-emerald-900/20 ring-1 ring-white/10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-lime-300/20 blur-3xl" />

          <div className="relative grid items-center lg:grid-cols-[1fr_1fr]">
            <div className="px-6 py-12 sm:px-12">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-lime-300">
                Together for a healthier tomorrow
              </span>
              <h3 className="mt-4 font-serif text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
                From Knowledge to Action, for Stronger Communities.
              </h3>
            </div>

            <div className="relative h-52 lg:h-full lg:min-h-[13rem]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2b5c33] via-[#2b5c33]/30 to-transparent" />

              <Link
                href="/get-involved"
                className="group absolute right-6 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#1f4a2a] shadow-xl transition duration-300 hover:bg-lime-100"
              >
                Join Our Journey
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