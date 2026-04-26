import type { TestimonialsData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface TestimonialsProps {
  data: TestimonialsData;
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section id="testimonials" className="section-sky py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="eyebrow mb-3">Opiniones</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((t, i) => (
            <ScrollReveal key={i} delay={i * 90} className="flex flex-col">
              <div className="glass-card card-hover rounded-2xl p-8 flex flex-col h-full">
                {/* Large quote mark */}
                <div
                  className="text-5xl font-serif leading-none mb-4 select-none"
                  style={{ color: "var(--color-brand-yellow)", fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6 flex-1 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-black/5 pt-5 mt-auto">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
