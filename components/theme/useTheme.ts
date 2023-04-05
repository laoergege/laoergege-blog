import { ref } from "vue";
export { THEMES } from "./config";
import { THEMES } from "./config";

export const themeKey = "theme-key";

export let theme = ref<string>(THEMES.light);

if (process.client) {
  const _theme = localStorage.getItem(themeKey);
  if (_theme) {
    theme.value = _theme;
  }
}

export const useTheme = () => {
  const inputRef = ref<HTMLInputElement>();
  const changeTheme = () => {
    return (theme.value = inputRef.value?.checked ? THEMES.dark : THEMES.light);
  };
  return {
    inputRef,
    changeTheme,
  };
};
