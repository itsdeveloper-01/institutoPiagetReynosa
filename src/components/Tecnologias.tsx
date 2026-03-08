import type { TecnologiasData } from "@/lib/types";

interface TecnologiasProps {
  data: TecnologiasData;
}

export default function Tecnologias({ data }: TecnologiasProps) {
  return (
    <section className="section-dark py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-yellow text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Innovación educativa
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {data.title}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {data.body}
        </p>
        {data.image && (
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img src={data.image} alt={data.title} className="w-full h-auto" />
          </div>
        )}
      </div>
    </section>
  );
}
