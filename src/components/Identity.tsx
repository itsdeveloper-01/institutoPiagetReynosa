import type { IdentityData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface IdentityProps {
  data: IdentityData;
}

export default function Identity({ data }: IdentityProps) {
  return (
    <section id="identity" className="section-white py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 120} className="flex flex-col">
              <div className="glass-card card-hover rounded-2xl p-8 flex flex-col items-start h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 flex-shrink-0"
                  style={{ background: "rgba(29,78,158,0.08)" }}
                >
                  {card.icon}
                </div>
                <h3
                  className="text-xl font-bold text-brand-blue mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">{card.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
