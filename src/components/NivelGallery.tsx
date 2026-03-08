"use client";

import { useState } from "react";
import type { GalleryItem } from "@/lib/types";

interface NivelGalleryProps {
  gallery: GalleryItem[];
}

export default function NivelGallery({ gallery }: NivelGalleryProps) {
  const [active, setActive] = useState(0);
  if (!gallery?.length) return null;

  return (
    <section className="section-white py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Instalaciones
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Galería
          </h2>
        </div>

        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4 aspect-video max-w-4xl mx-auto">
          <img
            src={gallery[active].image}
            alt={gallery[active].caption || ""}
            className="w-full h-full object-cover"
          />
          {gallery[active].caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm text-center">{gallery[active].caption}</p>
            </div>
          )}
          {/* arrows */}
          <button
            onClick={() => setActive((active - 1 + gallery.length) % gallery.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all flex items-center justify-center text-xl"
          >
            ‹
          </button>
          <button
            onClick={() => setActive((active + 1) % gallery.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all flex items-center justify-center text-xl"
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 justify-center flex-wrap">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl overflow-hidden transition-all ${
                i === active
                  ? "ring-2 ring-brand-blue ring-offset-2 scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={g.image} alt="" className="w-16 h-12 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
