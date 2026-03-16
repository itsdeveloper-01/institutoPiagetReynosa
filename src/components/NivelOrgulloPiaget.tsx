"use client";

import { useState } from "react";
import type { OrgulloItem } from "@/lib/types";

interface Props {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  videoPoster?: string;
  items?: OrgulloItem[];
  fullWidth?: boolean;
}

const W = "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl";

function VideoBlock({ videoUrl, videoPoster }: { videoUrl?: string; videoPoster?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", background: "#0F172A" }}>
      {playing && videoUrl ? (
        <iframe src={videoUrl} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
      ) : (
        <button
          onClick={() => videoUrl && setPlaying(true)}
          className="w-full h-full flex items-center justify-center group relative"
          style={{ cursor: videoUrl ? "pointer" : "default" }}
        >
          {videoPoster && (
            <img src={videoPoster} alt="" className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
          <span className="relative w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M7 4.5l13 6.5-13 6.5V4.5z" fill="#1D4E9E" />
            </svg>
          </span>
          {!videoUrl && (
            <span className="absolute bottom-4 text-white/60 text-xs">Video próximamente</span>
          )}
        </button>
      )}
    </div>
  );
}

export default function NivelOrgulloPiaget({
  title,
  subtitle,
  videoUrl,
  videoPoster,
  items = [],
  fullWidth = false,
}: Props) {

  // ── Modo embedded — glass-card interna (maternal sin título) ──
  if (!fullWidth) {
    return (
      <div className="h-full flex flex-col gap-5">
        <div>
          <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-1">Logros</p>
          <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "var(--font-display)" }}>
            {title ?? "Orgullo Piaget"}
          </h2>
          {subtitle && <p className="text-slate-500 text-sm mt-1 leading-snug">{subtitle}</p>}
        </div>
        <VideoBlock videoUrl={videoUrl} videoPoster={videoPoster} />
        {items.length > 0 && (
          <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-white/40 bg-white/30 px-4 py-3">
                <span className="text-2xl flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm leading-snug">{item.title}</p>
                  <p className="text-slate-500 text-xs leading-snug mt-0.5">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // ── Modo full-width — igual layout que NivelDistingue ──
  // Texto izq | Video der  (mismo gap y estructura)
  return (
    <section className="section-sky py-16 lg:py-24">
      <div className={W}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Columna izquierda — texto */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Logros
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
            >
              {title ?? "Orgullo Piaget"}
            </h2>
            {subtitle && (
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">{subtitle}</p>
            )}
            {/* Logros como bullets si existen */}
            {items.length > 0 && (
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "var(--color-brand-blue)" }}
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                      {item.body && <p className="text-slate-500 text-sm leading-snug">{item.body}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Columna derecha — video */}
          <div className="w-full md:w-1/2">
            <VideoBlock videoUrl={videoUrl} videoPoster={videoPoster} />
          </div>

        </div>
      </div>
    </section>
  );
}