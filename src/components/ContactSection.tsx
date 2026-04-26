import type { ContactData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface ContactSectionProps {
  data: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  const waUrl = `https://wa.me/${data.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    data.whatsappMessage
  )}`;

  return (
    <section id="contacto" className="section-sky py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-10 lg:p-14 shadow-[0_12px_48px_rgba(0,0,0,0.1)]">
              <div className="text-5xl mb-6">👋</div>
              <p className="eyebrow mb-3">Contacto</p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {data.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{data.body}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-green-200"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.531 5.845L0 24l6.335-1.505A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.366l-.36-.214-3.727.977.995-3.63-.234-.374A9.783 9.783 0 012.182 12C2.182 6.588 6.588 2.182 12 2.182S21.818 6.588 21.818 12 17.412 21.818 12 21.818z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center justify-center gap-3 bg-brand-blue hover:bg-slate-900 text-white font-semibold rounded-full px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar correo
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
