import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="relative h-72 w-full overflow-hidden rounded-xl2 shadow-card md:h-96">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Products
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
            {product.description}
          </p>

          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            Visit Product
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M4 10L10 4M10 4H5M10 4V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
