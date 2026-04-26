import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import type { LocationData } from "@/lib/types";

interface LocationSectionProps {
  data: LocationData;
  embedded?: boolean;
}

export default function LocationSection({ data, embedded = false }: LocationSectionProps) {
  const mapBlock = (
    <div className={embedded ? "h-full min-h-72" : "rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-black/5"}>
      <iframe
        src={data.embedUrl}
        width="100%"
        height={embedded ? "100%" : "480"}
        style={{ border: 0, minHeight: embedded ? "288px" : undefined }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Instituto Piaget"
      />
    </div>
  );

  if (embedded) return mapBlock;

  return (
    <section id="ubicacion" className="section-white py-24 lg:py-32">
      <Container>
        <ScrollReveal className="text-center mb-10">
          <p className="eyebrow mb-3">Encuéntranos</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-2" style={{ fontFamily: "var(--font-display)" }}>
            {data.title}
          </h2>
          <p className="text-slate-500 text-lg">{data.address}</p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          {mapBlock}
        </ScrollReveal>
      </Container>
    </section>
  );
}
