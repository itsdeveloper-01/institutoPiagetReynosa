import type { Taller } from "@/lib/types";
import NivelIcono from "@/components/NivelIcono";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  talleres: Taller[];
  embedded?: boolean;
}

const W = "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl";

export default function NivelTalleres({ talleres, embedded = false }: Props) {
  if (!talleres?.length) return null;

  const inner = (
    <div>
      <ScrollReveal>
        <p className="eyebrow mb-2">Actividades</p>
        <h2
          className="text-h2-sub sm:text-h2 font-bold leading-tight mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
        >
          Talleres
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {talleres.map((t, i) => (
          <ScrollReveal key={i} delay={i * 80} className="flex flex-col">
            <div className="glass-card card-hover rounded-2xl p-6 flex gap-4 items-start h-full">
              {t.icon && (
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(29,78,158,0.08)" }}
                >
                  <NivelIcono name={t.icon} size={22} />
                </div>
              )}
              <div>
                <h3
                  className="font-bold text-brand-blue text-h4 mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.name}
                </h3>
                <p className="text-slate-500 text-body-sm leading-relaxed">{t.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="section-sky py-14 lg:py-20">
      <div className={W}>{inner}</div>
    </section>
  );
}
