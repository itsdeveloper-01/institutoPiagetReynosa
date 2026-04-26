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
      // ─────────────────────────────────────────────────────────
      // Semantic typography scale
      //
      // Role          Token         px    Tailwind equiv
      // ─────────────────────────────────────────────────────────
      // Hero display  text-display  fluid  clamp
      // Page H1       text-h1       fluid  clamp
      // Section H2    text-h2-lg    48px   ≈ text-5xl   (home)
      // Section H2    text-h2       36px   = text-4xl   (home responsive base)
      // Sub-section   text-h2-sub   30px   = text-3xl   (nivel pages)
      // Card title    text-h3       20px   = text-xl
      // Compact head  text-h4       16px   = text-base  (replaces text-sm headings)
      // Body large    text-body-lg  18px   = text-lg    (section body)
      // Body          text-body     16px   = text-base  (card body)
      // Support       text-body-sm  14px   = text-sm    (metadata, UI chrome)
      // Label/caption text-label    12px   = text-xs    (eyebrows, captions)
      // ─────────────────────────────────────────────────────────
      fontSize: {
        "display":  ["clamp(2.4rem,5.5vw,4.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "h1":       ["clamp(2rem,4vw,3.75rem)",     { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "h2-lg":    ["3rem",    { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "h2":       ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "h2-sub":   ["1.875rem",{ lineHeight: "1.3"  }],
        "h3":       ["1.25rem", { lineHeight: "1.35" }],
        "h4":       ["1rem",    { lineHeight: "1.4"  }],
        "body-lg":  ["1.125rem",{ lineHeight: "1.75" }],
        "body":     ["1rem",    { lineHeight: "1.65" }],
        "body-sm":  ["0.875rem",{ lineHeight: "1.6"  }],
        "label":    ["0.75rem", { lineHeight: "1.5",  letterSpacing: "0.05em" }],
      },
    },
  },
  plugins: [],
};

export default config;