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
const DOC =
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const MONITOR =
  "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";
const MEGAPHONE =
  "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z";
const BULB =
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
const STAR =
  "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z";
const PIN =
  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z";
const GLOBE =
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
const TAG =
  "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z";
const CAMERA =
  "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z";
const BUILDING =
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4";
const CAP =
  "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z";
const CUBE = "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4";
const TROPHY =
  "M8 21h8m-4-4v4m-5-18h10v6a5 5 0 01-10 0V3zm10 2h3a1 1 0 011 1v1a3 3 0 01-3 3M7 5H4a1 1 0 00-1 1v1a3 3 0 003 3";
const TARGET =
  "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z";
const CALENDAR =
  "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z";

/* ---------- Static content ---------- */

const objectives = [
  {
    title: "Raise Awareness",
    desc: "Promote public awareness on key health, social and environmental issues.",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: MEGAPHONE,
  },
  {
    title: "Build Knowledge",
    desc: "Share learning and practical skills through expert-led sessions.",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    icon: BOOK,
  },
  {
    title: "Strengthen Collaboration",
    desc: "Bring together communities, partners, professionals and stakeholders.",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: USERS,
  },
  {
    title: "Showcase Innovation",
    desc: "Highlight new research, solutions, technologies and community initiatives.",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-600",
    icon: BULB,
  },
  {
    title: "Mobilize Support",
    desc: "Create opportunities for resource mobilization, partnerships and volunteer engagement.",
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    icon: CHART,
  },
  {
    title: "Create Opportunities",
    desc: "Provide platforms for youth, professionals and communities to connect, learn and contribute.",
    bg: "from-green-50",
    wrap: "bg-green-100 text-green-700",
    icon: STAR,
  },
];

const upcoming = [
  {
    day: "18",
    month: "Oct",
    year: "2026",
    title: "Community Health Fair",
    image: "/images/events/community-health-fair.jpg",
    badge: "Community Event",
    badgeIcon: MEGAPHONE,
    badgeColor: "text-emerald-800",
    metaIcon: PIN,
    place: "Karachi, PK",
    typeIcon: USERS,
    type: "Community Events",
    desc: "Free health checkups, awareness sessions and community engagement activities.",
    href: "/events/community-health-fair",
    btn: "bg-[#1f4a2a] hover:bg-emerald-900",
  },
  {
    day: "25",
    month: "Oct",
    year: "2026",
    title: "Digital Health Tools Webinar",
    image: "/images/events/digital-health-webinar.jpg",
    badge: "Webinar",
    badgeIcon: MONITOR,
    badgeColor: "text-rose-500",
    metaIcon: GLOBE,
    place: "Online",
    typeIcon: MONITOR,
    type: "Webinars",
    desc: "Learn about digital tools for better health management and community care.",
    href: "/events/digital-health-webinar",
    btn: "bg-[#1f4a2a] hover:bg-emerald-900",
  },
  {
    day: "14–15",
    month: "Nov",
    year: "2026",
    title: "Annual Partners Conference",
    image: "/images/events/partners-conference.jpg",
    badge: "Conference",
    badgeIcon: USERS,
    badgeColor: "text-sky-600",
    metaIcon: PIN,
    place: "Lahore, PK",
    typeIcon: USERS,
    type: "Conferences",
    desc: "Bringing together partners, researchers and program leads for collaboration and future opportunities.",
    href: "/events/annual-partners-conference",
    btn: "bg-[#1f4a2a] hover:bg-emerald-900",
  },
];

const eventTypes = [
  {
    title: "Conferences",
    desc: "Larger gatherings bringing together partners, researchers and program leads.",
    href: "/events/conferences",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    icon: USERS,
  },
  {
    title: "Webinars",
    desc: "Online sessions for supporters, partners and volunteers.",
    href: "/events/webinars",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: MONITOR,
  },
  {
    title: "Community Events",
    desc: "Local, in-person gatherings from campaign kickoffs to celebration days.",
    href: "/events/community-events",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-600",
    icon: USERS,
  },
  {
    title: "Awareness Events",
    desc: "Events focused on public awareness and education.",
    href: "/events/awareness-events",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: MEGAPHONE,
  },
  {
    title: "Fundraising Events",
    desc: "Events to support programmes, emergencies and community initiatives.",
    href: "/events/fundraising-events",
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-600",
    icon: HEART,
  },
  {
    title: "Organizational Events",
    desc: "Internal and external events for organizational development, networking and engagement.",
    href: "/events/organizational-events",
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    icon: BUILDING,
  },
  {
    title: "Workshops",
    desc: "Hands-on training and skill-building sessions.",
    href: "/events/workshops",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: CAP,
  },
  {
    title: "Campaign Events",
    desc: "Events organized as part of specific campaigns and initiatives.",
    href: "/events/campaign-events",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: TARGET,
  },
  {
    title: "Media Events",
    desc: "Press briefings, media launches and media engagement events.",
    href: "/events/media-events",
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    icon: CAMERA,
  },
  {
    title: "Research Events",
    desc: "Research presentations, seminars and academic events.",
    href: "/events/research-events",
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    icon: DOC,
  },
  {
    title: "Research Competitions",
    desc: "Competitions to encourage research and innovative ideas.",
    href: "/events/research-competitions",
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    icon: TROPHY,
  },
  {
    title: "Entrepreneurship & Innovation Events",
    desc: "Pitch nights, innovation challenges and startup showcases.",
    href: "/events/entrepreneurship-innovation",
    bg: "from-green-50",
    wrap: "bg-green-100 text-green-700",
    icon: BULB,
  },
  {
    title: "Product / Technology Launch Events",
    desc: "Launch events for new software products and technology pilots.",
    href: "/events/product-technology-launch",
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-700",
    icon: CUBE,
  },
];

const cta = [
  {
    title: "Attend an Event",
    desc: "Join our upcoming events.",
    href: "/events/upcoming",
    wrap: "bg-emerald-100 text-emerald-800",
    icon: USERS,
  },
  {
    title: "Partner With Us",
    desc: "Collaborate for greater impact.",
    href: "/get-involved/partner",
    wrap: "bg-sky-100 text-sky-600",
    icon: USERS,
  },
  {
    title: "Support Our Events",
    desc: "Help us organize meaningful events.",
    href: "/get-involved/support",
    wrap: "bg-rose-100 text-rose-500",
    icon: HEART,
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

/* ---------- Page ---------- */

export default function Events() {
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
            src="/images/events/hero.jpg"
            alt="Speaker presenting to an engaged audience at a community event"
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
            <span className="text-slate-800">Events</span>
          </nav>

          <div className="mt-6 max-w-2xl">
            <h1 className="font-serif text-6xl font-black leading-[1.05] tracking-tight text-[#1f3a8a] sm:text-7xl">
              Events
            </h1>

            <p className="mt-4 font-serif text-xl text-[#0d3749] sm:text-2xl">
              Connecting people, ideas and action
              <br />
              for healthier, stronger communities.
            </p>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-emerald-700" />

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              From conferences and workshops to webinars and community
              outreach, our events bring together diverse voices to create
              awareness, share knowledge and drive meaningful change.
            </p>
          </div>

          {/* tagline */}
          <div className="pointer-events-none absolute right-12 top-10 hidden font-serif text-2xl font-semibold leading-8 text-white drop-shadow-md xl:block">
            <p>People</p>
            <p>Knowledge</p>
            <p>Collaboration</p>
            <p>Action</p>
            <p>Healthier</p>
            <p>Communities</p>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-lime-300" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[100rem] px-5 pb-12 sm:px-8 lg:px-12">
        {/* ============ OUR EVENT OBJECTIVES ============ */}
        <section className="pt-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <SectionTitle>Our Event Objectives</SectionTitle>
            <p className="max-w-xl text-xs text-slate-600">
              Our events are designed to inform, engage and create meaningful
              opportunities for action.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {objectives.map((o) => (
              <article
                key={o.title}
                className={`group flex flex-col items-center rounded-2xl border border-emerald-900/5 bg-gradient-to-b ${o.bg} to-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${o.wrap}`}
                >
                  <Icon d={o.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-3 font-serif text-base font-extrabold leading-5 text-emerald-950">
                  {o.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {o.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ UPCOMING EVENTS ============ */}
        <section className="mt-12">
          <div className="flex items-center justify-between gap-3">
            <SectionTitle>Upcoming Events</SectionTitle>
            <Link
              href="/events/upcoming"
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-800"
            >
              View All Upcoming Events <span>→</span>
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e) => (
              <article
                key={e.title}
                className="group overflow-hidden rounded-2xl border border-emerald-900/5 bg-white shadow-[0_10px_40px_rgba(15,70,45,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold ${e.badgeColor}`}
                  >
                    <Icon d={e.badgeIcon} className="h-4 w-4" />
                    {e.badge}
                  </span>
                </div>

                <div className="flex">
                  <div className="flex w-20 shrink-0 flex-col items-center border-r border-emerald-900/10 px-2 py-4 text-center">
                    <span className="text-2xl font-black leading-none text-[#1f4a2a]">
                      {e.day}
                    </span>
                    <span className="mt-1 text-xs font-bold text-slate-700">
                      {e.month}
                    </span>
                    <span className="text-xs text-slate-600">{e.year}</span>
                  </div>

                  <div className="min-w-0 flex-1 p-4">
                    <h3 className="text-sm font-extrabold text-emerald-950">
                      {e.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Icon d={e.metaIcon} className="h-3.5 w-3.5" />
                        {e.place}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Icon d={e.typeIcon} className="h-3.5 w-3.5" />
                        {e.type}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {e.desc}
                    </p>
                    <Link
                      href={e.href}
                      className={`mt-3 inline-flex items-center rounded-full px-5 py-2 text-xs font-bold text-white transition duration-300 ${e.btn}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ EXPLORE EVENTS ============ */}
        <section className="mt-12">
          <SectionTitle>Explore Events</SectionTitle>
          <p className="mt-2 text-sm text-slate-600">
            Browse all event types to find the right opportunity for you.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className={`group flex items-center gap-4 rounded-2xl border border-emerald-900/5 bg-gradient-to-r ${t.bg} to-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${t.wrap}`}
                >
                  <Icon d={t.icon} className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm font-extrabold leading-5 text-emerald-950">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-xs leading-4 text-slate-600">
                    {t.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ============ BE A PART OF OUR EVENTS ============ */}
        <section className="relative mt-12 overflow-hidden rounded-2xl bg-[#0f4a33] px-6 py-8 text-white shadow-lg sm:px-10">
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-serif text-2xl font-extrabold sm:text-3xl">
                Be a Part of Our Events
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-emerald-50/90">
                Join us, partner with us, or support our events to build
                healthier, stronger and more resilient communities.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {cta.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group flex items-center gap-3 rounded-xl bg-white p-3 text-slate-800 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${c.wrap}`}
                  >
                    <Icon d={c.icon} className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-extrabold leading-4 text-emerald-950">
                      {c.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                      {c.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}