import Container from "@/components/Container";

export interface PhotoMosaicItem {
  src: string;
  alt: string;
}

export interface PhotoMosaicData {
  photos: PhotoMosaicItem[];
}

interface Props {
  data: PhotoMosaicData;
}

export default function PhotoMosaic({ data }: Props) {
  const photos = data.photos ?? [];
  if (photos.length < 5) return null;

  // Posiciones del bento: [izq-top, izq-bot, centro-grande, der-top, der-bot]
  const [leftTop, leftBot, center, rightTop, rightBot] = photos;

  return (
    <section className="section-sky pb-10">
      <Container wide>
        {/*
          Grid de 5 celdas estilo bento:
          col-1  | col-2 (ancha) | col-3
          small  |   BIG         | small
          small  |   BIG         | small
        */}
        <div
          className="grid gap-3 sm:gap-4"
          style={{
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows:    "1fr 1fr",
          }}
        >
          {/* Columna izquierda — dos fotos apiladas */}
          <div className="rounded-2xl overflow-hidden" style={{ gridRow: "1 / 2" }}>
            <img
              src={leftTop.src}
              alt={leftTop.alt}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ gridRow: "2 / 3" }}>
            <img
              src={leftBot.src}
              alt={leftBot.alt}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Centro — foto grande que ocupa 2 filas */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}
          >
            <img
              src={center.src}
              alt={center.alt}
              className="w-full h-full object-cover"
              style={{ minHeight: "400px", maxHeight: "640px" }}
            />
          </div>

          {/* Columna derecha — dos fotos apiladas */}
          <div className="rounded-2xl overflow-hidden" style={{ gridRow: "1 / 2" }}>
            <img
              src={rightTop.src}
              alt={rightTop.alt}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ gridRow: "2 / 3" }}>
            <img
              src={rightBot.src}
              alt={rightBot.alt}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}