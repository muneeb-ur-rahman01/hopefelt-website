import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading, { CheckIcon } from "@/components/projects/SectionHeading";
import {
  campaignsOverview as o, campaignPages, strategicObjectives, developmentApproach as dev,
  targetGroups, partnerships, monitoring, inclusion, documentation, sustainability,
} from "@/data/campaigns";

// Theme: green + navy + lime accent (matches the new Hopefelt design).
//  - Primary green   #1f4a2a
//  - Deep green      #0f3d2a
//  - Navy text       #0d3749
//  - Accent          lime-300 / lime-400 / lime-500, lime-200 (soft)
//  - Page tint       #f4faf6

// Subtle dotted texture used on the dark sections.
const DOTS =
  "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.09)_1px,transparent_0)] [background-size:26px_26px]";

const Chip = ({ children }) => (
  <li className="rounded-full border border-emerald-900/10 bg-white px-4 py-2 font-body text-sm font-medium text-[#1f4a2a] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400 hover:bg-lime-50 hover:shadow-card">
    {children}
  </li>
);

const CheckList = ({ items, cols = "md:grid-cols-2", light = false }) => (
  <ul className={`mt-8 grid gap-3 ${cols}`}>
    {items.map((t) => (
      <li
        key={t}
        className={`flex items-start gap-3 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
          light
            ? "border-white/10 bg-white/5 backdrop-blur-sm hover:border-lime-300/40 hover:bg-white/10"
            : "border-emerald-900/10 bg-white shadow-card hover:border-lime-400/60 hover:shadow-soft"
        }`}
      >
        <span
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
            light ? "bg-lime-300/15 text-lime-300" : "bg-emerald-50 text-[#1f4a2a]"
          }`}
        >
          <CheckIcon className="h-4 w-4" />
        </span>
        <span className={`font-body text-[0.95rem] leading-relaxed ${light ? "text-white/90" : "text-slate-700"}`}>{t}</span>
      </li>
    ))}
  </ul>
);

// Layout for /campaigns-initiatives:
// Header → Introduction + Purpose → Mission & Vision → Portfolio (11 areas) → Strategic Objectives
// → Development Approach → Target Groups → Partnerships → M&E → Inclusion & Safeguarding
// → Documentation → Sustainability → CTA
export default function CampaignsOverview() {
  const areas = Object.entries(campaignPages);

  // Quick numbers shown in the hero, derived from the data itself.
  const stats = [
    [areas.length, "Campaign areas"],
    [strategicObjectives.length, "Strategic objectives"],
    [targetGroups.groups.length, "Target groups"],
    [partnerships.partners.length, "Partner types"],
  ];

  return (
    <div className="bg-white">
      {/* ============ HERO ============ */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-[#0f3d2a] via-[#1f4a2a] to-[#0d3749]">
        <div className={`pointer-events-none absolute inset-0 -z-10 ${DOTS}`} />
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[460px] w-[460px] rounded-full bg-lime-300/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-emerald-400/20 blur-[120px]" />

        <div className="mx-auto max-w-5xl px-5 pb-10 pt-20 text-center md:px-8 md:pt-28">
          <p className="inline-flex animate-fadeUp items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
            {o.eyebrow}
          </p>
          <h1 className="mt-6 animate-fadeUp font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {o.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fadeUp font-display text-xl leading-snug text-emerald-50/90 md:text-2xl">
            {o.tagline}
          </p>
          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-lime-300 to-lime-500" />

          <nav aria-label="On this page" className="mt-8 flex flex-wrap justify-center gap-2 font-body text-sm">
            {[["#portfolio", "Campaign areas"], ["#objectives", "Objectives"], ["#approach", "Approach"], ["#partnerships", "Partnerships"], ["#learning", "Monitoring & learning"]].map(([h, l]) => (
              <a
                key={h}
                href={h}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-white/85 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-300 hover:bg-lime-300 hover:text-emerald-950"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* stats strip */}
        <div className="mx-auto max-w-5xl px-5 pb-14 md:px-8 md:pb-16">
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-sm">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-3xl font-semibold text-lime-300 md:text-4xl">{n}</dd>
                <p className="mt-1 font-body text-xs font-medium uppercase tracking-wider text-white/70">{l}</p>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* 5.1 Introduction + 5.2 Purpose */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <ScrollReveal className="lg:col-span-2">
            <SectionHeading eyebrow="Introduction" title="One coordinated framework" />
            {o.introduction.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 font-body text-base leading-8 text-slate-600">{p}</p>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={120} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-white to-[#f4faf6] p-7 shadow-soft md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="relative">
                <SectionHeading eyebrow="Purpose" title="What this portfolio is here to do" />
                <ol className="mt-8 grid gap-3 md:grid-cols-2">
                  {o.purpose.map((t, i) => (
                    <li
                      key={t}
                      className="flex gap-3 rounded-2xl border border-emerald-900/5 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/60 hover:shadow-card"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1f4a2a] to-[#0f3d2a] font-body text-xs font-semibold text-lime-300 shadow-sm">
                        {i + 1}
                      </span>
                      <span className="font-body text-sm leading-relaxed text-slate-700">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5.3 Mission / 5.4 Vision */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["Mission", o.mission, "from-[#1f4a2a] to-[#0f3d2a]"],
            ["Vision", o.vision, "from-[#0d3749] to-[#0f3d2a]"],
          ].map(([k, t, bg], i) => (
            <ScrollReveal key={k} delay={i * 100}>
              <div className={`group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${bg} p-8 text-white shadow-soft ring-1 ring-white/10 md:p-10`}>
                <div className={`pointer-events-none absolute inset-0 ${DOTS} opacity-60`} />
                <div className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-lime-300/15 blur-3xl transition-all duration-500 group-hover:bg-lime-300/25" />
                <div className="relative">
                  <p className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
                    <span className="h-px w-8 bg-lime-300" />
                    {k}
                  </p>
                  <p className="mt-5 font-display text-xl leading-8 md:text-2xl md:leading-9">{t}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5.8 / 5.14 Portfolio */}
      <section id="portfolio" className="relative scroll-mt-24 overflow-hidden border-y border-emerald-900/10 bg-[#f4faf6]">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-lime-200/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Portfolio" title="Key Campaign & Initiative Areas" text="The portfolio is organized into eleven major areas. Explore each one to see the campaigns and activities it covers." align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(([slug, p], i) => (
              <ScrollReveal key={slug} delay={(i % 3) * 80}>
                <Link
                  href={`/campaigns-initiatives/${slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-lime-400/60 hover:shadow-soft"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d2a]/70 via-[#0f3d2a]/10 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 font-display text-base font-semibold text-emerald-950 shadow-card ring-4 ring-white/30">
                      {p.letter}
                    </span>
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 font-body text-xs font-medium text-white backdrop-blur">
                      {p.items.length} activities
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-[#0d3749]">{p.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{p.tagline}</p>
                    <ul className="mt-4 flex-1 space-y-1.5">
                      {p.items.slice(0, 3).map((it) => (
                        <li key={it} className="flex items-start gap-2 font-body text-xs text-slate-500">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime-500" />{it}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t border-emerald-900/10 pt-4">
                      <span className="font-body text-sm font-semibold text-[#1f4a2a]">Explore area</span>
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f4a2a] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-lime-300 group-hover:text-emerald-950"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 Strategic Objectives */}
      <section id="objectives" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Direction" title="Strategic Objectives" text="The Campaigns & Initiatives portfolio will focus on nine strategic objectives." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strategicObjectives.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-lime-400/60 hover:shadow-soft">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-lime-300 to-lime-500 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="bg-gradient-to-br from-lime-400 to-emerald-700 bg-clip-text font-display text-5xl font-semibold leading-none text-transparent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-[#0d3749]">{s.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-slate-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1f4a2a]" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5.6 Development approach + 5.7 target groups */}
      <section id="approach" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#0f3d2a] to-[#0b2f21]">
        <div className={`pointer-events-none absolute inset-0 ${DOTS}`} />
        <div className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-lime-300/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Campaign Development Approach" title="From idea to scale" text={dev.intro} light />
          <ol className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {dev.cycle.map((s, i) => (
              <li
                key={s}
                className="group relative rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/50 hover:bg-white/10"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 font-body text-xs font-bold text-emerald-950">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-lg font-semibold leading-snug">{s}</p>
                {i < dev.cycle.length - 1 && (
                  <span className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-lime-300/70 sm:block" aria-hidden="true">›</span>
                )}
              </li>
            ))}
          </ol>
          <h3 className="mt-16 font-display text-2xl font-semibold text-white">{dev.planningTitle}</h3>
          <CheckList items={dev.planning} cols="md:grid-cols-2 lg:grid-cols-3" light />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Target Groups" title="Who our campaigns are for" text={targetGroups.intro} />
        <ul className="mt-10 flex flex-wrap gap-3">{targetGroups.groups.map((g) => <Chip key={g}>{g}</Chip>)}</ul>
      </section>

      {/* 5.9 Partnerships */}
      <section id="partnerships" className="relative scroll-mt-24 overflow-hidden border-y border-emerald-900/10 bg-[#f4faf6]">
        <div className="pointer-events-none absolute -left-32 -top-20 h-[360px] w-[360px] rounded-full bg-lime-200/30 blur-[110px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Partnerships & Collaboration" title="Working together" text={partnerships.intro} />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnerships.partners.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-white px-5 py-4 font-body text-sm font-medium text-slate-700 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/60 hover:shadow-soft"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-lime-300 to-lime-500 ring-4 ring-lime-100" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl border border-emerald-900/10 border-l-4 border-l-lime-400 bg-white p-6 font-body text-sm leading-7 text-slate-600 shadow-card">{partnerships.note}</p>
        </div>
      </section>

      {/* 5.10 M&E */}
      <section id="learning" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Monitoring, Evaluation & Learning" title="Measuring what matters" text={monitoring.intro} />
        <CheckList items={monitoring.indicators} cols="md:grid-cols-2 lg:grid-cols-3" />
        <p className="mt-8 rounded-2xl border border-emerald-900/10 border-l-4 border-l-lime-400 bg-white p-6 font-body text-sm leading-7 text-slate-600 shadow-card">{monitoring.note}</p>
      </section>

      {/* 5.11 Inclusion */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1f4a2a] to-[#0f3d2a]">
        <div className={`pointer-events-none absolute inset-0 ${DOTS}`} />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-lime-300/15 blur-[110px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading eyebrow="Inclusion, Equity & Safeguarding" title="Respectful, accessible and safe" text={inclusion.intro} light />
          <ul className="mt-10 flex flex-wrap gap-3">
            {inclusion.points.map((p) => (
              <li
                key={p}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-body text-sm text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-300 hover:bg-lime-300 hover:text-emerald-950"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5.12 Documentation + 5.13 Sustainability */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <SectionHeading eyebrow="Documentation & Knowledge Management" title="Recording what we learn" text={documentation.intro} />
            <ul className="mt-8 flex flex-wrap gap-2.5">{documentation.items.map((d) => <Chip key={d}>{d}</Chip>)}</ul>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-white to-[#f4faf6] p-7 shadow-soft md:p-10">
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="relative">
                <SectionHeading eyebrow="Sustainability & Scale-Up" title="Building for the long term" text={sustainability.intro} />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {sustainability.points.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 rounded-2xl border border-emerald-900/5 bg-white px-4 py-3 font-body text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/60 hover:shadow-card"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#1f4a2a]">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#1f4a2a] via-[#0f3d2a] to-[#0d3749] p-8 text-center text-white shadow-soft ring-1 ring-white/10 md:p-16">
            <div className={`pointer-events-none absolute inset-0 -z-10 ${DOTS}`} />
            <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-lime-300/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-[100px]" />
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              Get Involved
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-display text-xl leading-8 md:text-3xl md:leading-[1.3]">
              Volunteer, partner or support a campaign — help communities take collective action for health, dignity and sustainability.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-8 py-3.5 font-body text-sm font-semibold text-emerald-950 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-soft"
              >
                Get Involved <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/40 bg-white/5 px-8 py-3.5 font-body text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}