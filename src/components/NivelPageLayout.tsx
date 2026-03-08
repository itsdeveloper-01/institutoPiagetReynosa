import { readMd } from "@/lib/readContent";
import type { NivelData, ContactData } from "@/lib/types";

import Navbar from "@/components/Navbar";
import NivelHero from "@/components/NivelHero";
import NivelAge from "@/components/NivelAge";
import FeatureSplit from "@/components/FeatureSplit";
import MaternalExtras from "@/components/MaternalExtras";
import NivelTalleres from "@/components/NivelTalleres";
import NivelHorarios from "@/components/NivelHorarios";
import NivelGallery from "@/components/NivelGallery";
import NivelFaq from "@/components/NivelFaq";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Footer from "@/components/Footer";

interface NivelPageProps {
  slug: string;
}

export default function NivelPage({ slug }: NivelPageProps) {
  const data = readMd<NivelData>(`levels/${slug}.md`);
  const contact = readMd<ContactData>("home/contact.md");
  const isMaernal = slug === "maternal";

  return (
    <>
      <Navbar />
      <main>
        <NivelHero data={data} />
        <NivelAge ageRange={data.ageRange} ageDescription={data.ageDescription} />
        {isMaernal && (
          <MaternalExtras
            valores={data.valores}
            enEstaEtapa={data.enEstaEtapa}
            desarrolloAcademico={data.desarrolloAcademico}
          />
        )}
        <FeatureSplit blocks={data.blocks || []} />
        <NivelTalleres talleres={data.talleres || []} />
        <NivelHorarios horarios={data.horarios || []} />
        <NivelGallery gallery={data.gallery || []} />
        <NivelFaq faq={data.faq || []} />
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
