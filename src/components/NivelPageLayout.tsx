import { readMd } from "@/lib/readContent";
import type { NivelData, ContactData, LocationData } from "@/lib/types";

import Navbar from "@/components/Navbar";
import NivelHero from "@/components/NivelHero";
import NivelDistingue from "@/components/NivelDistingue";
import NivelTalleres from "@/components/NivelTalleres";
import NivelOrgulloPiaget from "@/components/NivelOrgulloPiaget";
import NivelHorarios from "@/components/NivelHorarios";
import NivelGallery from "@/components/NivelGallery";
import NivelFaq from "@/components/NivelFaq";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Footer from "@/components/Footer";

interface NivelPageProps { slug: string; }

const W = "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl";

export default function NivelPage({ slug }: NivelPageProps) {
  const data     = readMd<NivelData>(`levels/${slug}.md`);
  const contact  = readMd<ContactData>("home/contact.md");
  const location = readMd<LocationData>("home/location.md");

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <NivelHero data={data} />

        {/* ── BLOQUES TEXTO/FOTO ───────────────────────── */}
        {data.distingueHeading && (
          <NivelDistingue
            heading={data.distingueHeading}
            body={data.distingueBody ?? ""}
            bullets={data.distingueBullets}
            image={data.distingueImage}
            ctaText={data.distingueCtaText}
            ctaLink={data.distingueCtaLink}
            textFirst={true}
          />
        )}
        {data.trabajanHeading && (
          <NivelDistingue
            heading={data.trabajanHeading}
            body={data.trabajanBody ?? ""}
            bullets={data.trabajanBullets}
            image={data.trabajanImage}
            ctaText={data.trabajanCtaText}
            ctaLink={data.trabajanCtaLink}
            textFirst={false}
          />
        )}
        {data.desarrolloHeading && (
          <NivelDistingue
            heading={data.desarrolloHeading}
            body={data.desarrolloBody ?? ""}
            bullets={data.desarrolloBullets}
            image={data.desarrolloImage}
            ctaText={data.desarrolloCtaText}
            ctaLink={data.desarrolloCtaLink}
            textFirst={true}
          />
        )}

        {/* ── GRID 3 FILAS — una sola sección, gap uniforme ── */}
        <section className="section-sky py-14 lg:py-20">
          <div className={W}>
            <div className="flex flex-col gap-6">

              {/* Fila 1: Talleres | Orgullo Piaget */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="glass-card rounded-2xl p-8">
                  <NivelTalleres talleres={data.talleres ?? []} embedded />
                </div>
                <div className="glass-card rounded-2xl p-8">
                  <NivelOrgulloPiaget
                    videoUrl={data.orgulloVideoUrl}
                    videoPoster={data.orgulloVideoPoster}
                    items={data.orgulloItems ?? []}
                  />
                </div>
              </div>

              {/* Fila 2: Horarios | Galería */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="glass-card rounded-2xl p-8">
                  <NivelHorarios horarios={data.horarios ?? []} embedded />
                </div>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <NivelGallery gallery={data.gallery ?? []} embedded />
                </div>
              </div>

              {/* Fila 3: FAQ | Mapa */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="glass-card rounded-2xl p-8">
                  <NivelFaq faq={data.faq ?? []} embedded />
                </div>
                <div className="glass-card rounded-2xl overflow-hidden" style={{ minHeight: "380px" }}>
                  <LocationSection data={location} embedded />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CONTACTO — igual al home ─────────────────── */}
        <ContactSection data={contact} />

      </main>
      <Footer />
      <FloatingContactButtons
        whatsappNumber={contact.whatsappNumber}
        whatsappMessage={contact.whatsappMessage}
        email={contact.email}
      />
    </>
  );
}