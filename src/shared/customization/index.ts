import { CustomTheme } from "./theme/theme";

const ThemePalette = CustomTheme.palette;
const ThemeShadows = CustomTheme.shadows;
const ThemeMixins = CustomTheme.mixins;
const ThemeSpacing = CustomTheme.spacing;
const ThemeTransitions = CustomTheme.transitions;
const ThemeZIndex = CustomTheme.zIndex;

export { AppThemeProvider, createMuiCache } from "./AppThemeProvider";
export * from "./theme/colors";
export {
  ThemePalette,
  ThemeShadows,
  ThemeMixins,
  ThemeSpacing,
  ThemeTransitions,
  ThemeZIndex,
};
