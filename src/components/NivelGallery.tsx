"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className="flex flex-col gap-4">
      {/* Header — mismo estilo que NivelDistingue */}
      <div>
        <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">
          Instalaciones
        </p>
        <h2
          className="text-h2-sub sm:text-h2 font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
        >
          Galería
        </h2>
      </div>

      {/* Imagen principal */}
      <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "260px", aspectRatio: "4/3" }}>
        <Image
          src={gallery[active].image}
          alt={gallery[active].caption || ""}
          fill
          sizes="(max-width:1024px) 100vw, 45vw"
          className="object-cover"
          loading="lazy"
          quality={80}
        />
        {gallery[active].caption && (
          <div className="absolute bottom-0 left-0 right-0 px-5 py-3"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)" }}>
            <p className="text-white text-sm">{gallery[active].caption}</p>
          </div>
        )}
        {gallery.length > 1 && (
          <>
            <button
              onClick={() => setActive((active - 1 + gallery.length) % gallery.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition"
              style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="#1D4E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setActive((active + 1) % gallery.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition"
              style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="#1D4E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-xl overflow-hidden transition-all relative"
              style={{
                width: "56px", height: "40px",
                outline: i === active ? "2px solid var(--color-brand-blue)" : "none",
                outlineOffset: "2px",
                opacity: i === active ? 1 : 0.5,
              }}
            >
              <Image src={g.image} alt="" fill className="object-cover" loading="lazy" quality={60} />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="section-sky py-16 lg:py-24">
      <Container>{inner}</Container>
    </section>
  );
}