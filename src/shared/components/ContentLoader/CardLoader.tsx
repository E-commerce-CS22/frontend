import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Grid2";
import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import { makeStyles } from "@mui/styles";
import { ISimpleLoader } from "./types";

const useCardLoaderStyles = makeStyles({
  root: {
    margin: 10,
  },
  card: {
    padding: 10,
    height: 250,
  },
});

const CardLoader: FC<ISimpleLoader> = (props) => {
  const classes = useCardLoaderStyles();
  return (
    <Grid2 container spacing={1} className={classes.root}>
      <Grid2 item xs={10} sm={12} md={4} lg={3}>
        <Card elevation={1} className={classes.card}>
          <ContentLoader viewBox="0 0 476 124" {...props}>
            <rect x="88" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="88" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="100" width="410" height="6" rx="3" />
            <rect x="0" y="110" width="380" height="6" rx="3" />
            <rect x="0" y="130" width="410" height="6" rx="3" />

            <circle cx="40" cy="40" r="40" />
          </ContentLoader>
        </Card>
      </Grid2>
      <Grid2 item xs={10} sm={12} md={4} lg={3}>
        <Card elevation={1} className={classes.card}>
          <ContentLoader viewBox="0 0 476 124" {...props}>
            <rect x="88" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="88" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="100" width="410" height="6" rx="3" />
            <rect x="0" y="110" width="380" height="6" rx="3" />
            <rect x="0" y="130" width="410" height="6" rx="3" />
            <circle cx="40" cy="40" r="40" />
          </ContentLoader>
        </Card>
      </Grid2>
      <Grid2 item xs={10} sm={12} md={4} lg={3}>
        <Card elevation={1} className={classes.card}>
          <ContentLoader viewBox="0 0 476 124" {...props}>
            <rect x="88" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="88" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="100" width="410" height="6" rx="3" />
            <rect x="0" y="110" width="380" height="6" rx="3" />
            <rect x="0" y="130" width="410" height="6" rx="3" />
            <circle cx="40" cy="40" r="40" />
          </ContentLoader>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default CardLoader;
