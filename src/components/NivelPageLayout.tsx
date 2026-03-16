import { readMd } from "@/lib/readContent";
import type { NivelData, ContactData, LocationData } from "@/lib/types";

import Navbar from "@/components/Navbar";
import NivelHero from "@/components/NivelHero";
import NivelDistingue from "@/components/NivelDistingue";
import NivelAreasDesarrollo from "@/components/NivelAreasDesarrollo";
import NivelEtapaTrabajan from "@/components/NivelEtapaTrabajan";
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

        {/* ── 1. HERO ───────────────────────────────────────────────── */}
        <NivelHero data={data} />

        {/* ── 2. "Nos distingue" — Texto izq / Foto der ────────────── */}
        {data.distingueHeading && (
          <NivelDistingue
            heading={data.distingueHeading}
            body={data.distingueBody ?? ""}
            bullets={data.distingueBullets}
            subblocks={data.distingueSubblocks}
            image={data.distingueImage}
            ctaText={data.distingueCtaText}
            ctaLink={data.distingueCtaLink}
            textFirst={true}
          />
        )}

        {/* ── 3. Áreas de desarrollo + Valores ─────────────────────── */}
        {data.areasItems && data.areasItems.length > 0 && (
          <NivelAreasDesarrollo
            title={data.areasTitle}
            items={data.areasItems}
            valoresTitle={data.valoresTitle}
            valoresItems={data.valoresItems}
          />
        )}

        {/* ── 4. En esta etapa, los niños trabajan ─────────────────── */}
        {data.etapaItems && data.etapaItems.length > 0 && (
          <NivelEtapaTrabajan
            title={data.etapaTitle}
            items={data.etapaItems}
          />
        )}

        {/* ── 5. Desarrollo Académico — Foto izq / Texto der ───────── */}
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

        {/* ── 6. Bloque 3 opcional ─────────────────────────────────── */}
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

        {/* ── 7. BENTO 3 FILAS ─────────────────────────────────────── */}
        <section className="section-sky py-14 lg:py-20">
          <div className={W}>
            <div className="flex flex-col gap-6">

              {/* Fila 1: Talleres (con carrusel) | Orgullo Piaget */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="glass-card rounded-2xl p-8">
                  <NivelTalleres
                    talleres={data.talleres ?? []}
                    images={data.talleresImages ?? []}
                    embedded
                  />
                </div>
                <div className="glass-card rounded-2xl p-8">
                  <NivelOrgulloPiaget
                    videoUrl={data.orgulloVideoUrl}
                    videoPoster={data.orgulloVideoPoster}
                    items={data.orgulloItems ?? []}
                  />
                </div>
              </div>

              {/* Fila 2: Horarios (con carrusel) | Galería */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="glass-card rounded-2xl p-8">
                  <NivelHorarios
                    horarios={data.horarios ?? []}
                    subtitle={data.horariosSubtitle}
                    images={data.horariosImages ?? []}
                    embedded
                  />
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

        {/* ── 8. CONTACTO — igual al home ──────────────────────────── */}
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