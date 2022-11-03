/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
      minHeight: {
        30: "360px",
      },
      boxShadow: {
        shadow: "rgb(0 0 0 / 3%) 0px 0px 3px 3px",
      },
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlue: "hsl(207, 26%, 17%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      maxWidth: {
        560: "560px",
      },
      maxHeight: {
        400: "400px",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
