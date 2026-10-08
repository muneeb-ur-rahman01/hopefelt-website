import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Hopefelt Foundation — questions, partnerships, or volunteering.",
};

const enquiryTypes = [
  "General Enquiries",
  "Partnership Enquiries",
  "Research Enquiries",
  "Volunteer Enquiries",
  "Media Enquiries",
  "Digital Marketing Enquiries",
  "Technology Enquiries",
  "Digital Health Enquiries",
  "Entrepreneurship & Business Enquiries",
  "Training Enquiries",
  "Sponsorship Enquiries",
  "Donation Enquiries",
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          Get In Touch
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Contact Us</h1>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
          Questions about our programs, partnership ideas, or want to volunteer? Send us a
          message and our team will get back to you.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-6">
          <InfoBlock label="Email" value="hopefeltfoundation@gmail.com" />
          <InfoBlock label="Phone" value="+92 (371) 0137556" />
          <InfoBlock label="Office" value="Green Town, Karachi Pakistan" />
          <InfoBlock label="Hours" value="Mon–Fri, 9:00 AM – 5:00 PM" />

          <div className="rounded-xl2 border border-line bg-surface p-5 shadow-card">
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-forest">
              Enquiry Types
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-1 font-body text-sm text-ink/80 sm:grid-cols-2">
              {enquiryTypes.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl2 border border-line bg-surface p-6 shadow-card md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value }) {
  return (
    <div className="rounded-xl2 border border-line bg-surface p-5 shadow-card">
      <p className="font-body text-xs font-semibold uppercase tracking-wide text-forest">
        {label}
      </p>
      <p className="mt-1 font-body text-sm text-ink/80">{value}</p>
    </div>
  );
}
