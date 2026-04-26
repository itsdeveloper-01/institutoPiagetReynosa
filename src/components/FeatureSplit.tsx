import type { NivelBlock } from "@/lib/types";

interface FeatureSplitProps {
  blocks: NivelBlock[];
}

export default function FeatureSplit({ blocks }: FeatureSplitProps) {
  if (!blocks?.length) return null;

  return (
    <section className="section-sky py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {blocks.map((block, i) => {
          const isLeft = block.imagePosition === "left";
          return (
            <div
              key={i}
              className={`flex flex-col ${
                isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-14 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  {block.image ? (
                    <img
                      src={block.image}
                      alt={block.imageAlt || block.heading}
                      className="w-full h-72 lg:h-96 object-cover"
                    />
                  ) : (
                    <div className="w-full h-72 lg:h-96 bg-slate-200 flex items-center justify-center">
                      <span className="text-6xl">📷</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <h2
                  className="text-h2-sub sm:text-h2 font-bold text-brand-blue mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.heading}
                </h2>
                <p className="text-slate-600 text-body-lg leading-relaxed mb-5">{block.body}</p>
                {block.bullets && block.bullets.length > 0 && (
                  <ul className="space-y-2.5">
                    {block.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-700 text-body">
                        <span className="mt-0.5 text-brand-green font-bold text-lg leading-none">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
