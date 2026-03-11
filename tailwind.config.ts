import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#080a0f",
        card: "#10141c",
        border: "#1f2633",
        foreground: "#f2f4f8",
        accent: "#a3ff1f",
        muted: "#9aa4b2"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(163,255,31,0.25), 0 14px 50px rgba(85,255,0,0.16)"
      },
      backgroundImage: {
        radialGrid:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.09) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
