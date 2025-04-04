import { getRequiredValidation } from "@/shared/utils";
import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const TagInformationForm = (props) => {
  const { t } = useTranslation("Store");
  const { defaultValues } = props;
  const {
    register,
    // control,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid2 p={0} sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Tag name")}
          placeholder={t("Tag name")}
          fullWidth
          error={Boolean(errors?.tagName?.message)}
          helperText={
            errors?.tagName?.message ? t(`${errors.tagName.message}`) : ""
          }
          {...register(`tagName`, {
            required: getRequiredValidation(t, true),
          })}
          defaultValue={defaultValues?.name}
        />
      </Grid2>
      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Slug")}
          placeholder={t("Slug")}
          fullWidth
          error={Boolean(errors?.slug?.message)}
          helperText={errors?.slug?.message ? t(`${errors.slug.message}`) : ""}
          {...register(`slug`, {
            required: getRequiredValidation(t, true),
          })}
          defaultValue={defaultValues?.slug}
        />
      </Grid2>
    </Grid2>
  );
};
