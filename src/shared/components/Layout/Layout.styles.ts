/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from "tss-react/mui";
import { adminLayoutVariables } from "../../customization/layout";

export const useLayoutStyles = makeStyles<{
  isOpen: boolean;
  drawerWidth: number;
}>()((theme, { isOpen, drawerWidth }) => ({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ECF0F5",
    width: "100%",
    position: "relative",

    height: `calc(100vh - ${adminLayoutVariables.headerHeight}px)`,
    overflowX: "hidden",
    marginTop: adminLayoutVariables.headerHeight,
    paddingBottom: 2,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isOpen && {
      width: `calc(100% - ${drawerWidth + 10}px)`,
      // marginLeft: `${drawerWidth + 10}px`,
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    height: adminLayoutVariables.headerHeight,
    // necessary for content to be below app bar
    ...(theme.mixins.toolbar as any),
    justifyContent: "flex-end",
  },
  iconButton: { margin: 1 },
}));
