import Card from "@mui/material/Card";
import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import { makeStyles } from "@mui/styles";
import { ISimpleLoader } from "./types";

const useSimpleCardLoaderStyles = makeStyles()({
  card: {
    padding: 10,
    height: 250,
    width: "100%",
  },
});

const MedListCardLoader: FC<ISimpleLoader> = (props) => {
  const { classes } = useSimpleCardLoaderStyles();
  return (
    <Card elevation={1} className={classes.card}>
      <ContentLoader width={334} viewBox="0 0 350 160" {...props}>
        <rect x="10" y="73" rx="3" ry="3" width="300" height="8" />
        <rect x="8" y="88" rx="3" ry="3" width="300" height="8" />
        <rect x="8" y="103" rx="3" ry="3" width="300" height="8" />
        <rect x="8" y="118" rx="3" ry="3" width="300" height="8" />
        <rect x="105" y="133" rx="3" ry="3" width="118" height="8" />
        <circle cx="170" cy="27" r="22" />
        <circle cx="130" cy="151" r="6" />
        <circle cx="160" cy="151" r="6" />
        <circle cx="190" cy="151" r="6" />
      </ContentLoader>
    </Card>
  );
};

export default MedListCardLoader;
