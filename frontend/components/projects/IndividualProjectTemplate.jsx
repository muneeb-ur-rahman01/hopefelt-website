import Image from "next/image";
import Link from "next/link";
import SectionHeading, { CheckIcon } from "@/components/projects/SectionHeading";

// Layout for a single project: Hero → Introduction + The Need → Goal → What We Do
// → Who We Support → Outcomes → Get Involved.
export default function IndividualProjectTemplate({ project: p }) {
  return (
    <article>
      <div className="relative h-72 w-full overflow-hidden md:h-[26rem]">
        <Image src={p.image} alt={p.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-5 pb-10 text-white md:px-8">
          <Link href="/projects" className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold hover:underline">← Projects</Link>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold md:text-5xl">{p.name}</h1>
          <p className="mt-3 max-w-2xl font-body text-base text-white/85 md:text-lg">{p.tagline}</p>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="Introduction" title="About the project" />
          <p className="mt-5 font-body text-base leading-8 text-ink/75">{p.introduction}</p>
          <h3 className="mt-10 font-display text-2xl font-semibold text-ink">The Need</h3>
          <p className="mt-3 font-body text-base leading-8 text-ink/75">{p.need}</p>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-xl2 bg-forest p-7 text-white shadow-soft md:p-8">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">Goal</p>
            <p className="mt-4 font-display text-xl leading-8">{p.goal}</p>
          </div>
          <div className="mt-6 rounded-xl2 border border-line bg-surface p-7 shadow-card">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">Who We Support</p>
            <p className="mt-3 font-body text-sm leading-7 text-ink/75">{p.support}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Activities" title="What We Do" />
            <ul className="mt-8 space-y-3">
              {p.what.map((w, i) => (
                <li key={w} className="flex items-center gap-4 rounded-xl2 border border-line bg-sand px-5 py-4 font-body text-sm font-medium">
                  <span className="font-display text-lg font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Results" title="Outcomes" />
            <ul className="mt-8 space-y-4">
              {p.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 font-body text-base leading-relaxed text-ink/80">
                  <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-forest" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="rounded-xl2 bg-gradient-to-br from-forest to-forestDark p-8 text-center text-white shadow-soft md:p-14">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get Involved</p>
          <p className="mx-auto mt-4 max-w-2xl font-display text-xl leading-8 md:text-2xl">
            Interested in supporting, partnering on or developing a similar project? Contact us to discuss the opportunity.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold text-ink shadow-card hover:bg-goldSoft">
            Contact Us
          </Link>
        </div>
      </section>
    </article>
  );
}
