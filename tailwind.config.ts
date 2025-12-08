import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--secondary-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
      },
      animation: {
        "poke-bounce": "poke-bounce 3s ease-in-out infinite",
      },
      keyframes: {
        "poke-bounce": {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
}

export default config
