import { Box, Typography } from "@mui/material";
import Image from "next/image";

type CategoryChipProps = {
  name: string;
  image?: string;
};
export const CategoryChip = (props: CategoryChipProps) => {
  const { name, image } = props;
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
      }}
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
