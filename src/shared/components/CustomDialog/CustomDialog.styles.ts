import { makeStyles } from "tss-react/mui";

export const useCustomDialogStyles = makeStyles()({
  header: {
    display: "flex",
    flex: 1,
    maxHeight: "50px",
    padding: "30px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actions: {
    justifyContent: "flex-start",
    padding: "15px",
    boxShadow: "0px 0px 6px #0000001A",
    borderRadius: "0px 0px 15px 15px",
  },
});
