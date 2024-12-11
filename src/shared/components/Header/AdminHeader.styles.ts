import { makeStyles } from "tss-react/mui";
import { darkGrey, primary, white } from "../../customization";
import { adminLayoutVariables } from "../../customization/layout";

export const useAdminHeaderStyles = makeStyles<{ isOpen: boolean; drawerWidth: number }>()((theme, { isOpen, drawerWidth }) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "DFE8F2",
    border: "1px solid #DFE8F2",
  },
  appMenu: {
    backgroundColor: "#FFFFFF",
    height: adminLayoutVariables.headerHeight,
    borderBottom: "1px solid #DFE8F2",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "100%",
    ...(isOpen && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginInlineStart: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down("md")]: {
        width: `100%`,
      },
    }),
  },
  leftIcon: {
    background: isOpen ? "transparent" : primary,
    color: isOpen ? primary : white,
    "&:hover": { color: isOpen ? primary : darkGrey },
  },
  title: {
    color: "#1B2346",
    fontSize: 16,
    lineHeight: 1,
  },
  branchName: {
    fontWeight: "bold",
    cursor: "pointer",
    marginInline: 1,
  },
  iconButton: {
    margin: 1,
    "&.MuiIconButton-root": {
      width: 35,
      height: 35,
    },
  },
}));
