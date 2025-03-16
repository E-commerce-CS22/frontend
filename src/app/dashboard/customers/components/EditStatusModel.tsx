/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomDialog } from "@/shared/components/CustomDialog";
import {
  Autocomplete,
  Box,
  Button,
  DialogActions,
  Grid2,
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
        <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
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
        </Grid2>
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
