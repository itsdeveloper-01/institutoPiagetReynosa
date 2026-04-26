import Link from "next/link";
import type { MontessoriData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface MontessoriBannerProps {
  data: MontessoriData;
}

export default function MontessoriBanner({ data }: MontessoriBannerProps) {
  return (
    <section className="relative overflow-hidden section-sky">
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

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <ScrollReveal>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {data.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.body}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={260}>
          <Link href={data.ctaLink || "/#contacto"} className="btn-yellow text-base px-8 py-3">
            {data.ctaText}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
