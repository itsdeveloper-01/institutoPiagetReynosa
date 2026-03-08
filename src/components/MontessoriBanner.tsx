import Link from "next/link";
import type { MontessoriData } from "@/lib/types";

interface MontessoriBannerProps {
  data: MontessoriData;
}

export default function MontessoriBanner({ data }: MontessoriBannerProps) {
  return (
    <section className="relative overflow-hidden section-sky">
      {/* Imagen de fondo opcional — si no hay imagen, fondo celeste puro */}
      {data.backgroundImage && (
        <>
          <img
            src={data.backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#D6F0FF]/80" />
        </>
      )}

      {/* Decorative blobs */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-blue/8 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-brand-blue/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Nuestro enfoque
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
        >
          {data.title}
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {data.body}
        </p>
        <Link href={data.ctaLink || "/#contacto"} className="btn-yellow text-base px-8 py-3">
          {data.ctaText}
        </Link>
      </div>
    </section>
  );
}