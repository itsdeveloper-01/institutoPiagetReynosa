import type { HorarioItem } from "@/lib/types";
import Container from "@/components/Container";

interface Props {
  horarios: HorarioItem[];
  embedded?: boolean;
}

export default function NivelHorarios({ horarios, embedded = false }: Props) {
  if (!horarios?.length) return null;

  const inner = (
    <div>
      {/* Header homologado */}
      <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-1">Organización</p>
      <h2 className="text-2xl font-bold text-slate-800 mb-6" style={{ fontFamily: "var(--font-display)" }}>
        Horarios
      </h2>
      <div className="rounded-xl overflow-hidden border border-white/40">
        {horarios.map((h, i) => (
          <div
            key={i}
            className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? "bg-white/20" : "bg-white/20"} ${i > 0 ? "border-t border-white/40" : ""}`}
          >
            <span className="font-semibold text-slate-700 text-sm">{h.dia}</span>
            <span className="font-bold text-sm" style={{ color: "var(--color-brand-blue)" }}>{h.horario}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="section-sky py-16 lg:py-20">
      <Container><div className="max-w-xl mx-auto">{inner}</div></Container>
    </section>
  );
}