import type { CommunityData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface CommunityProps {
  data: CommunityData;
}

const PLATFORM_ICONS: Record<string, string> = {
  facebook:  "📘",
  instagram: "📸",
  youtube:   "▶️",
  tiktok:    "🎵",
  twitter:   "🐦",
};

const PLATFORM_COLORS: Record<string, string> = {
  facebook:  "#1877F2",
  instagram: "#E4405F",
  youtube:   "#FF0000",
  tiktok:    "#000000",
  twitter:   "#1DA1F2",
};

export default function Community({ data }: CommunityProps) {
  return (
    <section id="community" className="section-white py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="eyebrow mb-3">Síguenos</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {data.items.map((item, i) => {
            const color = PLATFORM_COLORS[item.platform.toLowerCase()] || "#1D4E9E";
            const icon = PLATFORM_ICONS[item.platform.toLowerCase()] || "🔗";
            return (
              <ScrollReveal key={i} delay={i * 130} className="flex flex-col">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card card-hover rounded-2xl p-8 flex flex-col items-center text-center group h-full"
                >
                  {item.preview ? (
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-5">
                      <img
                        src={item.preview}
                        alt={item.handle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-md"
                      style={{ background: color + "18" }}
                    >
                      {icon}
                    </div>
                  )}
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color }}
                  >
                    {item.platform}
                  </p>
                  <p className="text-slate-700 font-semibold">{item.handle}</p>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
