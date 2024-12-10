import { PaletteOptions } from "@mui/material/styles";
import {
  bordersGrey,
  cyan,
  darkBlue,
  darkGrey,
  darkRed,
  green,
  orange,
  white,
} from "./colors";

export const CustomThemePalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: darkBlue,
  },
  secondary: {
    main: orange,
  },
  success: {
    main: green,
  },
  warning: {
    main: orange,
  },
  error: {
    main: darkRed,
  },
  info: {
    main: cyan,
  },
  text: {
    primary: darkBlue,
  },
  darkGrey: {
    main: darkGrey,
  },
  divider: bordersGrey,
  background: {
    default: white,
    paper: white,
  },
};
