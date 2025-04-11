"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { useCategoriesHook } from "./useCategoriesPage.hook";
import { CategoryCard } from "../CategoryCard";
import { Grid } from "@mui/material";

export default function Products() {
  const { categoriesData, isLoading } = useCategoriesHook();

  if (isLoading) return <div>Loading...</div>;
  return (
    <PageWrapper>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categoriesData?.map((item) => (
          <CategoryCard
            key={item?.id}
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
