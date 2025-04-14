"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { useCategoriesHook } from "./useCategoriesPage.hook";
import { CategoryCard } from "../CategoryCard";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SecondaryTextColor } from "@/shared/customization";

export default function Products() {
  const { t } = useTranslation("Store");
  const { categoriesData, isLoading } = useCategoriesHook();

  if (isLoading) return <div>Loading...</div>;
  return (
    <PageWrapper padding={"0px"}>
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
        <Typography variant="h6" fontWeight={"bold"}>
          {t("All Categories")}
        </Typography>
        <Typography color={SecondaryTextColor}>
          {t("Click on a category to view its related products")}
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0 3rem",
          bgcolor: "white",
        }}
      >
        {categoriesData?.length &&
          categoriesData?.map((item) => (
            <CategoryCard
              key={item?.id}
              id={item.id}
              name={item?.name}
              image={item?.image}
              slug={item?.slug}
              description={item?.description}
            />
          ))}
      </Grid>
    </PageWrapper>
  );
}
