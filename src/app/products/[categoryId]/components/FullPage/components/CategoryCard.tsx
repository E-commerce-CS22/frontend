// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// type CategoryCardProps = {
//   id: string;
//   imageSrc?: string;
//   imageAlt?: string;
//   categoryDescription?: string;
// };

// export const CategoryCard = (props: CategoryCardProps) => {
//   const router = useRouter();
//   const { id, imageSrc, imageAlt, categoryDescription } = props;

//   const handleCategoryProducts = () => {
//     router.push(id);
//   };
//   return (
//     <Card onClick={handleCategoryProducts} sx={{ "&:hover": { boxShadow: 6} }}>
//       <CardMedia>
//         <Image
//           src={imageSrc ? imageSrc : ""}
//           alt={imageAlt ? imageAlt : ""}
//           width={200}
//           height={200}
//         />
//       </CardMedia>
//       <CardContent>
//         <Typography>{categoryDescription}</Typography>
//       </CardContent>
//     </Card>
//   );
// };
