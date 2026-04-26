interface NivelAgeProps {
  ageRange: string;
  ageDescription: string;
}

export default function NivelAge({ ageRange, ageDescription }: NivelAgeProps) {
  return (
    <section className="section-white py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-center sm:text-left sm:border-r sm:border-black/10 sm:pr-8">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Edad</p>
            <p
              className="text-3xl font-bold text-brand-blue"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {ageRange}
            </p>
          </div>
          <p className="text-slate-600 text-body-lg leading-relaxed text-center sm:text-left">
            {ageDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
