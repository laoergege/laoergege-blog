import config from "./app.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", `[data-theme="${config.themes.dark}"]`],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [config.themes.light, config.themes.dark],
  },
};
