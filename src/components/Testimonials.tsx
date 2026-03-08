import type { TestimonialsData } from "@/lib/types";

interface TestimonialsProps {
  data: TestimonialsData;
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section id="testimonials" className="section-sky py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Lo que dicen las familias
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((t, i) => (
            <div
              key={i}
              className="glass-card card-hover rounded-2xl p-8 flex flex-col"
            >
              <div className="text-brand-yellow text-2xl mb-4">"</div>
              <p className="text-slate-700 leading-relaxed mb-6 flex-1 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 border-t border-black/5 pt-5">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
