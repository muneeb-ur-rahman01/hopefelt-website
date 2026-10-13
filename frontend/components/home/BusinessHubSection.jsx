import Link from "next/link";

const topCards = [
  {
    title: "Entrepreneurship & Growth",
    description: "Supporting ideas and entrepreneurs to build viable and impactful ventures.",
    pills: ["Entrepreneurship", "Startups", "Mentorship", "Competitions"],
    icon: (
      <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Products & Business Development",
    description: "Developing products, services and sustainable business models for real-world impact.",
    pills: ["Products & Services", "Business Development", "Technology Business", "Health Business"],
    icon: (
      <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Partnerships & Enterprise",
    description: "Creating collaborations and opportunities for shared value.",
    pills: ["Social Enterprise", "Partnerships", "Sponsorship"],
    icon: (
      <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Market Access & Visibility",
    description: "Helping businesses reach the right audience and scale their impact.",
    pills: ["Business Stories", "Marketing & Visibility", "Market Expansion"],
    icon: (
      <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const frameworkSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "Idea & opportunity identification",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Validate",
    desc: "Research & market validation",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Develop",
    desc: "Product, service & technology",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Structure",
    desc: "Business model & operations",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Position",
    desc: "Branding & marketing strategy",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Launch",
    desc: "Market entry & partnerships",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 11.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Scale",
    desc: "Growth & expansion",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Sustain",
    desc: "Long-term viability & impact",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function BusinessHubSection() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-black/20 pointer-events-none" />

      <div className="relative mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Intro */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Hopefelt Business Hub
              </span>

              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Turning Ideas into Sustainable Opportunities.
              </h2>

              <p className="mt-6 leading-relaxed text-white/70">
                We support entrepreneurs, startups and purpose-driven ventures through business development, technology, mentorship and strategic partnerships.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/business-hub"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-forest transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Explore Business Hub
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Cards Grid (Wide Rectangles) */}
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {topCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:bg-white/[0.07] min-h-[220px]"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                      {card.icon}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {card.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {card.pills.map((pill) => (
                    <Link
                      key={pill}
                      href="/business-hub"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 transition hover:bg-white/15"
                    >
                      {pill}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Framework Section */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-10 backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Framework Info */}
            <div className="lg:col-span-4 lg:pr-8 lg:border-r lg:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Our Business Development Framework
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-white">
                From Idea to Lasting Impact.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                A structured pathway to turn ideas into sustainable, purpose-driven businesses.
              </p>
            </div>

            {/* Framework Steps (01 - 08) */}
            <div className="lg:col-span-8 overflow-x-auto pb-4 lg:pb-0">
              <div className="flex items-center gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-8">
                {frameworkSteps.map((step, idx) => (
                  <div key={step.number} className="flex items-center gap-4">
                    <div className="flex flex-col items-center text-center w-32">
                      <span className="text-xs font-semibold text-white/40 mb-2">
                        {step.number}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-forest shadow-lg">
                        {step.icon}
                      </div>
                      <h4 className="mt-3 font-semibold text-sm text-white">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-[11px] text-white/60 leading-tight">
                        {step.desc}
                      </p>
                    </div>
                    {idx < frameworkSteps.length - 1 && (
                      <div className="hidden xl:block text-white/30 text-lg">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}