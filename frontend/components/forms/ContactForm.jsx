"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "General Enquiries",
  subject: "",
  message: "",
};

const enquiryTypeOptions = [
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

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactForm(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} />
        <label className="flex flex-col gap-1.5">
          <span className="font-body text-sm font-medium text-ink">Enquiry Type *</span>
          <select
            name="enquiryType"
            value={form.enquiryType}
            onChange={handleChange}
            required
            className="rounded-xl border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-forest"
          >
            {enquiryTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Field
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <label className="flex flex-col gap-1.5">
        <span className="font-body text-sm font-medium text-ink">Message *</span>
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="rounded-xl border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-forest"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-forest px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-forestDark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="rounded-xl bg-forest/10 px-4 py-3 font-body text-sm text-forestDark">
            Thanks for reaching out — we&apos;ll get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 font-body text-sm text-red-700">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-body text-sm font-medium text-ink">
        {label} {required && "*"}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-xl border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-forest"
      />
    </label>
  );
}
