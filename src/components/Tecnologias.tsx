import Image from "next/image";
import Container from "@/components/Container";
import type { TecnologiasData } from "@/lib/types";

interface TecnologiasProps {
  data: TecnologiasData;
}

export default function Tecnologias({ data }: TecnologiasProps) {
  return (
    <section className="section-sky py-20 lg:py-28">
      <Container className="text-center">
        <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Innovación educativa
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
        >
          {data.title}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {data.body}
        </p>
        {data.image && (
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <Image src={data.image} alt={data.title} width={800} height={500} className="w-full h-auto" loading="lazy" quality={80} />
          </div>
        )}
      </Container>
    </section>
  );
}
