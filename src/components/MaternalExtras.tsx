import NivelIcono from "@/components/NivelIcono";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
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
      <Container>
        {/* Valores */}
        {valores && valores.length > 0 && (
          <div className="mb-16">
            <ScrollReveal className="text-center mb-10">
              <p className="eyebrow mb-3">Fundamento</p>
              <h2
                className="text-h2-sub sm:text-h2 font-bold text-slate-800"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nuestros valores
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valores.map((v, i) => (
                <ScrollReveal key={i} delay={i * 100} className="flex flex-col">
                  <div className="glass-card card-hover rounded-2xl p-7 h-full">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 mx-auto" style={{ background: "rgba(29,78,158,0.08)" }}>
                      <NivelIcono name={v.icon} size={26} />
                    </div>
                    <h3
                      className="font-bold text-brand-blue text-lg mb-2 text-center"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-slate-600 text-body leading-relaxed text-center">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* En esta etapa */}
        {enEstaEtapa && enEstaEtapa.length > 0 && (
          <ScrollReveal className="mb-16 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-h2-sub sm:text-h2 font-bold text-brand-blue"
                style={{ fontFamily: "var(--font-display)" }}
              >
                En esta etapa trabajan
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {enEstaEtapa.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-body">
                    <span className="text-brand-green font-bold text-base mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Desarrollo académico */}
        {desarrolloAcademico && (
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2
                className="text-h2-sub sm:text-h2 font-bold text-brand-blue"
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
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
}
