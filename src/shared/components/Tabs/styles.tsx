import createStyles from "@mui/styles/createStyles";
import { bg, darkBlue, white } from "../../customization";

export const styles = () =>
  createStyles({
    selectedTab: {
      boxShadow: "0px 3px 6px #1C23464D",
      zIndex: 1,
      borderRadius: `10px !important`,
      height: `50px !important`,
      fontSize: `16px !important`,
      color: `${white} !important`,
      background: `${darkBlue} !important`,
    },
    tab: {
      fontSize: 14,
      minHeight: 43,
      background: bg,
      color: `${darkBlue}`,
      border: "1px solid #fff",
      "&:last-child": {
        border: 5,
      },
      "&:first-child": {
        border: 5,
      },
    },
    tabs: {
      margin: 12,
      padding: 2,
      backgroundColor: "white",
      background: bg,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
    },
    tabPanel: {
      padding: 0,
    },
    cardTabs: {
      padding: "4px",
      margin: "16px 0",
      display: "flex",
      alignItems: "center",
    },
    cardSelectedTab: {
      margin: "-5px",
      zIndex: 1,
      borderRadius: `10px !important`,
      height: `50px !important`,
      fontSize: `16px !important`,
      color: `${white} !important`,
      background: `${darkBlue} !important`,
    },
    cardTab: {
      width: "100%",
      fontSize: 14,
      minHeight: 43,
      background: white,
      borderRadius: "0px",
      color: `${darkBlue}`,
      "&:last-child": {
        borderBottomRightRadius: "10px",
        borderTopRightRadius: "10px",
      },
      "&:first-child": {
        borderBottomLeftRadius: "10px",
        borderTopLeftRadius: "10px",
      },
    },
  });
