import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        cream: "#F7F1E5",
        emerald: "#17483B",
        "emerald-dark": "#0E3028",
        gold: "#B99655",
        champagne: "#D8C08A",
        sage: "#7D927F",
        sand: "#EEE4D1"
      },

      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      }
    }
  },

  plugins: []
};

export default config;