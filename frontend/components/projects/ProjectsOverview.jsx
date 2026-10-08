import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/projects/SectionHeading";
import { projectsOverview as o, projectPages } from "@/data/projects";

// Layout for /projects:
//  1. Page header  2. Introduction + Our Approach  3. Project Areas grid (4:3 cards)
//  4. Coordinator introduction  5. Work With Us / Recruitment banner
export default function ProjectsOverview() {
  const areas = Object.entries(projectPages);
  const c = o.coordinator;
  const r = o.recruitment;

  return (
    <div>
      {/* 1 — Header */}
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
          <p className="animate-fadeUp font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">{o.eyebrow}</p>
          <h1 className="mt-3 animate-fadeUp font-display text-4xl font-semibold text-ink md:text-6xl">{o.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl animate-fadeUp font-display text-xl leading-snug text-forest md:text-2xl">
            {o.tagline}
          </p>
          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-gold" />
        </div>
      </header>

      {/* 2 — Introduction + Approach */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <ScrollReveal className="lg:col-span-3">
            <SectionHeading eyebrow="Introduction" title="Practical, people-centered work" />
            <p className="mt-5 font-body text-base leading-8 text-ink/75">{o.introduction}</p>
          </ScrollReveal>

          <ScrollReveal delay={120} className="lg:col-span-2">
            <div className="h-full rounded-xl2 bg-forest p-7 text-white shadow-soft md:p-8">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">{o.approach.title}</p>
              <p className="mt-4 font-body text-[0.95rem] leading-7 text-white/85">{o.approach.text}</p>
              <ol className="mt-6 flex flex-wrap gap-2">
                {o.approach.steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-2 rounded-full bg-white/10 py-1 pl-1 pr-3 font-body text-xs font-medium">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[0.65rem] font-bold text-ink">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 — Project areas */}
      <section id="project-areas" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
          <SectionHeading eyebrow="Explore" title={o.areas.title} text={o.areas.text} align="center" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(([slug, p], i) => (
              <ScrollReveal key={slug} delay={(i % 3) * 80}>
                <Link
                  href={`/projects/${slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1 font-body text-xs font-semibold text-forest shadow-card">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink/70">{p.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-forest">
                      Explore
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Coordinator */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ScrollReveal>
          <div className="grid items-center gap-8 rounded-xl2 border border-line bg-surface p-8 shadow-card md:grid-cols-[auto,1fr] md:gap-12 md:p-12">
            {c.image ? (
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-goldSoft md:h-48 md:w-48">
                <Image src={c.image} alt={c.name || c.role} fill sizes="192px" className="object-cover" />
              </div>
            ) : (
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 border-goldSoft bg-forest md:h-48 md:w-48" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-16 w-16 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                </svg>
              </div>
            )}
            <div className="text-center md:text-left">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">{c.eyebrow}</p>
              <p className="mt-4 font-display text-lg leading-8 text-ink md:text-xl md:leading-9">
                <span className="mr-1 text-3xl text-gold" aria-hidden="true">“</span>
                {c.text}
              </p>
              <p className="mt-5 font-body text-sm font-semibold text-forest">
                {c.name ? `${c.name} · ` : ""}{c.role}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5 — Recruitment */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <ScrollReveal>
          <div className="rounded-xl2 bg-gradient-to-br from-forest to-forestDark p-8 text-white shadow-soft md:p-14">
            <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <SectionHeading eyebrow={r.eyebrow} title={r.title} text={r.text} light />
              </div>
              <div className="lg:col-span-2">
                <ul className="flex flex-wrap gap-2">
                  {r.roles.map((role) => (
                    <li key={role} className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-body text-sm">{role}</li>
                  ))}
                  <li className="rounded-full border border-gold/50 px-4 py-1.5 font-body text-sm text-goldSoft">+ other specialist roles</li>
                </ul>
                <Link
                  href={r.cta.href}
                  className="mt-8 inline-flex rounded-full bg-gold px-7 py-3 font-body text-sm font-semibold text-ink shadow-card transition-all hover:-translate-y-0.5 hover:bg-goldSoft"
                >
                  {r.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
