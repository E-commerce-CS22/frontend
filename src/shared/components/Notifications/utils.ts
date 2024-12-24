import { darkRed, green, orange, primary } from "../../customization";
import { paths } from "../CustomIcon";

export const renderSwitch = (
  param: string | undefined
): { icon: keyof typeof paths; color: string } => {
  switch (param) {
    case "WARNING":
      return { icon: "calendar", color: orange };
    case "Error":
      return { icon: "miniClose", color: darkRed };
    case "INFO":
      return { icon: "calendar", color: primary };
    case "success":
      return { icon: "warning", color: green };
    default:
      return { icon: "calendar", color: "#F08F35" };
  }
};
