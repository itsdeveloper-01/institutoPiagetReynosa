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
  const pathname = usePathname();
  const onHome = pathname === "/";

  const resolveHref = (href: string) => (href.startsWith("#") ? (onHome ? href : `/${href}`) : href);

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
        {/* Contenedor fluido responsivo — reemplaza max-w-screen-xl fijo */}
        <Container className="py-3">
          <div className="rounded-xl bg-white/75 backdrop-blur-md shadow-soft border border-black/5 px-4 py-3">
            <div className="flex items-center justify-between gap-4">

              {/* brand-logo */}
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

              {/* menú desktop */}
              <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
                {NAV_ITEMS.map((it) => (
                  <a key={it.href} href={resolveHref(it.href)} className="hover:text-brand-blue transition">
                    {it.label}
                  </a>
                ))}
              </nav>

              {/* CTA + hamburguesa */}
              <div className="flex items-center gap-2">
                <a
                  href={resolveHref("#contacto")}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-slate-900 transition"
                >
                  Contáctanos
                </a>

                <button
                  type="button"
                  className="lg:hidden inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-3 py-2 shadow-soft"
                  aria-label={open ? "Cerrar menú" : "Abrir menú"}
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  onClick={() => setOpen((v) => !v)}
                >
                  <span className="relative block h-5 w-5">
                    <span className={`absolute left-0 top-1 block h-[2px] w-5 bg-slate-900 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`absolute left-0 top-2.5 block h-[2px] w-5 bg-slate-900 transition ${open ? "opacity-0" : ""}`} />
                    <span className={`absolute left-0 top-4 block h-[2px] w-5 bg-slate-900 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                  </span>
                </button>
              </div>

            </div>
          </div>
        </Container>

        {/* Mobile overlay + drawer */}
        <div className={`lg:hidden fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
          />
          <aside
            id="mobile-menu"
            className={`absolute right-0 top-0 h-dvh w-[88%] max-w-sm bg-white shadow-2xl border-l border-black/10
                        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="border-b border-black/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/logo02.jpg" alt="Instituto Piaget" width={120} height={40} className="h-8 w-auto object-contain" />
                <div className="text-sm font-semibold text-slate-900">Menú</div>
              </div>
              <button className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>
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
                    className="rounded-xl border border-black/10 bg-white px-4 py-4 shadow-soft hover:border-black/20 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-slate-900">{it.label}</div>
                      <span className="text-slate-400">›</span>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={resolveHref("#contacto")}
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-xl bg-brand-blue px-4 py-4 text-sm font-semibold text-white text-center shadow-soft hover:bg-slate-900 transition"
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