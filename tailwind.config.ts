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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          DEFAULT: "#131B30",
          light: "#2F3D60",
          clash: "#023CDE",
        },
        purple: "#9BA5E2",

        red: "#D82366",
      },
    },
  },
  plugins: [],
};
export default config;
