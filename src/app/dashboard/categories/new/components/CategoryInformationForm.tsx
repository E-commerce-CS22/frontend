// "use client";
import { primary } from "@/shared/customization";
import { getRequiredValidation } from "@/shared/utils";
import { Grid2, styled, TextareaAutosize, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const CategoryInformationForm = () => {
  const { t } = useTranslation("Store");

  const {
    register,
    // control,
    formState: { errors },
  } = useFormContext();

  const StyledTextarea = styled(TextareaAutosize)(({}) => ({}));

  return (
    <Grid2 p={0} sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Category name")}
          placeholder={t("Category name")}
          fullWidth
          error={Boolean(errors?.categoryName?.message)}
          helperText={
            errors?.categoryName?.message
              ? t(`${errors.categoryName.message}`)
              : ""
          }
          {...register(`categoryName`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid2>
      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Color")}
          placeholder={t("Color")}
          fullWidth
          error={Boolean(errors?.color?.message)}
          helperText={
            errors?.color?.message ? t(`${errors.color.message}`) : ""
          }
          {...register(`color`, {
            required: getRequiredValidation(t, false),
          })}
        />
      </Grid2>
      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <StyledTextarea
          id="description"
          aria-label="Description"
          minRows={3}
          placeholder={t("Description")}
          {...register("description", {
            required: getRequiredValidation(t, true),
          })}
          sx={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "CoHeadlineTrial-Light",
            outline: "none",
            "&:focus": {
              border: `2px solid ${primary}`,
            },
          }}
        />
        {errors?.description?.message && (
          <div style={{ color: "red" }}>
            {t(`${errors.description.message}`)}
          </div>
        )}
      </Grid2>
    </Grid2>
  );
};
