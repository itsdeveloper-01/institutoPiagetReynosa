import type { PropuestaData } from "@/lib/types";

interface PropuestaEducativaProps {
  data: PropuestaData;
}

export default function PropuestaEducativa({ data }: PropuestaEducativaProps) {
  return (
    <section className="section-sky py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Propuesta educativa
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
        >
          {data.title}
        </h2>
        <div className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed whitespace-pre-line">
          {data.body}
        </div>
      </div>
    </section>
  );
}