import { readMd, readMdWithBody } from "@/lib/readContent";
import type {
  HeroData,
  MontessoriData,
  VisionMissionData,
  IdentityData,
  PropuestaData,
  LevelsData,
  TecnologiasData,
  CommunityData,
  TestimonialsData,
  LocationData,
  ContactData,
} from "@/lib/types";

import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MontessoriBanner from "@/components/MontessoriBanner";
import VisionMission from "@/components/VisionMission";
import Identity from "@/components/Identity";
import PropuestaEducativa from "@/components/PropuestaEducativa";
import LevelsPath from "@/components/LevelsPath";
import Tecnologias from "@/components/Tecnologias";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import Footer from "@/components/Footer";

export default function HomePage() {
  const hero = readMd<HeroData>("home/hero.md");
  const montessori = readMd<MontessoriData>("home/montessori.md");
  const visionMission = readMd<VisionMissionData>("home/vision-mission.md");
  const identity = readMd<IdentityData>("home/identity.md");
  const propuesta = readMdWithBody<PropuestaData>("home/propuesta-educativa.md");
  const levels = readMd<LevelsData>("home/levels.md");
  const tecnologias = readMd<TecnologiasData>("home/tecnologias.md");
  const community = readMd<CommunityData>("home/community.md");
  const testimonials = readMd<TestimonialsData>("home/testimonials.md");
  const location = readMd<LocationData>("home/location.md");
  const contact = readMd<ContactData>("home/contact.md");

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel slides={hero.slides} />
        <MontessoriBanner data={montessori} />
        <VisionMission data={visionMission} />
        <Identity data={identity} />
        <PropuestaEducativa data={{ title: propuesta.title, body: propuesta.body }} />
        <LevelsPath data={levels} />
        <Tecnologias data={tecnologias} />
        <Community data={community} />
        <Testimonials data={testimonials} />
        <LocationSection data={location} />
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
