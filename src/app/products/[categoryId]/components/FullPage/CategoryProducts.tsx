"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { useCategoryProductsHook } from "./useCategoryProducts.hook";
import { Box, Grid, Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";
import { MainTextColor, SecondaryTextColor } from "@/shared/customization";
import { ProductCard } from "./components/ProductCard";

export const CategoryProducts = ({ categoryId }) => {
  // const { t } = useTranslation("Store");
  const { products } = useCategoryProductsHook({ categoryId });
  const categoryInfo = products?.category;
  const categoryProducts = products?.products?.data;
  return (
    <PageWrapper padding="0">
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Typography color={MainTextColor}>{categoryInfo?.name}</Typography>
        <Typography color={SecondaryTextColor}>
          {categoryInfo?.description}
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        {categoryProducts?.length &&
          categoryProducts?.map((item) => (
            <ProductCard
              key={item?.id}
              id={item?.id}
              name={item?.name}
              description={item?.description}
              price={item?.price}
              image={item?.image}
              final_price={item?.final_price}
            />
          ))}
      </Grid>
    </PageWrapper>
  );
};
