import Link from "next/link";

const researchCards = [
  {
    number: "RESEARCH 01",
    title: "Public Health Research",
    description: "Understanding community needs, health challenges and service gaps through structured research.",
    pills: ["Methods", "Evidence", "Data"],
    bgClass: "bg-emerald-50/40 border-emerald-100",
    iconBgClass: "bg-emerald-100/70 text-forest",
    pillBgClass: "bg-emerald-100/60 text-forest",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "RESEARCH 02",
    title: "Applied & Intervention Research",
    description: "Testing and refining practical approaches in real-world settings.",
    pills: ["Interventions", "Evaluation", "Learning"],
    bgClass: "bg-blue-50/40 border-blue-100",
    iconBgClass: "bg-blue-100/70 text-blue-700",
    pillBgClass: "bg-blue-100/60 text-blue-700",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: "RESEARCH 03",
    title: "Research Translation & Innovation",
    description: "Connecting findings to recommendations, digital solutions and opportunities for responsible scale.",
    pills: ["Insights", "Innovation", "Implementation"],
    bgClass: "bg-emerald-50/40 border-emerald-100",
    iconBgClass: "bg-emerald-100/70 text-forest",
    pillBgClass: "bg-emerald-100/60 text-forest",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const frameworkSteps = [
  {
    number: "01",
    title: "Research Question",
    desc: "Identify real community needs.",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Evidence & Analysis",
    desc: "Generate and analyse data.",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Insights",
    desc: "Turn evidence into meaningful findings.",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Practical Innovation",
    desc: "Develop solutions and interventions.",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Evaluation & Learning",
    desc: "Assess impact and improve continuously.",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function ResearchInnovationSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Main Intro & Bottom Framework */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                RESEARCH, EVIDENCE & INNOVATION —
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-5xl leading-tight">
                Evidence that moves ideas forward.
              </h2>

              <p className="mt-5 leading-relaxed text-ink/65 max-w-xl">
                Hopefelt supports public health and applied research, community-based studies, evidence generation, data analysis, research presentations, publications and collaborative innovation[cite: 7].
              </p>

              <div className="mt-8">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest/90"
                >
                  Explore Research →
                </Link>
              </div>
            </div>

            {/* Bottom Framework Section */}
            <div className="mt-12 rounded-3xl border border-line bg-surface/50 p-6 lg:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest/70 mb-6">
                FROM EVIDENCE TO APPLICATION —
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {frameworkSteps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100/70 mb-2">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-ink/40 mb-1">
                      {step.number}
                    </span>
                    <h4 className="font-semibold text-xs text-ink leading-snug">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-[10px] text-ink/60 leading-tight">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-6 space-y-4">
            {researchCards.map((item) => (
              <article
                key={item.title}
                className={`rounded-3xl border ${item.bgClass} p-6 transition hover:shadow-sm flex items-start gap-5`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconBgClass}`}>
                  {item.icon}
                </div>

                <div className="flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest/60">
                    {item.number}
                  </span>

                  <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-ink/65">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`rounded-full px-3 py-1 text-[11px] font-medium ${item.pillBgClass}`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}