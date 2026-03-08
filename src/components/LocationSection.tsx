import type { LocationData } from "@/lib/types";

interface LocationSectionProps {
  data: LocationData;
}

export default function LocationSection({ data }: LocationSectionProps) {
  return (
    <section id="ubicacion" className="section-white py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Encuéntranos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h2>
          <p className="text-slate-500">{data.address}</p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
          <iframe
            src={data.embedUrl}
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Instituto Piaget"
          />
        </div>
      </div>
    </section>
  );
}
