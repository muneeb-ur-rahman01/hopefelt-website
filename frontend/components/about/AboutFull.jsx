import Link from "next/link";
import {
  aboutHeaderData,
  roadmapTimeline,
  founderVision,
  coFounderVision,
} from "@/data/about";

/* ---------- Static content ---------- */

const ICONS = {
  heart:
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  heartPulse:
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0zM7 12h2.5l1.5-2.5 2 5 1.5-2.5H17",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  cap: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  monitor:
    "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  trend: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  people:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  bulb: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  chart:
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  flask: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M8 15h8",
  leaf: "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8",
  search: "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z",
  gear: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  check: "M5 13l4 4L19 7",
};

const pillars = [
  {
    title: "Public Health & Community Well-being",
    desc: "Promoting healthier and more resilient communities.",
    icon: ICONS.heart,
    color: "#6cc04a",
    iconBg: "bg-[#6cc04a]",
    height: "lg:min-h-[190px]",
  },
  {
    title: "Research & Evidence-based Action",
    desc: "Generating knowledge to drive real-world solutions.",
    icon: ICONS.book,
    color: "#2bb394",
    iconBg: "bg-[#0f6b73]",
    height: "lg:min-h-[215px]",
  },
  {
    title: "Education & Youth Empowerment",
    desc: "Building skills, awareness and opportunities for the future.",
    icon: ICONS.cap,
    color: "#58b947",
    iconBg: "bg-[#3aa35a]",
    height: "lg:min-h-[240px]",
  },
  {
    title: "Technology & Digital Innovation",
    desc: "Leveraging technology and AI for greater social impact.",
    icon: ICONS.monitor,
    color: "#1f9e8a",
    iconBg: "bg-[#0f6b73]",
    height: "lg:min-h-[265px]",
  },
  {
    title: "Entrepreneurship & Economic Opportunity",
    desc: "Creating pathways for sustainable growth and self-reliance.",
    icon: ICONS.trend,
    color: "#7cc22d",
    iconBg: "bg-[#4aa83a]",
    height: "lg:min-h-[290px]",
  },
  {
    title: "Partnerships & Sustainable Development",
    desc: "Collaborating for broader, long-lasting change.",
    icon: ICONS.people,
    color: "#0f5f73",
    iconBg: "bg-[#0f5f73]",
    height: "lg:min-h-[320px]",
  },
];

/* dashed-path points for the staircase (lg only) */
const stairPoints = [170, 145, 120, 95, 70, 40];

const impactSteps = [
  { label: "Research & Analysis", icon: ICONS.search },
  { label: "Community Engagement", icon: ICONS.people },
  { label: "Education & Training", icon: ICONS.book },
  { label: "Digital Innovation", icon: ICONS.bulb },
  { label: "Implementation & Collaboration", icon: ICONS.gear },
  { label: "Monitoring & Evaluation", icon: ICONS.chart },
  { label: "Sustainable Impact", icon: ICONS.leaf },
].slice(0, 6);

const collabPoints = [
  "Academic Collaborations",
  "Community Partnerships",
  "Institutional Support",
];

/* "At Hopefelt, We Work for" bar */
const workFor = [
  { label: "Better\nHealth", icon: ICONS.heartPulse },
  { label: "Inclusive\nEducation", icon: ICONS.book },
  { label: "Innovation &\nResearch", icon: ICONS.flask },
  { label: "Empowered\nCommunities", icon: ICONS.people },
  { label: "Sustainable\nImpact", icon: ICONS.leaf },
];

/* Ambition curve: left/top are % positions of the dot on the curve */
const ambitionSteps = [
  {
    title: "Today",
    sub: "Stronger Communities",
    left: 20,
    top: 60,
    circle: "bg-[#0d4a5e]",
    pill: "bg-[#0d4a5e] text-white",
    icon: ICONS.people,
  },
  {
    title: "Innovation",
    sub: "Sustainable Solutions",
    left: 50,
    top: 54,
    circle: "bg-[#5cb82a]",
    pill: "bg-[#5cb82a] text-white",
    icon: ICONS.bulb,
  },
  {
    title: "Tomorrow",
    sub: "Brighter, Healthier Futures",
    left: 80,
    top: 30,
    circle: "bg-[#0d4a5e]",
    pill: "bg-[#0d4a5e] text-white",
    icon: ICONS.chart,
  },
];

/* SDG goals scattered around the wheel (x/y/w are % of the stage on desktop) */
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

function SectionTitle({ eyebrow, children }) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight text-[#0d3749] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function Underline({ center = false }) {
  return (
    <div
      className={`mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-700 to-lime-400 ${
        center ? "mx-auto" : ""
      }`}
    />
  );
}

const card =
  "rounded-3xl border border-emerald-900/5 bg-white shadow-[0_10px_40px_rgba(15,70,45,0.06)]";

/* ---------- Page ---------- */

export default function AboutFull() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f4faf6] via-white to-[#f4faf6] text-slate-800">
      <style>{`
        .dot-grid {
          background-image: radial-gradient(rgba(31,74,42,.14) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        @keyframes sdg-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        .sdg-float {
          animation-name: sdg-float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sdg-float { animation: none; }
        }
      `}</style>

      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-[100rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        {/* ============ 01 — HERO ============ */}
        <header className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-block rounded-full bg-[#2e7d1e] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Better Communities. Brighter Futures.
            </span>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-[#0d2b45] sm:text-6xl lg:text-7xl">
              ABOUT US
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-700">
              {aboutHeaderData.description}
            </p>

            {/* badges */}
            <div className="mt-8 flex flex-wrap items-center gap-y-4 text-sm font-bold text-[#0d2b45]">
              <div className="flex items-center gap-2 pr-5">
                <Icon d={ICONS.people} className="h-7 w-7 text-[#4aa83a]" />
                Youth Led
              </div>
              <div className="flex items-center gap-2 border-l border-slate-300 px-5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-[#4aa83a]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12l4-4 4 1 3-2 4 3 5-1M2 12l5 6 3-1 2 2 3-2 3 1 4-6M9 14l2 2M12 12l2 2" />
                </svg>
                Community Driven
              </div>
              <div className="flex items-center gap-2 border-l border-slate-300 pl-5">
                <Icon d={ICONS.leaf} className="h-7 w-7 text-[#4aa83a]" />
                Impact Focused
              </div>
            </div>
          </div>

          {/* Team photo with curved frame */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 bottom-3 right-0 rounded-l-[9rem] rounded-r-3xl border-l-[6px] border-t-[6px] border-[#6cc04a]/80" />
            <div className="relative overflow-hidden rounded-l-[9rem] rounded-r-3xl shadow-xl">
              <img
                src={aboutHeaderData.image || "/images/hero/about.png"}
                alt="Hopefelt Foundation team"
                className="h-[260px] w-full object-cover sm:h-[330px] lg:h-[355px]"
              />
            </div>
          </div>
        </header>

        {/* ============ 02 — VISION & MISSION ============ */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <article className="relative flex items-center gap-6 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#e3f3d8] via-[#f1f9ec] to-white p-7 sm:p-9 md:rounded-tr-[4rem] md:rounded-bl-[4rem]">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-72 rounded-full bg-[#b9e08f]/50 blur-xl" />
            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-8 ring-white/70 sm:h-36 sm:w-36">
              <svg viewBox="0 0 64 64" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
                <path d="M4 56L26 20l10 16 8-12 16 32H4z" fill="#3f9a3f" />
                <path d="M26 20l-9 15 9 6 10-5-10-16z" fill="#6cc04a" />
                <path d="M26 20V4" stroke="#2e7d1e" strokeWidth="3" strokeLinecap="round" />
                <path d="M26 4l14 4-14 5z" fill="#2e7d1e" />
              </svg>
            </div>
            <div className="relative">
              <h2 className="text-3xl font-black text-[#0d2b45] sm:text-4xl">
                OUR <span className="text-[#2e7d1e]">VISION</span>
              </h2>
              <p className="mt-3 text-lg font-medium leading-7 text-[#0d2b45]">
                A healthier, more informed and empowered society where every
                individual and community has the opportunity to thrive.
              </p>
            </div>
          </article>

          {/* Mission */}
          <article className="relative flex items-center gap-6 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#e6e1fa] via-[#f2effd] to-white p-7 sm:p-9 md:rounded-tl-[4rem] md:rounded-br-[4rem]">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-72 rounded-full bg-[#cbbff2]/50 blur-xl" />
            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-8 ring-white/70 sm:h-36 sm:w-36">
              <svg viewBox="0 0 64 64" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
                <circle cx="30" cy="36" r="22" stroke="#7a5fc4" strokeWidth="5" />
                <circle cx="30" cy="36" r="13" stroke="#5b3fa0" strokeWidth="5" />
                <circle cx="30" cy="36" r="4.5" fill="#5b3fa0" />
                <path d="M30 36L54 12" stroke="#3e2a80" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M54 12l1-8-6 5 5 3zM54 12l8-1-5 6-3-5z" fill="#3e2a80" />
              </svg>
            </div>
            <div className="relative">
              <h2 className="text-3xl font-black text-[#0d2b45] sm:text-4xl">
                OUR <span className="text-[#5b3fa0]">MISSION</span>
              </h2>
              <p className="mt-3 text-lg font-medium leading-7 text-[#0d2b45]">
                To drive positive change through research, innovation,
                collaboration and community-led initiatives that improve
                health, education and social well-being.
              </p>
            </div>
          </article>
        </section>

        {/* ============ FOUNDER & CO-FOUNDER VISION ============ */}
        <section className="mt-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {[founderVision, coFounderVision].map((leader, idx) => {
              const isFounder = idx === 0;
              return (
                <article
                  key={leader.name}
                  className={`rounded-3xl border p-5 shadow-[0_10px_40px_rgba(15,70,45,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${
                    isFounder
                      ? "border-emerald-900/5 bg-gradient-to-br from-[#eef7e8] to-white"
                      : "border-violet-900/5 bg-gradient-to-br from-[#efebfb] to-white"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      loading="lazy"
                      className="h-28 w-28 shrink-0 rounded-2xl object-cover sm:h-32 sm:w-36"
                    />
                    <div className="min-w-0">
                      <span
                        className={`inline-block rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white ${
                          isFounder ? "bg-[#2e7d1e]" : "bg-[#5b3fa0]"
                        }`}
                      >
                        {isFounder ? "Founder's Vision" : "Co-Founder's Vision"}
                      </span>
                      <h3 className="mt-2 text-2xl font-black uppercase text-[#0d2b45] sm:text-3xl">
                        {leader.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {leader.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-start gap-4">
                    <span
                      className={`font-serif text-6xl font-black leading-none ${
                        isFounder ? "text-[#4aa83a]" : "text-[#5b3fa0]"
                      }`}
                    >
                      “
                    </span>
                    <div>
                      <p className="text-[15px] italic leading-7 text-slate-700">
                        {leader.quote}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ============ AT HOPEFELT WE WORK FOR ============ */}
        <section className="mt-8 flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-white to-[#eef4fb] shadow-sm lg:flex-row lg:items-stretch">
          <div
            className="flex shrink-0 items-center bg-[#0d2b45] px-8 py-6 text-white lg:w-[22rem] lg:pr-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }}
          >
            <div>
              <p className="text-2xl font-extrabold leading-8">
                At Hopefelt,
                <br />
                We Work for:
              </p>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 items-center gap-y-6 px-4 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:py-4">
            {workFor.map((w, i) => (
              <div
                key={w.label}
                className={`flex flex-col items-center px-2 text-center ${
                  i > 0 ? "lg:border-l lg:border-slate-300" : ""
                }`}
              >
                <Icon d={w.icon} className="h-10 w-10 text-[#3f9a3f]" stroke={1.8} />
                <p className="mt-2 whitespace-pre-line text-sm font-extrabold leading-5 text-[#0d2b45]">
                  {w.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ OUR AMBITION ============ */}
        <section className="mt-16 grid items-center gap-8 rounded-[32px] border border-emerald-900/5 bg-white p-6 shadow-[0_10px_40px_rgba(15,70,45,0.06)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:border-r lg:border-slate-200 lg:pr-8">
            <h2 className="text-4xl font-black text-[#0d3749] sm:text-5xl">
              OUR <span className="text-[#5cb82a]">AMBITION</span>
            </h2>

            <h3 className="mt-6 text-lg font-extrabold italic text-[#0d3749]">
              Building a Healthier, Smarter and More Inclusive Future
            </h3>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-700">
              To drive lasting, measurable change by empowering communities
              through innovation, digital solutions, research and collaborative
              action, while creating opportunities for the next generation.
            </p>
          </div>

          {/* Today -> Innovation -> Tomorrow */}
          <div className="relative mx-auto h-72 w-full max-w-xl">
            <svg
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <defs>
                <linearGradient id="ambFade" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#1f9d55" stopOpacity="0.15" />
                  <stop offset="1" stopColor="#1f9d55" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M0 160 C 40 135, 60 122, 80 120 C 130 114, 160 110, 200 108 C 250 105, 290 80, 320 60 C 340 47, 360 35, 385 22"
                stroke="url(#ambFade)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M372 20 L387 20 L384 35"
                stroke="#1f9d55"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {ambitionSteps.map((step) => (
              <div
                key={step.title}
                className="absolute flex w-36 -translate-x-1/2 flex-col items-center text-center"
                style={{
                  left: `${step.left}%`,
                  top: `calc(${step.top}% - 5.375rem)`,
                }}
              >
                <span
                  className={`${step.circle} flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white`}
                >
                  <Icon d={step.icon} className="h-7 w-7" />
                </span>
                <span className="mt-4 block h-3 w-3 rounded-full border-2 border-[#1f9d55] bg-white" />
                <span
                  className={`${step.pill} mt-3 rounded-full px-4 py-1 text-sm font-extrabold`}
                >
                  {step.title}
                </span>
                <p className="mt-1 text-sm leading-5 text-slate-700">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 03 — STRATEGIC PILLARS (staircase) ============ */}
        <section className="mt-16">
          <h2 className="text-3xl font-black text-[#0d3749] sm:text-4xl">
            OUR STRATEGIC <span className="text-[#5cb82a]">PILLARS</span>
          </h2>
          <p className="mt-2 text-sm text-slate-700 italic">
            We work across interconnected areas to create holistic and
            sustainable impact.
          </p>

          <div className="relative mt-8 lg:h-[440px]">
            {/* dashed path + markers (desktop only) */}
            <svg
              viewBox="0 0 600 440"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              fill="none"
            >
              <path
                d={`M50 ${stairPoints[0]} ${stairPoints
                  .map((y, i) => `L${50 + i * 100} ${y}`)
                  .join(" ")} L560 ${stairPoints[5] - 6}`}
                stroke="#4aa83a"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {stairPoints.map((y, i) => (
              <span
                key={i}
                className="pointer-events-none absolute hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#4aa83a] bg-white lg:block"
                style={{ left: `${((i + 0.5) / 6) * 100}%`, top: `${y}px` }}
              />
            ))}

            {/* walking person above step 04 */}
            <svg
              viewBox="0 0 40 56"
              className="pointer-events-none absolute hidden h-14 w-10 -translate-x-1/2 text-[#0d3749] lg:block"
              style={{ left: `${(3.5 / 6) * 100}%`, top: "58px" }}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* head */}
              <circle cx="22" cy="7" r="5" fill="currentColor" stroke="none" />

              {/* torso (slightly leaning forward) */}
              <path d="M21 14 L18 31" strokeWidth="6" />

              {/* back arm (swinging back) */}
              <path d="M21 16 L14 24 L9 30" strokeWidth="3.2" />
              <circle cx="8" cy="31.5" r="2" fill="currentColor" stroke="none" />

              {/* front arm (swinging forward) */}
              <path d="M22 16 L29 22 L34 20" strokeWidth="3.2" />
              <circle cx="35.5" cy="19.5" r="2" fill="currentColor" stroke="none" />

              {/* back leg: thigh -> shin -> foot */}
              <path d="M18 31 L13 42 L8 51" strokeWidth="3.8" />
              <path d="M8 51 L3 53" strokeWidth="3.8" />

              {/* front leg: thigh -> shin -> foot */}
              <path d="M18 31 L26 40 L27 50" strokeWidth="3.8" />
              <path d="M27 50 L33 52" strokeWidth="3.8" />
            </svg>

            {/* flag above step 06 */}
            <svg
              viewBox="0 0 56 56"
              className="pointer-events-none absolute hidden h-14 w-14 -translate-x-1/2 lg:block"
              style={{ left: `${(5.5 / 6) * 100}%`, top: "14px" }}
              fill="none"
            >
              <path d="M16 54V6" stroke="#4aa83a" strokeWidth="3" strokeLinecap="round" />
              <path d="M16 6h26l-7 9 7 9H16z" fill="#6cc04a" />
              <path d="M44 4l4-3M48 12h5M44 20l4 3" stroke="#4aa83a" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* podiums */}
            <div className="grid gap-4 sm:grid-cols-2 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid-cols-6 lg:items-end lg:gap-3">
              {pillars.map((p, idx) => (
                <article key={p.title} className="flex flex-col">
                  {/* cap */}
                  <div
                    className="h-3 rounded-t-xl"
                    style={{ backgroundColor: p.color }}
                  />
                  {/* body */}
                  <div
                    className={`flex flex-1 flex-col items-center bg-white px-3 pb-4 pt-4 text-center shadow-[0_10px_30px_rgba(15,70,45,0.10)] ${p.height}`}
                  >
                    <span
                      className={`${p.iconBg} flex h-11 w-11 items-center justify-center rounded-full text-white`}
                    >
                      <Icon d={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-[13px] font-extrabold leading-4 text-[#0d3749]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-4 text-slate-600">
                      {p.desc}
                    </p>
                  </div>
                  {/* number */}
                  <div
                    className="flex h-10 items-center justify-center rounded-b-md text-xl font-black text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    0{idx + 1}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 05 — FUTURE VISION ============ */}
        <section className="mt-16 rounded-[32px] border border-emerald-900/5 bg-white p-6 shadow-[0_20px_60px_rgba(15,70,45,0.06)] sm:p-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#4a6741] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-white">
              Our journey ahead
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
              {roadmapTimeline.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 italic">
              {roadmapTimeline.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {roadmapTimeline.stages.map((stage, idx) => (
              <article
                key={stage.year}
                className="group relative rounded-2xl border border-emerald-900/10 bg-gradient-to-b from-emerald-50/40 to-white p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-emerald-800 px-2.5 py-1 text-[11px] font-extrabold text-white">
                    {stage.year}
                  </span>
                  <span className="text-2xl font-black text-emerald-900/10">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-extrabold text-emerald-950">
                  {stage.title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {stage.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-[11px] leading-5 text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-600" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* CTA banner */}
          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-700 px-6 py-10 text-center text-white">
            <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-emerald-300">
                Discover our purpose
              </span>
              <h3 className="mx-auto mt-3 max-w-2xl text-xl font-extrabold sm:text-2xl">
                Every step forward creates an opportunity for lasting impact.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-emerald-100/75 italic">
                Learn more about our story, our people and the mission that
                brings our community together.
              </p>

              <Link
                href="/about/who-we-are"
                className="group/cta mt-6 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-emerald-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-forest hover:text-white"
              >
                Explore Full About Details
                <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ HOW WE CREATE IMPACT ============ */}
        <section className="mt-16">
          <h2 className="text-3xl font-extrabold text-[#4a6741] sm:text-4xl">
            HOW WE CREATE <span className="text-[#4a6741]">IMPACT</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600 italic">
            Turning ideas into meaningful and measurable change.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:flex lg:items-start lg:justify-between lg:gap-2">
            {impactSteps.map((step) => (
              <div key={step.label} className="flex items-start lg:flex-1">
                <div className="group flex w-full flex-col items-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 shadow-[0_8px_24px_rgba(15,70,45,0.10)] ring-8 ring-white transition duration-300 group-hover:-translate-y-1 group-hover:bg-emerald-800 group-hover:text-white">
                    <Icon d={step.icon} className="h-8 w-8" />
                  </span>
                  <p className="mt-4 max-w-[8rem] text-xs font-extrabold leading-5 text-emerald-950">
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ STRATEGIC ALIGNMENT ============ */}
        <section className="mt-24">
          {/* left aligned: heading, then text below it */}
          <div className="flex flex-col gap-4">
            <SectionTitle eyebrow="Global goals">Strategic Alignment</SectionTitle>
            <p className="max-w-xl text-base leading-7 text-slate-600 italic">
              Our projects contribute to the following Sustainable Development Goals (SDGs).
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

        {/* ============ COLLABORATION & PARTNERSHIPS ============ */}
        <section className="mt-16 grid items-center gap-8 rounded-[32px] border border-emerald-900/5 bg-white p-6 shadow-[0_10px_40px_rgba(15,70,45,0.06)] sm:p-10 lg:grid-cols-[auto_1fr_auto]">
          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-100 via-emerald-50 to-lime-50 text-7xl shadow-inner">
            🤝
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#4a6741] sm:text-3xl">
              COLLABORATIONS &amp;{" "}
              <span className="text-[#4a6741]">PARTNERSHIPS</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              We believe in the power of collaboration. Hopefelt Foundation
              works with universities, research institutions, NGOs, community
              groups and other stakeholders to design and implement impactful
              initiatives that address real challenges and create new
              opportunities for a brighter future.
            </p>
          </div>

          <ul className="space-y-4 border-t border-emerald-900/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {collabPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm font-semibold text-slate-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
                  <Icon d={ICONS.check} className="h-3.5 w-3.5" stroke={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* ============ JOIN OUR MISSION ============ */}
        <section className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl bg-emerald-50/70 px-6 py-8 sm:px-10 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-extrabold text-[#4a6741] sm:text-3xl">
              JOIN OUR <span className="text-[#4a6741]">MISSION</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Be a part of a healthier, more informed and empowered tomorrow.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-involved/volunteer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900"
            >
              Become a Volunteer <span>→</span>
            </Link>
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-800/30 bg-white px-6 py-3 text-sm font-bold text-emerald-900 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:shadow-md"
            >
              Partner With Us <span>→</span>
            </Link>
            <Link
              href="/get-involved/support"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-800/30 bg-white px-6 py-3 text-sm font-bold text-emerald-900 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-700 hover:shadow-md"
            >
              Support Our Initiatives <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}