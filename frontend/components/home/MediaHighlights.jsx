import Link from "next/link";

const media = [
  "Television",
  "Radio",
  "Newspapers",
  "Online Media",
  "Interviews",
  "Press Releases",
  "Media Partnerships",
];

export default function MediaHighlights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Media & Mass Media
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Taking meaningful work to wider audiences.
            </h2>

            <p className="mt-5 leading-8 text-ink/65">
              Hopefelt uses communication, marketing, social media and mass
              media to turn knowledge and community work into awareness,
              engagement and action.
            </p>

            <p className="mt-5 font-medium leading-7 text-forest">
              Project → Campaign → Marketing → Mass Media → Impact Story
            </p>

            <Link
              href="/communications"
              className="mt-7 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Communications
            </Link>
          </div>

          <div className="rounded-[2rem] bg-sand p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Media Coverage Wall
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {media.map((item) => (
                <div
                  key={item}
                  className="flex min-h-28 items-center justify-center rounded-2xl border border-line bg-white p-4 text-center"
                >
                  <span className="text-sm font-semibold text-ink">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}