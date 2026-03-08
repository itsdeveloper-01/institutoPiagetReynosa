import type { Taller } from "@/lib/types";
import Container from "@/components/Container";

interface Props {
  talleres: Taller[];
  embedded?: boolean;
}

export default function NivelTalleres({ talleres, embedded = false }: Props) {
  if (!talleres?.length) return null;

  const inner = (
    <div className="h-full flex flex-col">
      {/* Header homologado */}
      <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-1">Actividades</p>
      <h2 className="text-2xl font-bold text-slate-800 mb-6" style={{ fontFamily: "var(--font-display)" }}>
        Talleres
      </h2>
      {/* Grid 2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {talleres.map((t, i) => (
          <div key={i} className="rounded-xl border border-white/40 bg-white/30 p-5 flex flex-col gap-2">
            {t.icon && <span className="text-2xl leading-none">{t.icon}</span>}
            <h3 className="font-bold text-brand-blue text-sm" style={{ fontFamily: "var(--font-display)" }}>
              {t.name}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">{t.description}</p>
          </div>
        ))}
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