import Link from "next/link";
import type { NivelData } from "@/lib/types";

interface NivelHeroProps {
  data: NivelData;
}

export default function NivelHero({ data }: NivelHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Background */}
      {data.heroImage ? (
        <img
          src={data.heroImage}
          alt={data.displayName}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1D4E9E 0%, #0F172A 100%)",
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <Link
          href="/#niveles"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
        >
          ← Todos los niveles
        </Link>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {data.displayName}
        </h1>
        <p className="text-xl text-white/85 mb-8 max-w-2xl">{data.subtitle}</p>
        {data.ctaText && data.ctaLink && (
          <Link href={data.ctaLink} className="btn-yellow">
            {data.ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
