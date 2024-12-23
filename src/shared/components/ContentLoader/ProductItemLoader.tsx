import Card, { CardProps } from "@mui/material/Card";
import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const ProductItemLoader: FC<CardProps> = ({ ...props }) => {
  return (
    <Card {...props}>
      <ContentLoader speed={2}>
        <rect x='120' y='15' rx='5' ry='5' width='300' height='15' />
        <rect x='120' y='39' rx='5' ry='5' width='220' height='9' />
        <rect x='120' y='60' rx='5' ry='5' width='350' height='15' />
        <rect x='120' y='80' rx='5' ry='5' width='250' height='9' />
        <rect x='0' y='0' rx='0' ry='0' width='100' height='300' />
      </ContentLoader>
    </Card>
  );
};
export default ProductItemLoader;
