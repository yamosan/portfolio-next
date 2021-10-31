const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      black: "#000",
      white: "#f7f7f7",
      current: "currentColor",
      transparent: "transparent",

      main: "#eeba10",
      gray: "#323237", // rgb(50, 50, 55)
      grayDark: "#0f0f11", // rgb(15, 15, 17)
    },
    fontFamily: {
      sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: 0, transform: "translateY(0%)" },
          "50%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(100%)" },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 3s infinite linear",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
