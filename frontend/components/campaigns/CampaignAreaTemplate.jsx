import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/projects/SectionHeading";
import { campaignPages, developmentApproach } from "@/data/campaigns";

// Layout for /campaigns-initiatives/[slug]:
// Hero → Activities grid → Aligned objectives + How campaigns run (cycle) → CTA → prev/next + other areas
export default function CampaignAreaTemplate({ slug, page }) {
  const keys = Object.keys(campaignPages);
  const idx = keys.indexOf(slug);
  const prev = campaignPages[keys[(idx - 1 + keys.length) % keys.length]];
  const next = campaignPages[keys[(idx + 1) % keys.length]];
  const prevSlug = keys[(idx - 1 + keys.length) % keys.length];
  const nextSlug = keys[(idx + 1) % keys.length];

  return (
    <article>
      <div className="relative h-80 w-full overflow-hidden md:h-[30rem]">
        <Image src={page.image} alt={page.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-5 pb-10 text-white md:px-8 md:pb-14">
          <nav aria-label="Breadcrumb" className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Link href="/campaigns-initiatives" className="hover:underline">Campaigns & Initiatives</Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white/80">{page.short}</span>
          </nav>
          <div className="mt-3 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-display text-xl font-semibold text-ink">{page.letter}</span>
            <h1 className="max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{page.title}</h1>
          </div>
          <p className="mt-3 max-w-2xl font-body text-base text-white/85 md:text-lg">{page.tagline}</p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Campaigns & Activities" title={`What falls under ${page.short}`} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.items.map((item, i) => (
            <ScrollReveal as="li" key={item} delay={(i % 3) * 70}>
              <div className="flex h-full items-start gap-4 rounded-xl2 border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-soft">
                <span className="font-display text-2xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-body text-sm font-medium leading-relaxed text-ink">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Alignment" title="Strategic objectives served" />
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {page.focus.map((f) => (
                <li key={f} className="rounded-full bg-forest px-4 py-2 font-body text-sm font-medium text-white">{f}</li>
              ))}
            </ul>
            <Link href="/campaigns-initiatives#objectives" className="mt-6 inline-block font-body text-sm font-semibold text-forest hover:underline">View all strategic objectives →</Link>
          </div>
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="How campaigns run" title="Our development cycle" />
            <ol className="mt-6 flex flex-wrap gap-2">
              {developmentApproach.cycle.map((s, i) => (
                <li key={s} className="flex items-center gap-2 rounded-full border border-line bg-sand py-1.5 pl-1.5 pr-4 font-body text-sm font-medium text-ink/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">{i + 1}</span>{s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <ScrollReveal>
          <div className="rounded-xl2 bg-gradient-to-br from-forest to-forestDark p-8 text-center text-white shadow-soft md:p-14">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get Involved</p>
            <p className="mx-auto mt-4 max-w-2xl font-display text-xl leading-8 md:text-2xl md:leading-9">
              Want to volunteer, partner or support {page.short.toLowerCase()} work? Let’s talk about how we can act together.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold text-ink shadow-card transition-all hover:-translate-y-0.5 hover:bg-goldSoft">Contact Us</Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href={`/campaigns-initiatives/${prevSlug}`} className="rounded-xl2 border border-line bg-sand p-5 transition-colors hover:border-forest">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-forest">← Previous</span>
              <p className="mt-1 font-display text-lg text-ink">{prev.title}</p>
            </Link>
            <Link href={`/campaigns-initiatives/${nextSlug}`} className="rounded-xl2 border border-line bg-sand p-5 text-right transition-colors hover:border-forest">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-forest">Next →</span>
              <p className="mt-1 font-display text-lg text-ink">{next.title}</p>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/campaigns-initiatives" className="font-body text-sm font-semibold text-forest hover:underline">← All campaigns & initiatives</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
