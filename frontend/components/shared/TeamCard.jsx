import Image from "next/image";

export default function TeamCard({ name, role, image, bio, size = "md" }) {
  const dims = size === "lg" ? "h-24 w-24" : "h-16 w-16";

  return (
    <div className="flex w-44 flex-col items-center gap-2 rounded-xl2 border border-line bg-surface p-4 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft sm:w-52">
      <div className={`relative ${dims} overflow-hidden rounded-full border-2 border-gold`}>
        <Image src={image} alt={name} fill sizes="120px" className="object-cover" />
      </div>
      <p className="font-display text-sm font-semibold text-ink">{name}</p>
      <p className="font-body text-xs font-medium uppercase tracking-wide text-forest">
        {role}
      </p>
      {bio && <p className="font-body text-xs text-ink/60">{bio}</p>}
    </div>
  );
}
