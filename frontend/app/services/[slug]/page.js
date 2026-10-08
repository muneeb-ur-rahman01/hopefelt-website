import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <article>
      <div className="relative h-72 w-full overflow-hidden md:h-96">
        <Image src={service.image} alt={service.name} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-10 text-center text-white">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Services
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold md:text-5xl">{service.name}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        {service.body.map((paragraph, i) => (
          <p key={i} className="mb-5 font-body text-base leading-relaxed text-ink/80">
            {paragraph}
          </p>
        ))}

        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-forest px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forestDark"
        >
          Get Involved
        </Link>
      </div>
    </article>
  );
}
