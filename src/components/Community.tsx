import type { CommunityData } from "@/lib/types";

interface CommunityProps {
  data: CommunityData;
}

const PLATFORM_ICONS: Record<string, string> = {
  facebook: "📘",
  instagram: "📸",
  youtube: "▶️",
  tiktok: "🎵",
  twitter: "🐦",
};

const PLATFORM_COLORS: Record<string, string> = {
  facebook: "#1877F2",
  instagram: "#E4405F",
  youtube: "#FF0000",
  tiktok: "#000000",
  twitter: "#1DA1F2",
};

export default function Community({ data }: CommunityProps) {
  return (
    <section id="community" className="section-white py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Síguenos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {data.items.map((item, i) => {
            const color = PLATFORM_COLORS[item.platform.toLowerCase()] || "#1D4E9E";
            const icon = PLATFORM_ICONS[item.platform.toLowerCase()] || "🔗";
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-hover rounded-2xl p-8 flex flex-col items-center text-center group"
              >
                {item.preview ? (
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-5">
                    <img
                      src={item.preview}
                      alt={item.handle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
