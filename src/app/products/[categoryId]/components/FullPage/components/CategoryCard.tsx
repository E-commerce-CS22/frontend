import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

type CategoryCardProps = {
  imageSrc?: string;
  imageAlt?: string;
  categoryDescription?: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  const { imageSrc, imageAlt, categoryDescription } = props;
  return (
    <Card>
      <CardMedia>
        <Image
          src={imageSrc ? imageSrc : ""}
          alt={imageAlt ? imageAlt : ""}
          width={200}
          height={200}
        />
      </CardMedia>
      <CardContent>
        <Typography>{categoryDescription}</Typography>
      </CardContent>
    </Card>
  );
};
