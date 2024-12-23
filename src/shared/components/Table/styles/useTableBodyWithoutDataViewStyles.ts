import { makeStyles } from "@mui/styles";
import { bodyBackgroundGrey } from "../../../customization/colors";

export const useTableBodyWithoutDataViewStyles = makeStyles({
  name: "ui-table",
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
