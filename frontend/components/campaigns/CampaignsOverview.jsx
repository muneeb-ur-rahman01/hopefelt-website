import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading, { CheckIcon } from "@/components/projects/SectionHeading";
import {
  campaignsOverview as o, campaignPages, strategicObjectives, developmentApproach as dev,
  targetGroups, partnerships, monitoring, inclusion, documentation, sustainability,
} from "@/data/campaigns";

const Chip = ({ children }) => (
  <li className="rounded-full border border-line bg-sand px-4 py-2 font-body text-sm font-medium text-forest">{children}</li>
);

const CheckList = ({ items, cols = "md:grid-cols-2", light = false }) => (
  <ul className={`mt-8 grid gap-x-10 gap-y-4 ${cols}`}>
    {items.map((t) => (
      <li key={t} className={`flex items-start gap-3 border-b pb-4 ${light ? "border-white/10" : "border-line"}`}>
        <CheckIcon className={`mt-0.5 h-5 w-5 shrink-0 ${light ? "text-gold" : "text-forest"}`} />
        <span className={`font-body text-[0.95rem] leading-relaxed ${light ? "text-white/90" : "text-ink/80"}`}>{t}</span>
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
  return (
    <div>
      <header className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
          <p className="animate-fadeUp font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">{o.eyebrow}</p>
          <h1 className="mt-3 animate-fadeUp font-display text-4xl font-semibold text-ink md:text-6xl">{o.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl animate-fadeUp font-display text-xl leading-snug text-forest md:text-2xl">{o.tagline}</p>
          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-gold" />
          <nav aria-label="On this page" className="mt-8 flex flex-wrap justify-center gap-2 font-body text-sm">
            {[["#portfolio", "Campaign areas"], ["#objectives", "Objectives"], ["#approach", "Approach"], ["#partnerships", "Partnerships"], ["#learning", "Monitoring & learning"]].map(([h, l]) => (
              <a key={h} href={h} className="rounded-full border border-line bg-sand px-4 py-1.5 text-ink/70 transition-colors hover:border-forest hover:text-forest">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* 5.1 Introduction + 5.2 Purpose */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <ScrollReveal className="lg:col-span-2">
            <SectionHeading eyebrow="Introduction" title="One coordinated framework" />
            {o.introduction.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 font-body text-base leading-8 text-ink/75">{p}</p>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={120} className="lg:col-span-3">
            <div className="rounded-xl2 border border-line bg-surface p-7 shadow-card md:p-9">
              <SectionHeading eyebrow="Purpose" title="What this portfolio is here to do" />
              <ol className="mt-7 grid gap-x-8 gap-y-4 md:grid-cols-2">
                {o.purpose.map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest font-body text-xs font-semibold text-white">{i + 1}</span>
                    <span className="font-body text-sm leading-relaxed text-ink/80">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5.3 Mission / 5.4 Vision */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[["Mission", o.mission, "bg-forest"], ["Vision", o.vision, "bg-forestDark"]].map(([k, t, bg], i) => (
            <ScrollReveal key={k} delay={i * 100}>
              <div className={`h-full rounded-xl2 ${bg} p-8 text-white shadow-soft md:p-10`}>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">{k}</p>
                <p className="mt-4 font-display text-xl leading-8 md:text-2xl md:leading-9">{t}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5.8 / 5.14 Portfolio */}
      <section id="portfolio" className="border-y border-line bg-sand scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Portfolio" title="Key Campaign & Initiative Areas" text="The portfolio is organized into eleven major areas. Explore each one to see the campaigns and activities it covers." align="center" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(([slug, p], i) => (
              <ScrollReveal key={slug} delay={(i % 3) * 80}>
                <Link href={`/campaigns-initiatives/${slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gold font-display text-base font-semibold text-ink shadow-card">{p.letter}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{p.tagline}</p>
                    <ul className="mt-4 flex-1 space-y-1.5">
                      {p.items.slice(0, 3).map((it) => (
                        <li key={it} className="flex items-start gap-2 font-body text-xs text-ink/60">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />{it}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-forest">
                      {p.items.length} activities <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 Strategic Objectives */}
      <section id="objectives" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Direction" title="Strategic Objectives" text="The Campaigns & Initiatives portfolio will focus on nine strategic objectives." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strategicObjectives.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-xl2 border border-line bg-surface p-6 shadow-card">
                <span className="font-display text-3xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink/70">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5.6 Development approach + 5.7 target groups */}
      <section id="approach" className="scroll-mt-24 bg-forestDark">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Campaign Development Approach" title="From idea to scale" text={dev.intro} light />
          <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {dev.cycle.map((s, i) => (
              <li key={s} className="relative rounded-xl2 border border-white/15 bg-white/5 px-4 py-4 text-white">
                <span className="font-body text-xs font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 font-display text-lg font-semibold">{s}</p>
              </li>
            ))}
          </ol>
          <h3 className="mt-14 font-display text-2xl font-semibold text-white">{dev.planningTitle}</h3>
          <CheckList items={dev.planning} cols="md:grid-cols-2 lg:grid-cols-3" light />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Target Groups" title="Who our campaigns are for" text={targetGroups.intro} />
        <ul className="mt-8 flex flex-wrap gap-2.5">{targetGroups.groups.map((g) => <Chip key={g}>{g}</Chip>)}</ul>
      </section>

      {/* 5.9 Partnerships */}
      <section id="partnerships" className="scroll-mt-24 border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Partnerships & Collaboration" title="Working together" text={partnerships.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnerships.partners.map((p) => (
              <li key={p} className="rounded-xl2 border border-line bg-sand px-5 py-4 font-body text-sm font-medium text-ink/80">{p}</li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl2 border-l-4 border-gold bg-sand p-5 font-body text-sm leading-7 text-ink/75">{partnerships.note}</p>
        </div>
      </section>

      {/* 5.10 M&E */}
      <section id="learning" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Monitoring, Evaluation & Learning" title="Measuring what matters" text={monitoring.intro} />
        <CheckList items={monitoring.indicators} cols="md:grid-cols-2 lg:grid-cols-3" />
        <p className="mt-8 rounded-xl2 border-l-4 border-gold bg-surface p-5 font-body text-sm leading-7 text-ink/75 shadow-card">{monitoring.note}</p>
      </section>

      {/* 5.11 Inclusion */}
      <section className="bg-forest">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Inclusion, Equity & Safeguarding" title="Respectful, accessible and safe" text={inclusion.intro} light />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {inclusion.points.map((p) => (
              <li key={p} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 font-body text-sm text-white">{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5.12 Documentation + 5.13 Sustainability */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <SectionHeading eyebrow="Documentation & Knowledge Management" title="Recording what we learn" text={documentation.intro} />
            <ul className="mt-7 flex flex-wrap gap-2">{documentation.items.map((d) => <Chip key={d}>{d}</Chip>)}</ul>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="h-full rounded-xl2 border border-line bg-surface p-7 shadow-card md:p-9">
              <SectionHeading eyebrow="Sustainability & Scale-Up" title="Building for the long term" text={sustainability.intro} />
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {sustainability.points.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 font-body text-sm text-ink/80">
                    <CheckIcon className="h-5 w-5 shrink-0 text-forest" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <ScrollReveal>
          <div className="rounded-xl2 bg-gradient-to-br from-forest to-forestDark p-8 text-center text-white shadow-soft md:p-14">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get Involved</p>
            <p className="mx-auto mt-4 max-w-2xl font-display text-xl leading-8 md:text-2xl md:leading-9">
              Volunteer, partner or support a campaign — help communities take collective action for health, dignity and sustainability.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/get-involved" className="inline-flex rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold text-ink shadow-card transition-all hover:-translate-y-0.5 hover:bg-goldSoft">Get Involved</Link>
              <Link href="/contact" className="inline-flex rounded-full border border-white/40 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10">Contact Us</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
