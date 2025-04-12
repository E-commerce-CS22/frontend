"use client";
import {
  darkRed,
  MainTextColor,
  primary,
  SecondaryTextColor,
} from "@/shared/customization";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useProductCardHook } from "./useProductCard.hook";

type ProductCardProps = {
  id: string;
  name: string;
  image?: string;
  description: string;
  parent_id?: null;
  is_parent?: 0;
  discount_type?: null;
  price: string | number;
  discount_value?: string | number;
  status?: string | boolean;
  discount_start_date?: string;
  discount_end_date?: string;
  created_at?: string;
  updated_at?: string;
  final_price?: string | number;
  has_discount?: string | boolean;
  pivot?: {
    category_id?: string;
    product_id?: string;
  };
};

export const ProductCard = (props: ProductCardProps) => {
  const { t } = useTranslation("Store");

  const { id, name, image, description, price, final_price } = props;

  const {
    productQuantity,
    handleCategoryProduct,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleAddToCart,
  } = useProductCardHook({ id });

  return (
    <Card
      sx={{
        width: "300px",
        borderRadius: "4px",
        margin: "1rem",
        "&:hover": { boxShadow: 6 },
        position: "relative",
      }}
    >
      <CardMedia>
        {image && <Image src={image} alt={name} width={200} height={200} />}
        {!image && (
          <Image
            src={"/images/home-bgcolor.jpg"}
            alt={name}
            width={300}
            height={200}
          />
        )}
      </CardMedia>
      <CardContent sx={{ padding: "8px 16px 16px" }}>
        <Typography pb={"8px"} color={MainTextColor}>
          {name.slice(0, 30)}
          {name?.length > 31 && "..."}
        </Typography>
        <Typography
          color={SecondaryTextColor}
          sx={{
            cursor: "pointer",
            fontSize: "13px",
            "&:hover": {
              color: darkRed,
            },
          }}
          onClick={handleCategoryProduct}
        >
          {description?.slice(0, 61)}
          {description?.length > 62 && "..."}
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
              textDecoration: final_price ? "line-through" : "inline",
              padding: "0 4px",
            }}
            color={final_price ? darkRed : primary}
          >
            {price}
          </Typography>
          {final_price && <Typography>{final_price}</Typography>}
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
        <Button
          onClick={handleAddToCart}
          variant="contained"
          sx={{ borderRadius: "20px" }}
        >
          {t("Add to cart")}
        </Button>
      </CardActions>
    </Card>
  );
};
