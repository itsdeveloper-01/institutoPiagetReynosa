import type { EtapaTrabajanItem } from "@/lib/types";

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
        <div className="text-center mb-10">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Programa académico
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {title ?? "En esta etapa, los niños trabajan"}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-base leading-relaxed mt-2">{subtitle}</p>
          )}
        </div>

        {/* Grid de materias — 2 cols / 4 cols en lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 flex flex-col items-center text-center gap-3"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: "rgba(29,78,158,0.1)" }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-slate-800 text-sm mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto de cierre debajo del grid */}
        {footer && (
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-8 text-center max-w-4xl mx-auto">
            {footer}
          </p>
        )}

      </div>
    </section>
  );
}