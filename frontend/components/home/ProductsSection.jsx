import Link from "next/link";

const products = [
  {
    name: "Product 01",
    type: "Software Product",
    description:
      "A Hopefelt technology product designed to address a practical community, health or organizational need.",
  },
  {
    name: "Product 02",
    type: "Digital Platform",
    description:
      "A digital platform concept connecting users, services, information and practical solutions.",
  },
  {
    name: "Product 03",
    type: "Digital Health",
    description:
      "A digital health solution supporting access, information, screening, care or health data.",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Products & Solutions
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              From problem to product.
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-ink/65">
              Technology and innovation can become practical products and
              services when connected with research, users, business models
              and responsible growth.
            </p>
          </div>

          <Link
            href="/technology/products"
            className="text-sm font-semibold text-forest"
          >
            View Products →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="rounded-3xl border border-line bg-surface p-7"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-forest/60">
                {product.type}
              </span>

              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {product.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-ink/60">
                {product.description}
              </p>

              <div className="mt-6 border-t border-line pt-5 text-xs text-ink/50">
                Problem → Solution → Features → Users → Business Model →
                Impact
              </div>

              <Link
                href="/technology/products"
                className="mt-6 inline-flex text-sm font-semibold text-forest"
              >
                Explore Product →
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}