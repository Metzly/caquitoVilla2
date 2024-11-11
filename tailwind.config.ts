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
        myGreen: "#22A398",
        secondary: "#D4F6FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'mumbai-sticker': ['"The Mumbai Sticker"', 'cursive'],
      }
    },
  },
  plugins: [],
};
export default config;
