"use client";
import Image from "next/image";

import { useState } from "react";

export interface OrgulloItem {
  icon: string;
  title: string;
  body: string;
}

interface Props {
  videoUrl?: string;
  videoPoster?: string;
  items?: OrgulloItem[];
}

export default function NivelOrgulloPiaget({ videoUrl, videoPoster, items = [] }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="h-full flex flex-col gap-5">
      {/* Header homologado */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "var(--font-display)" }}>
          Orgullo Piaget
        </h2>
      </div>

      {/* Video */}
      {videoUrl && (
        <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 flex-shrink-0">
          {playing ? (
            <iframe src={videoUrl} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
          ) : (
            <button onClick={() => setPlaying(true)} className="w-full h-full flex items-center justify-center group">
              {videoPoster && <Image src={videoPoster} alt="" fill className="object-cover" loading="lazy" quality={75} />}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
              <span className="relative w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 4l12 6-12 6V4z" fill="#1D4E9E" />
                </svg>
              </span>
            </button>
          )}
        </div>
      )}

      {/* Lista de logros */}
      {items.length > 0 && (
        <ul className="flex flex-col gap-4 flex-1">
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
