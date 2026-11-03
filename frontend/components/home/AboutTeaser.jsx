import Link from "next/link";

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

const stats = [
  { label: "Communities We Serve", value: "25+" },
  { label: "Volunteers & Partners", value: "500+" },
  { label: "Programs Implemented", value: "10+" },
  { label: "Lives Impacted", value: "20K+" },
];

const focusRing =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4a6741]/30";

export default function AboutTeaser() {
  return (
    <section className="relative isolate overflow-hidden border-t border-[#4a6741]/20 bg-white py-16 lg:py-24">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#4a6741]/[0.06] blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0d3749]/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        {/* Main 3-Column Grid Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-12">
          {/* Left Content & Stats */}
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              <p className="inline-block rounded-full bg-[#1F5C4E] px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_20px_-8px_rgba(31,92,78,0.6)]">
                WHO WE ARE
              </p>

              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#0d3749] sm:text-5xl">
                BETTER COMMUNITIES.{" "}
                <span className="text-[#4a6741]">BETTER FUTURE</span>
              </h2>

              <span className="mt-6 block h-1 w-14 rounded-full bg-gradient-to-r from-[#4a6741] to-[#0d3749]/50" />

              <p className="mt-6 max-w-md font-body text-base leading-7 text-ink/70">
                Hopefelt Foundation is a youth-led, community-focused
                organization working at the intersection of health,
                knowledge, opportunity and innovation. We believe in
                practical solutions, collaborative action and a healthier,
                more resilient tomorrow.
              </p>

              <Link
                href="/about"
                className={`group mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#394F32] bg-forest px-8 py-3.5 font-body text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_30px_-10px_rgba(74,103,65,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#394F32] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_36px_-10px_rgba(74,103,65,0.8)] ${focusRing}`}
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#4a6741]/15 shadow-[0_14px_36px_-18px_rgba(13,55,73,0.25)] ring-1 ring-[#4a6741]/15 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white p-4">
                  <p className="font-display text-3xl font-bold leading-none tracking-tight text-[#0d3749]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-4 text-ink/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="group relative isolate flex justify-center lg:col-span-4">
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[2rem] bg-[#4a6741]/20" />
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] border border-[#0d3749]/15" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[#4a6741]/20 shadow-[0_1px_2px_rgba(13,55,73,0.06),0_30px_60px_-20px_rgba(13,55,73,0.35)] lg:aspect-auto lg:min-h-[32rem]">
              <img
                src="/images/hero/pillars.png"
                alt="Hopefelt Foundation community architecture"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d3749]/25 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/25" />
            </div>
          </div>

          {/* Right Stack Cards */}
          <div className="flex flex-col gap-3 lg:col-span-4">
            {rightCards.map((card) => (
              <div
                key={card.title}
                className="group relative flex flex-1 items-center justify-between overflow-hidden rounded-2xl border border-[#0d3749]/15 bg-gradient-to-r from-white via-white to-[#0d3749]/[0.04] p-5 shadow-[0_1px_2px_rgba(13,55,73,0.04),0_10px_28px_-14px_rgba(13,55,73,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4a6741]/60 hover:shadow-[0_1px_2px_rgba(13,55,73,0.04),0_18px_36px_-14px_rgba(13,55,73,0.3)]"
              >
                {/* Decorative accent */}
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#4a6741]/[0.06] transition-colors duration-300 group-hover:bg-[#4a6741]/[0.12]" />
                {/* Active edge */}
                <span className="absolute inset-y-4 left-0 w-1 rounded-r-full bg-[#4a6741] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex min-w-0 items-center gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4a6741]/20 bg-[#4a6741]/10 text-[#0d3749] shadow-sm transition-all duration-300 group-hover:border-[#4a6741] group-hover:bg-[#4a6741] group-hover:shadow-md group-hover:[&_svg]:text-white">
                    {card.icon}
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold tracking-tight text-[#0d3749] transition-colors duration-300 group-hover:text-[#4a6741]">
                      {card.title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-ink/65 sm:text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="relative z-10 ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0d3749]/15 bg-[#0d3749]/[0.06] text-lg text-[#0d3749] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#0d3749] group-hover:bg-[#0d3749] group-hover:text-white">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}