import { readMd } from "@/lib/readContent";
import type { NivelData, ContactData, LocationData } from "@/lib/types";

import Navbar from "@/components/Navbar";
import NivelHero from "@/components/NivelHero";
import NivelDistingue from "@/components/NivelDistingue";
import NivelAreasDesarrollo from "@/components/NivelAreasDesarrollo";
import NivelEtapaTrabajan from "@/components/NivelEtapaTrabajan";
import NivelMultigradoBilingual from "@/components/NivelMultigradoBilingual";
import NivelTalleres from "@/components/NivelTalleres";
import NivelClubInteract from "@/components/NivelClubInteract";
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

  const hasDistingue   = !!data.distingueHeading;
  const hasAreas       = !!(data.areasItems && data.areasItems.length > 0);
  const hasMultigrado  = !!(data.multigradoBody || (data.bilingueItems && data.bilingueItems.length > 0));
  const hasEtapa       = !!(data.etapaItems && data.etapaItems.length > 0);
  const hasTrabajan    = !!data.trabajanHeading;
  const hasDesarrollo  = !!data.desarrolloHeading;
  const hasInteract    = !!(data.interactBody || (data.interactItems && data.interactItems.length > 0));
  const hasOrgulloFull = !!(data.orgulloTitle || data.orgulloSubtitle);
  const hasOrgulloEmbed = !hasOrgulloFull && !!(data.orgulloItems && data.orgulloItems.length > 0 || data.orgulloVideoUrl);
  const hasTalleres    = !!(data.talleres && data.talleres.length > 0);
  const hasHorarios    = !!(data.horarios && data.horarios.length > 0);
  const hasGallery     = !!(data.gallery && data.gallery.length > 0);
  const hasFaq         = !!(data.faq && data.faq.length > 0);

  return (
    <>
      <Navbar />
      <main>

        {/* 1. HERO */}
        <NivelHero data={data} />

        {/* 2. Nos distingue */}
        {hasDistingue && (
          <NivelDistingue
            heading={data.distingueHeading!}
            body={data.distingueBody ?? ""}
            bullets={data.distingueBullets}
            subblocks={data.distingueSubblocks}
            image={data.distingueImage}
            ctaText={data.distingueCtaText}
            ctaLink={data.distingueCtaLink}
            textFirst={true}
          />
        )}

        {/* 3. Áreas de desarrollo + Valores */}
        {hasAreas && (
          <NivelAreasDesarrollo
            title={data.areasTitle}
            subtitle={data.areasSubtitle}
            items={data.areasItems!}
            valoresTitle={data.valoresTitle}
            valoresSubtitle={data.valoresSubtitle}
            valoresItems={data.valoresItems}
            valoresCards={data.valoresCards}
            valoresFooter={data.valoresFooter}
            programasTitle={data.programasTitle}
            programasItems={data.programasItems}
          />
        )}

        {/* 4. Multigrado + Bilingüe */}
        {hasMultigrado && (
          <NivelMultigradoBilingual
            multigradoTitle={data.multigradoTitle}
            multigradoBody={data.multigradoBody}
            bilingueTitle={data.bilingueTitle}
            bilingueItems={data.bilingueItems}
            programasTitle={data.programasTitle}
            programasItems={data.programasItems}
          />
        )}

        {/* 5. En esta etapa los alumnos trabajan */}
        {hasEtapa && (
          <NivelEtapaTrabajan
            title={data.etapaTitle}
            subtitle={data.etapaSubtitle}
            items={data.etapaItems!}
            footer={data.etapaFooter}
          />
        )}

        {/* 6. Desarrollo Académico */}
        {hasTrabajan && (
          <NivelDistingue
            heading={data.trabajanHeading!}
            body={data.trabajanBody ?? ""}
            bullets={data.trabajanBullets}
            footer={data.trabajanFooter}
            image={data.trabajanImage}
            ctaText={data.trabajanCtaText}
            ctaLink={data.trabajanCtaLink}
            textFirst={false}
          />
        )}

        {/* 7. Bloque 3 opcional */}
        {hasDesarrollo && (
          <NivelDistingue
            heading={data.desarrolloHeading!}
            body={data.desarrolloBody ?? ""}
            bullets={data.desarrolloBullets}
            image={data.desarrolloImage}
            ctaText={data.desarrolloCtaText}
            ctaLink={data.desarrolloCtaLink}
            textFirst={true}
          />
        )}

        {/* 7b. Club Interact — antes de Orgullo Piaget */}
        {hasInteract && (
          <NivelClubInteract
            title={data.interactTitle}
            body={data.interactBody}
            items={data.interactItems}
          />
        )}

        {/* 8a. Orgullo Piaget — full width (con título propio) */}
        {hasOrgulloFull && (
          <NivelOrgulloPiaget
            title={data.orgulloTitle}
            subtitle={data.orgulloSubtitle}
            videoUrl={data.orgulloVideoUrl}
            videoPoster={data.orgulloVideoPoster}
            items={data.orgulloItems ?? []}
            fullWidth={true}
          />
        )}

        {/* 8b. Orgullo Piaget — embedded en glass-card */}
        {hasOrgulloEmbed && (
          <section className="section-sky py-14 lg:py-20">
            <div className={W}>
              <div className="glass-card rounded-2xl p-8">
                <NivelOrgulloPiaget
                  videoUrl={data.orgulloVideoUrl}
                  videoPoster={data.orgulloVideoPoster}
                  items={data.orgulloItems ?? []}
                  fullWidth={false}
                />
              </div>
            </div>
          </section>
        )}

        {/* 9. Talleres */}
        {hasTalleres && (
          <NivelTalleres talleres={data.talleres!} />
        )}

        {/* 9b. Club Interact — solo preparatoria */}

        {/* 10. Horarios | Galería */}
        {(hasHorarios || hasGallery) && (
          <section className="section-sky py-14 lg:py-20">
            <div className={W}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {hasHorarios && (
                  <NivelHorarios
                    horarios={data.horarios!}
                    subtitle={data.horariosSubtitle}
                    embedded={true}
                  />
                )}
                {hasGallery && (
                  <NivelGallery gallery={data.gallery!} embedded={true} />
                )}
              </div>
            </div>
          </section>
        )}

        {/* 11. FAQ | Mapa */}
        {hasFaq && (
          <section className="section-sky py-14 lg:py-20">
            <div className={W}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <NivelFaq faq={data.faq!} embedded={true} />
                <div className="rounded-2xl overflow-hidden" style={{ minHeight: "380px" }}>
                  <LocationSection data={location} embedded />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 12. Contacto */}
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