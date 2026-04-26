"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Niveles", href: "#niveles" },
  { label: "Comunidad", href: "#community" },
  { label: "Reseñas", href: "#testimonials" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  const resolveHref = (href: string) => (href.startsWith("#") ? (onHome ? href : `/${href}`) : href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full">
        <Container className={`transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
          <div
            className={`rounded-xl px-4 border transition-all duration-300 ${
              scrolled
                ? "bg-white/95 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.1)] border-black/8 py-2"
                : "bg-white/75 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.05)] border-black/5 py-3"
            }`}
          >
            <div className="flex items-center justify-between gap-4">

              {/* Brand logo */}
              <Link href={onHome ? "/#top" : "/"} className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
                <Image
                  src="/logo02.jpg"
                  alt="Instituto Piaget"
                  width={220}
                  height={70}
                  className="h-10 w-auto object-contain"
                  priority
                />
                <Image
                  src="/logo.jpg"
                  alt="Instituto Piaget"
                  width={220}
                  height={70}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
                {NAV_ITEMS.map((it) => (
                  <a
                    key={it.href}
                    href={resolveHref(it.href)}
                    className="relative py-1 hover:text-brand-blue transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {it.label}
                  </a>
                ))}
              </nav>

              {/* CTA + hamburger */}
              <div className="flex items-center gap-2">
                <a
                  href={resolveHref("#contacto")}
                  onClick={() => setOpen(false)}
                  className="hidden lg:inline-flex items-center justify-center rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-900 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Contáctanos
                </a>

                <button
                  type="button"
                  className="lg:hidden inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-2 shadow-sm transition-colors hover:bg-slate-50"
                  aria-label={open ? "Cerrar menú" : "Abrir menú"}
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  onClick={() => setOpen((v) => !v)}
                >
                  <span className="relative block h-5 w-5">
                    <span className={`absolute left-0 top-1 block h-[2px] w-5 bg-slate-900 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`absolute left-0 top-2.5 block h-[2px] w-5 bg-slate-900 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
                    <span className={`absolute left-0 top-4 block h-[2px] w-5 bg-slate-900 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                  </span>
                </button>
              </div>

            </div>
          </div>
        </Container>

        {/* Mobile overlay + drawer */}
        <div className={`lg:hidden fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
          />
          <aside
            id="mobile-menu"
            className={`absolute right-0 top-0 h-dvh w-[88%] max-w-sm bg-white shadow-2xl border-l border-black/10
                        transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="border-b border-black/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/logo02.jpg" alt="Instituto Piaget" width={120} height={40} className="h-8 w-auto object-contain" />
                <div className="text-sm font-semibold text-slate-900">Menú</div>
              </div>
              <button
                className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold transition-colors hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((it) => (
                  <a
                    key={it.href}
                    href={resolveHref(it.href)}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-black/10 bg-white px-4 py-4 shadow-sm hover:border-brand-blue/30 hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-slate-900">{it.label}</div>
                      <span className="text-slate-400 text-lg">›</span>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={resolveHref("#contacto")}
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-xl bg-brand-blue px-4 py-4 text-sm font-semibold text-white text-center transition-all duration-200 hover:bg-slate-900"
              >
                WhatsApp / Correo
              </a>
            </div>
          </aside>
        </div>

      </div>
    </header>
  );
}
