import Link from "next/link";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const USER = "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
const BOOK =
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";
const DOC =
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const MEGAPHONE =
  "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z";
const BULB =
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
const CAP =
  "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z";
const BRIEFCASE =
  "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";
const TROPHY =
  "M8 21h8m-4-4v4m-5-18h10v6a5 5 0 01-10 0V3zm10 2h3a1 1 0 011 1v1a3 3 0 01-3 3M7 5H4a1 1 0 00-1 1v1a3 3 0 003 3";
const TARGET =
  "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z";
const EYE =
  "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z";
const BOLT = "M13 10V3L4 14h7v7l9-11h-7z";
const TREND = "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6";
const LEAF = "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8";
const CUBE = "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4";
const ARROWS = "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4";
const EXTERNAL =
  "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14";

/* ---------- Color tones (full class strings so Tailwind can detect them) ---------- */

const tones = {
  emerald: { bg: "from-emerald-50", wrap: "bg-emerald-100 text-emerald-700" },
  sky: { bg: "from-sky-50", wrap: "bg-sky-100 text-sky-600" },
  rose: { bg: "from-rose-50", wrap: "bg-rose-100 text-rose-500" },
  purple: { bg: "from-purple-50", wrap: "bg-purple-100 text-purple-700" },
  amber: { bg: "from-amber-50", wrap: "bg-amber-100 text-amber-600" },
  blue: { bg: "from-blue-50", wrap: "bg-blue-100 text-blue-700" },
};

/* ---------- Static content ---------- */

const heroPoints = [
  { label: "Innovative Ideas", icon: BULB },
  { label: "Entrepreneurial Growth", icon: CHART },
  { label: "Collaborative Partnerships", icon: USERS },
  { label: "Sustainable Solutions", icon: LEAF },
  { label: "Community Impact", icon: USERS },
];

const objectives = [
  "Support entrepreneurship and innovation.",
  "Build capacity through training and mentorship.",
  "Connect entrepreneurs with partners and investors.",
  "Promote sustainable and responsible business models.",
  "Create opportunities for youth and professionals.",
];

const sdgs = [
  { num: "4", label: "Quality Education", color: "bg-[#c5192d]", icon: BOOK },
  { num: "8", label: "Decent Work & Economic Growth", color: "bg-[#a21942]", icon: TREND },
  { num: "9", label: "Industry, Innovation and Infrastructure", color: "bg-[#fd6925]", icon: CUBE },
  { num: "10", label: "Reduced Inequalities", color: "bg-[#dd1367]", icon: ARROWS },
  { num: "17", label: "Partnerships for the Goals", color: "bg-[#19486a]", icon: USERS },
];

const programRowOne = [
  {
    title: "Entrepreneurship",
    desc: "Supporting aspiring and existing entrepreneurs.",
    href: "/business-hub/entrepreneurship",
    image: "/images/business-hub/entrepreneurship.jpg",
  },
  {
    title: "Startups",
    desc: "Mentorship, branding and launch support for early-stage startups.",
    href: "/business-hub/startups",
    image: "/images/business-hub/startups.jpg",
  },
  {
    title: "Products & Services",
    desc: "Development and commercialisation of innovative solutions.",
    href: "/business-hub/products-services",
    image: "/images/business-hub/products-services.jpg",
  },
  {
    title: "Technology Business",
    desc: "Software, digital tools and technology-driven ventures.",
    href: "/business-hub/technology-business",
    image: "/images/business-hub/technology-business.jpg",
  },
  {
    title: "Health & Social Ventures",
    desc: "Enterprises focused on social good and community needs.",
    href: "/business-hub/health-social-ventures",
    image: "/images/business-hub/health-social-ventures.jpg",
  },
  {
    title: "Business Development",
    desc: "Resources, training and support to scale and sustain businesses.",
    href: "/business-hub/business-development",
    image: "/images/business-hub/business-development.jpg",
  },
];

const programRowTwo = [
  {
    title: "Mentorship",
    desc: "Guidance from industry experts and professionals.",
    href: "/business-hub/mentorship",
    image: "/images/business-hub/mentorship.jpg",
  },
  {
    title: "Competitions",
    desc: "Startup and innovation challenges and recognition and support.",
    href: "/business-hub/competitions",
    image: "/images/business-hub/competitions.jpg",
  },
  {
    title: "Partnerships",
    desc: "Collaborate with us through institutional, corporate or strategic partnerships.",
    href: "/business-hub/partnerships",
    image: "/images/business-hub/partnerships.jpg",
  },
  {
    title: "Investment Opportunities",
    desc: "Connect with investors and explore funding opportunities.",
    href: "/business-hub/investment-opportunities",
    image: "/images/business-hub/investment.jpg",
  },
  {
    title: "Business Stories",
    desc: "Inspiring journeys of founders, startups and social enterprises from our network.",
    href: "/business-hub/business-stories",
    image: "/images/business-hub/business-stories.jpg",
  },
];

const involvement = [
  {
    title: "Start Your Business",
    desc: "Get support to turn your idea into a venture.",
    href: "/get-involved/start-your-business",
    tone: "emerald",
    icon: BOLT,
  },
  {
    title: "Submit Your Startup",
    desc: "Apply for mentorship and launch support.",
    href: "/get-involved/submit-startup",
    tone: "amber",
    icon: DOC,
  },
  {
    title: "Become a Business Partner",
    desc: "Collaborate with us on projects and initiatives.",
    href: "/get-involved/business-partner",
    tone: "rose",
    icon: USERS,
  },
  {
    title: "Become an Investor",
    desc: "Invest in innovative and impact-driven ventures.",
    href: "/get-involved/investor",
    tone: "purple",
    icon: CHART,
  },
  {
    title: "Join as a Mentor",
    desc: "Share your expertise and guide emerging entrepreneurs.",
    href: "/get-involved/mentor",
    tone: "rose",
    icon: USER,
  },
  {
    title: "Apply for Internship",
    desc: "Gain practical experience in entrepreneurship and innovation.",
    href: "/get-involved/intern",
    tone: "emerald",
    icon: CAP,
  },
  {
    title: "Attend Training & Workshops",
    desc: "Build your skills and knowledge through our training programmes.",
    href: "/get-involved/training",
    tone: "sky",
    icon: USERS,
  },
  {
    title: "Participate in Competitions",
    desc: "Present your ideas and get recognized.",
    href: "/get-involved/competitions",
    tone: "amber",
    icon: TROPHY,
  },
  {
    title: "Business Owner Support",
    desc: "Access resources, networks and market opportunities.",
    href: "/get-involved/business-owner-support",
    tone: "blue",
    icon: BRIEFCASE,
  },
  {
    title: "Media & Showcase",
    desc: "Feature your business, product or service.",
    href: "/get-involved/media-showcase",
    tone: "rose",
    icon: MEGAPHONE,
  },
  {
    title: "Join a Project Team",
    desc: "Contribute to specific projects and initiatives.",
    href: "/get-involved/project-team",
    tone: "blue",
    icon: USERS,
  },
  {
    title: "Other Enquiries",
    desc: "Have a different proposal? Get in touch with our team.",
    href: "/contact",
    tone: "emerald",
    icon: DOC,
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

function ProgramCard({ p }) {
  return (
    <Link
      href={p.href}
      className="group flex flex-col overflow-hidden rounded-xl border border-emerald-900/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="h-24 overflow-hidden sm:h-28">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex-1 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-extrabold leading-5 text-emerald-950">
            {p.title}
          </h3>
          <Icon d={EXTERNAL} className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
        </div>
        <p className="mt-1 text-xs leading-4 text-slate-600">{p.desc}</p>
      </div>
    </Link>
  );
}

/* ---------- Page ---------- */

export default function BusinessHub() {
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
            src="/images/business-hub/hero.jpg"
            alt="Laptop on a desk showing business growth charts and ideas"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:via-white/30" />
        </div>

        <div className="relative mx-auto max-w-[100rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1f4a2a]">
              Business Hub
            </p>
            <h1 className="mt-3 font-serif text-6xl font-black leading-[1.05] tracking-tight text-[#0d3749] sm:text-7xl">
              Business Hub
            </h1>

            <p className="mt-3 font-serif text-xl font-semibold text-[#1f3a8a] sm:text-2xl">
              Ideas. People. Opportunities. Real-World Impact.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">
              The Business Hub is a platform for entrepreneurs, startups,
              business owners, investors and partners to collaborate, innovate
              and create solutions for stronger, more resilient communities.
            </p>
          </div>
        </div>

        {/* right side highlights */}
        <aside className="absolute inset-y-0 right-0 hidden w-56 flex-col justify-center gap-4 bg-[#0f3d2a]/95 px-6 text-white xl:flex">
          {heroPoints.map((h) => (
            <div key={h.label} className="flex items-center gap-3">
              <Icon d={h.icon} className="h-7 w-7 shrink-0 text-lime-300" />
              <span className="text-xs font-semibold leading-4">{h.label}</span>
            </div>
          ))}
          <div className="h-0.5 w-10 rounded-full bg-lime-300" />
        </aside>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-12 sm:px-8 lg:px-12">
        {/* ============ VISION / MISSION / OBJECTIVES ============ */}
        <section className="grid gap-4 pt-6 lg:grid-cols-3">
          <article className="flex items-center gap-4 rounded-2xl border border-emerald-900/5 bg-white p-5 shadow-sm">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Icon d={EYE} className="h-10 w-10" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-extrabold text-[#1f3a8a]">
                Our Vision
              </h2>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">
                A thriving ecosystem of innovative entrepreneurs and
                enterprises creating meaningful and lasting impact for
                communities across Pakistan and beyond.
              </p>
            </div>
          </article>

          <article className="flex items-center gap-4 rounded-2xl border border-emerald-900/5 bg-white p-5 shadow-sm">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <Icon d={TARGET} className="h-10 w-10" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-extrabold text-[#1f3a8a]">
                Our Mission
              </h2>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">
                To support and empower individuals, startups and businesses
                with resources, mentorship, partnerships and market
                opportunities to turn ideas into sustainable ventures.
              </p>
            </div>
          </article>

          <article className="flex items-center gap-4 rounded-2xl border border-emerald-900/5 bg-white p-5 shadow-sm">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Icon d={CHART} className="h-10 w-10" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-extrabold text-[#1f3a8a]">
                Our Objectives
              </h2>
              <ul className="mt-1.5 space-y-1">
                {objectives.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-xs leading-4 text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-8 grid items-center gap-5 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionTitle>Strategic Alignment</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The Business Hub contributes to national and global goals,
              including:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {sdgs.map((g) => (
              <article
                key={g.num}
                className={`${g.color} group flex aspect-[4/3] flex-col justify-between rounded-md p-3 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <span className="text-2xl font-black leading-none">{g.num}</span>
                <div className="flex items-end justify-between gap-1">
                  <span className="text-[10px] font-semibold leading-3">
                    {g.label}
                  </span>
                  <Icon d={g.icon} className="h-7 w-7 shrink-0" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR PROGRAM AREAS ============ */}
        <section className="mt-10">
          <SectionTitle>Our Program Areas</SectionTitle>
          <p className="mt-2 text-sm text-slate-600">
            Explore the key focus areas of the Business Hub. Click on each area
            to learn more or get involved.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {programRowOne.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {programRowTwo.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* ============ GET INVOLVED ============ */}
        <section className="mt-10">
          <SectionTitle>Get Involved</SectionTitle>
          <p className="mt-2 text-sm text-slate-600">
            There are many ways you can be part of the Business Hub. Choose the
            option that best fits you.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {involvement.map((i) => {
              const t = tones[i.tone];
              return (
                <Link
                  key={i.title}
                  href={i.href}
                  className={`group flex items-center gap-4 rounded-2xl border border-emerald-900/5 bg-gradient-to-r ${t.bg} to-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${t.wrap}`}
                  >
                    <Icon d={i.icon} className="h-7 w-7" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-extrabold leading-5 text-emerald-950">
                      {i.title}
                    </h3>
                    <p className="mt-1 text-xs leading-4 text-slate-600">
                      {i.desc}
                    </p>
                  </div>
                  <Icon
                    d={EXTERNAL}
                    className="h-4 w-4 shrink-0 text-sky-600 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ============ OUR FUTURE VISION ============ */}
        <section className="relative mt-10 overflow-hidden rounded-2xl border border-emerald-900/5 bg-gradient-to-r from-emerald-50 via-white to-white shadow-sm">
          <img
            src="/images/business-hub/future-vision.jpg"
            alt="Young green seedling growing from soil"
            loading="lazy"
            className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-[30%] object-cover md:block"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[38%] bg-gradient-to-r from-transparent via-transparent to-white md:block" />

          <div className="relative grid items-center gap-6 md:grid-cols-[30%_1fr_auto]">
            <div className="hidden md:block" />

            <div className="px-6 py-8 md:px-2">
              <SectionTitle>Our Future Vision</SectionTitle>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                To become a leading platform for entrepreneurial innovation and
                sustainable businesses that drive long-term social and economic
                impact in communities across Pakistan and beyond.
              </p>
            </div>

            <div className="m-4 rounded-xl bg-[#0f4a33] px-8 py-8 text-white md:m-0 md:h-full md:rounded-none md:px-10 md:py-10">
              <p className="font-serif text-lg font-bold leading-8">
                Innovative Ideas
                <br />
                Stronger Communities
                <br />
                Brighter Futures
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}