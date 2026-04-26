import Image from "next/image";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import type { TecnologiasData } from "@/lib/types";

interface TecnologiasProps {
  data: TecnologiasData;
}

export default function Tecnologias({ data }: TecnologiasProps) {
  return (
    <section className="section-sky py-24 lg:py-32">
      <Container className="text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Innovación educativa</p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {data.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed">
            {data.body}
          </p>
        </ScrollReveal>
        {data.image && (
          <ScrollReveal delay={250}>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={500}
                className="w-full h-auto"
                loading="lazy"
                quality={80}
              />
            </div>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
}
