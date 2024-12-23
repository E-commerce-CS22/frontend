import { makeStyles } from "tss-react/mui";
import { boxShadow, tableOutlineBorder } from "../../../customization";

export const useCustomTableStyles = makeStyles({ name: "ui-table" })(() => ({
  root: {
    boxShadow: boxShadow,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: tableOutlineBorder,
    overflow: "auto",
  },
  tableContainer: {
    minHeight: "500px",
    scrollbarWidth: "none",
    maxHeight: "calc(100vh - 222px)",
    overflowX: "auto",
    position: "relative",
  },
}));
