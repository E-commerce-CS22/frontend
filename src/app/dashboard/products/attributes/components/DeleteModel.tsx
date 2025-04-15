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
import { toast } from "react-toastify";

export const DeleteModel = (props) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { token } = useContext(UserContext);

  const {
    mutate,
    isSuccess,
    isPending: isLoading,
    isError,
  } = useMutation({
    mutationFn: (id: string) => {
      return axios.delete(`${SERVER_URI}/api/admin/attributes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const { id } = props;

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

  useEffect(() => {
    if (isLoading)
      toast.loading(t("Sending data..."), { toastId: "loadProfile" });
    else toast.dismiss("loadProfile");

    if (isError) toast.error(t("Failed to send data"));
    if (isSuccess) toast.success(t("Sent successfully"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSuccess, isError]);
  return (
    <Box>
      <CustomDialog
        title={t("Description")}
        open={open}
        onCloseModal={handleClickOpen}
        maxWidth="sm"
        button={
          <Delete
            sx={{ cursor: "pointer", color: darkGrey }}
            onClick={handleClickOpen}
          />
        }
      >
        <Box>
          <Typography color="warning" fontWeight={"bold"}>
            {t("Are you sure you want to delete the attribute!")}
          </Typography>
          <DialogActions>
            <Button color="error" variant="contained" onClick={handleDelete}>
              {t("Delete")}
            </Button>
            <Button
              color="success"
              variant="contained"
              sx={{ color: "white" }}
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
