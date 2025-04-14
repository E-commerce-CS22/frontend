/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomDialog } from "@/shared/components/CustomDialog";
import { Box, Button, DialogActions, Grid, TextField } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { darkGrey } from "@/shared/customization";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "@/shared/common/authentication";
import axios from "axios";
import { getRequiredValidation, SERVER_URI } from "@/shared/utils";
import { useForm } from "react-hook-form";

export const EditTrackingModel = (props) => {
  const { t } = useTranslation("Store");
  const { token } = useContext(UserContext);
  const { id, tracking_number } = props;

  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    mutate,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: async (tracking_number: { tracking_number: string }) => {
      return axios.patch(
        `${SERVER_URI}/api/admin/orders/${id}/tracking`,
        tracking_number,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const onSubmit = (data) => {
    mutate({ tracking_number: data?.tracking_number });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setOpen(false);
    }
  }, [isSuccess, isLoading]);

  const tracking = watch("tracking_number");

  return (
    <Box>
      <CustomDialog
        title={t("Edit Tracking Information")}
        open={open}
        onCloseModal={handleClickOpen}
        maxWidth="sm"
        button={
          <Edit
            sx={{ cursor: "pointer", color: darkGrey }}
            onClick={handleClickOpen}
          />
        }
        sx={{ fontFamily: "CoHeadlineTrail-Bold" }}
      >
        <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
          <TextField
            label={t("Tracking Number")}
            placeholder={t("Tracking Number")}
            fullWidth
            error={Boolean(errors?.tracking_number?.message)}
            helperText={
              errors?.tracking_number?.message
                ? t(`${errors.tracking_number.message}`)
                : ""
            }
            {...register("tracking_number", {
              required: getRequiredValidation(t, true),
            })}
            defaultValue={tracking_number}
          />
        </Grid>
        <DialogActions sx={{ fontFamily: "inherit" }}>
          <Button
            variant="contained"
            sx={{ fontFamily: "CoHeadlineTrial-Light" }}
            disabled={!tracking}
            onClick={handleSubmit(onSubmit)}
          >
            {t("Change")}
          </Button>
        </DialogActions>
      </CustomDialog>
    </Box>
  );
};
