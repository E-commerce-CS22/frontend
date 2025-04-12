"use client";
import Image from "next/image";
import { CategoriesPanel } from "../CategoriesCard/CategoriesPanel";
import { ProductsCard } from "../ProductsCard/ProductsCard";
import { Box, Typography } from "@mui/material";
import { bg, primary } from "@/shared/customization";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation("Store");
  return (
    <Box position={"relative"}>
      <Box sx={{ position: "relative", width: "100%", height: "350px" }}>
        <Image
          src="/images/home-bgcolor.jpg"
          alt="shopping image"
          fill
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: "100",
            display: "flex",
            top: "30%",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "8px",
              bgcolor: bg,
              width: "fit-content",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            <Typography color={primary} variant="h5">
              Smart Store
            </Typography>
            <Typography>
              {t("Everything You Love, All in One Place")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <CategoriesPanel />
      <ProductsCard />
    </Box>
  );
};
