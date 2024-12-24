import { withStyles, WithStyles } from "@mui/styles";
import React, { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { styles } from "./styles";

type InfiniteScrollContainerProps = WithStyles<typeof styles> & {
  dataLength: number;
  next: () => void;
  hasMore: boolean;
  loader: React.ReactElement;
  height?: number;
  scrollableTarget?: string;
  children?: React.ReactNode;
};

const InfiniteScrollContainer: FC<InfiniteScrollContainerProps> = ({
  classes,
  dataLength,
  children,
  next,
  hasMore,
  loader,
  scrollableTarget,
  ...props
}) => {
  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={next}
      hasMore={hasMore}
      loader={loader}
      scrollableTarget={scrollableTarget}
      className={classes.infinite}
      {...props}
    >
      {children}
    </InfiniteScroll>
  );
};

export default withStyles(styles)(InfiniteScrollContainer);

// InfiniteScrollContainer.defaultProps = {
//   height: undefined,
//   scrollableTarget: undefined,
// };
