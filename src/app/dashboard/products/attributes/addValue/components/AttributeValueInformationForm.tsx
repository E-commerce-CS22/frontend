/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
import { getRequiredValidation } from "@/shared/utils";
import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const AttributeVariantValueInformationForm = (props) => {
  const { t } = useTranslation("Store");

  const { defaultValues } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid2 p={0} sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Value name")}
          placeholder={t("value name")}
          fullWidth
          error={Boolean(errors?.name?.message)}
          helperText={errors?.name?.message ? t(`${errors.name.message}`) : ""}
          {...register("name", {
            required: getRequiredValidation(t, true),
          })}
          defaultValue={defaultValues?.name}
        />
      </Grid2>
    </Grid2>
  );
};
