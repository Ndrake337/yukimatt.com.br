import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateRows: {
        app: "4rem 1fr 4rem",
      },
      colors:{
        'blue':{
          550: '#3278C0',
        },
        'pink':{
          650: '#C92965',
        }
      },
      fontFamily:{
        roboto:["Roboto", "sans-serif"],        
        rajdhani:["Rajdhani", "sans-serif"],        
        megrim:["Megrim", "system-ui"],        
      }
    },
  },
  plugins: [],
};
export default config;
