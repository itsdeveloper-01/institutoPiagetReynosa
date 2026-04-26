import NivelIcono from "@/components/NivelIcono";
import ScrollReveal from "@/components/ScrollReveal";
import type { BilingueItem, ProgramaItem } from "@/lib/types";

interface Props {
  multigradoTitle?: string;
  multigradoBody?: string;
  bilingueTitle?: string;
  bilingueItems?: BilingueItem[];
  programasTitle?: string;
  programasItems?: ProgramaItem[];
}

const W = "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl";

export default function NivelMultigradoBilingual({
  multigradoTitle,
  multigradoBody,
  bilingueTitle,
  bilingueItems = [],
  programasTitle,
  programasItems = [],
}: Props) {
  if (!multigradoBody && !bilingueItems.length) return null;

  return (
    <section className="section-sky py-14 lg:py-20">
      <div className={W}>
        <div className="flex flex-col gap-16">

          {/* ── Multigrado ─────────────────────────────── */}
          {multigradoBody && (
            <ScrollReveal>
              <p className="eyebrow mb-2">Metodología</p>
              <h2
                className="text-h2-sub sm:text-h2 font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
              >
                {multigradoTitle ?? "Multigrado"}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {multigradoBody}
              </p>
            </ScrollReveal>
          )}

          {/* ── Programa Bilingüe ──────────────────────── */}
          {bilingueItems.length > 0 && (
            <div>
              <ScrollReveal className="mb-8">
                <p className="eyebrow mb-2">Idiomas</p>
                <h2
                  className="text-h2-sub sm:text-h2 font-bold leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
                >
                  {bilingueTitle ?? "Programa Bilingüe"}
                </h2>
              </ScrollReveal>

              {/* Cards de beneficios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {bilingueItems.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80} className="flex flex-col">
                    <div
                      className="rounded-2xl p-5 flex gap-4 items-start card-hover h-full"
                      style={{ background: "rgba(29,78,158,0.06)", border: "1px solid rgba(29,78,158,0.1)" }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: "rgba(29,78,158,0.08)" }}>
                        <NivelIcono name={item.icon} size={22} />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-brand-blue text-h4 mb-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-body-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Programas académicos */}
              {programasItems.length > 0 && (
                <ScrollReveal>
                  <p
                    className="font-bold text-slate-700 text-h4 mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {programasTitle ?? "Programas Académicos de inglés"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {programasItems.map((p, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border"
                        style={{
                          color: "var(--color-brand-blue)",
                          borderColor: "rgba(29,78,158,0.25)",
                          background: "rgba(29,78,158,0.05)",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3 3 6-6" stroke="var(--color-brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {p.name}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
