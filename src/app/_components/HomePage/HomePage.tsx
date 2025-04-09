"use client";
import Image from "next/image";
import { CategoriesCard } from "../CategoriesCard/CategoriesCard";
import { ProductsCard } from "../ProductsCard/ProductsCard";
import { Box } from "@mui/material";

export const HomePage = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", width: "100%", height: "350px" }}>
        <Image
          src="/images/home-bgcolor.jpg"
          alt="shopping image"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <CategoriesCard />
      <ProductsCard />
    </Box>
  );
};
