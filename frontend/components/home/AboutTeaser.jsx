import Link from "next/link";
import { aboutHeaderData } from "@/data/about";

const rightCards = [
  {
    title: "Communities",
    description: "We work with local communities to co-create solutions.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Youth",
    description:
      "We empower young people through education, skills and opportunities.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We turn ideas into practical solutions for real-world challenges.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Impact",
    description: "We aim for sustainable and measurable change.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

const bottomFeatures = [
  {
    title: "Healthier Communities",
    description:
      "Improving access to health services and preventive care.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Knowledge for All",
    description:
      "Building awareness and practical skills for stronger communities.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Opportunities for Youth",
    description: "Creating pathways for personal and professional growth.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "A Sustainable Future",
    description:
      "Driving long-term impact through collaboration and innovation.",
    icon: (
      <svg
        className="h-5 w-5 text-[#4a6741]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export default function AboutTeaser() {
  return (
    <section className="border-t border-[#4a6741]/20 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        {/* Main 3-Column Grid Layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">

          {/* Left Content & Stats */}
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#4a6741]">
                {aboutHeaderData?.tagline ||
                  "BETTER COMMUNITIES. BRIGHTER FUTURES."}
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0d3749] sm:text-5xl">
                WHO WE ARE
              </h2>

              <p className="mt-5 font-body text-sm leading-relaxed text-ink/70">
                Hopefelt Foundation is a youth-led, community-focused
                organization working at the intersection of health,
                knowledge, opportunity and innovation. We believe in
                practical solutions, collaborative action and a healthier,
                more resilient tomorrow.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4a6741] px-7 py-3 font-body text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#394F32] hover:shadow-lg"
              >
                Learn More →
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-[#4a6741]/20 pt-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <div>
                <p className="text-[11px] font-medium leading-tight text-ink/60">
                  Communities We Serve
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-[#0d3749]">
                  25+
                </p>
              </div>

              <div>
                <p className="text-[11px] font-medium leading-tight text-ink/60">
                  Volunteers & Partners
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-[#0d3749]">
                  500+
                </p>
              </div>

              <div>
                <p className="text-[11px] font-medium leading-tight text-ink/60">
                  Programs Implemented
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-[#0d3749]">
                  10+
                </p>
              </div>

              <div>
                <p className="text-[11px] font-medium leading-tight text-ink/60">
                  Lives Impacted
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-[#0d3749]">
                  20K+
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center lg:col-span-4">
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-3xl bg-[#4a6741]/20" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#4a6741]/20 shadow-lg">
              <img
                src="/images/pillars.png"
                alt="Hopefelt Foundation community architecture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Stack Cards */}
         <div className="space-y-3 lg:col-span-4">
  {rightCards.map((card) => (
    <div
      key={card.title}
      className="group relative flex items-center justify-between overflow-hidden rounded-md border-2 border-[#0d3749]/50 bg-gradient-to-r from-white via-white to-[#0d3749]/[0.04] p-4 shadow-[0_3px_12px_rgba(13,55,73,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0d3749] hover:shadow-[0_8px_22px_rgba(13,55,73,0.12)]"
    >
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-[#4a6741]/[0.06] transition-colors duration-300 group-hover:bg-[#4a6741]/[0.12]" />

      <div className="relative z-10 flex min-w-0 items-center gap-3.5">
        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#4a6741]/20 bg-[#4a6741]/10 text-[#0d3749] shadow-sm transition-all duration-300 group-hover:border-[#4a6741] group-hover:bg-[#4a6741] group-hover:shadow-md group-hover:[&_svg]:text-white">
          {card.icon}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <h3 className="font-display text-sm font-bold text-[#0d3749] transition-colors duration-300 group-hover:text-[#4a6741]">
            {card.title}
          </h3>

          <p className="mt-1 text-xs leading-relaxed text-ink/65">
            {card.description}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div className="relative z-10 ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#0d3749]/15 bg-[#0d3749]/[0.06] text-lg text-[#0d3749] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#0d3749] group-hover:bg-[#0d3749] group-hover:text-white">
        →
      </div>
    </div>
  ))}
</div>
        </div>

        {/* Bottom 4-Column Feature Banner */}
       <div className="mt-16 grid grid-cols-1 gap-6 border-t border-[#4a6741]/20 pt-12 sm:grid-cols-2 lg:grid-cols-4">
  {bottomFeatures.map((feat) => (
    <div
      key={feat.title}
      className="group relative overflow-hidden rounded-2xl border-2 border-[#0d3749]/50 bg-gradient-to-br from-white via-white to-[#0d3749]/[0.04] p-6 shadow-[0_4px_20px_rgba(13,55,73,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0d3749] hover:shadow-[0_12px_30px_rgba(13,55,73,0.14)]"
    >
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#4a6741]/[0.07] transition-all duration-300 group-hover:bg-[#4a6741]/[0.14]" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0d3749]/20 bg-[#4a6741]/10 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4a6741]">
          <div className="transition-colors duration-300 group-hover:[&_svg]:text-white">
            {feat.icon}
          </div>
        </div>

        {/* Content */}
        <h4 className="mt-5 font-display text-base font-bold text-[#0d3749] transition-colors duration-300 group-hover:text-[#4a6741]">
          {feat.title}
        </h4>

        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          {feat.description}
        </p>

        {/* Bottom accent line */}
        <div className="mt-5 h-1 w-10 rounded-full bg-[#4a6741]/60 transition-all duration-300 group-hover:w-16 group-hover:bg-[#0d3749]" />
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}