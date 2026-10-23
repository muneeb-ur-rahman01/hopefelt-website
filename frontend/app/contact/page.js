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
   <ContactForm/>
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
