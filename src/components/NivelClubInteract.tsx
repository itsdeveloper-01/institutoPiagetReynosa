import type { InteractItem } from "@/lib/types";

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
        <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">
          Vida estudiantil
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
        >
          {title ?? "Club Interact"}
        </h2>
        {body && (
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
            {body}
          </p>
        )}
        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0 leading-none">{item.icon}</span>
                <div>
                  <h3
                    className="font-bold text-slate-800 mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}