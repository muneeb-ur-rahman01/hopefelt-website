import Link from "next/link";
import {
  aboutHeaderData,
  roadmapTimeline,
  founderVision,
  coFounderVision,
} from "@/data/about";

/* ---------- Static content (matches the new design) ---------- */

const pillars = [
  {
    title: "Public Health & Community Well-being",
    desc: "Promoting healthier and more resilient communities.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Research & Evidence-based Action",
    desc: "Generating knowledge to drive real-world solutions.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Education & Youth Empowerment",
    desc: "Building skills, awareness and opportunities for the future.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  },
  {
    title: "Technology & Digital Innovation",
    desc: "Leveraging technology and AI for greater social impact.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Entrepreneurship & Economic Opportunity",
    desc: "Creating pathways for sustainable growth and self-reliance.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Partnerships & Sustainable Development",
    desc: "Collaborating for broader, long-lasting change.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const sdgs = [
  {
    num: 3,
    title: "Good Health and Well-being",
    desc: "Community health initiatives, awareness and preventive care.",
    color: "bg-[#4c9f38]",
    glyph: "♥",
  },
  {
    num: 4,
    title: "Quality Education",
    desc: "Knowledge sharing, training and youth development programs.",
    color: "bg-[#c5192d]",
    glyph: "📖",
  },
  {
    num: 9,
    title: "Industry, Innovation and Infrastructure",
    desc: "Technology-based solutions and innovative approaches for social impact.",
    color: "bg-[#f36d25]",
    glyph: "⬡",
  },
  {
    num: 10,
    title: "Reduced Inequalities",
    desc: "Inclusive programs for underserved communities.",
    color: "bg-[#e5176f]",
    glyph: "⇅",
  },
  {
    num: 15,
    title: "Life on Land",
    desc: "Environmental awareness and community-led plantation initiatives.",
    color: "bg-[#56a02f]",
    glyph: "🌳",
  },
  {
    num: 17,
    title: "Partnerships for the Goals",
    desc: "Building strong collaborations with institutions, NGOs and communities.",
    color: "bg-[#19486a]",
    glyph: "❂",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    bg: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]",
    path: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5.5-1.5h.01",
  },
  {
    label: "Facebook",
    href: "#",
    bg: "bg-[#1877f2]",
    path: "M14 8h2V5h-2.5C11.3 5 10 6.4 10 8.5V10H8v3h2v6h3v-6h2.2l.5-3H13V8.7c0-.4.2-.7 1-.7z",
  },
  {
    label: "WhatsApp",
    href: "#",
    bg: "bg-[#25d366]",
    path: "M3 21l1.6-4.7A8.5 8.5 0 1112 20.5a8.4 8.4 0 01-4.1-1.1L3 21zm6-12c0 3 3 6 6 6l1.2-1.5-2-1-1 .7c-.8-.3-1.9-1.4-2.2-2.2l.7-1-1-2L9 9z",
  },
  {
    label: "Email",
    href: "#",
    bg: "bg-[#e5453b]",
    path: "M3 6h18v12H3V6zm0 0l9 7 9-7",
  },
];

const impactSteps = [
  { label: "Research & Analysis", icon: "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" },
  { label: "Community Engagement", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "Education & Training", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { label: "Digital Innovation", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { label: "Implementation & Collaboration", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Monitoring & Evaluation", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Sustainable Impact", icon: "M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8" },
];

const collabPoints = [
  "Academic Collaborations",
  "Community Partnerships",
  "Institutional Support",
];

const ambitionSteps = [
  {
    title: "Today",
    sub: "Stronger Communities",
    pos: "left-0 top-[34%]",
    circle: "bg-[#0d3749]",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Innovation",
    sub: "Sustainable Solutions",
    pos: "left-[34%] top-[16%]",
    circle: "bg-lime-500",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Tomorrow",
    sub: "Brighter, Healthier Futures",
    pos: "left-[66%] top-0",
    circle: "bg-emerald-700",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2",
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
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-[100rem] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        {/* ============ 01 — HERO ============ */}
        <header className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-forest px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Better Communities.
              <span className="font-extrabold text-white">
                Brighter Futures.
              </span>
            </span>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-[#0d3749] sm:text-6xl lg:text-7xl">
              ABOUT US
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-700 to-lime-400" />

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              {aboutHeaderData.description}
            </p>
          </div>

          {/* Illustration */}
          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
            <div className="relative h-72 w-72 shrink-0 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full border border-emerald-200/70" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-emerald-50 to-white" />

              {/* plant */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <ellipse cx="100" cy="168" rx="46" ry="9" fill="#d9ecdf" />
                <path
                  d="M100 168V92"
                  stroke="#1f6b3a"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M100 120c-26 0-40-16-42-38 24-2 42 12 42 38z"
                  fill="#2f8f4e"
                />
                <path
                  d="M100 100c22-2 38-18 40-42-24 0-42 16-40 42z"
                  fill="#1f6b3a"
                />
                <path
                  d="M100 92c-6-20 0-38 16-50 6 20 0 40-16 50z"
                  fill="#44b36a"
                />
              </svg>

              {/* floating icons */}
              <span className="absolute -left-2 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-700 shadow-lg ring-1 ring-emerald-900/5">
                <Icon d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </span>
              <span className="absolute -right-2 top-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow-lg ring-1 ring-emerald-900/5">
                <Icon d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </span>
              <span className="absolute -left-6 bottom-16 flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow-lg ring-1 ring-emerald-900/5">
                <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </span>
            </div>

            <div className="ml-4 hidden text-2xl font-medium leading-snug text-[#0d6749] sm:block">
              <p>People</p>
              <p>Innovation</p>
              <p>Communities</p>
              <p className="font-extrabold text-emerald-700">Lasting Impact.</p>
            </div>
          </div>
        </header>

        {/* ============ 02 — VISION & MISSION ============ */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <article
            className={`${card} group flex items-center gap-6 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9`}
          >
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 text-emerald-700 sm:h-36 sm:w-36">
              <svg viewBox="0 0 64 64" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
                <path d="M6 54L26 20l10 16 8-12 14 30H6z" fill="#cfe6d8" stroke="#1f6b3a" strokeWidth="2" strokeLinejoin="round" />
                <path d="M26 20V6l12 4-12 4" fill="#1f6b3a" stroke="#1f6b3a" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#4a6741]">
                OUR <span className="text-[#4a6741]">VISION</span>
              </h2>
              <Underline />
              <p className="mt-4 text-sm leading-7 text-slate-600 italic">
                A healthier, more informed and empowered society where every
                individual has the opportunity to thrive.
              </p>
            </div>
          </article>

          {/* Mission */}
          <article
            className={`${card} group flex items-center gap-6 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9`}
          >
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50 sm:h-36 sm:w-36">
              <svg viewBox="0 0 64 64" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
                <circle cx="32" cy="34" r="22" stroke="#0d3749" strokeWidth="3" />
                <circle cx="32" cy="34" r="14" stroke="#0d3749" strokeWidth="3" />
                <circle cx="32" cy="34" r="5" fill="#0d3749" />
                <path d="M32 34L54 10M54 10v10M54 10H44" stroke="#1f6b3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#4a6741]">
                OUR <span className="text-[#4a6741]">MISSION</span>
              </h2>
              <Underline />
              <p className="mt-4 text-sm leading-7 text-slate-600 italic">
                To drive positive change through research, innovation,
                collaboration and community-led initiatives that improve health,
                education and social well-being.
              </p>
            </div>
          </article>
        </section>

        {/* ============ FOUNDER & CO-FOUNDER VISION ============ */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {[founderVision, coFounderVision].map((leader, idx) => (
              <article
                key={leader.name}
                className={`${card} group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#4a6741] blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-emerald-900/10 bg-forest  px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                      {idx === 0 ? "Founder's Vision" : "Co-Founder's Vision"}
                    </span>
                    <span className="text-4xl font-black text-emerald-900/10">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-lime-300 to-emerald-500 opacity-80" />
                      <img
                        src={leader.image}
                        alt={leader.name}
                        loading="lazy"
                        className="relative h-20 w-20 rounded-full border-2 border-white object-cover sm:h-24 sm:w-24"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-extrabold text-emerald-950 sm:text-2xl ">
                        {leader.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-500 italic">
                        {leader.title}
                      </p>
                      <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-emerald-700 to-lime-400" />
                    </div>
                  </div>

                  <blockquote className="mt-6 rounded-2xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-white p-6 text-sm leading-7 text-slate-700">
                    <span className="mb-1 block font-serif text-5xl leading-none text-emerald-300">
                      “
                    </span>
                    <span className="italic">{leader.quote}</span>
                  </blockquote>

                  <p className="mt-5 text-right text-sm font-bold text-emerald-800">
                    — {leader.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============ OUR AMBITION ============ */}
        <section className="mt-16 grid items-center gap-10 rounded-[32px] border border-emerald-900/5 bg-white p-6 shadow-[0_10px_40px_rgba(15,70,45,0.06)] sm:p-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold text-[#4a6741] sm:text-4xl">
              OUR <span className="text-[#4a6741]">AMBITION</span>
            </h2>
            <Underline />

            <h3 className="mt-6 text-base font-extrabold text-emerald-950 italic">
              Building a Healthier, Smarter and More Inclusive Future
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              We aim to create long-term, measurable impact by empowering
              communities through innovation, digital solutions, research and
              collaborative action while building opportunities for the next
              generation.
            </p>
          </div>

          {/* Today -> Innovation -> Tomorrow */}
          <div className="relative mx-auto h-64 w-full max-w-lg">
            <svg
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M10 170 C 120 165, 220 130, 380 28"
                stroke="#1f9d55"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M370 26 L384 22 L380 38"
                stroke="#1f9d55"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {ambitionSteps.map((step) => (
              <div
                key={step.title}
                className={`absolute ${step.pos} flex w-[34%] flex-col items-start`}
              >
                <span
                  className={`${step.circle} flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white sm:h-16 sm:w-16`}
                >
                  <Icon d={step.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <p className="mt-2 text-sm font-extrabold text-emerald-950">
                  {step.title}
                </p>
                <p className="text-xs leading-5 text-slate-500">{step.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 03 — STRATEGIC PILLARS ============ */}
        <section className="mt-16">
          <h2 className="text-3xl font-extrabold text-[#4a6741] sm:text-4xl">
            OUR STRATEGIC <span className="text-[#4a6741]">PILLARS</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600 italic">
            We work across interconnected areas to create holistic and
            sustainable impact.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {pillars.map((p) => (
              <article
                key={p.title}
                className={`${card} group flex flex-col items-center p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition duration-300 group-hover:bg-emerald-800 group-hover:text-white">
                  <Icon d={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-sm font-extrabold leading-5 text-emerald-950">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-slate-500">{p.desc}</p>
                {/* <span className="mt-auto h-0.5 w-8 rounded-full bg-emerald-600 pt-0 transition-all duration-300 group-hover:w-14" /> */}
              </article>
            ))}
          </div>
        </section>

        {/* ============ 04 — SDGs ============ */}
        <section className="mt-16 rounded-[32px] border border-emerald-900/5 bg-emerald-50/50 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-[#4a6741] sm:text-3xl">
                OUR COMMITMENT TO THE{" "}
                <span className="text-[#4a6741]">
                  SUSTAINABLE DEVELOPMENT GOALS(SDGs)
                </span>
              </h2>
              <p className="mt-2 text-sm text-slate-600 italic">
                Our work contributes to the following United Nations Sustainable
                Development Goals (SDGs)
              </p>
            </div>

            <a
              href="https://sdgs.un.org/goals"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-emerald-800/30 bg-white px-5 py-2.5 text-xs font-bold text-emerald-900 transition hover:bg-emerald-900 hover:text-white"
            >
              Learn More About SDGs <span>→</span>
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sdgs.map((g) => (
              <article
                key={g.num}
                className={`${card} group overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div
                  className={`${g.color} relative flex aspect-[4/3] items-center justify-center rounded-xl text-white`}
                >
                  <span className="absolute left-3 top-2 text-2xl font-black">
                    {g.num}
                  </span>
                  <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                    {g.glyph}
                  </span>
                </div>
                <h3 className="mt-3 text-xs font-extrabold leading-5 text-slate-900">
                  {g.title}
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  {g.desc}
                </p>
              </article>
            ))}
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
            <p className="mt-2 text-sm text-slate-600">
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
            {impactSteps.map((step, idx) => (
              <div key={step.label} className="flex items-start lg:flex-1">
                <div className="group flex w-full flex-col items-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 shadow-[0_8px_24px_rgba(15,70,45,0.10)] ring-8 ring-white transition duration-300 group-hover:-translate-y-1 group-hover:bg-emerald-800 group-hover:text-white">
                    <Icon d={step.icon} className="h-8 w-8" />
                  </span>
                  <p className="mt-4 max-w-[8rem] text-xs font-extrabold leading-5 text-emerald-950">
                    {step.label}
                  </p>
                </div>
{/* 
                {idx < impactSteps.length - 1 && (
                  <span className="mt-8 hidden text-sm font-bold text-emerald-600 lg:block">
                    
                  </span>
                )} */}
              </div>
            ))}
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
            <Underline />
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
                  <Icon d="M5 13l4 4L19 7" className="h-3.5 w-3.5" stroke={3} />
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