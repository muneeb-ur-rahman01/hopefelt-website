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
      {/* ============ HERO ============ */}
      <div className="relative h-[26rem] w-full overflow-hidden md:h-[34rem]">
        <Image
          src={page.image}
          alt={page.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
        {/* gold hairline at the base */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold via-goldSoft to-transparent" />

        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-5 pb-12 text-white md:px-8 md:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-md"
          >
            <Link href="/campaigns-initiatives" className="hover:underline">
              Campaigns &amp; Initiatives
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="text-white/90">{page.short}</span>
          </nav>

          <div className="mt-5 flex items-center gap-4 md:gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold font-display text-2xl font-semibold text-ink shadow-soft ring-4 ring-white/20 md:h-16 md:w-16 md:text-3xl">
              {page.letter}
            </span>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              {page.title}
            </h1>
          </div>

          <p className="mt-5 max-w-2xl font-body text-base leading-7 text-white/85 md:text-lg md:leading-8">
            {page.tagline}
          </p>
        </div>
      </div>

      {/* ============ ACTIVITIES ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Campaigns & Activities"
          title={`What falls under ${page.short}`}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.items.map((item, i) => (
            <ScrollReveal as="li" key={item} delay={(i % 3) * 70}>
              <div className="group relative flex h-full items-start overflow-hidden rounded-xl2 border border-line bg-surface p-6 pt-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-soft">
                {/* gold edge reveals on hover */}
                <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-gold to-forest transition-transform duration-300 group-hover:scale-y-100" />
                {/* large watermark number */}
                <span className="pointer-events-none absolute -right-1 -top-3 select-none font-display text-7xl font-semibold leading-none text-gold/20 transition-colors duration-300 group-hover:text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative font-body text-[15px] font-medium leading-relaxed text-ink">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      {/* ============ ALIGNMENT + CYCLE ============ */}
      <section className="relative overflow-hidden border-y border-line bg-surface">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-forest/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Alignment"
              title="Strategic objectives served"
            />
            <ul className="mt-8 flex flex-wrap gap-3">
              {page.focus.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-forest to-forestDark px-5 py-2.5 font-body text-sm font-medium text-white shadow-card"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/campaigns-initiatives#objectives"
              className="group mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-forest"
            >
              <span className="underline-offset-4 group-hover:underline">
                View all strategic objectives
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="How campaigns run"
              title="Our development cycle"
            />
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {developmentApproach.cycle.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-3.5 rounded-2xl border border-line bg-sand p-3 pr-5 font-body text-sm font-medium text-ink/85 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-semibold text-ink ring-4 ring-gold/25">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-xl2 bg-gradient-to-br from-forest to-forestDark p-10 text-center text-white shadow-soft md:p-16">
            {/* decorative glows + dot texture */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

            <div className="relative">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-md">
                Get Involved
              </p>
              <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-9 md:text-3xl md:leading-[1.4]">
                Want to volunteer, partner or support{" "}
                {page.short.toLowerCase()} work? Let’s talk about how we can act
                together.
              </p>
              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold px-9 py-4 font-body text-sm font-semibold text-ink shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-goldSoft hover:shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
              >
                Contact Us
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============ PREV / NEXT ============ */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Link
              href={`/campaigns-initiatives/${prevSlug}`}
              className="group flex items-center gap-4 rounded-xl2 border border-line bg-sand p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:shadow-soft"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/30 text-forest transition-all duration-300 group-hover:-translate-x-1 group-hover:bg-forest group-hover:text-white"
              >
                ←
              </span>
              <div className="min-w-0">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-forest">
                  Previous
                </span>
                <p className="mt-1 font-display text-lg leading-snug text-ink">
                  {prev.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/campaigns-initiatives/${nextSlug}`}
              className="group flex flex-row-reverse items-center gap-4 rounded-xl2 border border-line bg-sand p-5 text-right shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:shadow-soft"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/30 text-forest transition-all duration-300 group-hover:translate-x-1 group-hover:bg-forest group-hover:text-white"
              >
                →
              </span>
              <div className="min-w-0">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-forest">
                  Next
                </span>
                <p className="mt-1 font-display text-lg leading-snug text-ink">
                  {next.title}
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/campaigns-initiatives"
              className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-forest"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>
              <span className="underline-offset-4 group-hover:underline">
                All campaigns &amp; initiatives
              </span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}