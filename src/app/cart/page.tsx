"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Button, Typography } from "@mui/material";
import { useCartHook } from "./Cart.hook";
import { ProductCard } from "@/shared/components/ProductCard";
import { useTranslation } from "react-i18next";

export default function MyCart() {
  const { t } = useTranslation("Store");
  const {
    // isLoading,
    // isSuccess,
    // isError,
    cartData,
  } = useCartHook();

  return (
    <PageWrapper
      actions={
        <Box p={1}>
          <Button variant="contained">{t("Payment")}</Button>
        </Box>
      }
    >
      <Typography>{t("My Cart")}</Typography>
      <Box>
        {cartData?.map((item, index) => (
          <ProductCard key={index} product={item} hasDeleteFromCart />
        ))}
      </Box>
    </PageWrapper>
  );
}
