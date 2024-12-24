import { makeStyles } from "@mui/styles";
import {
  inputBorderColorDefault,
  white,
} from "../../customization/theme/colors";
export const useSmallAlertStyle = makeStyles<{ direction: string }>(() => ({
  mainBox: {
    "&:first-child": {
      marginTop: 70,
    },
    marginTop: 10,
    width: 352,
    maxWidth: "95vw",
    height: 120,
    boxShadow: "0px 0px 10px #00000033",
    display: "flex",
    borderRadius: "5px",
    backgroundColor: white,
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
  },
  poleBox: { width: 5, height: 95, borderRadius: 20 },
  iconContainer: {
    width: 40,
  },
  iconTextContainer: {},
  xIconBox: {
    position: "absolute",
    top: "10px",
    right: "10px",
    left: "10px",
  },

  description: {
    height: "auto",
    display: "box",
    overflow: "hidden",
    maxWidth: "238px",
    maxHeight: 45,
    boxOrient: "vertical",
    lineClamp: 2,
    fontSize: 14,
    fontFamily: "CoHeadlineTrial-Regular, Arab Kufi Regular",
  },
  titleTextBox: {
    width: 230,
  },
  titleText: {
    fontSize: 14,
    fontFamily: "CoHeadlineTrial-Light, Arab Kufi Medium",
  },
  xIcon: {
    height: 28,
    "&:hover": {
      cursor: "pointer",
      background: inputBorderColorDefault,
      borderRadius: 5,
    },
  },
}));
