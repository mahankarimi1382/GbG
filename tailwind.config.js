/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        gold: "#deb317",
        gray: "#393d3f",
      },
      opacity: {
        gold: "#e3bf3c",
        gray: "#464949",
      },
    },
    extend: {},
  },
  plugins: [],
};
