import type { Taller } from "@/lib/types";

interface NivelTalleresProps {
  talleres: Taller[];
}

export default function NivelTalleres({ talleres }: NivelTalleresProps) {
  if (!talleres?.length) return null;

  return (
    <section className="section-white py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Actividades
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Talleres
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {talleres.map((t, i) => (
            <div
              key={i}
              className="glass-card card-hover rounded-2xl p-7"
            >
              {t.icon && <div className="text-3xl mb-4">{t.icon}</div>}
              <h3
                className="font-bold text-brand-blue text-lg mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
