"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import type { HeroSlide } from "@/lib/types";

interface HeroCarouselProps { slides: HeroSlide[]; }

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const safeSlides = slides ?? [];
  const [current, setCurrent]     = useState(0);
  const [isAnimating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % safeSlides.length), [current, safeSlides.length, goTo]);

  useEffect(() => {
    if (!safeSlides.length) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next, safeSlides.length]);

  if (!safeSlides.length) return null;
  const slide = safeSlides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Slides — priority solo en la primera imagen */}
      {safeSlides.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }}>
          {s.image ? (
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}   // solo el primer slide es eager
              loading={i === 0 ? "eager" : "lazy"}
              quality={80}
            />
          ) : (
            <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #1D4E9E 0%, #163d7a 50%, #0F172A 100%)" }} />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)" }} />
        </div>
      ))}

      {/* Contenido */}
      <Container className="relative z-10 flex items-end min-h-screen pb-20 lg:pb-28">
        <div className="max-w-2xl xl:max-w-3xl">
          {slide.eyebrow && (
            <p className="text-white/75 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4">{slide.eyebrow}</p>
          )}
          <h1 className="font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">{slide.subtitle}</p>
          )}
          <div className="flex flex-wrap gap-3">
            {slide.ctaPrimary && (
              <Link href={slide.ctaPrimaryLink ?? "/#contacto"} className="btn-primary">{slide.ctaPrimary}</Link>
            )}
            {slide.ctaSecondary && (
              <Link href={slide.ctaSecondaryLink ?? "/niveles"}
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.35)" }}>
                {slide.ctaSecondary}
              </Link>
            )}
          </div>
        </div>
      </Container>

      {/* Indicadores */}
      {safeSlides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {safeSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === current ? "28px" : "8px", height: "8px", background: i === current ? "white" : "rgba(255,255,255,0.45)" }}
            />
          ))}
        </div>
      )}

      {/* Scroll hint */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1 text-white/50">
        <span className="text-[10px] uppercase tracking-widest rotate-90 mb-3">scroll</span>
        <div className="w-px h-14 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-white/70 animate-[scrollbar_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
        </div>
      </div>

    </section>
  );
}
