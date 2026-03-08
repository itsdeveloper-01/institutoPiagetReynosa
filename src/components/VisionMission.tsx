import type { VisionMissionData } from "@/lib/types";

interface VisionMissionProps {
  data: VisionMissionData;
}

export default function VisionMission({ data }: VisionMissionProps) {
  return (
    <section className="section-sky py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            Nuestra filosofía
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-brand-blue)",
            }}
          >
            {data.tagline}
          </h2>
        </div>
      </div>
    </section>
  );
}
