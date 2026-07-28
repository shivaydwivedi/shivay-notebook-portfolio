import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        paper: "hsl(var(--paper))",
        ink: "hsl(var(--ink))",
        blue: "hsl(var(--notebook-blue))"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
        hand: ["var(--font-hand)", "var(--font-inter)", "cursive"]
      },
      boxShadow: {
        paper: "0 24px 80px -54px rgb(15 23 42 / 0.48)",
        tab: "0 12px 30px -22px rgb(15 23 42 / 0.55)"
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(hsl(var(--grid-line)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--grid-line)) 1px, transparent 1px)",
        "paper-fiber":
          "radial-gradient(circle at 20% 10%, rgb(12 12 12 / 0.035), transparent 22%), radial-gradient(circle at 80% 30%, rgb(12 12 12 / 0.03), transparent 18%), radial-gradient(circle at 30% 90%, rgb(12 12 12 / 0.025), transparent 20%)"
      }
    }
  },
  plugins: [animate]
};

export default config;
