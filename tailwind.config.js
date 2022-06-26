/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
