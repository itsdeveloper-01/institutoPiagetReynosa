import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        "xs":   "375px",
        "sm":   "640px",
        "md":   "768px",
        "lg":   "1024px",
        "xl":   "1280px",
        "2xl":  "1536px",
        "3xl":  "1920px",
        "4xl":  "2560px",
      },
      maxWidth: {
        "8xl":  "1440px",
        "9xl":  "1920px",
        "fluid": "min(1600px, 92vw)",
      },
      colors: {
        "brand-blue":   "#1D4E9E",
        "brand-yellow": "#FFD717",
        "brand-red":    "#EF2327",
        "brand-green":  "#3EB149",
        "brand-gray":   "#E6E7E8",
        "sky-bg":       "#D6F0FF",
      },
      fontFamily: {
        display: ["Montserrat", "system-ui", "sans-serif"],
        body:    ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;