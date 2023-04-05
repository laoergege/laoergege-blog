import { THEMES } from "./components/theme/config";

module.exports = {
  mode: 'jit',
  plugins: [require("daisyui")],
  daisyui: {
    themes: [THEMES.dark, THEMES.light],
  },
};
