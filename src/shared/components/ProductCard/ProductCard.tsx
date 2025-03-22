import { UserContext } from "@/shared/common/authentication";
import { primary } from "@/shared/customization";
import { ProductData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { Box, Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

type ProductCardProps = {
  product: ProductData;
  hasDeleteFromCart?: boolean;
};

export const ProductCard = (props: ProductCardProps) => {
  const router = useRouter();

  const { token } = useContext(UserContext);

  const { product, hasDeleteFromCart } = props;

  const handleProductDetails = () => {
    router.push(`products/${product?.id}`);
  };

  const { mutate } = useMutation({
    mutationFn: (productId: string) => {
      return axios.post(
        `${SERVER_URI}/api/wishlists/products/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const { mutate: deleteFromCart } = useMutation({
    mutationFn: ({ productId }: { productId: string }) => {
      return axios.delete(`${SERVER_URI}/api/carts/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const { mutate: addToCart } = useMutation({
    mutationFn: ({
      productId,
      quantity,
    }: {
      productId: string;
      quantity: number;
    }) => {
      return axios.post(
        `${SERVER_URI}/api/carts/products`,
        {
          product_id: productId,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const handleAddToWishlist = (productId) => {
    mutate(productId);
  };

  const handleAddToCart = (productId) => {
    addToCart({ productId, quantity: 1 });
  };

  const handleDeleteFromCart = (productId) => {
    deleteFromCart({ productId });
  };

  return (
    <Box
      sx={{
        borderRadius: "5px",
        border: `1px solid ${primary}`,
        maxWidth: "400px",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <Typography>{product?.name}</Typography>
      <Typography my={"1rem"}>{product?.description}</Typography>
      <Typography
        sx={{
          borderRadius: "5px",
          border: `1px solid ${primary}`,
          width: "100px",
          padding: "0.8rem",
        }}
      >
        {product?.price}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <Button
          variant="contained"
          onClick={() => handleAddToCart(product?.id)}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          onClick={() => handleAddToWishlist(product?.id)}
        >
          Add to Wishlist
        </Button>
        <Button variant="contained" onClick={handleProductDetails}>
          Product details
        </Button>
        {hasDeleteFromCart && (
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDeleteFromCart(product.id)}
          >
            Delete From Cart
          </Button>
        )}
      </Box>
    </Box>
  );
};
