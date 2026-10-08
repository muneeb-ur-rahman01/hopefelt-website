// Small shared heading used across all Projects sections.
export default function SectionHeading({ eyebrow, title, text, align = "left", light = false }) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`font-body text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-forest"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-2 font-display text-3xl font-semibold md:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && (
        <p className={`mt-4 font-body text-base leading-relaxed ${light ? "text-white/75" : "text-ink/70"}`}>{text}</p>
      )}
    </div>
  );
}

export function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.18" />
      <path d="M6 10.4l2.6 2.6L14 7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
