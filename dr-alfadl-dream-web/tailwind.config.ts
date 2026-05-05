import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8edf5",
          100: "#c5d0e6",
          200: "#9fb0d5",
          300: "#7690c4",
          400: "#5a79b8",
          500: "#3c62ac",
          600: "#2d4f8e",
          700: "#1B2B4B",
          800: "#0F1E36",
          900: "#0A1628",
          950: "#060d1a",
        },
        gold: {
          50: "#fef9ec",
          100: "#fdf0c8",
          200: "#fbe08e",
          300: "#f8cc54",
          400: "#F0C040",
          500: "#D4AF37",
          600: "#C9A84C",
          700: "#a67c1e",
          800: "#875f1a",
          900: "#6d4c17",
        },
        cream: {
          50: "#FAFAF8",
          100: "#F5F4EF",
          200: "#EDE9DF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Tajawal", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0A1628 0%, #1B2B4B 50%, #243B55 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #F0C040 100%)",
        "luxury-gradient": "linear-gradient(135deg, #0A1628 0%, #1B2B4B 60%, #0A1628 100%)",
        "hero-pattern": "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(27,43,75,0.8) 0%, transparent 60%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212,175,55,0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "luxury": "0 25px 60px rgba(10, 22, 40, 0.4)",
        "gold": "0 8px 32px rgba(201, 168, 76, 0.3)",
        "card": "0 4px 24px rgba(10, 22, 40, 0.12)",
        "card-hover": "0 12px 40px rgba(10, 22, 40, 0.2)",
        "glass": "0 8px 32px rgba(255, 255, 255, 0.1)",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      screens: {
        "xs": "480px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
