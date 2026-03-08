import type { ValorItem } from "@/lib/types";

interface MaternalExtrasProps {
  valores?: ValorItem[];
  enEstaEtapa?: string[];
  desarrolloAcademico?: string;
}

export default function MaternalExtras({
  valores,
  enEstaEtapa,
  desarrolloAcademico,
}: MaternalExtrasProps) {
  return (
    <section className="section-sky py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Valores */}
        {valores && valores.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Fundamento
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-800"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nuestros valores
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valores.map((v, i) => (
                <div key={i} className="glass-card rounded-2xl p-7 card-hover">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3
                    className="font-bold text-brand-blue text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* En esta etapa */}
        {enEstaEtapa && enEstaEtapa.length > 0 && (
          <div className="mb-16 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-2xl sm:text-3xl font-bold text-brand-blue"
                style={{ fontFamily: "var(--font-display)" }}
              >
                En esta etapa trabajan
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {enEstaEtapa.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="text-brand-green font-bold text-base mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Desarrollo académico */}
        {desarrolloAcademico && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-2xl sm:text-3xl font-bold text-brand-blue"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Desarrollo académico
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {desarrolloAcademico}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
