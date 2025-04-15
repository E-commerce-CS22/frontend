/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomDialog } from "@/shared/components/CustomDialog";
import {
  Autocomplete,
  Box,
  Button,
  DialogActions,
  Grid,
  TextField,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { darkGrey } from "@/shared/customization";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "@/shared/common/authentication";
import axios from "axios";
import { SERVER_URI } from "@/shared/utils";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const EditStatusModel = (props) => {
  const { t } = useTranslation("Store");
  const { token } = useContext(UserContext);
  const { id } = props;

  const [open, setOpen] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  const {
    mutate,
    isPending: isLoading,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async (status: { status: string }) => {
      return axios.patch(`${SERVER_URI}/api/admin/users/${id}/status`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const onSubmit = (data) => {
    mutate({ status: data?.status });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setOpen(false);
    }
  }, [isSuccess, isLoading]);

  const statuses = ["active", "inactive"];
  const selectedStatus = watch("status");

  useEffect(() => {
    if (isLoading)
      toast.loading(t("Sending data..."), { toastId: "loadProfile" });
    else toast.dismiss("loadProfile");

    if (isError) toast.error(t("Failed to send data"));
    if (isSuccess) toast.success(t("Sent successfully"));
  }, [isLoading, isSuccess, isError]);

  return (
    <Box>
      <CustomDialog
        title={t("Edit Status")}
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
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Autocomplete
                options={statuses}
                {...field}
                onChange={(_, newValue) => field.onChange(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label={t("Status")} />
                )}
              />
            )}
          />
        </Grid>
        <DialogActions sx={{ fontFamily: "inherit" }}>
          <Button
            variant="contained"
            sx={{ fontFamily: "CoHeadlineTrial-Light" }}
            disabled={!selectedStatus}
            onClick={handleSubmit(onSubmit)}
          >
            {t("Change")}
          </Button>
        </DialogActions>
      </CustomDialog>
    </Box>
  );
};
