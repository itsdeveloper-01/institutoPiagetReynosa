"use client";

import { useState } from "react";
import Link from "next/link";
import type { LevelsData } from "@/lib/types";

interface LevelsPathProps {
  data: LevelsData;
}

const LEVEL_COLORS: Record<string, string> = {
  maternal: "#EF2327",
  kinder: "#FFD717",
  primaria: "#3EB149",
  secundaria: "#1D4E9E",
  preparatoria: "#7C3AED",
};

export default function LevelsPath({ data }: LevelsPathProps) {
  const [slideIdx, setSlideIdx] = useState(0);

  const slides = data.achievementsSlides || [];

  return (
    <section id="niveles" className="section-sky py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h2>
        </div>

        {/* Alternating levels */}
        <div className="flex flex-col gap-10">
          {(data.items ?? []).map((level, i) => {
            const color = LEVEL_COLORS[level.slug] || "#1D4E9E";
            const isEven = i % 2 === 0;
            return (
              <div
                key={level.slug}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                  {level.image ? (
                    <img
                      src={level.image}
                      alt={level.name}
                      className="w-full h-64 lg:h-80 object-cover"
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
                <div className="w-full lg:w-1/2 glass-card rounded-2xl p-8">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ background: color + "20", color }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: color }}
                    />
                    Nivel {i + 1}
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-brand-blue)",
                    }}
                  >
                    {level.name}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {level.tagline}
                  </p>
                  <Link
                    href={`/niveles/${level.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ color }}
                  >
                    Ver detalle <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements block */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-xl glass-card">
          <div className="flex flex-col lg:flex-row">
            {/* Text */}
            <div className="lg:w-1/2 p-10 lg:p-14" style={{ backgroundColor: "#D6F0FF" }}>

              {/* Título estilo referencia: primeras palabras en bold azul */}
              <h3
                className="text-3xl sm:text-4xl font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)", color: "#1D4E9E" }}
              >
                {data.achievementsTitle}
              </h3>

              {/* Párrafo descriptivo */}
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {data.achievementsBody}
              </p>

              {/* Lista 2 columnas con check circular */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {(data.achievementsBullets ?? []).map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Check icon */}
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#1D4E9E" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-slate-700 text-sm leading-snug">{b}</span>
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
                    <img
                      src={s.image}
                      alt={s.caption || ""}
                      className="w-full h-full object-cover"
                    />
                    {s.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-sm">{s.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
                {/* dots */}
                {slides.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIdx(i)}
                        className={`rounded-full transition-all ${
                          i === slideIdx
                            ? "w-5 h-2 bg-white"
                            : "w-2 h-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}