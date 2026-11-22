/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f2efe7",
        ink: "#3368a0",
        primary: "#66a3bf",
        mist: "#c8dfdb",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "440px",
      // => @media (min-width: 440px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
