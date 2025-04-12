"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useCartProductsHook } from "./useCartPage.hook";
import { CartProductCard } from "./CartProductCard/CartProductCard";

export default function Products() {
  const { t } = useTranslation("Store");
  const { products, isLoading } = useCartProductsHook();

  if (isLoading) <div>Loading...</div>;
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
          {t("Your cart products")}
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
        {products?.length ? (
          products?.map((item) => (
            <CartProductCard
              key={item?.id}
              id={item?.id}
              name={item?.name}
              description={item?.description}
              price={item?.price}
              image={item?.image}
              pivot={item?.pivot}
            />
          ))
        ) : (
          <Box sx={{ bgcolor: "white", padding: "2rem", width: "100%" }}>
            <Typography>{t("No cart items yet!")}</Typography>
          </Box>
        )}
      </Grid>
      {products?.length && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            bgcolor: "white",
            padding: "1rem 4rem 2rem",
          }}
        >
          <Button variant="contained">{t("Continue buying (Payment)")}</Button>
        </Box>
      )}
    </PageWrapper>
  );
}
