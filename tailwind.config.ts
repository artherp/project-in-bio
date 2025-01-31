import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#050505",
        "background-secondary": "#0F0F10",
        "background-tertiary": "#19191A",
        "content-body": "#CDBCBC",
        "content-placeholder": "#827D7F",
        "content-headline": "#2B2B2B",
        "border-primary": "#19191A",
        "border-secondary": "#323234",
        "border-tertiary": "#97979B",
        "accent-purple": "#4B2DBB",
        "accent-green": "#87BB2D",
        "accent-pink": "#B5446B"
      },
    }, 
    // cria classes para cada uma dessas cores
  },
  plugins: [],
} satisfies Config;
