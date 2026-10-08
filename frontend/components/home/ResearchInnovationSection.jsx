import Link from "next/link";

const research = [
  {
    title: "Public Health Research",
    description:
      "Research designed to understand community needs, health challenges and practical interventions.",
  },
  {
    title: "Applied & Intervention Research",
    description:
      "Evidence generation focused on solutions that can be tested, improved and applied in real-world settings.",
  },
  {
    title: "Research Innovation",
    description:
      "Connecting research findings with innovation, technology, products and opportunities for scale.",
  },
];

export default function ResearchInnovationSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Research, Evidence & Innovation
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Evidence that moves ideas forward.
            </h2>

            <p className="mt-5 leading-8 text-ink/65">
              Hopefelt supports public health research, applied research,
              intervention research, community-based research, evidence
              generation, data analysis, research presentations,
              publications, competitions, collaborations and innovation.
            </p>

            <div className="mt-7 rounded-2xl bg-sand p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-forest">
                Research to Market
              </p>

              <p className="mt-3 font-display text-xl font-semibold text-ink">
                Research → Finding → Innovation → Technology → Business Hub →
                Product → Marketing → Media → Scale
              </p>
            </div>

            <Link
              href="/research"
              className="mt-7 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Research
            </Link>
          </div>

          <div className="grid gap-4">
            {research.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line p-6 transition hover:border-forest/20 hover:shadow-card"
              >
                <span className="text-xs font-semibold text-forest/50">
                  RESEARCH 0{index + 1}
                </span>

                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-ink/60">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/50">
                  <span>Methodology</span>
                  <span>•</span>
                  <span>Evidence</span>
                  <span>•</span>
                  <span>Data</span>
                  <span>•</span>
                  <span>Innovation</span>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}