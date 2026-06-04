import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          50: "#EFF5FF",
          100: "#DBE7FE",
          200: "#BFD3FE",
          300: "#93B4FD",
          400: "#608BFA",
          500: "#3B66F6",
          600: "#2563EB",
          700: "#1D4FD7",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        ink: "#0B1220",
        mist: "#F8FAFC",
        slatey: "#475569",
        accent: "#10B981",
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        lift: "0 4px 12px rgba(11,18,32,0.06), 0 20px 48px rgba(11,18,32,0.10)",
        glow: "0 10px 40px rgba(37,99,235,0.18)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(11,18,32,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,0.045) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
