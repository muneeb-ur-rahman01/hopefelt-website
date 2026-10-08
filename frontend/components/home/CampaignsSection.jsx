import Link from "next/link";

const campaigns = [
  {
    title: "Health Awareness",
    description:
      "Health messages and community awareness activities designed around real needs.",
  },
  {
    title: "Community Action",
    description:
      "Initiatives encouraging communities to understand issues and participate in practical action.",
  },
  {
    title: "Climate & Environment",
    description:
      "Awareness and community initiatives supporting environmental health and resilience.",
  },
  {
    title: "Entrepreneurship & Innovation",
    description:
      "Campaigns and initiatives supporting ideas, innovation, entrepreneurship and opportunity.",
  },
];

export default function CampaignsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 lg:px-12">

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Campaigns & Initiatives
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Turning important messages into community action.
          </h2>

          <p className="mt-5 leading-8 text-ink/65">
            Hopefelt campaigns connect an issue with a clear message,
            communication strategy, social media, mass media, community
            participation and measurable results.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {campaigns.map((campaign) => (
            <article
              key={campaign.title}
              className="overflow-hidden rounded-3xl border border-line bg-white"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/campaigns/campaign-placeholder.jpg')",
                }}
              />

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {campaign.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink/60">
                  {campaign.description}
                </p>

                <p className="mt-5 text-xs font-medium leading-6 text-forest">
                  Issue → Message → Marketing → Social Media → Mass Media →
                  Action → Result
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/campaigns-initiatives"
            className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white"
          >
            Explore Campaigns
          </Link>
        </div>

      </div>
    </section>
  );
}