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
const FLASK = "M9 3h6m-5 0v6l-5 9a2 2 0 001.8 3h10.4a2 2 0 001.8-3l-5-9V3";
const GIFT =
  "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7";
const PLAY =
  "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z";

/* ---------- Color tones (full class strings so Tailwind can detect them) ---------- */

const tones = {
  emerald: {
    bg: "from-emerald-50",
    wrap: "bg-emerald-100 text-emerald-700",
    btn: "bg-emerald-100/80 text-emerald-800 hover:bg-emerald-200",
  },
  sky: {
    bg: "from-sky-50",
    wrap: "bg-sky-100 text-sky-600",
    btn: "bg-sky-100/80 text-sky-700 hover:bg-sky-200",
  },
  rose: {
    bg: "from-rose-50",
    wrap: "bg-rose-100 text-rose-500",
    btn: "bg-rose-100/80 text-rose-600 hover:bg-rose-200",
  },
  purple: {
    bg: "from-purple-50",
    wrap: "bg-purple-100 text-purple-700",
    btn: "bg-purple-100/80 text-purple-700 hover:bg-purple-200",
  },
  amber: {
    bg: "from-amber-50",
    wrap: "bg-amber-100 text-amber-600",
    btn: "bg-amber-100/80 text-amber-700 hover:bg-amber-200",
  },
  blue: {
    bg: "from-blue-50",
    wrap: "bg-blue-100 text-blue-700",
    btn: "bg-blue-100/80 text-blue-700 hover:bg-blue-200",
  },
};

/* ---------- Static content ---------- */

const opportunities = [
  {
    title: "Official Volunteer",
    desc: "Contribute your time and skills to support our programmes, community activities and events.",
    href: "/get-involved/volunteer",
    image: "/images/get-involved/volunteer.jpg",
    tone: "emerald",
    icon: USERS,
  },
  {
    title: "Official Member",
    desc: "Become an official member and be part of our growing network.",
    href: "/get-involved/member",
    image: "/images/get-involved/member.jpg",
    tone: "sky",
    icon: USER,
  },
  {
    title: "Become a Campaigner",
    desc: "Support awareness campaigns and help us amplify our message in communities.",
    href: "/get-involved/campaigner",
    image: "/images/get-involved/campaigner.jpg",
    tone: "rose",
    icon: MEGAPHONE,
  },
  {
    title: "Campaign Coordinator",
    desc: "Help plan, coordinate and implement campaigns and outreach activities.",
    href: "/get-involved/campaign-coordinator",
    image: "/images/get-involved/campaign-coordinator.jpg",
    tone: "purple",
    icon: GEAR,
  },
  {
    title: "Campus Representative",
    desc: "Be a Hopefelt representative at your school, college or university.",
    href: "/get-involved/campus-representative",
    image: "/images/get-involved/campus-representative.jpg",
    tone: "sky",
    icon: CAP,
  },
  {
    title: "Director Team",
    desc: "Contribute to strategic direction and organizational growth as part of our Director Team.",
    href: "/get-involved/director-team",
    image: "/images/get-involved/director-team.jpg",
    tone: "amber",
    icon: USERS,
  },
  {
    title: "Executive Team",
    desc: "Be part of our executive team and support programme management and decision-making.",
    href: "/get-involved/executive-team",
    image: "/images/get-involved/executive-team.jpg",
    tone: "emerald",
    icon: USERS,
  },
  {
    title: "Project Team",
    desc: "Join our project team and support the planning and implementation of public health initiatives.",
    href: "/get-involved/project-team",
    image: "/images/get-involved/project-team.jpg",
    tone: "blue",
    icon: USERS,
  },
  {
    title: "Become a Researcher",
    desc: "Contribute to research projects, data collection and academic collaborations.",
    href: "/get-involved/researcher",
    image: "/images/get-involved/researcher.jpg",
    tone: "purple",
    icon: FLASK,
  },
  {
    title: "Join a Training",
    desc: "Build your knowledge and skills through training programmes and capacity-building sessions.",
    href: "/get-involved/training",
    image: "/images/get-involved/training.jpg",
    tone: "rose",
    icon: BOOK,
  },
  {
    title: "Join as an Intern",
    desc: "Gain practical experience through our internship opportunities.",
    href: "/get-involved/intern",
    image: "/images/get-involved/intern.jpg",
    tone: "emerald",
    icon: BRIEFCASE,
  },
  {
    title: "Join as a Trainee",
    desc: "Be part of our structured traineeship programmes and skill development opportunities.",
    href: "/get-involved/trainee",
    image: "/images/get-involved/trainee.jpg",
    tone: "rose",
    icon: CHART,
  },
  {
    title: "Collaborate With Us",
    desc: "Partner with us on projects, programmes or initiatives.",
    href: "/get-involved/collaborate",
    image: "/images/get-involved/collaborate.jpg",
    tone: "amber",
    icon: USERS,
  },
  {
    title: "Become a Donor",
    desc: "Support our mission through financial contributions.",
    href: "/get-involved/donor",
    image: "/images/get-involved/donor.jpg",
    tone: "emerald",
    icon: HEART,
  },
  {
    title: "Become a Funder",
    desc: "Support our programmes and long-term initiatives through funding partnerships.",
    href: "/get-involved/funder",
    image: "/images/get-involved/funder.jpg",
    tone: "purple",
    icon: GIFT,
  },
  {
    title: "Join the Technology Team",
    desc: "Contribute to our digital solutions, software development and technology initiatives.",
    href: "/get-involved/technology-team",
    image: "/images/get-involved/technology-team.jpg",
    tone: "blue",
    icon: GEAR,
  },
  {
    title: "Join the Communications & Media Team",
    desc: "Support our media content, communications and storytelling efforts.",
    href: "/get-involved/communications-media-team",
    image: "/images/get-involved/communications-media.jpg",
    tone: "rose",
    icon: PLAY,
  },
  {
    title: "Join the Digital Marketing Team",
    desc: "Help with digital campaigns, content creation and online engagement.",
    href: "/get-involved/digital-marketing-team",
    image: "/images/get-involved/digital-marketing.jpg",
    tone: "emerald",
    icon: MEGAPHONE,
  },
  {
    title: "Join the Entrepreneur / Innovation Team",
    desc: "Contribute to the Business Hub and innovation initiatives.",
    href: "/get-involved/entrepreneur-innovation-team",
    image: "/images/get-involved/entrepreneur-innovation.jpg",
    tone: "amber",
    icon: BULB,
  },
  {
    title: "Partnership Opportunities",
    desc: "Explore institutional collaborations, MOUs and strategic partnerships.",
    href: "/get-involved/partnerships",
    image: "/images/get-involved/partnerships.jpg",
    tone: "blue",
    icon: USERS,
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

export default function GetInvolved() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[55%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      {/* ============ HERO ============ */}
      <header className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[70%]">
          <img
            src="/images/get-involved/hero.jpg"
            alt="Diverse group of people stacking their hands together in unity"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:via-white/40" />
        </div>

        <div className="relative mx-auto max-w-[100rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-slate-600"
          >
            <Link href="/" className="hover:text-emerald-800">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Get Involved</span>
          </nav>

          <div className="mt-6 max-w-2xl">
            <h1 className="font-serif text-6xl font-black leading-[1.05] tracking-tight text-[#0d3749] sm:text-7xl">
              Get Involved
            </h1>

            <p className="mt-4 font-serif text-xl font-semibold text-[#1f4a2a] sm:text-2xl">
              There are many ways you can support Hopefelt Foundation.
            </p>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
              Share your time, skills, ideas or resources and be part of our
              mission to build healthier, stronger and more resilient
              communities.
            </p>
          </div>

          {/* tagline */}
          <div className="pointer-events-none absolute right-12 top-10 hidden font-serif text-xl font-semibold leading-7 text-white drop-shadow-md xl:block">
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
        {/* ============ WAYS TO GET INVOLVED ============ */}
        <section className="pt-8">
          <SectionTitle>Ways to Get Involved</SectionTitle>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            Choose the opportunity that matches your interests, skills and
            goals. Each option is linked to a dedicated form, so your enquiry
            reaches the right team.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {opportunities.map((o) => {
              const t = tones[o.tone];
              return (
                <article
                  key={o.title}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-emerald-900/5 bg-gradient-to-b ${t.bg} to-white shadow-[0_10px_40px_rgba(15,70,45,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  {/* photo */}
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={o.image}
                      alt={o.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-4">
                    {/* overlapping icon */}
                    <span
                      className={`-mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white shadow-md ${t.wrap}`}
                    >
                      <Icon d={o.icon} className="h-6 w-6" />
                    </span>

                    <h3 className="mt-2 font-serif text-[15px] font-extrabold leading-5 text-emerald-950">
                      {o.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600">
                      {o.desc}
                    </p>

                    <Link
                      href={o.href}
                      className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition duration-300 ${t.btn}`}
                      style={{ marginTop: "auto" }}
                    >
                      Apply Now
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ============ NOT SURE WHERE YOU FIT ============ */}
        <section className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-sky-900/5 bg-gradient-to-r from-sky-50 to-white px-6 py-5 sm:flex-row sm:items-center">
          <div>
            <SectionTitle>Not Sure Where You Fit?</SectionTitle>
            <p className="mt-1.5 text-sm text-slate-600">
              You can also send us a general enquiry and our team will guide
              you to the right opportunity.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-900/50 bg-white px-7 py-3 text-sm font-bold text-emerald-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Send a General Enquiry <span>→</span>
          </Link>
        </section>
      </div>
    </section>
  );
}