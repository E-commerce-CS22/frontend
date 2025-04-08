import { bodyBackgroundGrey } from "@/shared/customization";
import { makeStyles } from "@mui/styles";

export const useTableBodyWithoutDataViewStyles = makeStyles({
  // name: "ui-table",
})(() => ({
  message: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    backgroundColor: bodyBackgroundGrey,
    padding: 40,
  },
}));
