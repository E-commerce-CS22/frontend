"use client";
import { CustomDatePicker } from "@/shared/components/Form";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Grid, TextField, Autocomplete, Box, Button } from "@mui/material";
import { Controller, FormProvider } from "react-hook-form";
import { useAddDiscountHook } from "./addDiscount.hook";
import { useTranslation } from "react-i18next";

export default function AddDiscountPage() {
  const { t } = useTranslation("Store");
  const { register, errors, methods, control, handleClick, handleSubmit } =
    useAddDiscountHook();

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
                {...register("discountValue")}
                // defaultValue={defaultValues?.discount_value}
              />
            </Grid>

            <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
              <Controller
                name="discountType"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={discountTypes}
                    // defaultValue={defaultValues?.discount_type}
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
                name="discountStartDateS"
                placeholder={t("Pick a date")}
                register={register}
                required={false}
                // defaultValue={defaultValues?.discount_start_date}
              />
            </Grid>

            <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
              <CustomDatePicker
                label={t("Discount end date")}
                name="discountEndDateS"
                placeholder={t("Pick a date")}
                register={register}
                required={false}
                // defaultValue={defaultValues?.discount_end_date}
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
