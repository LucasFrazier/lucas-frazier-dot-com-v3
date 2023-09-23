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
        light: "#C2C2C2",
        dark: "#333333",
        blue: "#ADC2FF",
        pink: "#EBADE9",
        green: "#67DA69",
      },
    },
  },
  plugins: [],
};
export default config;
