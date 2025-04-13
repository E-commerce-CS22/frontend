"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useProductDetailsHook } from "./productDetails.hook";
import { use, useContext } from "react";
import {
  MainTextColor,
  SecondaryTextColor,
  darkRed,
  primary,
} from "@/shared/customization";
import { ArrowBack, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { i18n } from "@/shared/utils/i18next";
import { UserContext } from "@/shared/common/authentication";

type ProductDetailsProps = {
  params: Promise<{ productId: string }>;
};
export default function ProductDetails(props: ProductDetailsProps) {
  const { t } = useTranslation("Store");
  const params = use<{ productId: string }>(props.params);
  const { productId } = params;
  const { isAuthenticated } = useContext(UserContext);

  const {
    productData,
    productQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleAddToFavorite,
    handleAddToCart,
    handleGoBack,
  } = useProductDetailsHook({ productId });
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: i18n.language === "en" ? "flex-start" : "flex-end",
          flexDirection: "column",
          padding: "1rem",
          width: "100%",
        }}
      >
        <Button variant="contained" onClick={handleGoBack}>
          <ArrowBack sx={{ color: "white" }} />
        </Button>
      </Box>
      <Card
        sx={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "4px",
          margin: "1rem",
          position: "relative",
        }}
      >
        <CardMedia
          sx={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "56.25%",
          }}
        >
          {productData?.image && (
            <Image
              src={productData?.image}
              alt={productData?.name}
              fill
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            />
          )}

          {!productData?.image && (
            <Image
              src={"/images/home-bgcolor.jpg"}
              alt={productData?.name}
              fill
              style={{
                objectFit: "cover",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            />
          )}
        </CardMedia>
        <CardContent sx={{ padding: "8px 16px 16px" }}>
          <Typography pb={"8px"} color={MainTextColor}>
            {productData?.name}
          </Typography>
          <Typography
            color={SecondaryTextColor}
            sx={{
              fontSize: "13px",
            }}
          >
            {productData?.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "8px",
            }}
          >
            <Typography color={MainTextColor}>{t("Price")}:</Typography>
            <Typography
              sx={{
                textDecoration: productData?.final_price
                  ? "line-through"
                  : "inline",
                padding: "0 4px",
              }}
              color={productData?.final_price ? darkRed : primary}
            >
              {productData?.price}
            </Typography>
            {productData?.final_price && (
              <Typography>{productData?.final_price}</Typography>
            )}
            <Typography>{t("Riyal")}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: `1px solid ${primary}`,
              borderRadius: "20px",
            }}
          >
            <Button
              onClick={handleIncreaseQuantity}
              sx={{
                borderRadius: "20px",
              }}
            >
              +
            </Button>
            <Typography>{productQuantity}</Typography>
            <Button
              onClick={handleDecreaseQuantity}
              disabled={productQuantity <= 0}
              sx={{
                borderRadius: "20px",
              }}
            >
              -
            </Button>
          </Box>
          <IconButton onClick={handleAddToCart} sx={{ borderRadius: "20px" }}>
            <ShoppingCart
              sx={{ width: "35px", height: "35px", color: primary }}
            />
          </IconButton>
          {isAuthenticated && (
            <IconButton
              sx={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: "white",
              }}
              onClick={handleAddToFavorite}
            >
              <FavoriteBorder color="primary" />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
