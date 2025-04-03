import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";

import { darkGrey } from "@/shared/customization";
import { useRouter } from "next/navigation";

export const UpdateValueModel = (props) => {
  const { id, attributeId } = props;
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`attributes/editValue?attributeId=${attributeId}&id=${id}`);
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
