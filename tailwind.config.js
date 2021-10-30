module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      current: "currentColor",
      transparent: "transparent",

      gray: "#323237", // rgb(50, 50, 55)
      grayDark: "#0f0f11", // rgb(15, 15, 17)
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
