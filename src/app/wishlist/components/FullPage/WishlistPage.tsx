"use client";
import React from "react";
import { useWishlistHook } from "./wishlist.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ProductCard } from "./ProductCard/ProductCard";

const Wishlist = () => {
  const { t } = useTranslation("Store");
  const { wishlistData } = useWishlistHook();
  return (
    <PageWrapper padding="0px">
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
          {t("Your wishlist products")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "flex-end",
        }}
      >
        {wishlistData ? (
          wishlistData?.map((item) => (
            <ProductCard
              key={item?.id}
              id={item?.id}
              name={item?.name}
              description={item?.description}
              price={item?.price}
              image={item?.image}
              final_price={item?.final_price}
            />
          ))
        ) : (
          <Box sx={{ bgcolor: "white", padding: "2rem" }}>
            <Typography>{t("No wishlist items yet!")}</Typography>
          </Box>
        )}
      </Box>
    </PageWrapper>
  );
};

export default Wishlist;
