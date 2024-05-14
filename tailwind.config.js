const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        jplgray: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#C8C8C8",
          400: "#A5A5A5",
          500: "#76777B",
          600: "#5D5D60",
          700: "#434345",
          800: "#2A292A",
        },
        jplred: {
          solid: "#BA0C2F",
          hover: "#EE2737",
        },
        jplgreen: {
          light: "#00AD69",
          dark: "#005851",
        },
        jplslateblue: {
          light: "#004B87",
        },
        jplnasablue: {
          dark: "#0B3D91",
        },
        jplteal: {
          dark: "003D4C",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      /** Extending support to custom fonts and color, to allow access to the available default fonts and colors if need */
      fontFamily: {
        /** Body FONT */
        AceSansBlack: ["Ace Sans Black", "sans-serif"],
        AceSansBlackOblique: ["Ace Sans Black Oblique", "sans-serif"],
        AceSansExtraBold: ["Ace Sans Extrabold", "sans-serif"],
        AceSansExtraBoldOblique: ["Ace Sans Extrabold Oblique", "sans-serif"],
        AceSansBold: ["Ace Sans Bold", "sans-serif"],
        AceSansBoldOblique: ["Ace Sans Bold Oblique", "sans-serif"],
        AceSansMedium: ["Ace Sans Medium", "sans-serif"],
        AceSansMediumOblique: ["Ace Sans Medium Oblique", "sans-serif"],

        /** Header FONT */
        HelveticaNeueLT45: ["Helvetica Neue LT Std Light", "sans-serif"],
        HelveticaNeueLT55: ["Helvetica Neue LT Std Bold", "sans-serif"],
        HelveticaNeueLT55Con: ["Helvetica Neue LT Std Bold Con", "sans-serif"],
        HelveticaNeueLTCon: ["Helvetica Neue LT Std Con", "sans-serif"],
        HelveticaNeueLTMd: ["Helvetica Neue LT Md", "sans-serif"],
        HelveticaNeueLTRomn: ["Helvetica Neue LT Roman", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animate"), nextui()],
}