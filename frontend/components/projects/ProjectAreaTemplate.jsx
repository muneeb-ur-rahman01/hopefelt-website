import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading, { CheckIcon } from "@/components/projects/SectionHeading";
import { projectPages, sharedApproach, sharedGetInvolved } from "@/data/projects";

// Layout for each /projects/[slug] page:
//  Hero (16:9) → Introduction + Goal → What We Do → Objectives + Who We Work With
//  → Expected Outcomes → Our Approach → Get Involved CTA → other project areas
export default function ProjectAreaTemplate({ slug, page }) {
  const others = Object.entries(projectPages).filter(([s]) => s !== slug);

  return (
    <article>
      {/* Hero */}
      <div className="relative h-80 w-full overflow-hidden md:h-[30rem]">
        <Image src={page.image} alt={page.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-5 pb-10 text-white md:px-8 md:pb-14">
          <nav aria-label="Breadcrumb" className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Link href="/projects" className="hover:underline">Projects</Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white/80">{page.short}</span>
          </nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{page.title}</h1>
          <p className="mt-3 max-w-2xl font-body text-base text-white/85 md:text-lg">{page.tagline}</p>
        </div>
      </div>

      {/* Introduction + Goal */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <ScrollReveal className="lg:col-span-3">
            <SectionHeading eyebrow="Introduction" title="What this work is about" />
            <p className="mt-5 font-body text-base leading-8 text-ink/75">{page.introduction}</p>
          </ScrollReveal>
          <ScrollReveal delay={120} className="lg:col-span-2">
            <div className="h-full rounded-xl2 bg-forest p-7 text-white shadow-soft md:p-8">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">Goal</p>
              <p className="mt-4 font-display text-xl leading-8 md:text-2xl md:leading-9">{page.goal}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Activities" title="What We Do" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.whatWeDo.map((item, i) => (
              <ScrollReveal as="li" key={item} delay={(i % 4) * 70}>
                <div className="h-full rounded-xl2 border border-line bg-sand p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card">
                  <span className="font-display text-2xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-body text-sm font-medium leading-relaxed text-ink">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Objectives + Who We Work With */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <SectionHeading eyebrow="Direction" title="Objectives" />
            <ol className="mt-8 space-y-4">
              {page.objectives.map((obj, i) => (
                <li key={obj} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-body text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="font-body text-base leading-relaxed text-ink/80">{obj}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="h-full rounded-xl2 border border-line bg-surface p-7 shadow-card md:p-9">
              <SectionHeading eyebrow="Partners & Participants" title="Who We Work With" />
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {page.who.map((w) => (
                  <li key={w} className="rounded-full border border-line bg-sand px-4 py-2 font-body text-sm font-medium text-forest">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="bg-forestDark">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Results" title="Expected Outcomes" light />
          <ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {page.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 border-b border-white/10 pb-5">
                <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <span className="font-body text-base leading-relaxed text-white/90">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <ScrollReveal>
          <SectionHeading eyebrow="How We Work" title="Our Approach" align="center" />
          <p className="mt-6 rounded-xl2 border-l-4 border-gold bg-surface p-6 font-body text-base leading-8 text-ink/80 shadow-card md:p-8">
            {sharedApproach}
          </p>
        </ScrollReveal>
      </section>

      {/* Get Involved */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <ScrollReveal>
          <div className="rounded-xl2 bg-gradient-to-br from-forest to-forestDark p-8 text-center text-white shadow-soft md:p-14">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get Involved</p>
            <p className="mx-auto mt-4 max-w-2xl font-display text-xl leading-8 md:text-2xl md:leading-9">{sharedGetInvolved}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold text-ink shadow-card transition-all hover:-translate-y-0.5 hover:bg-goldSoft"
            >
              {page.cta}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Other project areas */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">More project areas</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {others.map(([s, p]) => (
              <li key={s}>
                <Link
                  href={`/projects/${s}`}
                  className="inline-flex rounded-full border border-line bg-sand px-4 py-2 font-body text-sm font-medium text-ink/80 transition-colors hover:border-forest hover:bg-forest hover:text-white"
                >
                  {p.short}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/projects" className="inline-flex rounded-full px-4 py-2 font-body text-sm font-semibold text-forest hover:underline">
                ← All projects
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
