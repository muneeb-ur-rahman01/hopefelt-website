import { products } from "@/data/products";
import ProductRow from "@/components/shared/ProductRow";

export const metadata = {
  title: "Products",
  description: "Browse Hopefelt Foundation products — proceeds support our community programs.",
};

export default function ProductsOverviewPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          What We Offer
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Products</h1>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
          Every purchase directly funds a Hopefelt program. External links open in a new
          tab so you never lose your place on our site.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-5">
        {products.map((product) => (
          <ProductRow key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
}
