/* eslint-disable react/display-name */
/* eslint-disable react/forbid-dom-props */
import { useTranslation } from "react-i18next";
import { withStyles } from "@mui/styles";
import React, { forwardRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography } from "@mui/material";
import { styles } from "./styles";
import { InfiniteScrollProps } from "./types";

const InfiniteScrollComponent = forwardRef(
  (
    {
      options,
      fetchMoreData,
      customFilter,
      hasMore,
      classes,
      ...rest
    }: InfiniteScrollProps,
    ref: React.ForwardedRef<InfiniteScroll>
  ) => {
    const getHeightValue = () => {
      if (options?.length <= 5) {
        return undefined;
      } else return !customFilter ? 200 : "100%";
    };
    const { t } = useTranslation();
    return (
      <InfiniteScroll
        ref={ref}
        className={classes.listBox}
        dataLength={options?.length || 0}
        height={getHeightValue()}
        hasMore={hasMore}
        loader={
          hasMore &&
          !customFilter && (
            <Typography className={classes.loading}>
              {t("Loading...")}
            </Typography>
          )
        }
        next={fetchMoreData}
        initialScrollY={options?.length > 10 ? (options?.length - 1) * 16 : 0}
      >
        <span {...rest} />
      </InfiniteScroll>
    );
  }
);

export default withStyles(styles)(InfiniteScrollComponent);
