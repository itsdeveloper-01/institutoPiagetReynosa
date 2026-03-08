"use client";

import { useState, useEffect } from "react";

interface FloatingContactButtonsProps {
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
}

export default function FloatingContactButtons({
  whatsappNumber,
  whatsappMessage,
  email,
}: FloatingContactButtonsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const waUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {/* Mail */}
      <a
        href={`mailto:${email}`}
        aria-label="Enviar correo"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
        style={{ background: "var(--color-brand-blue)" }}
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
        style={{ background: "#25D366" }}
      >
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.531 5.845L0 24l6.335-1.505A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.36-.214-3.727.977.995-3.63-.234-.374A9.783 9.783 0 012.182 12C2.182 6.588 6.588 2.182 12 2.182S21.818 6.588 21.818 12 17.412 21.818 12 21.818z" />
        </svg>
      </a>
    </div>
  );
}
