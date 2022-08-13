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
        nav: "#a0aec0",
        navHover: "#2626262",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
