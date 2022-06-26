/** @type {import('tailwindcss').Config} */

const { indigo } = require("@mui/material/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        fit: "fit-content",
      },
      height: {
        fit: "fit-content",
      },
      zIndex: {
        drawer: "1500",
      },
    },
    colors: {
      primary: indigo,
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
