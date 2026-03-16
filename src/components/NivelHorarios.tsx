import type { HorarioItem } from "@/lib/types";
import Container from "@/components/Container";
import NivelImageCarousel from "@/components/NivelImageCarousel";

interface Props {
  horarios: HorarioItem[];
  subtitle?: string;
  images?: string[];
  embedded?: boolean;
}

export default function NivelHorarios({ horarios, subtitle, images = [], embedded = false }: Props) {
  if (!horarios?.length) return null;

  const hasCarousel = images.length > 0;

  const inner = (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-1" style={{ fontFamily: "var(--font-display)" }}>
        Horarios
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-sm mb-5">{subtitle}</p>
      )}
      {!subtitle && <div className="mb-5" />}

      <div className={hasCarousel ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""}>
        {/* Tabla de horarios */}
        <div className="rounded-xl overflow-hidden border border-white/40">
          {horarios.map((h, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-5 py-4 gap-4 ${i % 2 === 0 ? "bg-white/30" : "bg-white/20"} ${i > 0 ? "border-t border-white/40" : ""}`}
            >
              <span className="font-semibold text-slate-700 text-sm">{h.dia}</span>
              <span className="font-bold text-sm flex-shrink-0" style={{ color: "var(--color-brand-blue)" }}>
                {h.horario}
              </span>
            </div>
          ))}
        </div>

        {/* Carrusel lateral */}
        {hasCarousel && (
          <NivelImageCarousel images={images} label="Instalaciones" />
        )}
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
