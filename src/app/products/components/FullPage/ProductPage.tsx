"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { useProductsHook } from "./useProductsPage.hook";
import { ProductCard } from "@/shared/components/ProductCard";
import { Box } from "@mui/material";

export default function Products() {
  const { productsData } = useProductsHook();

  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {productsData &&
          productsData?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </Box>
    </PageWrapper>
  );
}
