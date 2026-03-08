// ─── Home types ───────────────────────────────────────────────────────────────

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeroData {
  slides: HeroSlide[];
}

export interface MontessoriData {
  title: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface VisionMissionData {
  tagline: string;
  image?: string;
}

export interface IdentityCard {
  icon: string;
  title: string;
  body: string;
}

export interface IdentityData {
  cards: IdentityCard[];
}

export interface PropuestaData {
  title: string;
  body: string;
}

export interface PhotoMosaicItem {
  src: string;
  alt: string;
}

export interface PhotoMosaicData {
  photos: PhotoMosaicItem[];
}


export interface LevelItem {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  color: string;
}

export interface AchievementSlide {
  image: string;
  caption: string;
}

export interface LevelsData {
  title: string;
  items: LevelItem[];
  achievementsTitle: string;
  achievementsBody: string;
  achievementsBullets: string[];
  achievementsSlides: AchievementSlide[];
}

export interface TecnologiasData {
  title: string;
  body: string;
  image?: string;
}

export interface CommunityItem {
  platform: string;
  handle: string;
  url: string;
  preview?: string;
}

export interface CommunityData {
  title: string;
  items: CommunityItem[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface TestimonialsData {
  title: string;
  items: TestimonialItem[];
}

export interface LocationData {
  title: string;
  address: string;
  embedUrl: string;
}

export interface ContactData {
  title: string;
  body: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
}

// ─── Nivel (page) types ────────────────────────────────────────────────────────

export interface NivelBlock {
  heading: string;
  body: string;
  image: string;
  imageAlt?: string;
  imagePosition: "left" | "right";
  bullets?: string[];
}

export interface Taller {
  name: string;
  description: string;
  icon?: string;
}

export interface HorarioItem {
  dia: string;
  horario: string;
}

export interface GalleryItem {
  image: string;
  caption?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ValorItem {
  icon: string;
  title: string;
  description: string;
}

export interface OrgulloItem {
  icon: string;
  title: string;
  body: string;
}

export interface NivelData {
  slug: string;
  title: string;
  displayName: string;
  subtitle: string;
  heroImage: string;
  ctaText: string;
  ctaLink: string;
  ageRange: string;
  ageDescription: string;
  // Bloque 1: Texto izq / Foto der
  distingueHeading?: string;
  distingueBody?: string;
  distingueBullets?: string[];
  distingueImage?: string;
  distingueCtaText?: string;
  distingueCtaLink?: string;
  // Bloque 2: Foto izq / Texto der
  trabajanHeading?: string;
  trabajanBody?: string;
  trabajanBullets?: string[];
  trabajanImage?: string;
  trabajanCtaText?: string;
  trabajanCtaLink?: string;
  // Bloque 3: Texto izq / Foto der
  desarrolloHeading?: string;
  desarrolloBody?: string;
  desarrolloBullets?: string[];
  desarrolloImage?: string;
  desarrolloCtaText?: string;
  desarrolloCtaLink?: string;
  // Orgullo Piaget
  orgulloItems?: OrgulloItem[];
  orgulloVideoUrl?: string;
  orgulloVideoPoster?: string;
  // Resto
  blocks: NivelBlock[];
  talleres?: Taller[];
  horarios?: HorarioItem[];
  gallery?: GalleryItem[];
  faq?: FaqItem[];
  // solo maternal
  valores?: ValorItem[];
  enEstaEtapa?: string[];
  desarrolloAcademico?: string;
}