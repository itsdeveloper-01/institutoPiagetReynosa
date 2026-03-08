import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1D4E9E",
        "brand-yellow": "#FFD717",
        "brand-red": "#EF2327",
        "brand-green": "#3EB149",
        "brand-gray": "#E6E7E8",
        "sky-bg": "#D6F0FF",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #1D4E9E 0%, #163d7a 50%, #0F172A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
