import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CategoryChipProps = {
  id: string;
  name: string;
  image?: string;
};
export const CategoryChip = (props: CategoryChipProps) => {
  const { id, name, image } = props;
  const router = useRouter();
  const handleCategoryProduct = () => {
    router.push(`products/${id}`);
  };
  return (
    <Box
      sx={{
        flex: "0 0 auto",
        display: "flex",
        borderRadius: "30px",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "white",
        width: "fit-content",
        margin: "0 0.5rem",
        cursor: "pointer",
        boxShadow: "0px 0px 6px 0px rgba(48, 49, 50, 0.75)",
      }}
      onClick={handleCategoryProduct}
    >
      <Box height={60}>
        {image && (
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            style={{ borderRadius: "50%" }}
          />
        )}
        {!image && (
          <Image
            src={"/images/home-bgcolor.jpg"}
            alt={name}
            width={60}
            height={60}
            style={{ borderRadius: "50%" }}
          />
        )}
      </Box>
      <Typography mx={"8px"}>{name}</Typography>
    </Box>
  );
};
