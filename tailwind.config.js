module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    listStyleType: {
      square: "square",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "26px"],
      xl: ["24px", "36px"],
      "2xl": ["28px", "40px"],
      "3xl": ["32px", "48px"],
      "4xl": ["36px", "54px"],
      "5xl": ["42px", "63px"],
      "6xl": ["48px", "72px"],
      "7xl": ["64px", "96px"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
      },
    },
    extend: {
      borderWidth: {
        12: "12px",
      },
      colors: {
        primary: "#62DB54",
        secondary: "#09ACF5",
        dark: "#1C1C1C",
        light: "#2D2D2D",
      },
      spacing: {
        25: "6.25rem",
      },
      opacity: {
        12: ".12",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
