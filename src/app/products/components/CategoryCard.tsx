import { MainTextColor, SecondaryTextColor } from "@/shared/customization";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CategoryDataProps = {
  id: string;
  name?: string;
  image?: string;
  description?: string;
  slug?: string;
};

export const CategoryCard = (props: CategoryDataProps) => {
  const { id, name, image, description } = props;
  const router = useRouter();
  const handleCategoryProducts = () => {
    router.push(`products/${id}`);
  };
  return (
    <Card
      sx={{
        width: "300px",
        borderRadius: "4px",
        margin: "1rem",
        cursor: "pointer",
        "&:hover": { boxShadow: 6 },
      }}
      onClick={handleCategoryProducts}
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
