"use client";
import Image from "next/image";
import { CategoriesPanel } from "../CategoriesCard/CategoriesPanel";
import { Box, Button, Typography } from "@mui/material";
import { bg, primary } from "@/shared/customization";
import { useTranslation } from "react-i18next";
import { useHomePageHook } from "./useHomePage.hook";
import { ProductCard } from "../ProductsCard/ProductCard";
import { useContext } from "react";
import { UserContext } from "@/shared/common/authentication";
import { useRouter } from "next/navigation";

export const HomePage = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const { products, handleOpenCategoryProducts } = useHomePageHook();
  const { user } = useContext(UserContext);
  const userRole = user?.role;
  if (userRole === "admin") {
    router.push("/dashboard");
  }
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
      <Box>
        <CategoriesPanel />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "flex-end",
            // margin: "0.8rem",
            padding: "1rem",
            borderRadius: "4px",
            bgcolor: "white",
          }}
        >
          {products?.length &&
            products?.map((item) => (
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
          <Box
            sx={{
              padding: "2rem 4rem",
              bgcolor: "white",
              display: "flex",
              alignItems: "flex-end",
              height: "367px",
              borderRadius: "4px",
              margin: "1rem",
            }}
          >
            <Button variant="contained" onClick={handleOpenCategoryProducts}>
              {t("View more products")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
