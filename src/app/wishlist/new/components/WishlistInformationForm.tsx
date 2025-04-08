/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequiredValidation } from "@/shared/utils";
import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const WishlistInformationForm = (props) => {
  const { t } = useTranslation("Store");

  const { defaultValues } = props;
  const {
    register,
    // control,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid p={0} sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
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
          {...register("productName", {
            required: getRequiredValidation(t, true),
          })}
          defaultValue={defaultValues?.name}
        />
      </Grid>

      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Price")}
          placeholder={t("Price")}
          fullWidth
          error={Boolean(errors?.price?.message)}
          helperText={
            errors?.price?.message ? t(`${errors.price.message}`) : ""
          }
          {...register("price", {
            required: getRequiredValidation(t, true),
            validate: (value) => {
              const isNumber = !isNaN(parseFloat(value)) && isFinite(value);
              return isNumber || t("Price must be a number");
            },
          })}
          defaultValue={defaultValues?.price}
        />
      </Grid>
    </Grid>
  );
};

// dates Discount start time, and discount end time
