import Link from "next/link";

/* ---------- Icon paths ---------- */

const USERS =
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";

const USER =
  "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z";

const CHART =
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z";

const HEART =
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";

const BOOK =
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253";

const GEAR =
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z";

const MEGAPHONE =
  "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z";

const BULB =
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";

const CAP =
  "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z";

const BRIEFCASE =
  "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";

const FLASK =
  "M9 3h6m-5 0v6l-5 9a2 2 0 001.8 3h10.4a2 2 0 001.8-3l-5-9V3";

const GIFT =
  "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7";

const PLAY =
  "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z";

/* ---------- Color tones (full class names so Tailwind can detect them) ---------- */

const tones = {
  emerald: {
    badge: "bg-emerald-600 text-white",
    bar: "from-emerald-500 to-emerald-300",
    img: "bg-emerald-100",
    btn: "bg-emerald-50 text-emerald-800 ring-emerald-200 hover:bg-emerald-600 hover:text-white hover:ring-emerald-600",
    hover: "hover:border-emerald-300 hover:shadow-emerald-900/10",
  },
  sky: {
    badge: "bg-sky-600 text-white",
    bar: "from-sky-500 to-sky-300",
    img: "bg-sky-100",
    btn: "bg-sky-50 text-sky-800 ring-sky-200 hover:bg-sky-600 hover:text-white hover:ring-sky-600",
    hover: "hover:border-sky-300 hover:shadow-sky-900/10",
  },
  rose: {
    badge: "bg-rose-600 text-white",
    bar: "from-rose-500 to-rose-300",
    img: "bg-rose-100",
    btn: "bg-rose-50 text-rose-800 ring-rose-200 hover:bg-rose-600 hover:text-white hover:ring-rose-600",
    hover: "hover:border-rose-300 hover:shadow-rose-900/10",
  },
  purple: {
    badge: "bg-purple-600 text-white",
    bar: "from-purple-500 to-purple-300",
    img: "bg-purple-100",
    btn: "bg-purple-50 text-purple-800 ring-purple-200 hover:bg-purple-600 hover:text-white hover:ring-purple-600",
    hover: "hover:border-purple-300 hover:shadow-purple-900/10",
  },
  amber: {
    badge: "bg-amber-500 text-white",
    bar: "from-amber-500 to-amber-300",
    img: "bg-amber-100",
    btn: "bg-amber-50 text-amber-800 ring-amber-200 hover:bg-amber-500 hover:text-white hover:ring-amber-500",
    hover: "hover:border-amber-300 hover:shadow-amber-900/10",
  },
  blue: {
    badge: "bg-blue-600 text-white",
    bar: "from-blue-500 to-blue-300",
    img: "bg-blue-100",
    btn: "bg-blue-50 text-blue-800 ring-blue-200 hover:bg-blue-600 hover:text-white hover:ring-blue-600",
    hover: "hover:border-blue-300 hover:shadow-blue-900/10",
  },
};

/* ---------- Opportunities ---------- */

const opportunities = [
  {
    title: "Official Volunteer",
    desc: "Contribute your time and skills to support our programmes, community activities and events.",
    href: "/get-involved/volunteer",
    image: "/images/Involved/volunteer.png",
    tone: "emerald",
    icon: USERS,
  },
  {
    title: "Official Member",
    desc: "Become an official member and be part of our growing network.",
    href: "/get-involved/member",
    image: "/images/Involved/member.png",
    tone: "sky",
    icon: USER,
  },
  {
    title: "Become a Campaigner",
    desc: "Support awareness campaigns and help us amplify our message in communities.",
    href: "/get-involved/campaigner",
    image: "/images/Involved/campaigner.png",
    tone: "rose",
    icon: MEGAPHONE,
  },
  {
    title: "Campaign Coordinator",
    desc: "Help plan, coordinate and implement campaigns and outreach activities.",
    href: "/get-involved/campaign-coordinator",
    image: "/images/Involved/coordinator.png",
    tone: "purple",
    icon: GEAR,
  },
  {
    title: "Campus Representative",
    desc: "Be a Hopefelt representative at your school, college or university.",
    href: "/get-involved/campus-representative",
    image: "/images/Involved/campus.png",
    tone: "sky",
    icon: CAP,
  },
  {
    title: "Director Team",
    desc: "Contribute to strategic direction and organizational growth as part of our Director Team.",
    href: "/get-involved/director-team",
    image: "/images/Involved/director.png",
    tone: "amber",
    icon: USERS,
  },
  {
    title: "Executive Team",
    desc: "Be part of our executive team and support programme management and decision-making.",
    href: "/get-involved/executive-team",
    image: "/images/Involved/executive.png",
    tone: "emerald",
    icon: USERS,
  },
  {
    title: "Project Team",
    desc: "Join our project team and support the planning and implementation of public health initiatives.",
    href: "/get-involved/project-team",
    image: "/images/Involved/team.png",
    tone: "blue",
    icon: USERS,
  },
  {
    title: "Become a Researcher",
    desc: "Contribute to research projects, data collection and academic collaborations.",
    href: "/get-involved/researcher",
    image: "/images/Involved/researcher.png",
    tone: "purple",
    icon: FLASK,
  },
  {
    title: "Join a Training",
    desc: "Build your knowledge and skills through training programmes and capacity-building sessions.",
    href: "/get-involved/training",
    image: "/images/Involved/training.png",
    tone: "rose",
    icon: BOOK,
  },
  {
    title: "Join as an Intern",
    desc: "Gain practical experience through our internship opportunities.",
    href: "/get-involved/intern",
    image: "/images/Involved/intern.png",
    tone: "emerald",
    icon: BRIEFCASE,
  },
  {
    title: "Join as a Trainee",
    desc: "Be part of our structured traineeship programmes and skill development opportunities.",
    href: "/get-involved/trainee",
    image: "/images/Involved/trainee.png",
    tone: "rose",
    icon: CHART,
  },
  {
    title: "Collaborate With Us",
    desc: "Partner with us on projects, programmes or initiatives.",
    href: "/get-involved/collaborate",
    image: "/images/BusinessHub/Mentorship.png",
    tone: "amber",
    icon: USERS,
  },
  {
    title: "Become a Donor",
    desc: "Support our mission through financial contributions.",
    href: "/get-involved/donor",
    image: "/images/BusinessHub/opportunity.png",
    tone: "emerald",
    icon: HEART,
  },
  {
    title: "Become a Funder",
    desc: "Support our programmes and long-term initiatives through funding partnerships.",
    href: "/get-involved/funder",
    image: "/images/BusinessHub/future.png",
    tone: "purple",
    icon: GIFT,
  },
  {
    title: "Join the Technology Team",
    desc: "Contribute to our digital solutions, software development and technology initiatives.",
    href: "/get-involved/technology-team",
    image: "/images/BusinessHub/technology.png",
    tone: "blue",
    icon: GEAR,
  },
  {
    title: "Join the Communications & Media Team",
    desc: "Support our media content, communications and storytelling efforts.",
    href: "/get-involved/communications-media-team",
    image: "/images/projects/communications.png",
    tone: "rose",
    icon: PLAY,
  },
  {
    title: "Join the Digital Marketing Team",
    desc: "Help with digital campaigns, content creation and online engagement.",
    href: "/get-involved/digital-marketing-team",
    image: "/images/Involved/digitalmarketing.png",
    tone: "emerald",
    icon: MEGAPHONE,
  },
  {
    title: "Join the Entrepreneur / Innovation Team",
    desc: "Contribute to the Business Hub and innovation initiatives.",
    href: "/get-involved/entrepreneur-innovation-team",
    image: "/images/Involved/innovation.png",
    tone: "amber",
    icon: BULB,
  },
  {
    title: "Partnership Opportunities",
    desc: "Explore institutional collaborations, MOUs and strategic partnerships.",
    href: "/get-involved/partnerships",
    image: "/images/Involved/partnership.png",
    tone: "blue",
    icon: USERS,
  },
];

/* ---------- Reusable helpers ---------- */

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

/* ---------- Opportunity card ---------- */

function OpportunityCard({ opportunity }) {
  const tone = tones[opportunity.tone] || tones.emerald;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,70,45,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${tone.hover}`}
    >
      {/* Accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${tone.bar}`} />

      {/* Image */}
      <div className={`relative h-40 overflow-hidden ${tone.img}`}>
        <img
          src={opportunity.image}
          alt={opportunity.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5">
        <span
          className={`-mt-7 relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white shadow-lg ${tone.badge}`}
        >
          <Icon d={opportunity.icon} className="h-6 w-6" />
        </span>

        <h3 className="mt-3 min-h-[2.75rem] font-serif text-lg font-extrabold leading-snug text-emerald-950">
          {opportunity.title}
        </h3>

        <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-600 line-clamp-3">
          {opportunity.desc}
        </p>

        <Link
          href={opportunity.href}
          aria-label={`Apply for ${opportunity.title}`}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ring-1 transition duration-300 ${tone.btn}`}
        >
          Apply Now
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

/* ---------- Main page ---------- */

export default function GetInvolved() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* Hero */}
      <header className="relative min-h-[360px] border-b border-emerald-900/5">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/projects/crossprogram.png"
            alt="Diverse group of people stacking their hands together in unity"
            className="h-full w-full object-cover object-center"
          />
          {/* Mobile: even light overlay for text readability */}
          <div className="absolute inset-0 bg-white/80 lg:hidden" />
          {/* Desktop: soft white fade on the left so the text stays readable, image visible edge to edge */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.85)_30%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_72%)] lg:block" />
          <div className="absolute inset-0 hidden bg-gradient-to-l from-emerald-950/45 via-transparent to-transparent lg:block" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600"
          >
            <Link href="/" className="transition hover:text-emerald-800">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-900">Get Involved</span>
          </nav>

          <div className="mt-8 max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              Hopefelt Foundation
            </span>

            <h1 className="mt-4 font-serif text-5xl font-black leading-[1.05] tracking-tight text-[#0d3749] sm:text-6xl lg:text-7xl">
              Get Involved
            </h1>

            <p className="mt-5 font-serif text-xl font-semibold text-[#1f4a2a] sm:text-2xl">
              There are many ways you can support Hopefelt Foundation.
            </p>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
              Share your time, skills, ideas or resources and be part of our
              mission to build healthier, stronger and more resilient
              communities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#opportunities"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                Explore Opportunities
                <span aria-hidden="true">↓</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-900/30 bg-white/80 px-6 py-3 text-sm font-bold text-emerald-950 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Tagline */}
          <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/20 bg-emerald-950/40 px-7 py-6 font-serif text-xl font-semibold leading-8 text-white shadow-xl backdrop-blur-sm xl:block">
            <p>People</p>
            <p>Knowledge</p>
            <p>Collaboration</p>
            <p>Action</p>
            <p>Healthier</p>
            <p>Communities</p>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-lime-300" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        {/* Opportunities */}
        <section className="pt-14" id="opportunities">
          <SectionTitle eyebrow="Opportunities">
            Ways to Get Involved
          </SectionTitle>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Choose the opportunity that matches your interests, skills and
            goals. Each option is linked to a dedicated form, so your enquiry
            reaches the right team.
          </p>

          {/* 1 col mobile · 2 col tablet · 4 col desktop */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.href}
                opportunity={opportunity}
              />
            ))}
          </div>
        </section>

        {/* General enquiry */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 px-8 py-10 shadow-xl shadow-emerald-900/10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
                Not Sure Where You Fit?
              </h2>
              <p className="mt-2 text-base leading-7 text-emerald-50/90">
                You can also send us a general enquiry and our team will guide
                you to the right opportunity.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-emerald-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-lime-100"
            >
              Send a General Enquiry
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}