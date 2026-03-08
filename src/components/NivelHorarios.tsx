import type { HorarioItem } from "@/lib/types";

interface NivelHorariosProps {
  horarios: HorarioItem[];
}

export default function NivelHorarios({ horarios }: NivelHorariosProps) {
  if (!horarios?.length) return null;

  return (
    <section className="section-sky py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Organización
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Horarios
          </h2>
        </div>
        <div className="max-w-xl mx-auto glass-card rounded-2xl overflow-hidden">
          {horarios.map((h, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-6 py-4 ${
                i % 2 === 0 ? "bg-white/50" : "bg-white/20"
              } ${i > 0 ? "border-t border-black/5" : ""}`}
            >
              <span className="font-semibold text-slate-700">{h.dia}</span>
              <span className="text-brand-blue font-medium">{h.horario}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
