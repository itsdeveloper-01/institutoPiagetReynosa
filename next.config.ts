import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos modernos — Next.js sirve WebP/AVIF automáticamente
    formats: ["image/avif", "image/webp"],

    // Tamaños de dispositivo para srcSet responsivo
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Calidad global por defecto
    qualities: [75, 80, 85],

    // Dominios externos permitidos (CMS uploads locales no necesitan esto)
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
