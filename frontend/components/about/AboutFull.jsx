import Link from "next/link";
import {
  aboutHeaderData,
  focusFormula,
  founderVision,
  coFounderVision,
  whyFutureGenerations,
  digitalMarketingFocus,
  completeImpactFramework,
  inclusionAndEquityData,
  partnersAndCollaboratorsData,
  roadmapTimeline,
  aboutPages,
  departmentPages,
} from "@/data/about";

const cardBase =
  "group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-[0_24px_55px_rgba(15,70,45,0.12)]";

const eyebrow =
  "inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-emerald-800";

function SectionHeading({ eyebrow: label, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className={eyebrow}>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        {label}
      </span>

      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>

      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-800 to-lime-400" />
    </div>
  );
}

function CardIcon({ children, dark = false }) {
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-110 ${
        dark
          ? "border border-white/15 bg-white/10 text-white shadow-inner"
          : "border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50 text-emerald-900 shadow-sm"
      }`}
    >
      {children}
    </div>
  );
}

export default function AboutFull() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6f8f5] py-16 text-slate-800 sm:py-20 lg:py-28">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-48 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute -left-48 top-[28%] h-[450px] w-[450px] rounded-full bg-lime-200/20 blur-[110px]" />
        <div className="absolute -right-32 bottom-[10%] h-[420px] w-[420px] rounded-full bg-teal-100/30 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#14532d 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">

        {/* 01 — HERO */}
        <header className="relative mb-24">
          <div className="mx-auto max-w-5xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-emerald-900 shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-700" />
              </span>
              {aboutHeaderData.tagline}
            </span>

            <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              {aboutHeaderData.title}
            </h1>

            <div className="mx-auto mt-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald-900 via-emerald-600 to-lime-400" />

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              {aboutHeaderData.description}
            </p>

            {/* Formula */}
          
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(5,minmax(0,1fr))] lg:gap-3">
            {focusFormula.map((item, idx) => (
              <div
                key={item.label}
                className={`group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[26px] border p-5 text-center transition-all duration-300 hover:-translate-y-2 sm:min-h-[210px] sm:p-6 ${
                  item.isResult
                    ? "border-emerald-700 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 text-white shadow-[0_18px_40px_rgba(6,78,59,0.25)]"
                    : "border-slate-200/80 bg-white text-slate-800 shadow-[0_12px_35px_rgba(15,23,42,0.06)] hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)]"
                }`}
              >
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-all duration-300 group-hover:scale-150 ${
                    item.isResult ? "bg-emerald-400/20" : "bg-emerald-300/20"
                  }`}
                />

                <div
                  className={`relative mb-5 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-[76px] sm:w-[76px] sm:text-4xl ${
                    item.isResult
                      ? "border border-white/15 bg-white/10"
                      : "border border-emerald-100 bg-emerald-50"
                  }`}
                >
                  {item.icon}
                </div>

                <h4 className="relative text-base font-extrabold leading-snug sm:text-lg">
                  {item.label}
                </h4>

                <div
                  className={`mt-4 h-1 w-10 rounded-full ${
                    item.isResult ? "bg-emerald-300" : "bg-emerald-500"
                  }`}
                />

                {item.isResult && (
                  <span className="relative mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">
                    The result
                  </span>
                )}
              </div>
            ))}
          </div>


          </div>
        </header>

        {/* 02 — STORY, VISION, MISSION & VALUES */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="The foundation"
            title="Who We Are & What We Stand For"
            description="Discover the purpose, principles and shared vision that guide our work and shape the impact we create."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {/* Story */}
            <article className={`${cardBase} flex flex-col p-7 sm:p-8`}>
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between">
                <CardIcon>📖</CardIcon>
                <span className="text-5xl font-black tracking-tighter text-slate-100">
                  01
                </span>
              </div>

              <div className="relative mt-7">
                <p className={eyebrow}>Our story</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  {aboutPages["who-we-are"].title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {aboutPages["who-we-are"].body[0]}
                </p>
              </div>

              <div className="relative mt-auto space-y-3 pt-7">
                <div className="h-px bg-gradient-to-r from-emerald-200 to-transparent" />
                <p className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <span>↗</span> From awareness to action
                </p>
                <p className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <span>↗</span> From communities to impact
                </p>
              </div>
            </article>

            {/* Vision */}
            <article className={`${cardBase} flex flex-col p-7 sm:p-8`}>
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between">
                <CardIcon>👁️</CardIcon>
                <span className="text-5xl font-black tracking-tighter text-slate-100">
                  02
                </span>
              </div>

              <div className="relative mt-7">
                <p className={eyebrow}>Our vision</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  {aboutPages["our-vision"].title}
                </h3>

                <blockquote className="mt-5 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 text-sm font-medium italic leading-7 text-emerald-950">
                  <span className="mb-1 block text-3xl font-black leading-none text-emerald-300">
                    “
                  </span>
                  A future where every community thrives in health and dignity.
                </blockquote>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {aboutPages["our-vision"].body[0]
                    .split(". ")
                    .slice(1)
                    .join(". ")}
                </p>
              </div>
            </article>

            {/* Mission */}
            <article className={`${cardBase} flex flex-col p-7 sm:p-8`}>
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-100/50 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between">
                <CardIcon>🎯</CardIcon>
                <span className="text-5xl font-black tracking-tighter text-slate-100">
                  03
                </span>
              </div>

              <div className="relative mt-7">
                <p className={eyebrow}>Our mission</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  {aboutPages["our-mission"].title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {aboutPages["our-mission"].body[0]}
                </p>
              </div>

              <div className="mt-auto pt-7">
                <div className="rounded-2xl bg-slate-950 p-4 text-sm font-semibold leading-6 text-white">
                  Together, we turn ideas and evidence into action.
                  <span className="mt-2 block text-xl text-emerald-400">
                    ↗
                  </span>
                </div>
              </div>
            </article>

            {/* Values */}
            <article className={`${cardBase} flex flex-col p-7 sm:p-8`}>
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-100/50 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between">
                <CardIcon>⭐</CardIcon>
                <span className="text-5xl font-black tracking-tighter text-slate-100">
                  04
                </span>
              </div>

              <div className="relative mt-7">
                <p className={eyebrow}>Our values</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  {aboutPages["values"].title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {aboutPages["values"].tags.map((val) => (
                    <span
                      key={val}
                      className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-[11px] font-semibold text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
                    >
                      <span className="mr-1.5 text-emerald-700">✦</span>
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* 03 — LEADERSHIP */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="Leadership & purpose"
            title="The Vision Behind Our Mission"
            description="Guided by purpose, innovation and a shared commitment to building a healthier, more equitable future."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[founderVision, coFounderVision].map((leader, idx) => (
              <article
                key={leader.name}
                className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-7 text-white shadow-[0_25px_65px_rgba(6,46,29,0.16)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_75px_rgba(6,46,29,0.24)] sm:p-10"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.07] transition-transform duration-700 group-hover:scale-125" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-200">
                      {idx === 0 ? "Founder's vision" : "Co-founder's vision"}
                    </span>
                    <span className="text-4xl font-black text-white/10">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-8 flex items-center gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-lime-300 to-emerald-400 opacity-80 blur-[2px]" />
                      <img
                        src={leader.image}
                        alt={leader.name}
                        loading="lazy"
                        className="relative h-20 w-20 rounded-full border-2 border-emerald-300/60 object-cover sm:h-24 sm:w-24"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                        {leader.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-emerald-200/80">
                        {leader.title}
                      </p>
                      <div className="mt-3 h-0.5 w-10 rounded-full bg-lime-400" />
                    </div>
                  </div>

                  <blockquote className="mt-8 rounded-2xl border border-white/10 bg-white/[0.055] p-6 text-sm leading-8 text-slate-100/90 backdrop-blur-sm sm:p-7">
                    <span className="mb-2 block font-serif text-5xl leading-none text-emerald-300/70">
                      “
                    </span>
                    <span className="italic">{leader.quote}</span>
                  </blockquote>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Leadership & legacy
                    </span>
                    <span className="text-sm font-bold text-emerald-200">
                      — {leader.name}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Future generations */}
            <article className={`${cardBase} p-7 sm:p-9`}>
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-lime-100/60 blur-3xl" />

              <div className="relative">
                <span className={eyebrow}>
                  {whyFutureGenerations.eyebrow}
                </span>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Building a Sustainable Tomorrow
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {whyFutureGenerations.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {whyFutureGenerations.pillars.map((pillar, idx) => (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-emerald-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md sm:p-5"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                        {pillar.icon}
                      </span>
                      <p className="mt-4 text-xs font-extrabold text-slate-800">
                        {pillar.title}
                      </p>
                      <p className="mt-1 text-[10px] font-bold tracking-widest text-emerald-800/50">
                        PILLAR 0{idx + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Digital impact */}
            <article className={`${cardBase} p-7 sm:p-9`}>
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-100/60 blur-3xl" />

              <div className="relative">
                <span className={eyebrow}>
                  {digitalMarketingFocus.eyebrow}
                </span>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Amplifying Real Impact
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {digitalMarketingFocus.description}
                </p>

                <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-950 to-emerald-800 p-6 text-white">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-200">
                    Linkage with our work
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {digitalMarketingFocus.linkages.map((link) => (
                      <span
                        key={link}
                        className="rounded-xl border border-white/15 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/15"
                      >
                        {link}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-medium text-emerald-100/70">
                      Strategy meets action
                    </span>
                    <span className="text-2xl text-lime-300">↗</span>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* 04 — IMPACT FRAMEWORK */}
        <section className="relative mb-24 overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-950 via-[#0c392b] to-slate-950 p-7 shadow-[0_30px_80px_rgba(6,46,29,0.17)] sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/[0.06]" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-lime-400/[0.07] blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Our ecosystem
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                {completeImpactFramework.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-emerald-100/65 sm:text-base">
                {completeImpactFramework.subtitle}
              </p>

              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {completeImpactFramework.steps.map((item, idx) => (
                <article
                  key={item.step}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/40 hover:bg-white/[0.10]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 text-sm font-black text-white shadow-lg shadow-emerald-950/40">
                      {item.step}
                    </span>
                    <span className="text-3xl font-black text-white/[0.08]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-sm font-extrabold leading-6 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-emerald-100/60">
                    {item.desc}
                  </p>

                  <div className="mt-5 h-0.5 w-8 rounded-full bg-emerald-400/60 transition-all duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.09] px-5 py-5 text-center text-sm font-bold leading-7 text-emerald-50 sm:px-8">
              <span className="mr-2 text-lime-300">✦</span>
              {completeImpactFramework.footerBanner}
            </div>
          </div>
        </section>

        {/* 05 — INCLUSION & DEPARTMENTS */}
        <section className="mb-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Inclusion */}
            <article className={`${cardBase} p-7 sm:p-10`}>
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />

              <div className="relative">
                <CardIcon>🤝</CardIcon>

                <span className={`${eyebrow} mt-6`}>
                  Our core principle
                </span>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  {inclusionAndEquityData.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {inclusionAndEquityData.subtitle}
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {inclusionAndEquityData.commitments.map((com, idx) => (
                    <div
                      key={com}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/70"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-black text-emerald-900">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-1 text-xs font-semibold leading-5 text-slate-700">
                        {com}
                      </span>
                    </div>
                  ))}
                </div>

                <blockquote className="mt-7 rounded-2xl border-l-4 border-emerald-600 bg-gradient-to-r from-emerald-50 to-white p-5 text-sm font-semibold italic leading-7 text-emerald-950">
                  “{inclusionAndEquityData.quote}”
                </blockquote>
              </div>
            </article>

            {/* Departments */}
            <article className={`${cardBase} p-7 sm:p-10`}>
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />

              <div className="relative">
                <CardIcon>◈</CardIcon>

                <span className={`${eyebrow} mt-6`}>
                  Our structure
                </span>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Our Departments
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Specialized teams working together with a shared purpose and
                  Impact Framework.
                </p>

                <div className="mt-7 grid max-h-[410px] grid-cols-1 gap-3 overflow-y-auto pr-2 sm:grid-cols-2">
                  {Object.entries(departmentPages).map(([key, dept], idx) => (
                    <div
                      key={key}
                      className="group/dept flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/70 hover:shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[10px] font-extrabold text-emerald-900 transition-colors group-hover/dept:bg-emerald-900 group-hover/dept:text-white">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-bold leading-5 text-slate-800">
                        {dept.title}
                      </span>

                      <span className="ml-auto text-sm text-slate-300 transition-all group-hover/dept:translate-x-1 group-hover/dept:text-emerald-700">
                        →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* 06 — PARTNERS */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="Stronger together"
            title={partnersAndCollaboratorsData.title}
            description={partnersAndCollaboratorsData.subtitle}
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {partnersAndCollaboratorsData.categories.map((cat, idx) => (
              <article
                key={cat.title}
                className={`${cardBase} p-6 sm:p-7`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50 text-3xl shadow-sm transition-all duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
                    {cat.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-extrabold tracking-[0.18em] text-emerald-800/50">
                      PARTNER {String(idx + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-lg font-extrabold leading-6 text-slate-900">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {cat.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-emerald-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Collaboration for impact
                  <span className="ml-auto transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 07 — ROADMAP */}
        <section className="relative overflow-hidden rounded-[32px] border border-emerald-100/80 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.05)] sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

          <div className="relative">
            <SectionHeading
              eyebrow="Our journey ahead"
              title={roadmapTimeline.title}
              description={roadmapTimeline.subtitle}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {roadmapTimeline.stages.map((stage, idx) => (
                <article
                  key={stage.year}
                  className="group relative rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-xl bg-gradient-to-r from-emerald-950 to-emerald-700 px-3 py-2 text-xs font-extrabold tracking-wider text-white shadow-md shadow-emerald-950/10">
                      {stage.year}
                    </span>

                    <span className="text-2xl font-black text-slate-200 transition-colors group-hover:text-emerald-200">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-extrabold leading-6 text-slate-900">
                    {stage.title}
                  </h3>

                  <div className="my-4 h-0.5 w-8 rounded-full bg-emerald-300 transition-all duration-300 group-hover:w-full group-hover:bg-emerald-700" />

                  <ul className="space-y-3">
                    {stage.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-xs leading-6 text-slate-600"
                      >
                        <span className="mt-1 text-sm font-black text-emerald-700">
                          •
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="relative mt-12 overflow-hidden rounded-[28px] bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800 px-6 py-9 text-center shadow-xl shadow-emerald-950/10 sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute -right-12 -top-24 h-56 w-56 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -left-12 -bottom-24 h-56 w-56 rounded-full border border-white/10" />

              <div className="relative">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-emerald-300">
                  Discover our purpose
                </span>

                <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Every step forward creates an opportunity for lasting impact.
                </h3>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-emerald-100/70">
                  Learn more about our story, our people and the mission that
                  brings our community together.
                </p>

                <Link
                  href="/about/who-we-are"
                  className="group/cta mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-emerald-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-lime-100 hover:shadow-xl sm:px-9"
                >
                  Explore Full About Details
                  <span className="text-lg transition-transform duration-300 group-hover/cta:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
