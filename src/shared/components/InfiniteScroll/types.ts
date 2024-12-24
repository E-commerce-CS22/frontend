import { WithStyles } from "@mui/styles";
import { styles } from "./styles";

export interface InfiniteScrollProps extends WithStyles<typeof styles> {
  options?;
  fetchMoreData?;
  hasMore?;
  customFilter?;
}
