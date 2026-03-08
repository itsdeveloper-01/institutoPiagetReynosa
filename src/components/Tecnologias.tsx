import type { TecnologiasData } from "@/lib/types";

interface TecnologiasProps {
  data: TecnologiasData;
}

export default function Tecnologias({ data }: TecnologiasProps) {
  return (
    <section className="section-sky py-20 lg:py-15">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
        >
          {data.title}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {data.body}
        </p>
        {data.image && (
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img src={data.image} alt={data.title} className="w-full h-auto" />
          </div>
        )}
      </div>
    </section>
  );
}