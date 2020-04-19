const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: colors.red,
        instagram: "#E1306C",
        linkedin: "#2867B2",
        github: "#211F1F",
        dribbble: "#EA4C89",
        facebook: "#3B5998",
        twitter: "#1DA1F2",
        google: "#DB4437",
      },
    },
  },
};
