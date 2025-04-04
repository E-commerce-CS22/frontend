/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
import { primary } from "@/shared/customization";
import { getRequiredValidation } from "@/shared/utils";
import { Grid2, styled, TextareaAutosize, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ProductInformationForm = (props) => {
  const { t } = useTranslation("Store");

  const { defaultValues } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // const handleDiscountTypesChange = () => {};
  // const handleStatusChange = () => {};
  // const handleCategoriesChange = () => {};
  // const handleTagsChange = () => {};

  const StyledTextarea = styled(TextareaAutosize)(({}) => ({}));

  return (
    <Grid2 p={0} sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Product name")}
          placeholder={t("Product name")}
          fullWidth
          error={Boolean(errors?.name?.message)}
          helperText={errors?.name?.message ? t(`${errors.name.message}`) : ""}
          {...register("name", {
            required: getRequiredValidation(t, true),
          })}
          defaultValue={defaultValues?.name}
        />
      </Grid2>

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
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
          })}
          defaultValue={defaultValues?.price}
        />
      </Grid2>

      {/* <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Discount Value")}
          placeholder={t("Discount Value")}
          fullWidth
          error={Boolean(errors?.discountValue?.message)}
          helperText={
            errors?.discountValue?.message
              ? t(`${errors.discountValue.message}`)
              : ""
          }
          {...register("discountValue")}
          defaultValue={defaultValues?.discount_value}
        />
      </Grid2>

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <Controller
          name="discountType"
          control={control}
          render={({ field }) => (
            <Autocomplete
              options={discountTypes}
              defaultValue={defaultValues?.discount_type}
              {...field}
              onChange={(_, newValue) => field.onChange(newValue)}
              renderInput={(params) => (
                <TextField {...params} label={t("Discount Type")} />
              )}
            />
          )}
        />
      </Grid2>

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <CustomDatePicker
          label={t("Discount start date")}
          name="discountStartDateS"
          placeholder={t("Pick a date")}
          register={register}
          required={false}
          defaultValue={defaultValues?.discount_start_date}
        />
      </Grid2>

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <CustomDatePicker
          label={t("Discount end date")}
          name="discountEndDateS"
          placeholder={t("Pick a date")}
          register={register}
          required={false}
          defaultValue={defaultValues?.discount_end_date}
        />
      </Grid2>

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Autocomplete
              options={statuses}
              defaultValue={defaultValues?.status}
              {...field}
              onChange={(_, newValue) => field.onChange(newValue)}
              renderInput={(params) => (
                <TextField {...params} label={t("Status")} />
              )}
            />
          )}
        />
      </Grid2>

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <Controller
          name="categories"
          control={control}
          render={({ field }) => (
            <Autocomplete
              options={categories}
              multiple
              {...field}
              onChange={(_, newValue) => field.onChange(newValue)}
              renderInput={(params) => (
                <TextField {...params} label={t("Categories")} />
              )}
            />
          )}
        />
      </Grid2>

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <Autocomplete
              options={tags}
              multiple
              {...field}
              onChange={(_, newValue) => field.onChange(newValue)}
              renderInput={(params) => (
                <TextField {...params} label={t("Tags")} />
              )}
            />
          )}
        />
      </Grid2> */}

      <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
        <StyledTextarea
          id="description"
          aria-label="Description"
          minRows={3}
          placeholder={t("Description")}
          {...register("description", {
            required: getRequiredValidation(t, true),
          })}
          defaultValue={defaultValues?.description}
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

// dates Discount start time, and discount end time
