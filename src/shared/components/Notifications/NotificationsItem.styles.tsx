import { makeStyles } from "@mui/styles";
import { lightGrey } from "../../customization";
// import { renderSwitch } from "./utils";

export const useNotificationItemStyles = makeStyles(() => ({
  // theme
  card: {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${lightGrey}`,
    padding: 5,
    paddingInline: 0,
    // color: renderSwitch(theme.type).color,
  },
  icon: {
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: "50%",
    boxShadow: "0px 3px 6px #00000029",
    // background: renderSwitch(theme.type).color,
  },
  titleNote: {
    fontWeight: 600,
  },
  item: {
    margin: 10,
  },
  link: {
    // color: renderSwitch(theme.type).color,
  },
}));
