import Link from "next/link";
import Image from "next/image";
import { aboutHeaderData } from "@/data/about";

/**
 * Short "Who We Are" teaser shown on the homepage.
 * Keeps only a small intro + CTA on the left and a single image on the right.
 * The full About content lives on the dedicated /about page (see
 * components/about/AboutFull.jsx), not here.
 */
export default function AboutTeaser() {
  return (
    <section className="border-t border-line bg-surface py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: small content */}
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-forest">
            {aboutHeaderData.tagline}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/70">
            Hopefelt Foundation is a youth-led, community-focused
            organization working at the intersection of health, knowledge,
            opportunity and innovation.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 font-body text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-forestDark hover:shadow-lg"
          >
            Learn More
            <svg
              width="14"
              height="14"
              viewBox="0 0 13 13"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 6.5h8M7.5 3.5l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Right: image only */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card lg:aspect-square">
          <Image
            src="https://picsum.photos/seed/hopefelt-about-teaser/900/900"
            alt="Hopefelt Foundation community member"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
