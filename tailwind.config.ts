import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        inherit: "inherit",
      },
      gridTemplateRows: {
        app: "4rem 1fr 4rem",
      },
      colors: {
        blue: {
          550: "#3278C0",
        },
        pink: {
          650: "#C92965",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        megrim: ["Megrim", "system-ui"],
      },
      boxShadow: {
        top: "0px -8px 36px -16px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
export default config;
