"use client";
import { Box, Typography } from "@mui/material";
import { useProductDetailsHook } from "./productDetails.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { use } from "react";

type ProductDetailsProps = {
  params: Promise<{ productId: string }>;
};
export default function ProductDetails(props: ProductDetailsProps) {
  const params = use<{ productId: string }>(props.params);
  const { productId } = params;

  const { productData } = useProductDetailsHook({ productId });

  return (
    <PageWrapper>
      <Box>
        <Typography>Product name: {productData?.name}</Typography>
        <Typography>Product description: {productData?.description}</Typography>
        <Typography>Product price: {productData?.price}</Typography>
      </Box>
    </PageWrapper>
  );
}
