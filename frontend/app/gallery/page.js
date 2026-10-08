import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export const metadata = {
  title: "Gallery",
  description: "Photos from Hopefelt Foundation's medical camps, projects, campaigns, and events.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          In Pictures
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Gallery</h1>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/70">
          Moments from our medical camps, classrooms, campaigns, and community events.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {galleryImages.map((img) => (
          <div key={img.src} className="group relative aspect-square overflow-hidden rounded-xl2 border border-line shadow-card">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
