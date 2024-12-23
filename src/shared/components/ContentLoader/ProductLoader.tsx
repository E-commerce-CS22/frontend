import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import { makeStyles } from "@mui/styles";
import { ISimpleLoader } from "./types";

const useProductLoaderCardStyles = makeStyles()({
  root: {
    margin: 10,
  },
  card: {
    padding: 10,
    height: 250,
  },
});

const ProductLoaderCard: FC<ISimpleLoader> = ({ rows = 3, ...props }) => {
  const { classes } = useProductLoaderCardStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      {new Array(rows).fill(0).map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <Card>
            <ContentLoader speed={2} {...props}>
              <rect x="120" y="15" rx="5" ry="5" width="300" height="15" />
              <rect x="120" y="39" rx="5" ry="5" width="220" height="9" />
              <rect x="120" y="60" rx="5" ry="5" width="350" height="15" />
              <rect x="120" y="80" rx="5" ry="5" width="250" height="9" />
              <rect x="0" y="0" rx="0" ry="0" width="100" height="300" />
            </ContentLoader>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductLoaderCard;
