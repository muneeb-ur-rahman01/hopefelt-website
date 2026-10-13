import Link from "next/link";
import { aboutHeaderData } from "@/data/about";

const rightCards = [
  {
    title: "Communities",
    description: "We work with local communities to co-create solutions.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Youth",
    description: "We empower young people through education, skills and opportunities.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We turn ideas into practical solutions for real-world challenges.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Impact",
    description: "We aim for sustainable and measurable change.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const bottomFeatures = [
  {
    title: "Healthier Communities",
    description: "Improving access to health services and preventive care.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Knowledge for All",
    description: "Building awareness and practical skills for stronger communities.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Opportunities for Youth",
    description: "Creating pathways for personal and professional growth.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "A Sustainable Future",
    description: "Driving long-term impact through collaboration and innovation.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function AboutTeaser() {
  return (
    <section className="border-t border-line bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        {/* Main 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content & Stats (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-forest">
                {aboutHeaderData?.tagline || "BETTER COMMUNITIES. BRIGHTER FUTURES."}
              </p>
              
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest sm:text-5xl">
                WHO WE ARE
              </h2>

              <p className="mt-5 font-body text-sm leading-relaxed text-ink/70">
                Hopefelt Foundation is a youth-led, community-focused organization working at the intersection of health, knowledge, opportunity and innovation. We believe in practical solutions, collaborative action and a healthier, more resilient tomorrow.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 font-body text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-forestDark"
              >
                Learn More →
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 pt-8 border-t border-line">
              <div>
                <p className="text-[11px] font-medium text-ink/60 leading-tight">Communities We Serve</p>
                <p className="mt-1 font-display text-2xl font-bold text-forest">25+</p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-ink/60 leading-tight">Volunteers & Partners</p>
                <p className="mt-1 font-display text-2xl font-bold text-forest">500+</p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-ink/60 leading-tight">Programs Implemented</p>
                <p className="mt-1 font-display text-2xl font-bold text-forest">40+</p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-ink/60 leading-tight">Lives Impacted</p>
                <p className="mt-1 font-display text-2xl font-bold text-forest">10K+</p>
              </div>
            </div>
          </div>

          {/* Center Image Container (4 Cols) */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl bg-forest/20 -z-10" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg border border-line">
              <img
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=900&q=80"
                alt="Hopefelt Foundation community architecture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Stack Cards (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {rightCards.map((card, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between rounded-2xl border border-line bg-white p-4 transition hover:border-forest/30 hover:shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/10">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-ink group-hover:text-forest">
                      {card.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-ink/60 leading-snug">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-forest transition group-hover:translate-x-1">
                  →
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom 4-Column Feature Banner */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-line">
          {bottomFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-line shadow-2xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                {feat.icon}
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-ink">{feat.title}</h4>
                <p className="mt-1 text-xs text-ink/65 leading-relaxed">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}