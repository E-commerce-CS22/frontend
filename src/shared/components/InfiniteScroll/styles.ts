import { createStyles } from "@mui/styles";
import { darkBlue } from "@/shared/customization";

export const styles = () =>
  createStyles({
    listBox: {
      color: darkBlue,
      listStyle: "none",
      borderRadius: "0px 0px 10px 10px",
      marginBottom: 2,
    },
    infinite: {
      marginTop: 5,
    },
    loading: {
      padding: "5px 18px",
      fontSize: 12,
      fontWeight: "bold",
    },
  });
