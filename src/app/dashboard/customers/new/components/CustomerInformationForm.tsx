/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
import {
  getPatternMobileErrorMessage,
  getRequiredValidation,
  patternEmail,
  patternMobile,
} from "@/shared/utils";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const CustomerInformationForm = () => {
  const { t } = useTranslation("Store");

  const {
    register,
    // control,
    formState: { errors },
  } = useFormContext();

  const statuses = ["Active", "Inactive"];
  const handleStatusChange = () => {};

  return (
    <Grid p={0} sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("First name")}
          placeholder={t("First name")}
          fullWidth
          error={Boolean(errors?.firstName?.message)}
          helperText={
            errors?.firstName?.message ? t(`${errors.firstName.message}`) : ""
          }
          {...register(`firstName`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Last name")}
          placeholder={t("Last name")}
          fullWidth
          error={Boolean(errors?.lastName?.message)}
          helperText={
            errors?.lastName?.message ? t(`${errors.lastName.message}`) : ""
          }
          {...register(`lastName`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          fullWidth
          label={t("Email")}
          error={Boolean(errors?.email?.message)}
          helperText={
            errors?.email?.message ? t(`${errors.email.message}`) : ""
          }
          {...register("email", {
            required: getRequiredValidation(t, true),
            pattern: patternEmail,
          })}
          // defaultValue={defaultValues?.email}
          // disabled={Boolean(defaultValues?.email)}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Username")}
          placeholder={t("Username")}
          fullWidth
          error={Boolean(errors?.username?.message)}
          helperText={
            errors?.username?.message ? t(`${errors.username.message}`) : ""
          }
          {...register(`username`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Phone number")}
          placeholder={t("Phone number")}
          fullWidth
          error={Boolean(errors?.phoneNumber?.message)}
          helperText={getPatternMobileErrorMessage(
            t,
            errors?.phoneNumber?.message
          )}
          {...register("phoneNumber", {
            required: getRequiredValidation(t, true),
            pattern: patternMobile,
          })}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("City")}
          placeholder={t("City")}
          fullWidth
          error={Boolean(errors?.city?.message)}
          helperText={errors?.city?.message ? t(`${errors.city.message}`) : ""}
          {...register(`city`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Address")}
          placeholder={t("Address")}
          fullWidth
          error={Boolean(errors?.address?.message)}
          helperText={
            errors?.address?.message ? t(`${errors.address.message}`) : ""
          }
          {...register(`address`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid>
      {/* <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Postal code")}
          placeholder={t("Postal code")}
          fullWidth
          error={Boolean(errors?.postalCode?.message)}
          helperText={
            errors?.postalCode?.message ? t(`${errors.postalCode.message}`) : ""
          }
          {...register(`postalCode`, {
            required: getRequiredValidation(t, true),
          })}
        />
      </Grid> */}
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <Autocomplete
          options={statuses}
          multiple={true}
          onChange={handleStatusChange as any}
          // defaultValue={statuses}
          id="status"
          filterSelectedOptions
          getOptionLabel={(option: any) => {
            return t(option);
          }}
          renderInput={(params) => (
            <TextField {...params} label={t("Status")} />
          )}
        />
      </Grid>
    </Grid>
  );
};
