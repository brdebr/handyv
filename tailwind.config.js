const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        blueGray: colors.blueGray,
        orange: colors.orange,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
