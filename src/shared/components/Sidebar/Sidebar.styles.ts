/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from "tss-react/mui";
import { adminLayoutVariables } from "../../customization/layout";

export const useSidebarStyles = makeStyles<{ selected?: boolean }>()(
  (theme, { selected }) => ({
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      height: adminLayoutVariables.headerHeight,
      // necessary for content to be below app bar
      ...(theme.mixins.toolbar as any),
      justifyContent: "flex-end",
      borderBottom: "1px solid #DFE8F2",
    },
    listItem: {
      height: 50,
      backgroundColor: selected ? "#F0F2F5" : "transparent",
      borderRadius: "0px",
      paddingInline: "8px",
      "&.Mui-selected": {
        backgroundColor: "#F0F2F5",
        "&:hover": {
          backgroundColor: "#F0F2F5",
        },
      },
    },
    listItemIcon: {
      minWidth: "fit-content",
      width: 20,
      height: 20,
      marginInline: 8,
    },
    listItemText: {
      fontSize: 14,
      "& > span": {
        fontSize: 14,
      },
    },
    root: {
      backgroundColor: "#F0F2F5",
    },
  })
);
