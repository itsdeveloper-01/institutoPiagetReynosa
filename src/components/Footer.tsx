import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const LEVEL_LINKS = [
  { label: "Maternal",     href: "/niveles/maternal" },
  { label: "Kinder",       href: "/niveles/kinder" },
  { label: "Primaria",     href: "/niveles/primaria" },
  { label: "Secundaria",   href: "/niveles/secundaria" },
  { label: "Preparatoria", href: "/niveles/preparatoria" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-dark py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>P</span>
              </div>
              <span className="text-white font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                Instituto Piaget
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-slate-400">
              {LEVEL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <p className="text-slate-500 text-sm">
              © {year} Instituto Piaget
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
