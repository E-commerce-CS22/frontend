import { CustomDialog } from "@/shared/components/CustomDialog";
import { Box, Button, DialogActions, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { darkGrey } from "@/shared/customization";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";

export const DeleteDiscountModel = (props) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { token } = useContext(UserContext);

  const { mutate, isSuccess } = useMutation({
    mutationFn: (id: string) => {
      return axios.delete(`${SERVER_URI}/api/admin/products/${id}/discount`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const { id, discountValue } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    mutate(id);
  };

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);
  return (
    <Box>
      <CustomDialog
        title={t("Description")}
        open={open}
        onCloseModal={handleClickOpen}
        maxWidth="sm"
        button={
          <Button disabled={!discountValue}>
            {discountValue && (
              <Delete
                sx={{ cursor: "pointer", color: darkGrey }}
                onClick={handleClickOpen}
              />
            )}
          </Button>
        }
      >
        <Box>
          <Typography color="warning" fontWeight={"bold"}>
            {t("Are you sure you want to delete the discount!")}
          </Typography>
          <DialogActions>
            <Button color="error" variant="contained" onClick={handleDelete}>
              {t("Delete")}
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={handleClickOpen}
            >
              {t("Cancel")}
            </Button>
          </DialogActions>
        </Box>
      </CustomDialog>
    </Box>
  );
};
