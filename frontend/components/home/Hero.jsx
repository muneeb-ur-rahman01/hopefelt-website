import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-sand via-surface to-gold/10" />

      <div className="relative mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

          {/* CONTENT */}
          <div>
            <span className="inline-flex rounded-full border border-forest/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Hopefelt Foundation
            </span>

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-forest sm:text-5xl lg:text-7xl">
              Building Healthier Communities Through Knowledge, Action &
              Innovation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
              Hopefelt Foundation is a community-driven organization working
              across health, education, community development, research,
              digital health, technology, entrepreneurship and innovation.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/60">
              We turn community needs, evidence and ideas into practical
              action through programs, projects, research, technology,
              partnerships, business opportunities, communication and public
              awareness.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/our-work"
                className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-forestDark"
              >
                Explore Our Work
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
              >
                Our Projects
              </Link>

              <Link
                href="/get-involved"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
              >
                Get Involved
              </Link>

              <Link
                href="/business-hub"
                className="rounded-full border border-forest/20 bg-gold/10 px-6 py-3 text-sm font-semibold text-forest transition hover:bg-gold/20"
              >
                Business Hub
              </Link>

              <Link
                href="/donate"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-soft">
              <div
                className="flex min-h-[440px] items-end rounded-[1.5rem] bg-cover bg-center p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,.58), transparent 55%), url('/images/home/hopefelt-hero.jpg')",
                }}
              >
                <div className="max-w-md text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Our Ecosystem
                  </p>

                  <p className="mt-3 text-xl font-semibold leading-8 sm:text-2xl">
                    Community → Research → Action → Innovation → Impact
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-white p-5 shadow-card sm:block">
              <p className="text-xs uppercase tracking-[0.15em] text-ink/50">
                Our Focus
              </p>

              <p className="mt-1 font-display text-lg font-semibold text-forest">
                Knowledge • Action • Innovation
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}