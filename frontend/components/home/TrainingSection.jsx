import Link from "next/link";

const training = [
  "Training Programs",
  "Workshops",
  "Capacity Building",
  "Professional Development",
  "Internships",
  "Research Training",
  "Digital Health Training",
  "Technology Training",
  "Entrepreneurship Training",
  "Business Skills",
  "Digital Marketing Training",
  "Communication & Media Training",
];

export default function TrainingSection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Training & Capacity Development
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Building skills that can be applied in the real world.
            </h2>

            <p className="mt-5 leading-8 text-ink/65">
              Hopefelt supports learning through training, workshops,
              internships, field experience, volunteer learning, research,
              digital health, technology, entrepreneurship, business,
              marketing, communication and media.
            </p>

            <div className="mt-7 rounded-2xl bg-white p-6">
              <p className="font-display text-xl font-semibold text-ink">
                Training → Participants → Skills → Application → Outcome
              </p>
            </div>

            <Link
              href="/training"
              className="mt-7 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Training
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {training.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-line bg-white p-4 text-sm font-medium text-ink"
              >
                {item}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}