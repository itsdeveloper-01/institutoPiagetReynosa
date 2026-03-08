import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instituto Piaget",
  description: "Educación de excelencia con enfoque Montessori. Maternal, Kinder, Primaria, Secundaria y Preparatoria.",
  openGraph: {
    title: "Instituto Piaget",
    description: "Educación de excelencia con enfoque Montessori.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Netlify Identity Widget – required for Decap CMS */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </head>
      <body>{children}</body>
    </html>
  );
}
