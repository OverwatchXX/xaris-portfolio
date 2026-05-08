import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        phlox: "#CAA9F3",
        verbena: "#B37AD4",
        periwinkle: "#7997E6",
        atlantis: "#206ABC",
        phthalo: "#0E155E",
        "deep-space": "#060914",
        "mid-space": "#0B1028",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #060914 0%, #0B1028 50%, #0E155E 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(202,169,243,0.08) 0%, rgba(121,151,230,0.04) 100%)",
        "glow-verbena": "radial-gradient(circle, rgba(179,122,212,0.3) 0%, transparent 70%)",
        "glow-periwinkle": "radial-gradient(circle, rgba(121,151,230,0.3) 0%, transparent 70%)",
        "glow-phlox": "radial-gradient(circle, rgba(202,169,243,0.25) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-phlox": "0 0 40px rgba(202,169,243,0.3), 0 0 80px rgba(179,122,212,0.15)",
        "glow-verbena": "0 0 40px rgba(179,122,212,0.4), 0 0 80px rgba(121,151,230,0.2)",
        "glow-periwinkle": "0 0 30px rgba(121,151,230,0.3)",
        "glow-card": "0 8px 32px rgba(14,21,94,0.5), inset 0 1px 0 rgba(202,169,243,0.1)",
        "glow-card-hover": "0 16px 48px rgba(179,122,212,0.3), 0 0 80px rgba(121,151,230,0.15), inset 0 1px 0 rgba(202,169,243,0.2)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
        "spin-slow": "spin 20s linear infinite",
        "drift": "drift 15s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
          "33%": { transform: "translateX(30px) translateY(-15px)" },
          "66%": { transform: "translateX(-20px) translateY(10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
