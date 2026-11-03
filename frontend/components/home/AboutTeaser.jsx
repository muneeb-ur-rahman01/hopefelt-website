import Link from "next/link";

const rightCards = [
  {
    title: "Communities",
    description: "We work with local communities to co-create solutions.",
    paths: [
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    ],
  },
  {
    title: "Youth",
    description:
      "We empower young people through education, skills and opportunities.",
    paths: [
      "M12 14l9-5-9-5-9 5 9 5z",
      "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    ],
  },
  {
    title: "Innovation",
    description:
      "We turn ideas into practical solutions for real-world challenges.",
    paths: [
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    ],
  },
  {
    title: "Impact",
    description: "We aim for sustainable and measurable change.",
    paths: ["M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"],
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
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fbfaf6] via-white to-[#f6f8f4] py-20 lg:py-32">
      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b89b5e]/50 to-transparent" />

      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(13,55,73,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,55,73,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#4a6741]/[0.09] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#0d3749]/[0.08] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b89b5e]/[0.07] blur-3xl" />
      </div>

      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-14">
          {/* Left: content & stats */}
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              {/* eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-[#b89b5e] to-transparent" />
                <p className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#1F5C4E]">
                  Who We Are
                </p>
              </div>

              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#0d3749] sm:text-6xl">
                Better
                <br />
                Communities.
                <br />
                <span className="bg-gradient-to-r from-[#4a6741] via-[#1F5C4E] to-[#0d3749] bg-clip-text text-transparent">
                  Better Future.
                </span>
              </h2>

              {/* ornament */}
              <div className="mt-8 flex items-center gap-2">
                <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#b89b5e] to-[#e3d2a3]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#b89b5e]" />
              </div>

              <p className="mt-8 max-w-md font-body text-[1.05rem] leading-8 text-ink/70">
                Hopefelt Foundation is a youth-led, community-focused
                organization working at the intersection of health, knowledge,
                opportunity and innovation. We believe in practical solutions,
                collaborative action and a healthier, more resilient tomorrow.
              </p>

              <Link
                href="/about"
                className={`group relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#0d3749] py-2 pl-8 pr-2 font-body text-sm font-semibold tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_18px_36px_-14px_rgba(13,55,73,0.75)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_24px_44px_-14px_rgba(13,55,73,0.85)] ${focusRing}`}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
                <span className="relative">Learn More</span>
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#e3d2a3] to-[#b89b5e] text-[#0d3749] transition-transform duration-500 group-hover:rotate-[-45deg]">
                  →
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 overflow-hidden rounded-3xl bg-white/70 p-px shadow-[0_24px_50px_-24px_rgba(13,55,73,0.35)] ring-1 ring-[#0d3749]/10 backdrop-blur">
              <div className="grid grid-cols-2 gap-px bg-gradient-to-br from-[#4a6741]/20 via-[#b89b5e]/25 to-[#0d3749]/20 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/95 px-4 py-5 transition-colors duration-300 hover:bg-[#f6f8f4]"
                  >
                    <p className="font-display text-3xl font-bold leading-none tracking-tight text-[#0d3749]">
                      {s.value}
                    </p>
                    <span className="mt-3 block h-px w-6 bg-[#b89b5e]" />
                    <p className="mt-2.5 text-[0.7rem] font-medium uppercase leading-4 tracking-wider text-ink/55">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center: image */}
          <div className="relative isolate flex items-center justify-center lg:col-span-4">
            {/* soft glow behind the card */}
            <div className="absolute inset-x-6 inset-y-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#4a6741]/20 via-[#b89b5e]/15 to-[#0d3749]/20 blur-2xl" />

            {/* clean frame: image is shown in full, nothing overlaps it */}
            <figure className="w-full rounded-[1.75rem] border border-[#0d3749]/10 bg-white p-3 shadow-[0_1px_2px_rgba(13,55,73,0.06),0_30px_60px_-28px_rgba(13,55,73,0.35)]">
              <div className="overflow-hidden rounded-2xl border border-[#0d3749]/10 bg-[#f6f8f4]">
                <img
                  src="/images/hero/pillars.png"
                  alt="Hopefelt Foundation: Health, dignity and well-being. Our pillars"
                  className="block h-auto w-full object-contain"
                />
              </div>
              <figcaption className="flex items-center justify-center gap-3 px-2 pb-1 pt-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#b89b5e]" />
                <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#0d3749]/60">
                  Our Pillars
                </span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#b89b5e]" />
              </figcaption>
            </figure>
          </div>

          {/* Right: stacked cards */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {rightCards.map((card, i) => (
              <div
                key={card.title}
                className="group relative flex flex-1 items-center justify-between overflow-hidden rounded-3xl border border-[#0d3749]/10 bg-white/80 p-6 shadow-[0_1px_2px_rgba(13,55,73,0.04),0_16px_36px_-18px_rgba(13,55,73,0.22)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-[#b89b5e]/60 hover:shadow-[0_1px_2px_rgba(13,55,73,0.04),0_28px_48px_-20px_rgba(13,55,73,0.35)]"
              >
                {/* hover wash */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4a6741]/0 via-transparent to-[#0d3749]/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* corner accent */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#4a6741]/[0.06] transition-colors duration-500 group-hover:bg-[#b89b5e]/[0.14]" />
                {/* active edge */}
                <span className="absolute inset-y-5 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#b89b5e] to-[#4a6741] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* index */}
                <span className="absolute right-6 top-4 font-display text-[0.7rem] font-semibold tracking-[0.2em] text-[#0d3749]/25 transition-colors duration-500 group-hover:text-[#b89b5e]">
                  0{i + 1}
                </span>

                <div className="relative z-10 flex min-w-0 items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#4a6741]/20 bg-gradient-to-br from-[#4a6741]/15 to-[#4a6741]/5 shadow-sm transition-all duration-500 group-hover:border-transparent group-hover:from-[#4a6741] group-hover:to-[#1F5C4E] group-hover:shadow-lg group-hover:shadow-[#4a6741]/30">
                    <svg
                      className="h-6 w-6 text-[#4a6741] transition-colors duration-500 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {card.paths.map((d) => (
                        <path
                          key={d}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={d}
                        />
                      ))}
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#0d3749] transition-colors duration-500 group-hover:text-[#1F5C4E]">
                      {card.title}
                    </h3>
                    <p className="mt-1 max-w-[19rem] text-xs leading-relaxed text-ink/65 sm:text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* arrow */}
                <div className="relative z-10 ml-3 mt-6 flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-full border border-[#0d3749]/15 bg-white text-lg text-[#0d3749] transition-all duration-500 group-hover:translate-x-1 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#e3d2a3] group-hover:to-[#b89b5e]">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4a6741]/30 to-transparent" />
    </section>
  );
}