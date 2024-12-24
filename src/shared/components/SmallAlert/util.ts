import { TFunction } from "i18next";
import {
  darkBlue,
  darkRed,
  green,
  orange,
} from "../../customization/theme/colors";

export const mapAppearanceToCardColor = (appearance: string) => {
  if ("success" === appearance) {
    return green;
  } else if ("warning" === appearance) {
    return orange;
  } else if ("error" === appearance) {
    return darkRed;
  } else if ("info" === appearance) {
    return darkBlue;
  }
};

export const mapAppearanceToSelectedIcon = (appearance: string) => {
  if ("success" === appearance) {
    return "successAlert";
  } else if ("warning" === appearance || "error" === appearance) {
    return "warningAlert";
  } else if ("info" === appearance) {
    return "info";
  }
};

export const mapAppearanceToCardTitle = (appearance: string, t: TFunction) => {
  if ("success" === appearance) {
    return t("Success");
  } else if ("warning" === appearance) {
    return t("Warning");
  } else if ("error" === appearance) {
    return t("Error");
  } else if ("info" === appearance) {
    return t("Info");
  }
};
