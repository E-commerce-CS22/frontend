import { makeStyles } from "tss-react/mui";
import { primary, tableRowsBorder, tablesRawsGrey } from "../../../customization/colors";

export const useTableLayoutStyles = makeStyles({ name: "ui-table-body" })(() => ({
  tableHead: {
    fontWeight: "bold",
    backgroundColor: tablesRawsGrey,
  },
  table: {},
  tableBody: {
    minHeight: 250,
    position: "relative",
  },
  tableRow: {
    height: 56,
    backgroundColor: tablesRawsGrey,
  },
  tableHeaderCell: {
    // fontWeight: 600,
    backgroundColor: tablesRawsGrey,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
  },
  tableHeadCell: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: primary,
    backgroundColor: tablesRawsGrey,
    textAlign: "start",
    width: "fit-content",
    maxWidth: "250px",
    "&:hover": {
      "&::before": {
        background: tableRowsBorder,
        content: '""',
        position: "absolute",
        bottom: "50%",
        transform: "translate(0%, 50%)",
        display: "block",
        height: 20,
        left: 0,
        width: 1,
      },
      "&::after": {
        background: tableRowsBorder,
        content: '""',
        position: "absolute",
        bottom: "50%",
        transform: "translate(0%, 50%)",
        display: "block",
        height: 20,
        right: 0,
        width: 1,
      },
    },
  },
  tableSortLabel: {
    height: 15,
    "&:hover": {
      color: "inherit !important",
    },
  },
}));
