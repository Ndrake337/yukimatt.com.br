/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        confortaa: ["var(--font-comfortaa)"],
        megrim: ["var(--font-megrim)"],
      },
      boxShadow: {
        "body-shadow": "0px 4px 8px 3px rgba(0, 0, 0, 0.25)",
      },
    },
    backgroundImage: {
      "cover-pattern": "url('/cover.png')",
    },
    colors: {
      "dark-gray": "#242424",
      "light-gray": "#DFDFDF",
      black: "#000000",
      purple: "#2D2B3C",
      red: "#FF0000",
    },
  },
  plugins: [],
};
