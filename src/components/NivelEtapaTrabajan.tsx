import type { EtapaTrabajanItem } from "@/lib/types";
import NivelIcono from "@/components/NivelIcono";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  title?: string;
  subtitle?: string;
  items: EtapaTrabajanItem[];
  footer?: string;
}

export default function NivelEtapaTrabajan({ title, subtitle, items, footer }: Props) {
  if (!items?.length) return null;

  return (
    <section className="section-sky py-14 lg:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl">

        {/* Título */}
        <ScrollReveal className="text-center mb-10">
          <p className="eyebrow mb-2">Programa académico</p>
          <h2
            className="text-h2-sub sm:text-h2 font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {title ?? "En esta etapa, los alumnos trabajan"}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-base leading-relaxed mt-2 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </ScrollReveal>

        {/* Grid — icono SVG centrado arriba */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80} className="flex flex-col">
              <div className="glass-card card-hover rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(29,78,158,0.08)" }}
                >
                  <NivelIcono name={item.icon} size={28} />
                </div>
                <div>
                  <h3
                    className="font-bold text-brand-blue text-h4 mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-body-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {footer && (
          <ScrollReveal delay={100} className="mt-8 text-center max-w-4xl mx-auto">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{footer}</p>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
