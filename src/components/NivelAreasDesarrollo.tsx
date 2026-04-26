import type { AreaDesarrolloItem, ProgramaItem, ValorCard } from "@/lib/types";
import NivelIcono from "@/components/NivelIcono";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  title?: string;
  subtitle?: string;
  items: AreaDesarrolloItem[];
  valoresTitle?: string;
  valoresSubtitle?: string;
  valoresItems?: string[];
  valoresCards?: ValorCard[];
  valoresFooter?: string;
  programasTitle?: string;
  programasItems?: ProgramaItem[];
}

export default function NivelAreasDesarrollo({ title, subtitle, items, valoresTitle, valoresSubtitle, valoresItems, valoresCards = [], valoresFooter, programasTitle, programasItems = [] }: Props) {
  if (!items?.length) return null;

  return (
    <section className="section-sky py-14 lg:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl">

        {/* Título */}
        <ScrollReveal className="text-center mb-10">
          <p className="eyebrow mb-2">Desarrollo integral</p>
          <h2
            className="text-h2-sub sm:text-h2 font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {title ?? "Áreas de desarrollo"}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </ScrollReveal>

        {/* Grid de áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {items.map((area, i) => (
            <ScrollReveal key={i} delay={i * 80} className="flex flex-col">
              <div className="glass-card card-hover rounded-2xl p-6 flex flex-col gap-3 h-full">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(29,78,158,0.08)" }}
                >
                  <NivelIcono name={area.icon} size={22} />
                </div>
                <div>
                  <h3
                    className="font-bold text-brand-blue text-h4 mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-slate-500 text-body-sm leading-relaxed">{area.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Programas académicos */}
        {programasItems.length > 0 && (
          <ScrollReveal className="mb-6">
            <p className="eyebrow mb-4">
              {programasTitle ?? "Programas Académicos de inglés"}
            </p>
            <div className="flex flex-wrap gap-2">
              {programasItems.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border"
                  style={{
                    color: "var(--color-brand-blue)",
                    borderColor: "rgba(29,78,158,0.25)",
                    background: "rgba(29,78,158,0.05)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="var(--color-brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {p.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Valores */}
        {(valoresItems && valoresItems.length > 0 || valoresCards.length > 0) && (
          <ScrollReveal className="mt-3">
            <p className="eyebrow mb-2">
              {valoresTitle ?? "Valores"}
            </p>
            {valoresSubtitle && (
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">{valoresSubtitle}</p>
            )}

            {/* Cards con descripción */}
            {valoresCards.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {valoresCards.map((v, i) => (
                  <div key={i} className="glass-card card-hover rounded-2xl p-5 flex flex-col gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded-lg"
                      style={{ background: "rgba(29,78,158,0.08)" }}
                    >
                      <NivelIcono name={v.icon} size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-blue text-h4 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                        {v.title}
                      </h3>
                      <p className="text-slate-500 text-body-sm leading-relaxed">{v.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Chips simples */}
            {valoresCards.length === 0 && valoresItems && valoresItems.length > 0 && (
              <div className="glass-card rounded-2xl p-6 lg:p-8">
                <div className="flex flex-wrap gap-3">
                  {valoresItems.map((v, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: "var(--color-brand-blue)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {valoresFooter && (
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4">{valoresFooter}</p>
            )}
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
