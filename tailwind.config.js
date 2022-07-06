/** @type {import('tailwindcss').Config} */

const { indigo } = require("@mui/material/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      animation: {
        "rotate-180": "rotate-90-cw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "rotate-180": {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: " rotate(180deg)",
          },
        },
      },
    },
    colors: {
      primary: indigo,
      white: "#fff",
      black: "#000",
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
