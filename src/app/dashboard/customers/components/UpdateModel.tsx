import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";

import { darkGrey } from "@/shared/customization";
import { useRouter } from "next/navigation";

export const UpdateModel = () => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push("customers/new");
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
