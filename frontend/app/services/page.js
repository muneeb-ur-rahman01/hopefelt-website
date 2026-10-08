import Link from "next/link";
import Card from "@/components/shared/Card";

import { services } from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "Explore Hopefelt Foundation's programs: community development, education, healthcare, empowerment, and social support.",
};

export default function ServicesOverviewPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          What We Do
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Our Services</h1>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
          Five focus areas guide every Hopefelt program, each built and run alongside the
          communities they serve.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card title={service.name} description={service.summary} image={service.image} />
          </Link>
        ))}
      </div>
    </section>
  );
}
