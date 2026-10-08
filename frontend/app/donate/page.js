import Link from "next/link";

export const metadata = {
  title: "Donate",
  description: "Support Hopefelt Foundation's medical camps, education, and community programs with a donation.",
};

const impactTiers = [
  { amount: "$25", impact: "Supplies for one health-education session" },
  { amount: "$75", impact: "One family's mobile medical camp visit, screening to referral" },
  { amount: "$150", impact: "A month of tutoring materials for one classroom" },
  { amount: "$500", impact: "One community water access point maintenance cycle" },
];

const donationCategories = [
  { label: "Medical Support", blurb: "Medical camps, screenings, and preventive health services." },
  { label: "Community Support", blurb: "Outreach, engagement, and support for vulnerable communities." },
  { label: "Research Funding", blurb: "Applied and intervention research studies." },
  { label: "Campaign Support", blurb: "Health, community, and climate awareness campaigns." },
  { label: "Education & Training", blurb: "Training programs, workshops, and capacity development." },
  { label: "Digital Health", blurb: "Virtual Clinic, Virtual Pharmacy, and telehealth access." },
  { label: "Technology & Innovation", blurb: "Software products and digital platforms supporting our programs." },
  { label: "Entrepreneurship & Business Hub", blurb: "Mentorship, seed support, and startup incubation for local founders." },
];

export default function DonatePage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          Support Our Work
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Donate</h1>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
          Every gift goes directly toward funding our medical camps, education programs,
          climate work, and community projects. Here&apos;s roughly what different gift sizes
          make possible.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {impactTiers.map((tier) => (
          <div key={tier.amount} className="rounded-xl2 border border-line bg-surface p-6 shadow-card">
            <p className="font-display text-2xl font-semibold text-forest">{tier.amount}</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{tier.impact}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-center font-display text-2xl font-semibold text-ink">
          Donation Categories
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center font-body text-sm text-ink/70">
          Prefer to direct your gift to a specific area? Let us know which category matters
          most to you.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {donationCategories.map((cat) => (
            <div key={cat.label} className="rounded-xl2 border border-line bg-surface p-6 shadow-card">
              <p className="font-display text-base font-semibold text-forest">{cat.label}</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{cat.blurb}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-xl2 border border-line bg-sand p-8 text-center shadow-card">
        <h2 className="font-display text-xl font-semibold text-ink">Ready to give?</h2>
        <p className="mt-2 font-body text-sm text-ink/70">
          Reach out through our contact form and our team will follow up with secure payment
          details and, for recurring or larger gifts, a dedicated donor contact.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forestDark hover:shadow-soft"
        >
          Contact Us to Donate
        </Link>
      </div>

      <p className="mt-10 text-center font-body text-sm text-ink/60">
        Want a recurring role instead of a one-time gift? See{" "}
        <Link href="/get-involved/become-a-sponsor" className="font-medium text-forest underline">
          Sponsorship Opportunities
        </Link>{" "}
        or{" "}
        <Link href="/get-involved" className="font-medium text-forest underline">
          Get Involved
        </Link>{" "}
        for volunteering and partnership options. To fund a specific project or research study
        directly, mention it in your message to our team, and see our commitment to{" "}
        <Link href="/impact" className="font-medium text-forest underline">
          transparency &amp; accountability
        </Link>{" "}
        in how gifts are used.
      </p>
    </section>
  );
}
