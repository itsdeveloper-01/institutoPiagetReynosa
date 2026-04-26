"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LevelsData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface LevelsPathProps {
  data: LevelsData;
}

const LEVEL_COLORS: Record<string, string> = {
  maternal:     "#EF2327",
  kinder:       "#FFD717",
  primaria:     "#3EB149",
  secundaria:   "#1D4E9E",
  preparatoria: "#7C3AED",
};

export default function LevelsPath({ data }: LevelsPathProps) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = data.achievementsSlides || [];

  return (
    <section id="niveles" className="section-sky py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <ScrollReveal className="text-center mb-16">
          <p className="eyebrow mb-3">Oferta educativa</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h2>
        </ScrollReveal>

        {/* Alternating levels */}
        <div className="flex flex-col gap-12">
          {(data.items ?? []).map((level, i) => {
            const color = LEVEL_COLORS[level.slug] || "#1D4E9E";
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={level.slug}
                variant={isEven ? "slide-right" : "slide-left"}
                delay={80}
              >
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 items-stretch`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                    {level.image ? (
                      <img
                        src={level.image}
                        alt={level.name}
                        className="w-full h-64 lg:h-80 object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-64 lg:h-80 flex items-center justify-center"
                        style={{ background: color + "22" }}
                      >
                        <span className="text-6xl">🏫</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 glass-card rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
                    >
                      {level.name}
                    </h3>
                    <p className="text-slate-600 text-base sm:text-lg mb-7 leading-relaxed">
                      {level.tagline}
                    </p>
                    <Link
                      href={`/niveles/${level.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 hover:gap-4 group w-fit"
                      style={{ color }}
                    >
                      Ver detalle
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Achievements block */}
        <ScrollReveal className="mt-24" delay={100}>
          <div className="rounded-3xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.1)] glass-card">
            <div className="flex flex-col lg:flex-row">
              {/* Text */}
              <div className="lg:w-1/2 p-10 lg:p-14" style={{ backgroundColor: "#D6F0FF" }}>
                <h3
                  className="text-h2-sub sm:text-h2 font-bold leading-tight mb-5"
                  style={{ fontFamily: "var(--font-display)", color: "#1D4E9E" }}
                >
                  {data.achievementsTitle}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {data.achievementsBody}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {(data.achievementsBullets ?? []).map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: "#1D4E9E" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-slate-700 text-body leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Carousel */}
              {slides.length > 0 && (
                <div className="lg:w-1/2 relative overflow-hidden bg-slate-100 min-h-64">
                  {slides.map((s, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ opacity: i === slideIdx ? 1 : 0 }}
                    >
                      <img src={s.image} alt={s.caption || ""} className="w-full h-full object-cover" />
                      {s.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <p className="text-white text-sm">{s.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                  {slides.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSlideIdx(i)}
                          className={`rounded-full transition-all duration-300 ${
                            i === slideIdx ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
