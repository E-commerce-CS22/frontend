import { makeStyles } from "@mui/styles";
import { tableRowsBorder, tablesRawsGrey } from "../../../customization";

export const useTableBodyLayoutStyles = makeStyles(() => ({
  // theme
  tableRow: {
    height: 60,
    position: "relative",
  },
  tableRowHover: {
    backgroundColor: "white",
    "&:hover": {
      // boxShadow: tableBoxShadow,
      backgroundColor: tablesRawsGrey + " !important",
      zIndex: 1,
    },
  },
  delete: {
    color: "#B5402D",
  },
  cell: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: tableRowsBorder,
    textAlign: "start",
    padding: "2px 16px",
  },
  actionsCell: {
    position: "sticky",
    // [theme.direction === "rtl" ? "left" : "right"]: 0,
    whiteSpace: "nowrap",
    backgroundColor: "inherit",
    width: 80,
    padding: 8,
  },
}));
