/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    layers: ["base", "components", "utilities"],
  },
  theme: {
    extend: {
      screens: {
        desktop: "1130px",
      },

      colors: {
        "primary-color": "#8A2BE2", 
        "light-purple": "rgba(142, 82, 196, 0.5)", 
        "dark-purple": "#6A0DAD", 
        "light-gray": "#AEAEAE", 
    },
      
    },
  },
  plugins: [],
};
