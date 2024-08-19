import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        small: "none",
        mine: "none",
      },
      animation: {
        fade: "fade 1s ease-in-out",
      },
      borderRadius: {
        xl: "0",
        lg: "0",
      },
      borderColor: {
        white: "transparent",
      },
      colors: {
        gray: { 500: "red" },
      },
      fontSize: {
        xs: "11.5px",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "1" },
          "40%": { opacity: "0.3" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
