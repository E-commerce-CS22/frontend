// "use client";
import { getRequiredValidation } from "@/shared/utils";
import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ProductInformationForm = () => {
  const { t } = useTranslation("Store");

  const {
    register,
    // control,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid2 p={0}>
      <Grid2 p={0}>
        <TextField
          label={t("Product name")}
          placeholder={t("Product name")}
          fullWidth
          error={Boolean(errors?.productName?.message)}
          helperText={
            errors?.productName?.message
              ? t(`${errors.productName.message}`)
              : ""
          }
          {...register(`productName`, {
            required: getRequiredValidation(t, true),
          })}
        />
        <TextField
          label={t("Price")}
          placeholder={t("Price")}
          fullWidth
          error={Boolean(errors?.price?.message)}
          helperText={
            errors?.price?.message ? t(`${errors.price.message}`) : ""
          }
          {...register(`price`, {
            required: getRequiredValidation(t, true),
          })}
        />
        <TextField
          label={t("Product name")}
          placeholder={t("Product name")}
          fullWidth
          error={Boolean(errors?.productName?.message)}
          helperText={
            errors?.productName?.message
              ? t(`${errors.productName.message}`)
              : ""
          }
          {...register(`productName`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid2>
    </Grid2>
  );
};
