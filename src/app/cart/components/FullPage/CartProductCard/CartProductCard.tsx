"use client";
import {
  darkRed,
  MainTextColor,
  primary,
  SecondaryTextColor,
} from "@/shared/customization";
import { FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useProductCardHook } from "./useCartProductCard.hook";
import { CustomDialog } from "@/shared/components/CustomDialog";

type CartProductCardProps = {
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
    quantity?: string | number | undefined;
  };
};

export const CartProductCard = (props: CartProductCardProps) => {
  const { t } = useTranslation("Store");

  const { id, name, image, description, price, final_price, pivot } = props;

  const quantity = pivot?.quantity;

  const {
    openEditQuantityDialog,
    handleCategoryProduct,
    handleAddToFavorite,
    handleRemoveFromCart,
    handleOpenQuantityDialog,
    handleSendNewQuantity,
    handleChangeQuantity,
  } = useProductCardHook({
    id,
  });

  return (
    <Card
      sx={{
        width: "300px",
        borderRadius: "4px",
        margin: "1rem",
        minHeight: "390px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.5s ease, box-shadow 0.5s ease",
        "&:hover": { boxShadow: 6, transform: "scale(1.04)" },
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
        <Box>
          {quantity && (
            <Box display={"flex"}>
              <Typography color={MainTextColor}>{t("Quantity")}:</Typography>
              <Typography margin={"0 8px"}>
                {quantity} {t("pieces")}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleRemoveFromCart}
          color="error"
          variant="contained"
        >
          {t("Delete")}
        </Button>
        <Button onClick={handleOpenQuantityDialog} variant="contained">
          {t("Edit quantity")}
        </Button>
      </CardActions>
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
      <CustomDialog
        open={openEditQuantityDialog}
        onCloseModal={handleOpenQuantityDialog}
        maxWidth="sm"
      >
        <Box p={"1rem"} sx={{ minWidth: "400px" }}>
          <TextField
            id="quantity"
            label={t("Quantity")}
            placeholder={t("Quantity")}
            fullWidth
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={quantity}
            onChange={handleChangeQuantity}
          />
          <Box margin={"1rem 0rem"}>
            <Button
              onClick={handleSendNewQuantity}
              variant="contained"
              sx={{ mx: "8px" }}
            >
              {t("Confirm")}
            </Button>
            <Button
              onClick={handleOpenQuantityDialog}
              variant="contained"
              sx={{ mx: "8px" }}
            >
              {t("Cancel")}
            </Button>
          </Box>
        </Box>
      </CustomDialog>
    </Card>
  );
};
