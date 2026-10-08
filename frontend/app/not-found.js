import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center md:px-8">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 font-body text-base text-ink/70">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-forest px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forestDark"
      >
        Back to Home
      </Link>
    </section>
  );
}
