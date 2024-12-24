import { makeStyles } from "@mui/styles";
import { IconProps } from "./CustomIcon";

export const useStyles = makeStyles<IconProps>(() => ({
  root: {
    "&:hover": {
      backgroundColor: "initial",
    },
  },
}));
