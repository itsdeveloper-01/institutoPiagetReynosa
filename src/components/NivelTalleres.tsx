import type { Taller } from "@/lib/types";
import Container from "@/components/Container";
import NivelImageCarousel from "@/components/NivelImageCarousel";

interface Props {
  talleres: Taller[];
  images?: string[];
  embedded?: boolean;
}

export default function NivelTalleres({ talleres, images = [], embedded = false }: Props) {
  if (!talleres?.length) return null;

  const hasCarousel = images.length > 0;

  const inner = (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold text-slate-800 mb-6" style={{ fontFamily: "var(--font-display)" }}>
        Talleres
      </h2>

      <div className={`flex-1 ${hasCarousel ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""}`}>
        {/* Lista de talleres */}
        <div className="grid grid-cols-1 gap-3">
          {talleres.map((t, i) => (
            <div key={i} className="rounded-xl border border-white/40 bg-white/30 p-4 flex gap-3 items-start">
              {t.icon && <span className="text-2xl flex-shrink-0 leading-none">{t.icon}</span>}
              <div>
                <h3 className="font-bold text-brand-blue text-sm mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                  {t.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{t.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carrusel lateral */}
        {hasCarousel && (
          <NivelImageCarousel images={images} label="Talleres" />
        )}
      </div>
    </div>
  );

  if (embedded) return inner;
  return (
    <section className="section-sky py-16 lg:py-24">
      <Container>{inner}</Container>
    </section>
  );
}
