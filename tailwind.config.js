const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Crimson Text", "serif"],
        secondary: ["Lato", "sans-serif"],
      },
      colors: {
        font: "#2626262",
        nav: "#71717A",
        navHover: "#2626262",
        footerNavHover: "text-gray-200",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
