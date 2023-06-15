import config from "./app.config";

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [config.themes.light, config.themes.dark],
    darkTheme: config.themes.dark
  },
};
