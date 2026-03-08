"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

interface NivelFaqProps {
  faq: FaqItem[];
}

export default function NivelFaq({ faq }: NivelFaqProps) {
  const [open, setOpen] = useState<number | null>(null);
  if (!faq?.length) return null;

  return (
    <section className="section-sky py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Respuestas
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-slate-800">{item.question}</span>
                <span
                  className={`text-brand-blue text-xl transition-transform duration-300 flex-shrink-0 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-slate-600 leading-relaxed text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
