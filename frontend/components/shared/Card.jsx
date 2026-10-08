import Image from "next/image";

export default function Card({ title, description, image, alt }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={alt || title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="font-body text-sm leading-relaxed text-ink/70">{description}</p>
      </div>
    </div>
  );
}
