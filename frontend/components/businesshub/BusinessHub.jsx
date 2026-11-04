import Link from "next/link";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";
const USER = "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";
const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";
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
const LEAF = "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8";
const EXTERNAL =
  "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14";

/* ---------- Color tones (full class strings so Tailwind can detect them) ---------- */

const tones = {
  emerald: {
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-700",
    hover: "hover:border-emerald-300 hover:shadow-emerald-900/10",
    ring: "group-hover:bg-emerald-600 group-hover:text-white",
  },
  sky: {
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    hover: "hover:border-sky-300 hover:shadow-sky-900/10",
    ring: "group-hover:bg-sky-600 group-hover:text-white",
  },
  rose: {
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    hover: "hover:border-rose-300 hover:shadow-rose-900/10",
    ring: "group-hover:bg-rose-600 group-hover:text-white",
  },
  purple: {
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    hover: "hover:border-purple-300 hover:shadow-purple-900/10",
    ring: "group-hover:bg-purple-600 group-hover:text-white",
  },
  amber: {
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-600",
    hover: "hover:border-amber-300 hover:shadow-amber-900/10",
    ring: "group-hover:bg-amber-500 group-hover:text-white",
  },
  blue: {
    bg: "from-blue-50",
    wrap: "bg-blue-100 text-blue-700",
    hover: "hover:border-blue-300 hover:shadow-blue-900/10",
    ring: "group-hover:bg-blue-600 group-hover:text-white",
  },
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

/* SDG images: put your files in /public/images/sdg/ (or change the paths below).
   Only 5 tiles: 3 on the LEFT (8, 4, 10) and 2 on the RIGHT (9, 17).
   left / top = position inside the card (percent), w = tile width (percent of card width),
   dur = float duration (s), delay = float delay (s), amp = Y-axis float distance (px). */
const sdgWheel = "/images/sdg/sdg-wheel.png";

const sdgTiles = [
  /* LEFT side (3) */
  { num: "8", label: "Decent Work and Economic Growth", image: "/images/sdg/sdg-8.png", left: "24%", top: "9%", w: "8.2%", dur: 6.1, delay: -1.4, amp: 14 },
  { num: "4", label: "Quality Education", image: "/images/sdg/sdg-4.png", left: "13%", top: "40%", w: "8.6%", dur: 6.8, delay: -2, amp: 14 },
  { num: "10", label: "Reduced Inequalities", image: "/images/sdg/sdg-10.png", left: "22%", top: "70%", w: "8.2%", dur: 6.2, delay: -3.6, amp: 13 },
  /* RIGHT side (2) */
  { num: "9", label: "Industry, Innovation and Infrastructure", image: "/images/sdg/sdg-9.png", left: "70%", top: "8%", w: "8.4%", dur: 5.6, delay: -2.6, amp: 12 },
  { num: "17", label: "Partnerships for the Goals", image: "/images/sdg/sdg-17.png", left: "76%", top: "66%", w: "7.4%", dur: 5.5, delay: -1.8, amp: 11 },
];

const programRowOne = [
  {
    title: "Entrepreneurship",
    desc: "Supporting aspiring and existing entrepreneurs.",
    href: "/business-hub/entrepreneurship",
    image: "/images/BusinessHub/entrepreneur.png",
  },
  {
    title: "Startups",
    desc: "Mentorship, branding and launch support for early-stage startups.",
    href: "/business-hub/startups",
    image: "/images/BusinessHub/startup.png",
  },
  {
    title: "Products & Services",
    desc: "Development and commercialisation of innovative solutions.",
    href: "/business-hub/products-services",
    image: "/images/BusinessHub/products.png",
  },
  {
    title: "Technology Business",
    desc: "Software, digital tools and technology-driven ventures.",
    href: "/business-hub/technology-business",
    image: "/images/BusinessHub/technology.png",
  },
  {
    title: "Health & Social Ventures",
    desc: "Enterprises focused on social good and community needs.",
    href: "/business-hub/health-social-ventures",
    image: "/images/BusinessHub/socialventures.png",
  },
  {
    title: "Business Development",
    desc: "Resources, training and support to scale and sustain businesses.",
    href: "/business-hub/business-development",
    image: "/images/BusinessHub/Businessdevelopment.png",
  },
];

const programRowTwo = [
  {
    title: "Mentorship",
    desc: "Guidance from industry experts and professionals.",
    href: "/business-hub/mentorship",
    image: "/images/BusinessHub/Mentorship.png",
  },
  {
    title: "Competitions",
    desc: "Startup and innovation challenges and recognition and support.",
    href: "/business-hub/competitions",
    image: "/images/BusinessHub/rewards.png",
  },
  {
    title: "Partnerships",
    desc: "Collaborate with us through institutional, corporate or strategic partnerships.",
    href: "/business-hub/partnerships",
    image: "/images/BusinessHub/partnership.png",
  },
  {
    title: "Investment Opportunities",
    desc: "Connect with investors and explore funding opportunities.",
    href: "/business-hub/investment-opportunities",
    image: "/images/BusinessHub/opportunity.png",
  },
  {
    title: "Business Stories",
    desc: "Inspiring journeys of founders, startups and social enterprises from our network.",
    href: "/business-hub/business-stories",
    image: "/images/BusinessHub/stories.png",
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

function SectionTitle({ eyebrow, children, className = "" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 font-serif text-3xl font-extrabold text-[#1f4a2a] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function ProgramCard({ p }) {
  return (
    <Link
      href={p.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,70,45,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-900/10"
    >
      <div className="relative h-36 overflow-hidden bg-emerald-100">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-emerald-800 shadow-md transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
          <Icon d={EXTERNAL} className="h-4 w-4" stroke={2} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-base font-extrabold leading-snug text-emerald-950">
          {p.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-5 text-slate-600">{p.desc}</p>
      </div>
    </Link>
  );
}

/* One floating SDG tile.
   Outer element = position + hover effect, inner img = Y-axis floating animation
   (kept separate so the hover transform and the float transform never clash). */
function FloatingTile({ g, className = "", style = {} }) {
  return (
    <div className={className} style={style}>
      <div className="transition duration-300 hover:z-10 hover:scale-110">
        <img
          src={g.image}
          alt={`SDG ${g.num}: ${g.label}`}
          loading="lazy"
          className="sdg-float block w-full rounded-xl object-contain shadow-lg shadow-slate-900/15 ring-2 ring-white"
          style={{
            "--amp": `${g.amp}px`,
            animationDuration: `${g.dur}s`,
            animationDelay: `${g.delay}s`,
          }}
        />
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function BusinessHub() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* Floating animation (Y axis only) */}
      <style>{`
        @keyframes sdg-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(calc(var(--amp, 12px) * -1)); }
        }
        .sdg-float {
          animation-name: sdg-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .sdg-float { animation: none; }
        }
      `}</style>

      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative min-h-[380px] border-b border-emerald-900/5 bg-[#f4faf6]">
        {/* Image is pushed to the right on desktop so the text inside the
            photo never sits behind the real heading/paragraph. */}
        <div className="pointer-events-none absolute inset-0 lg:left-[38%]">
          <img
            src="/images/BusinessHub/hero.png"
            alt="Laptop on a desk showing business growth charts and ideas"
            className="h-full w-full object-cover object-center"
          />
          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-white/80 lg:hidden" />
          {/* Desktop: soft fade where the image meets the left content area */}
          <div className="absolute inset-y-0 left-0 hidden w-[30%] bg-gradient-to-r from-[#f4faf6] via-[#f4faf6]/70 to-transparent lg:block" />
          {/* Desktop: slight dark tint on the far right for the highlights card */}
          <div className="absolute inset-0 hidden bg-gradient-to-l from-emerald-950/45 via-transparent to-transparent lg:block" />
        </div>

        <div className="relative mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600"
          >
            <Link href="/" className="transition hover:text-emerald-800">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-900">Business Hub</span>
          </nav>

          <div className="mt-8 max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              Hopefelt Foundation
            </span>

            <h1 className="mt-4 font-serif text-5xl font-black leading-[1.05] tracking-tight text-[#0d3749] sm:text-6xl lg:text-7xl">
              Business Hub
            </h1>

            <p className="mt-5 font-serif text-xl font-semibold text-[#1f3a8a] sm:text-2xl">
              Ideas. People. Opportunities. Real-World Impact.
            </p>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
              The Business Hub is a platform for entrepreneurs, startups,
              business owners, investors and partners to collaborate, innovate
              and create solutions for stronger, more resilient communities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                Explore Programs
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#get-involved"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-900/30 bg-white/80 px-6 py-3 text-sm font-bold text-emerald-950 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>

        {/* right side highlights */}
        <aside className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-4 rounded-2xl border border-white/20 bg-emerald-950/55 px-7 py-6 text-white shadow-xl backdrop-blur-md xl:flex">
          {heroPoints.map((h) => (
            <div key={h.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Icon d={h.icon} className="h-5 w-5 text-lime-300" />
              </span>
              <span className="text-sm font-semibold leading-4">{h.label}</span>
            </div>
          ))}
          <div className="h-0.5 w-12 rounded-full bg-lime-300" />
        </aside>
      </header>

      <div className="mx-auto max-w-[90rem] px-5 pb-16 sm:px-8 lg:px-12">
        {/* ============ VISION / MISSION / OBJECTIVES ============ */}
        <section className="relative z-10 -mt-10 grid gap-5 lg:grid-cols-3">
          <article className="relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,70,45,0.10)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300" />
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-900/20">
              <Icon d={EYE} className="h-10 w-10" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-extrabold text-[#1f3a8a]">
                Our Vision
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 italic">
                A thriving ecosystem of innovative entrepreneurs and
                enterprises creating meaningful and lasting impact for
                communities across Pakistan and beyond.
              </p>
            </div>
          </article>

          <article className="relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,70,45,0.10)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 to-sky-300" />
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-900/20">
              <Icon d={TARGET} className="h-10 w-10" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-extrabold text-[#1f3a8a]">
                Our Mission
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 italic">
                To support and empower individuals, startups and businesses
                with resources, mentorship, partnerships and market
                opportunities to turn ideas into sustainable ventures.
              </p>
            </div>
          </article>

          <article className="relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,70,45,0.10)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300" />
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-900/20">
              <Icon d={CHART} className="h-10 w-10" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-extrabold text-[#1f3a8a]">
                Our Objectives
              </h2>
              <ul className="mt-2 space-y-1.5">
                {objectives.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-[13px] leading-5 text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-16">
          <SectionTitle eyebrow="Impact">Strategic Alignment</SectionTitle>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 italic">
            The Business Hub contributes to national and global goals,
            including:
          </p>

          {/* Desktop / tablet: fixed wheel in the centre, 3 tiles left + 2 tiles right, floating */}
          <div className="relative mt-8 hidden aspect-[1120/664] w-full overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white via-[#f1faf5] to-emerald-50 shadow-[0_14px_40px_rgba(15,70,45,0.08)] md:block">
            {/* soft glow behind the wheel */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl" />

            {/* outer thin ring */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[47%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/50" />
            {/* inner dashed ring */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-300/70 bg-emerald-100/30" />

            {/* centre wheel — FIXED (no animation) */}
            <img
              src={sdgWheel}
              alt="Sustainable Development Goals wheel"
              loading="lazy"
              className="absolute left-1/2 top-1/2 w-[22%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-xl"
            />

            {/* floating tiles (Y axis) */}
            {sdgTiles.map((g) => (
              <FloatingTile
                key={g.num}
                g={g}
                className="absolute"
                style={{ left: g.left, top: g.top, width: g.w }}
              />
            ))}
          </div>

          {/* Mobile: fixed wheel on top, floating tiles below */}
          <div className="mt-8 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-[#f1faf5] to-emerald-50 p-6 shadow-[0_14px_40px_rgba(15,70,45,0.08)] md:hidden">
            <div className="relative mx-auto w-56">
              <div className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-emerald-300/70 bg-emerald-100/40" />
              <img
                src={sdgWheel}
                alt="Sustainable Development Goals wheel"
                loading="lazy"
                className="relative mx-auto w-48 object-contain py-4 drop-shadow-lg"
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 pb-3">
              {sdgTiles.map((g) => (
                <FloatingTile
                  key={g.num}
                  g={{ ...g, amp: 6 }}
                  className="w-[28%]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============ OUR PROGRAM AREAS ============ */}
        <section className="mt-20 scroll-mt-8" id="programs">
          <SectionTitle eyebrow="Programs">Our Program Areas</SectionTitle>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 italic">
            Explore the key focus areas of the Business Hub. Click on each area
            to learn more or get involved.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {programRowOne.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {programRowTwo.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* ============ GET INVOLVED ============ */}
        <section className="mt-20 scroll-mt-8" id="get-involved">
          <SectionTitle eyebrow="Join Us">Get Involved</SectionTitle>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 italic">
            There are many ways you can be part of the Business Hub. Choose the
            option that best fits you.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {involvement.map((i) => {
              const t = tones[i.tone] || tones.emerald;
              return (
                <Link
                  key={i.title}
                  href={i.href}
                  className={`group flex h-full items-center gap-4 rounded-2xl border border-slate-200/80 bg-gradient-to-r ${t.bg} to-white p-5 shadow-[0_8px_30px_rgba(15,70,45,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${t.hover}`}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition duration-300 ${t.wrap} ${t.ring}`}
                  >
                    <Icon d={i.icon} className="h-7 w-7" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-[15px] font-extrabold leading-5 text-emerald-950">
                      {i.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-5 text-slate-600">
                      {i.desc}
                    </p>
                  </div>
                  <Icon
                    d={EXTERNAL}
                    className="h-4 w-4 shrink-0 text-slate-400 transition duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-700"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* ============ OUR FUTURE VISION ============ */}
        <section className="relative mt-20 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-r from-emerald-50 via-white to-white shadow-[0_14px_40px_rgba(15,70,45,0.08)]">
          <img
            src="/images/BusinessHub/future.png"
            alt="Young green seedling growing from soil"
            loading="lazy"
            className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-[30%] object-cover md:block"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[38%] bg-gradient-to-r from-transparent via-transparent to-white md:block" />

          <div className="relative grid items-stretch gap-6 md:grid-cols-[30%_1fr_auto]">
            <div className="hidden md:block" />

            <div className="flex flex-col justify-center px-6 py-10 md:px-2">
              <SectionTitle eyebrow="Looking Ahead">Our Future Vision</SectionTitle>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                To become a leading platform for entrepreneurial innovation and
                sustainable businesses that drive long-term social and economic
                impact in communities across Pakistan and beyond.
              </p>
            </div>

            <div className="m-4 flex items-center rounded-2xl bg-gradient-to-br from-[#0f4a33] to-[#0b3324] px-8 py-8 text-white md:m-0 md:rounded-none md:px-12 md:py-10">
              <div>
                <p className="font-serif text-xl font-bold leading-9">
                  Innovative Ideas
                  <br />
                  Stronger Communities
                  <br />
                  Brighter Futures
                </p>
                <div className="mt-4 h-0.5 w-12 rounded-full bg-lime-300" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
