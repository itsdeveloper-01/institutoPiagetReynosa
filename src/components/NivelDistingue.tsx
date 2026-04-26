import Link from "next/link";
import Image from "next/image";
import type { SubblockItem } from "@/lib/types";
import NivelIcono from "@/components/NivelIcono";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  heading: string;
  body: string;
  bullets?: string[];
  subblocks?: SubblockItem[];
  footer?: string;
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  textFirst?: boolean;
}

export default function NivelDistingue({
  heading,
  body,
  bullets = [],
  subblocks = [],
  footer,
  image,
  imageAlt = "",
  ctaText,
  ctaLink = "/#contacto",
  textFirst = true,
}: Props) {

  const textBlock = (
    <ScrollReveal
      variant={textFirst ? "slide-right" : "slide-left"}
      className="w-full lg:w-1/2 flex flex-col justify-center px-0 lg:px-10 xl:px-16"
    >
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-brand-blue)" }}
      >
        {heading}
      </h2>

      {body && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">{body}</p>
      )}

      {subblocks.length > 0 && (
        <div className="flex flex-col gap-5 mb-8">
          {subblocks.map((sb, i) => {
            const emojiMatch = sb.title.match(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s*/u);
            const emoji = emojiMatch ? emojiMatch[0].trim() : "";
            const cleanTitle = emoji ? sb.title.slice(emoji.length).trim() : sb.title;
            return (
              <div key={i} className="flex gap-4 items-start">
                {emoji && (
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(29,78,158,0.08)" }}
                  >
                    <NivelIcono name={emoji} size={20} />
                  </div>
                )}
                <div>
                  <h3
                    className="font-bold text-brand-blue text-base mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cleanTitle}
                  </h3>
                  <p className="text-slate-600 text-body leading-relaxed">{sb.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {subblocks.length === 0 && bullets.length > 0 && (
        <ul className="mb-8 space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "var(--color-brand-blue)" }}
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-slate-700 text-body leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {footer && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">{footer}</p>
      )}

      {ctaText && (
        <div>
          <Link
            href={ctaLink}
            className="btn-primary inline-flex items-center gap-2 hover:gap-4 transition-all duration-300"
          >
            {ctaText}
            <span>→</span>
          </Link>
        </div>
      )}
    </ScrollReveal>
  );

  const photoBlock = (
    <ScrollReveal
      variant={textFirst ? "slide-left" : "slide-right"}
      delay={120}
      className="w-full lg:w-1/2"
    >
      <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]" style={{ aspectRatio: "4/3" }}>
        {image ? (
          <Image
            src={image}
            alt={imageAlt || heading}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
            quality={80}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ minHeight: "320px", backgroundColor: "var(--color-brand-gray)" }}
          >
            <span className="text-5xl opacity-30">📷</span>
          </div>
        )}
      </div>
    </ScrollReveal>
  );

  return (
    <section className="section-sky py-16 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {textFirst ? (
            <>{textBlock}{photoBlock}</>
          ) : (
            <>{photoBlock}{textBlock}</>
          )}
        </div>
      </div>
    </section>
  );
}
