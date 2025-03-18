import { primary } from "@/shared/customization";
import { ProductData } from "@/shared/types";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const ProductCard = ({ product }: { product: ProductData }) => {
  const router = useRouter();

  const handleProductDetails = () => {
    router.push(`products/${product?.id}`);
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
        <Button variant="contained">Buy product</Button>
        <Button variant="contained">Add to Wishlist</Button>
        <Button variant="contained" onClick={handleProductDetails}>
          Product details
        </Button>
      </Box>
    </Box>
  );
};
