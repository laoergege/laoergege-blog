import config from "./app.config";

module.exports = {
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [config.themes.light, config.themes.dark],
    darkTheme: config.themes.dark,
  },
};
