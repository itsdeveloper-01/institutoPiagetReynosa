import type { AreaDesarrolloItem } from "@/lib/types";

interface Props {
  title?: string;
  items: AreaDesarrolloItem[];
  valoresTitle?: string;
  valoresItems?: string[];
}

export default function NivelAreasDesarrollo({ title, items, valoresTitle, valoresItems }: Props) {
  if (!items?.length) return null;

  return (
    <section className="section-sky py-14 lg:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl">

        {/* Título de sección */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {title ?? "Áreas de desarrollo"}
          </h2>
        </div>

        {/* Grid de áreas — 2 cols mobile / 3 cols lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {items.map((area, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 flex gap-4 items-start"
            >
              <span className="text-3xl flex-shrink-0 leading-none">{area.icon}</span>
              <div>
                <h3
                  className="font-bold text-slate-800 mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {area.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{area.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Valores — si existen */}
        {valoresItems && valoresItems.length > 0 && (
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">
              {valoresTitle ?? "Valores"}
            </p>
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

      </div>
    </section>
  );
}
