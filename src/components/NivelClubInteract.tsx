import type { InteractItem } from "@/lib/types";
import NivelIcono from "@/components/NivelIcono";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  title?: string;
  body?: string;
  items?: InteractItem[];
}

const W = "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl";

export default function NivelClubInteract({ title, body, items = [] }: Props) {
  if (!body && !items.length) return null;

  return (
    <section className="section-sky py-14 lg:py-20">
      <div className={W}>
        <ScrollReveal>
          <p className="eyebrow mb-2">Vida estudiantil</p>
          <h2
            className="text-h2-sub sm:text-h2 font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
          >
            {title ?? "Club Interact"}
          </h2>
          {body && (
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              {body}
            </p>
          )}
        </ScrollReveal>

        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} className="flex flex-col">
                <div className="glass-card card-hover rounded-2xl p-6 flex gap-4 items-start h-full">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "rgba(29,78,158,0.08)" }}
                  >
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
        )}
      </div>
    </section>
  );
}
