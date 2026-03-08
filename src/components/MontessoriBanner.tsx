import Link from "next/link";
import type { MontessoriData } from "@/lib/types";

interface MontessoriBannerProps {
  data: MontessoriData;
}

export default function MontessoriBanner({ data }: MontessoriBannerProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: data.backgroundImage
            ? `url(${data.backgroundImage}) center/cover no-repeat`
            : "linear-gradient(135deg, #1D4E9E 0%, #163d7a 60%, #0c2a5a 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/80" />

      {/* Decorative circle */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-white/5 blur-2xl" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <p className="text-brand-yellow text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Nuestro enfoque
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {data.title}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {data.body}
        </p>
        <Link href={data.ctaLink || "/#contacto"} className="btn-yellow text-base px-8 py-3">
          {data.ctaText}
        </Link>
      </div>
    </section>
  );
}
