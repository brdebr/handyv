const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  presets: [],
  darkMode: "class",
  theme: {
    colors: {
      sky: colors.sky,
      cyan: colors.cyan,
      blueGray: colors.blueGray,
      orange: colors.orange,
    },
  },
  variants: {},
  plugins: [],
};
