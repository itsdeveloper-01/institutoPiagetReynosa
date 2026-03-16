import type { HorarioItem } from "@/lib/types";
import Container from "@/components/Container";

interface Props {
  horarios: HorarioItem[];
  subtitle?: string;
  embedded?: boolean;
}

export default function NivelHorarios({ horarios, subtitle, embedded = false }: Props) {
  if (!horarios?.length) return null;

  const inner = (
    <div>
      <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">
        Organización
      </p>
      <h2
        className="text-3xl sm:text-4xl font-bold leading-tight mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
      >
        Horarios
      </h2>
      {subtitle && <p className="text-slate-500 text-sm mb-6">{subtitle}</p>}
      {!subtitle && <div className="mb-6" />}

      <div className="rounded-2xl overflow-hidden border border-white/50 bg-white/20">
        {horarios.map((h, i) => (
          <div
            key={i}
            className={`flex justify-between items-center px-5 py-4 gap-4 ${i > 0 ? "border-t border-white/40" : ""}`}
          >
            <span className="font-semibold text-slate-700 text-sm">{h.dia}</span>
            <span className="font-bold text-sm flex-shrink-0" style={{ color: "var(--color-brand-blue)" }}>
              {h.horario}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="section-sky py-16 lg:py-20">
      <Container><div className="max-w-2xl mx-auto">{inner}</div></Container>
    </section>
  );
}