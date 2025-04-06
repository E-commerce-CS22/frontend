import { WithStyles } from "@mui/styles";
import { commonCardStyles } from "./CommonCard.styles";

export type CommonCardProps = WithStyles<typeof commonCardStyles> & {
  handleClick?: () => void;
};
