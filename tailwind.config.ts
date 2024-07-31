import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D3A55C",
          muted: "#D4AF37",
        },
        black: {
          DEFAULT: "#000000",
          light: "#333333",
        },
        gray: {
          DEFAULT: "#CCCCCC",
          dark: "#333333",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
