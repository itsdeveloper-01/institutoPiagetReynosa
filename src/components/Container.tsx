interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;   // usa max-w-9xl para secciones hero/full-bleed
}

/**
 * Contenedor fluido responsivo.
 * - móvil:    px-4  (16px)
 * - tablet:   px-6  (24px)
 * - desktop:  px-10 (40px)
 * - wide:     px-16 (64px) + max-w-9xl
 * - ultrawide: crece hasta 1920px y luego centra
 */
export default function Container({ children, className = "", wide = false }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full
        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16
        ${wide ? "max-w-9xl" : "max-w-8xl"}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}