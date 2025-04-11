import { MainTextColor, SecondaryTextColor } from "@/shared/customization";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

type CategoryDataProps = {
  name?: string;
  image?: string;
  description?: string;
  slug?: string;
};

export const CategoryCard = (props: CategoryDataProps) => {
  const { name, image, description } = props;
  return (
    <Card
      sx={{
        width: "300px",
        borderRadius: "4px",
        margin: "1rem",
        cursor: "pointer",
      }}
    >
      <CardMedia>
        {image && (
          <Image
            src={image}
            alt={name || "category image"}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        )}
        {!image && (
          <Image
            src="/images/home-bgcolor.jpg"
            alt="default category image"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        )}
      </CardMedia>
      <CardContent>
        <Typography color={MainTextColor} fontWeight={"bold"} mb="0.8rem">
          {name}
        </Typography>
        <Typography color={SecondaryTextColor} fontSize={"0.9rem"}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
