import type { Taller } from "@/lib/types";

interface Props {
  talleres: Taller[];
  embedded?: boolean;
}

const W = "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl";

export default function NivelTalleres({ talleres, embedded = false }: Props) {
  if (!talleres?.length) return null;

  const inner = (
    <div>
      <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">
        Actividades
      </p>
      <h2
        className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
      >
        Talleres
      </h2>

      {/* Grid 2 cols mobile / 3 cols desktop — igual que NivelAreasDesarrollo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {talleres.map((t, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-6 flex gap-4 items-start"
          >
            {t.icon && (
              <span className="text-3xl flex-shrink-0 leading-none">{t.icon}</span>
            )}
            <div>
              <h3
                className="font-bold text-slate-800 mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t.description}</p>
            </div>
          </div>
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