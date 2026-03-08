"use client";

import { useState } from "react";
import type { GalleryItem } from "@/lib/types";
import Container from "@/components/Container";

interface Props {
  gallery: GalleryItem[];
  embedded?: boolean;
}

export default function NivelGallery({ gallery, embedded = false }: Props) {
  const [active, setActive] = useState(0);
  if (!gallery?.length) return null;

  const inner = (
    <div className="flex flex-col h-full">
      {/* Header homologado — dentro del padding de la card */}
      <div className="px-6 pt-6 pb-4">
        <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-1">Instalaciones</p>
        <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "var(--font-display)" }}>
          Galería
        </h2>
      </div>

      {/* Imagen principal */}
      <div className="relative overflow-hidden flex-1 min-h-52">
        <img
          src={gallery[active].image}
          alt={gallery[active].caption || ""}
          className="w-full h-full object-cover"
          style={{ minHeight: "200px" }}
        />
        {gallery[active].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-3">
            <p className="text-white text-sm">{gallery[active].caption}</p>
          </div>
        )}
        <button
          onClick={() => setActive((active - 1 + gallery.length) % gallery.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition"
        >‹</button>
        <button
          onClick={() => setActive((active + 1) % gallery.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl transition"
        >›</button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 px-5 py-4 flex-wrap">
        {gallery.map((g, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-lg overflow-hidden transition-all ${i === active ? "ring-2 ring-brand-blue ring-offset-1 scale-105" : "opacity-50 hover:opacity-80"}`}
          >
            <img src={g.image} alt="" className="w-14 h-10 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="section-sky py-16 lg:py-24">
      <Container>{inner}</Container>
    </section>
  );
}