"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { HeroSlide } from "@/lib/types";

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const safeSlides = slides ?? [];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % safeSlides.length);
  }, [current, safeSlides.length, goTo]);

  useEffect(() => {
    if (!safeSlides.length) return;
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [next, safeSlides.length]);

  if (!safeSlides.length) return null;
  const slide = safeSlides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slides */}
      {safeSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {s.image ? (
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, #1D4E9E 0%, #163d7a 50%, #0F172A 100%)",
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <div
            key={current}
            className="animate-[fadeSlideUp_0.6s_ease_forwards]"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-yellow text-slate-900 mb-6">
              Instituto Piaget
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-10 leading-relaxed">
              {slide.subtitle}
            </p>
            {slide.ctaText && slide.ctaLink && (
              <div className="flex flex-wrap gap-4">
                <Link href={slide.ctaLink} className="btn-yellow">
                  {slide.ctaText}
                </Link>
                <Link href="/#niveles" className="btn-outline">
                  Ver niveles
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {safeSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2.5 bg-brand-yellow"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => goTo((current - 1 + safeSlides.length) % safeSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % safeSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        aria-label="Siguiente"
      >
        ›
      </button>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Degradado inferior — transición suave hacia el fondo celeste */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 30%, #D6F0FF 100%)",
        }}
      />
    </section>
  );
}