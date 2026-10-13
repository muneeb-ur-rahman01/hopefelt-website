import Link from "next/link";
import Image from "next/image";
import hopefeltLogo from "../../public/images/logo.png"; // Yahan aap apne imported logo ka path ya variable adjust kar sakte hain

const coreDepartments = [
  {
    num: "01",
    title: "Public Health Research & Development",
    desc: "Research, innovation and evidence generation for better health outcomes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Community Outreach & Field Operations",
    desc: "On-ground programs, outreach and community engagement.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Monitoring, Evaluation, Accountability & Learning",
    desc: "Data, impact measurement and continuous improvement.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Partnerships, Advocacy & External Relations",
    desc: "Strategic partnerships, advocacy and stakeholder engagement.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Resource Mobilization & Fundraising",
    desc: "Resource mobilization, fundraising and sustainability.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Administration, HR & Logistics",
    desc: "People, operations, finance and organizational support.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
];

const specializedUnits = [
  {
    num: "07",
    title: "IT, Technology & Digital Innovation",
    desc: "Technology solutions and digital infrastructure.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Digital Health & Health Innovation",
    desc: "Digital solutions for better access and health systems.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    num: "09",
    title: "Programs, Training & Capacity Development",
    desc: "Skill development and program implementation.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    num: "10",
    title: "Business Hub",
    desc: "Enterprise and sustainability initiatives to scale our impact.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const collectiveImpactSteps = [
  {
    title: "Stronger Communities",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Improved Health Outcomes",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation in Public Health",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Long-term Impact",
    icon: (
      <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function TeamHierarchy() {
  return (
    <section className="bg-slate-50/50 py-20">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="grid gap-8 lg:grid-cols-12 items-center mb-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              OUR ORGANIZATION —
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl leading-tight">
              People and departments working together for impact.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Hopefelt brings together multidisciplinary teams across public health, research, technology, community programs and operations to create sustainable and measurable impact.
            </p>
          </div>

          {/* Logo & Governance Badge (Logo Added Here) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
            <div className="rounded-2xl border border-line bg-white p-4 text-center shadow-2xs w-full max-w-sm">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 overflow-hidden shrink-0">
                  <Image 
                    src={hopefeltLogo} 
                    alt="Hopefelt Foundation Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-semibold text-forest text-base">Hopefelt Foundation</h3>
                  <p className="text-[11px] text-ink/60">A Public Health Society</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-forest text-white p-3 text-center shadow-sm w-full max-w-sm flex items-center justify-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 shrink-0">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-xs font-semibold">Governance & Strategic Direction</h4>
                <p className="text-[10px] text-white/70">Board | Executive Leadership | Advisors</p>
              </div>
            </div>
          </div>

          {/* Our Impact Areas */}
          <div className="lg:col-span-3 bg-emerald-50/40 rounded-2xl p-4 border border-emerald-100">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest mb-3 text-center">
              OUR IMPACT AREAS
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-2xs text-forest mb-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-ink/80 leading-tight">Healthier Communities</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-2xs text-forest mb-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-ink/80 leading-tight">Stronger Systems</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-2xs text-forest mb-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-ink/80 leading-tight">Innovation for Good</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-2xs text-forest mb-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-ink/80 leading-tight">Sustainable Impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tree Connectors & Top Level Nodes */}
        <div className="relative pt-6">
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-forest/30" />
          <div className="hidden lg:block absolute top-6 left-1/4 right-1/4 h-px bg-forest/30" />

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Board / Governing Body */}
            <div className="relative rounded-2xl border border-line bg-white p-4 shadow-2xs flex items-center gap-4">
              <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-forest/30" />
              <div className="h-16 w-24 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
                  alt="Board / Governing Body"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <svg className="h-3.5 w-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink">Board / Governing Body</h3>
                </div>
                <p className="mt-1 text-xs text-ink/65 leading-tight">
                  Strategic oversight, policy guidance and accountability.
                </p>
              </div>
            </div>

            {/* Executive Leadership */}
            <div className="relative rounded-2xl border border-line bg-white p-4 shadow-2xs flex items-center gap-4">
              <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-forest/30" />
              <div className="h-16 w-24 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80"
                  alt="Executive Leadership"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                    <svg className="h-3.5 w-3.5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink">Executive Leadership</h3>
                </div>
                <p className="mt-1 text-xs text-ink/65 leading-tight">
                  Leadership, coordination and organizational management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: CORE DEPARTMENTS */}
        <div className="mt-12 rounded-3xl border border-sky-100 bg-sky-50/30 p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              CORE DEPARTMENTS
            </h3>
            <p className="text-xs text-ink/60 mt-1">Working across functions to deliver our mission.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {coreDepartments.map((dept) => (
              <Link
                key={dept.num}
                href="/about/our-departments"
                className="group rounded-2xl border border-line bg-white overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-sm transition"
              >
                <div>
                  <div className="relative h-24 w-full">
                    <img src={dept.image} alt={dept.title} className="h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 z-10 rounded-md bg-forest/90 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {dept.num}
                    </span>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 shrink-0">
                        {dept.icon}
                      </div>
                      <h4 className="font-display text-xs font-semibold text-ink group-hover:text-forest line-clamp-2 leading-tight">
                        {dept.title}
                      </h4>
                    </div>

                    <p className="text-[11px] leading-snug text-ink/65 line-clamp-3">
                      {dept.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: SPECIALIZED UNITS & INITIATIVES */}
        <div className="mt-8 rounded-3xl border border-sky-100 bg-sky-50/30 p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              SPECIALIZED UNITS & INITIATIVES
            </h3>
            <p className="text-xs text-ink/60 mt-1">Driving innovation and expanding impact through specialized teams and initiatives.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specializedUnits.map((dept) => (
              <Link
                key={dept.num}
                href="/about/our-departments"
                className="group rounded-2xl border border-line bg-white overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-sm transition"
              >
                <div>
                  <div className="relative h-24 w-full">
                    <img src={dept.image} alt={dept.title} className="h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 z-10 rounded-md bg-forest/90 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {dept.num}
                    </span>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 shrink-0">
                        {dept.icon}
                      </div>
                      <h4 className="font-display text-xs font-semibold text-ink group-hover:text-forest line-clamp-2 leading-tight">
                        {dept.title}
                      </h4>
                    </div>

                    <p className="text-[11px] leading-snug text-ink/65 line-clamp-3">
                      {dept.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Banner: OUR COLLECTIVE IMPACT */}
        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:w-1/4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                OUR COLLECTIVE IMPACT
              </p>
              <p className="text-xs text-ink/65 mt-1 leading-relaxed">
                All departments and initiatives work together to create healthier, stronger and more resilient communities.
              </p>
            </div>

            <div className="lg:w-3/4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 w-full">
              {collectiveImpactSteps.map((step, idx) => (
                <div key={step.title} className="flex items-center gap-3 flex-1 min-w-[180px]">
                  <div className="flex items-center gap-2 bg-white rounded-xl p-3 border border-emerald-100 shadow-2xs w-full">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold text-ink leading-tight">{step.title}</span>
                  </div>
                  {idx < collectiveImpactSteps.length - 1 && (
                    <span className="hidden lg:block text-forest/40 text-sm">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}