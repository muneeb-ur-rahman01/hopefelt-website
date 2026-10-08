import Link from "next/link";

const technologies = [
  "Software Products",
  "SaaS Platforms",
  "Digital Platforms",
  "Digital Health Solutions",
  "AI Solutions",
  "Automation",
  "Data Systems",
  "Technology Services",
];

export default function TechnologySection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div
            className="min-h-[430px] rounded-[2rem] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/home/technology.jpg')",
            }}
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Technology & Digital Innovation
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Technology designed around real-world needs.
            </h2>

            <p className="mt-5 leading-8 text-ink/65">
              Hopefelt develops and supports software products, digital
              platforms, IT solutions, data systems, automation, AI-enabled
              solutions, cybersecurity and technology for communities.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {technologies.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-line bg-white p-4 text-sm font-medium text-ink"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-forest">
                Technology Ecosystem
              </p>

              <p className="mt-2 text-sm leading-7 text-ink/60">
                Technology → Business Hub → Branding → Marketing → Social
                Media → Mass Media → Market → Impact
              </p>
            </div>

            <Link
              href="/technology"
              className="mt-7 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Technology
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}