import { makeStyles } from "@mui/styles";
import {
  primary,
  tableRowsBorder,
  tablesRawsGrey,
  white,
} from "../../../customization";

export const useTableFooterStyles = makeStyles(() => ({
  root: {
    minHeight: 60,
    height: 60,
    background: tablesRawsGrey,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: tableRowsBorder,
  },
  result: {
    margin: "0px 10px",
  },
  dot: {
    margin: "0px 2px",
  },
  paginationButtons: {
    display: "flex",
    alignItems: "center",
  },
  nextIconButton: {
    color: white,
    backgroundColor: primary,
    fontSize: 14,
    width: "81px",
    height: "35px",
    border: "1px solid " + primary,
    borderRadius: 5,
    opacity: 1,
    "&:hover": {
      color: white,
      backgroundColor: "#19265D",
    },
    "&:clicked": {
      color: white,
      backgroundColor: "#19265D",
    },
    "&:disabled": {
      opacity: 0.5,
      color: white,
    },
  },
  prevIconButton: {
    backgroundColor: white,
    width: "81px",
    height: "35px",
    border: "1px solid " + primary,
    borderRadius: "5px",
    opacity: 1,
    "&:hover": {
      color: white,
      backgroundColor: primary,
    },
    "&:clicked": {
      color: white,
      backgroundColor: primary,
    },
    "&:disabled": {
      border: "1px solid " + primary,
      backgroundColor: "#EDF0F5",
      opacity: 0.5,
      color: primary,
    },
  },
  buttonIcons: {
    fontSize: "12px !important",
  },
  pageSizeContainer: {
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pageSize: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    background: white,
    borderRadius: 10,
    width: 63,
    height: 30,
    fontSize: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: primary,
    padding: 4,
  },
  pageSizeSelect: {
    padding: 0,
    textAlign: "center",
  },
  pageSelectIcon: {
    fontSize: 24,
  },
  text: {
    color: primary,
    fontSize: 14,
  },
  columns: {
    color: primary,
    fontSize: 14,
    marginRight: 10,
  },
}));
