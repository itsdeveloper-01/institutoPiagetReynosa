"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";
import Container from "@/components/Container";

interface Props {
  faq: FaqItem[];
  embedded?: boolean;
}

export default function NivelFaq({ faq, embedded = false }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  if (!faq?.length) return null;

  const inner = (
    <div>
      {/* Header — mismo estilo que NivelDistingue */}
      <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">
        Respuestas
      </p>
      <h2
        className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
      >
        Preguntas frecuentes
      </h2>

      <div className="flex flex-col gap-2">
        {faq.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden border border-white/50 bg-white/20"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-slate-800 text-sm leading-snug">{item.question}</span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform"
                style={{
                  backgroundColor: open === i ? "var(--color-brand-blue)" : "rgba(29,78,158,0.12)",
                  transform: open === i ? "rotate(45deg)" : "none",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke={open === i ? "white" : "#1D4E9E"} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-white/30">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="section-sky py-16 lg:py-24">
      <Container><div className="max-w-2xl mx-auto">{inner}</div></Container>
    </section>
  );
}