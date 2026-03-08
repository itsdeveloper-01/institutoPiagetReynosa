import type { IdentityData } from "@/lib/types";

interface IdentityProps {
  data: IdentityData;
}

export default function Identity({ data }: IdentityProps) {
  return (
    <section id="identity" className="section-white py-20 lg:py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card, i) => (
            <div
              key={i}
              className="glass-card card-hover rounded-2xl p-8 flex flex-col items-start"
            >
              <div className="text-4xl mb-5">{card.icon}</div>
              <h3
                className="text-xl font-bold text-brand-blue mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
