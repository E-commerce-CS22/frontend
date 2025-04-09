"use client";
import { CustomDatePicker } from "@/shared/components/Form";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Grid, TextField, Autocomplete, Box, Button } from "@mui/material";
import { Controller, FormProvider } from "react-hook-form";
import { useEditDiscountHook } from "./editDiscount.hook";
import { useTranslation } from "react-i18next";
import { getRequiredValidation } from "@/shared/utils";

export default function EditDiscountPage() {
  const { t } = useTranslation("Store");
  const {
    register,
    errors,
    methods,
    control,
    handleClick,
    handleSubmit,
    discountInfo,
  } = useEditDiscountHook();

  const discountTypes = ["percentage", "fixed"];
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper>
          <Box bgcolor={"#fff"} p={"2rem"}>
            <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
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
                {...register("discountValue", {
                  required: getRequiredValidation(t, true),
                  validate: (value) => {
                    const isNumber =
                      !isNaN(parseFloat(value)) && isFinite(value);
                    return isNumber || t("Discount value must be a number");
                  },
                })}
                defaultValue={discountInfo?.discount_value}
              />
            </Grid>

            <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
              <Controller
                name="discountType"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={discountTypes}
                    defaultValue={discountInfo?.discount_type}
                    {...field}
                    onChange={(_, newValue) => field.onChange(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} label={t("Discount Type")} />
                    )}
                  />
                )}
              />
            </Grid>

            <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
              <CustomDatePicker
                label={t("Discount start date")}
                name="discountStartDate"
                placeholder={t("Pick a date")}
                register={register}
                required={false}
                defaultValue={discountInfo?.discount_start_date}
              />
            </Grid>

            <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
              <CustomDatePicker
                label={t("Discount end date")}
                name="discountEndDate"
                placeholder={t("Pick a date")}
                register={register}
                required={false}
                defaultValue={discountInfo?.discount_end_date}
              />
            </Grid>
            <Button
              onClick={handleSubmit(handleClick)}
              fullWidth
              variant="contained"
              type="submit"
            >
              {t("Save")}
            </Button>
          </Box>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
