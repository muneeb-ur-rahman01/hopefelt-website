import Link from "next/link";

const techColumns = [
  {
    title: "Digital Products & Platforms",
    description: "Purpose-built digital tools to strengthen operations and improve public services.",
    icon: (
      <svg className="h-6 w-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    items: [
      { name: "Work Square", sub: "Productivity & Operations" },
      { name: "PHMIS", sub: "Health Information System" },
      { name: "Digital Health Solutions", sub: "Virtual Care & Health Services" },
    ],
  },
  {
    title: "Technology Services",
    description: "Support in the effective use of software and digital tools to improve efficiency and service delivery.",
    icon: (
      <svg className="h-6 w-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: "Software Setup & Support", sub: "Use and configuration of tools" },
      { name: "Training & Capacity Support", sub: "Guidance for effective use" },
      { name: "System Maintenance", sub: "Ongoing technical support" },
    ],
  },
  {
    title: "Digital Enablement",
    description: "Helping teams and communities build the skills and systems needed to use technology effectively.",
    icon: (
      <svg className="h-6 w-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    items: [
      { name: "Process Improvement", sub: "Digitizing and simplifying workflows" },
      { name: "Data Use & Reporting", sub: "Better insights for decision-making" },
      { name: "Training & Implementation", sub: "Skills for sustainable use" },
    ],
  },
];

const approachSteps = [
  {
    num: "01",
    title: "Understand the Need",
    desc: "We work with communities and organisations to identify real challenges.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design & Develop",
    desc: "We create practical, user-focused solutions using the right technology.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Implement & Support",
    desc: "We deploy, integrate and provide ongoing technical and operational support.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Review & Improve",
    desc: "We monitor impact, gather feedback and continuously enhance our solutions.",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function TechnologySection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Intro */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                TECHNOLOGY & DIGITAL INNOVATION
              </span>

              <h2 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-5xl leading-tight">
                TECHNOLOGY DESIGNED AROUND REAL WORLD NEEDS.
              </h2>

              <p className="mt-5 leading-relaxed text-ink/65">
                Hopefelt develops and supports digital products, data systems and technology services to strengthen public health systems and help communities access better services.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90"
              >
                Explore Our Technology →
              </Link>
            </div>
          </div>

          {/* Right 3 Category Cards */}
          <div className="lg:col-span-8 grid gap-6 md:grid-cols-3">
            {techColumns.map((col, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-line bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 mb-4">
                    {col.icon}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-ink">
                    {col.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-ink/65">
                    {col.description}
                  </p>
                </div>

                <div className="mt-6 space-y-3 pt-4 border-t border-line">
                  {col.items.map((item, i) => (
                    <div key={i} className="rounded-xl border border-line/60 bg-surface/50 p-3">
                      <p className="text-xs font-semibold text-ink">{item.name}</p>
                      <p className="mt-0.5 text-[11px] text-ink/60">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Approach Framework */}
        <div className="mt-12 rounded-3xl border border-line bg-white p-8 lg:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-3 lg:pr-8 lg:border-r lg:border-line">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                OUR APPROACH
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink leading-tight">
                From needs to lasting impact.
              </h3>
            </div>

            <div className="lg:col-span-9 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {approachSteps.map((step) => (
                <div key={step.num} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest/10">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold text-forest">{step.num}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-ink">{step.title}</h4>
                  <p className="mt-1 text-xs text-ink/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}