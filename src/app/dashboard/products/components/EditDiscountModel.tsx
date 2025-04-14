import { Box, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

import { darkGrey } from "@/shared/customization";
import { useRouter } from "next/navigation";

export const EditDiscountModel = (props) => {
  const { id, discountValue } = props;
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`products/edit/discount/edit?id=${id}`);
  };
  return (
    <Box>
      <Button disabled={!discountValue}>
        {discountValue ? (
          <Edit
            sx={{ cursor: "pointer", color: darkGrey }}
            onClick={handleUpdate}
          />
        ) : (
          <div>----</div>
        )}
      </Button>
    </Box>
  );
};
