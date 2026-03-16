import Image from "next/image";
import Container from "@/components/Container";

export interface PhotoMosaicItem { src: string; alt: string; }
export interface PhotoMosaicData { photos: PhotoMosaicItem[]; }
interface Props { data: PhotoMosaicData; }

export default function PhotoMosaic({ data }: Props) {
  const photos = data.photos ?? [];
  if (photos.length < 5) return null;
  const [leftTop, leftBot, center, rightTop, rightBot] = photos;

  return (
    <section className="section-sky pb-10">
      <Container wide>
        <div className="grid gap-3 sm:gap-4" style={{ gridTemplateColumns: "1fr 2fr 1fr", gridTemplateRows: "1fr 1fr" }}>

          <div className="rounded-2xl overflow-hidden relative aspect-[4/3]" style={{ gridRow: "1/2" }}>
            <Image src={leftTop.src} alt={leftTop.alt} fill sizes="20vw" className="object-cover" loading="lazy" quality={75} />
          </div>
          <div className="rounded-2xl overflow-hidden relative aspect-[4/3]" style={{ gridRow: "2/3" }}>
            <Image src={leftBot.src} alt={leftBot.alt} fill sizes="20vw" className="object-cover" loading="lazy" quality={75} />
          </div>

          <div className="rounded-2xl overflow-hidden relative" style={{ gridColumn: "2/3", gridRow: "1/3", minHeight: "400px" }}>
            <Image src={center.src} alt={center.alt} fill sizes="40vw" className="object-cover" loading="lazy" quality={80} />
          </div>

          <div className="rounded-2xl overflow-hidden relative aspect-[4/3]" style={{ gridRow: "1/2" }}>
            <Image src={rightTop.src} alt={rightTop.alt} fill sizes="20vw" className="object-cover" loading="lazy" quality={75} />
          </div>
          <div className="rounded-2xl overflow-hidden relative aspect-[4/3]" style={{ gridRow: "2/3" }}>
            <Image src={rightBot.src} alt={rightBot.alt} fill sizes="20vw" className="object-cover" loading="lazy" quality={75} />
          </div>

        </div>
      </Container>
    </section>
  );
}
