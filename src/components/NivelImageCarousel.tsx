"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  label?: string;
}

export default function NivelImageCarousel({ images, label }: Props) {
  const [active, setActive] = useState(0);

  if (!images?.length) {
    return (
      <div
        className="rounded-2xl flex items-center justify-center"
        style={{ minHeight: "240px", background: "rgba(29,78,158,0.06)" }}
      >
        <span className="text-4xl opacity-30">📷</span>
      </div>
    );
  }

  const prev = () => setActive((active - 1 + images.length) % images.length);
  const next = () => setActive((active + 1) % images.length);

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Imagen principal */}
      <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: "220px" }}>
        <Image
          src={images[active]}
          alt={label ?? ""}
          fill
          sizes="(max-width:1024px) 100vw, 40vw"
          className="object-cover"
          loading="lazy"
          quality={80}
        />
        {/* Overlay degradado bottom */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)" }} />

        {/* Controles */}
        {images.length > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition"
              style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="#1D4E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition"
              style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="#1D4E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        {/* Contador */}
        {images.length > 1 && (
          <span
            className="absolute bottom-3 right-4 text-white text-xs font-semibold"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            {active + 1} / {images.length}
          </span>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all"
              style={{
                width: i === active ? "20px" : "8px",
                height: "8px",
                backgroundColor: i === active ? "var(--color-brand-blue)" : "rgba(29,78,158,0.25)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
