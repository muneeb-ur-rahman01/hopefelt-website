import Link from "next/link";

/* ---------- Static content (matches the design) ---------- */

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
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
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

/* ---------- Page ---------- */

export default function OurWork() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-800">
      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#eef6ef] via-white to-[#e4f0e6]">
        {/* soft glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-200/40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-lime-200/40 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[100rem] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4a6741]">
              Our Work
            </span>
            <h1 className="mt-4 font-serif text-4xl font-black leading-[1.1] tracking-tight text-[#1f3d1f] sm:text-5xl lg:text-6xl">
              Turning Commitment into Community Impact
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              At Hopefelt Foundation, we work across interconnected areas to
              create healthier, more resilient and empowered communities through
              knowledge, action and innovation.
            </p>
          </div>

          {/* Hero illustration */}
          <div className="relative mx-auto w-full max-w-xl">
            <img
              src="/images/our-work/hero-blocks.png"
              alt="Hand holding wooden blocks with health, education, community and innovation icons"
              className="h-72 w-full object-contain sm:h-80 lg:h-[22rem]"
            />

            {/* floating icons */}
            <span className="absolute left-[18%] top-[18%] flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-emerald-800 shadow-lg ring-1 ring-emerald-900/10">
              <Icon d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8" />
            </span>
            <span className="absolute left-[8%] top-[34%] hidden h-14 w-14 items-center justify-center rounded-full bg-white/90 text-emerald-800 shadow-lg ring-1 ring-emerald-900/10 sm:flex">
              <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </span>
            <span className="absolute right-[22%] top-0 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-emerald-800 shadow-lg ring-1 ring-emerald-900/10">
              <Icon d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </span>
            <span className="absolute right-[10%] top-[16%] flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-emerald-800 shadow-lg ring-1 ring-emerald-900/10">
              <Icon d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </span>

            {/* handwritten tagline */}
            <div className="absolute -right-2 top-[18%] hidden -rotate-6 text-right font-serif text-2xl italic leading-8 text-slate-700 xl:block">
              <p>People</p>
              <p>Knowledge</p>
              <p>Action</p>
              <p>Impact</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 py-12 sm:px-8 lg:px-12">
        {/* ============ EXPLORE OUR WORK ============ */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="font-serif text-3xl font-black text-[#1f3d1f] sm:text-4xl">
            Explore Our Work
          </h2>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Discover how we create change through our focused areas, each
            contributing to healthier, more inclusive and sustainable
            communities.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {workAreas.map((area) => (
            <article
              key={area.num}
              className="group relative min-h-[11.5rem] overflow-hidden rounded-2xl border border-emerald-900/5 bg-white shadow-[0_10px_40px_rgba(15,70,45,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* background image fading in from the right */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%]">
                <img
                  src={area.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
              </div>

              <div className="relative flex gap-4 p-5 sm:gap-5">
                {/* badge + icon tile */}
                <div className="flex shrink-0 flex-col items-start gap-3">
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-extrabold ${area.badge}`}
                  >
                    {area.num}
                  </span>
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl sm:h-16 sm:w-16 ${area.tile}`}
                  >
                    <Icon d={area.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
                  </span>
                </div>

                {/* content */}
                <div className="min-w-0 max-w-[24rem]">
                  <h3 className="font-serif text-lg font-extrabold leading-6 text-emerald-950">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {area.desc}
                  </p>

                  <ul className="mt-3 space-y-0.5">
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
                className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-white transition duration-300 group-hover:translate-x-1 ${area.btn}`}
              >
                <Icon d="M5 12h14m-6-6l6 6-6 6" className="h-5 w-5" stroke={2.4} />
              </Link>
            </article>
          ))}
        </div>

        {/* ============ CTA BANNER ============ */}
        <section className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f4a2a] via-[#2b5c33] to-[#3d6e43]">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            <div className="px-6 py-10 sm:px-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-100/90">
                Together for a healthier tomorrow
              </span>
              <h3 className="mt-3 font-serif text-2xl font-extrabold leading-9 text-white sm:text-3xl sm:leading-10">
                From Knowledge to Action, for Stronger Communities.
              </h3>
            </div>

            <div className="relative h-48 lg:h-full lg:min-h-[10rem]">
              <img
                src="/images/our-work/cta-landscape.jpg"
                alt="Tree on a hill at sunrise beside a winding road"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2b5c33] via-transparent to-transparent" />

              <Link
                href="/get-involved"
                className="absolute right-6 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full bg-[#1f4a2a] px-6 py-3 text-xs font-extrabold text-white shadow-lg ring-1 ring-white/20 transition duration-300 hover:-translate-y-[55%] hover:bg-emerald-900"
              >
                Join Our Journey <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}