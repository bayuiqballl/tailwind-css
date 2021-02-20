const { colors } = require{"tailwindcss/defaultTheme"};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "100": "#9cdbff",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
