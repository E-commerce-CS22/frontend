/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { primary } from "@/shared/customization";
import { getRequiredValidation } from "@/shared/utils";
import { AddPhotoAlternate } from "@mui/icons-material";
import {
  Grid2,
  IconButton,
  styled,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState } from "react"; // Add this import

export const CategoryInformationForm = (props) => {
  const { t } = useTranslation("Store");
  const { defaultValues } = props;
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const StyledTextarea = styled(TextareaAutosize)(({}) => ({}));

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("image", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

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
            required: getRequiredValidation(t, false),
          })}
          defaultValue={defaultValues?.slug}
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
          defaultValue={defaultValues?.description}
        />
        {errors?.description?.message && (
          <div style={{ color: "red" }}>
            {t(`${errors.description.message}`)}
          </div>
        )}
      </Grid2>
      <Grid2
        p={"1rem"}
        sx={{
          margin: "0 1rem",
          minWidth: "400px",
          border: `1px solid ${primary}`,
          borderRadius: "4px",
        }}
      >
        <Typography variant="h6">{t("Category Image")}</Typography>
        <label htmlFor="image-upload" style={{ width: "100%" }}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image-upload"
              type="file"
              onChange={handleImageUpload}
            />
            <AddPhotoAlternate />
          </IconButton>
        </label>
        {imagePreview && (
          <div style={{ marginTop: "1rem" }}>
            <Image
              src={imagePreview}
              alt="Selected"
              width={400}
              height={400}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
        {defaultValues.image && !imagePreview && (
          <div style={{ marginTop: "1rem" }}>
            <Image
              src={defaultValues?.image}
              alt="Selected"
              width={400}
              height={400}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
      </Grid2>
    </Grid2>
  );
};
