// import { arEG } from "@mui/material/locale";
import { i18n } from "@/shared/utils/i18next";
import { createTheme } from "@mui/material/styles";
import { CustomComponentsOverride } from "./components";
import { CustomThemePalette } from "./palette";

declare module "@mui/material/styles" {
  interface Palette {
    darkGrey: Palette["primary"];
  }
  interface PaletteOptions {
    darkGrey: PaletteOptions["primary"];
  }
}

const fontFamilies = [].join(",");

const CustomTheme = createTheme(
  {
    direction: i18n.dir(i18n.language),
    palette: CustomThemePalette,
    components: CustomComponentsOverride,
    typography: {
      fontFamily: fontFamilies,
      allVariants: {
        fontFamily: fontFamilies,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 70,
      },
    },
  }
  // arEG
);

export { CustomTheme };
