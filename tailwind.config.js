/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        medium: "medium",
        bold: "bold",
        light: "light",
        thin: "thin",
        extrabold: "extrabold",
        black_Iranyekan: "black_Iranyekan",
      },
      colors: {
        "main-black": "#000000",
        "main-dark-charcoal": "#0e1011",
        "main-deep-teal": "#131b1f",
        "main-navy-blue": "#213743",
        "main-steel-gray": "#253035",
        "main-slate-gray": "#737779",
        "main-silver": "#a0a3a5",
        "main-light-gray": "#d0d1d2",
        "main-gainsboro": "#d8d8d8",
        "main-light-silver": "#e7e8e9",
        "main-white-smoke": "#f0f0f0",
        "main-snow": "#f1f1f1",
        "main-light-grayish-silver": "#f5f5f5",
        "main-light-grayish-white": "#f7f7f7",
        "main-white": "#ffffff",
        "main-light-orange": "#ffa41b",
        "main-orange": "#ffa41b",
        "main-dark-red": "#fb3449",
        "main-blue": "#2c7df9",
        "main-favorite-red": "#f66047",
        "main-discount-new": "#5E5FB2",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
      boxShadow: {
        info: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      },
    },
  },
  plugins: [],
};
