import Image from "next/image";
import Link from "next/link";

export default function ProductRow({ slug, name, description, image, url }) {
  return (
    <div className="flex flex-col gap-6 rounded-xl2 border border-line bg-surface p-5 shadow-card transition-shadow duration-300 hover:shadow-soft sm:flex-row sm:items-center">
      <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48">
        <Image src={image} alt={name} fill sizes="200px" className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            <Link href={`/products/${slug}`} className="hover:text-forest">
              {name}
            </Link>
          </h3>
          {description && (
            <p className="mt-1 max-w-md font-body text-sm text-ink/70">{description}</p>
          )}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-card"
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
  );
}
