import type { PropuestaData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface PropuestaEducativaProps {
  data: PropuestaData;
}

export default function PropuestaEducativa({ data }: PropuestaEducativaProps) {
  return (
    <section className="section-sky py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {data.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="max-w-3xl mx-auto text-slate-600 text-lg sm:text-xl leading-relaxed whitespace-pre-line">
            {data.body}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
