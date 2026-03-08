"use client";

import { useEffect, useRef } from "react";
import type { VisionMissionData } from "@/lib/types";

interface Props {
  data: VisionMissionData;
}

export default function VisionMission({ data }: Props) {
  const imgRef = useRef<HTMLDivElement>(null);

  // Efecto parallax — la imagen sube más lento que el scroll
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.closest("section")!.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!visible) return;
      // Mueve la imagen al 40% de la velocidad del scroll
      const offset = (window.scrollY - (el.closest("section") as HTMLElement).offsetTop) * 0.35;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: "clamp(320px, 55vh, 640px)" }}>

      {/* Imagen con parallax */}
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          top: "-15%",
          bottom: "-15%",
          transition: "transform 0.05s linear",
        }}
      >
        {data.image ? (
          <img
            src={data.image}
            alt="Visión Instituto Piaget"
            className="w-full h-full object-cover"
          />
        ) : (
          /* Fallback degradado con colores del sitio si no hay imagen */
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, #1D4E9E 0%, #163d7a 40%, #0F172A 100%)",
            }}
          />
        )}
      </div>

      {/* Degradado superior — transición desde el celeste del fondo */}
      <div
        className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #D6F0FF 0%, transparent 100%)" }}
      />

      {/* Degradado inferior — hacia el celeste del siguiente bloque */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #D6F0FF 0%, transparent 100%)" }}
      />

      {/* Overlay oscuro central para legibilidad */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 10%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.45) 60%, transparent 90%)",
        }}
      />

      {/* Texto centrado sobre la imagen */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h2
          className="font-bold text-white leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            textShadow: "0 2px 32px rgba(0,0,0,0.35)",
            letterSpacing: "-0.01em",
          }}
        >
          {data.tagline}
        </h2>
      </div>

    </section>
  );
}