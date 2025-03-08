import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";

import { darkGrey } from "@/shared/customization";
import { useRouter } from "next/navigation";

export const UpdateModel = (props) => {
  const { id } = props;
  const router = useRouter();

  const handleUpdate = () => {
    router.push("products/new");
    console.log(id ? id : "");
  };
  return (
    <Box>
      <Edit
        sx={{ cursor: "pointer", color: darkGrey }}
        onClick={handleUpdate}
      />
    </Box>
  );
};
