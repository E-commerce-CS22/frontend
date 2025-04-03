// "use client";
import {
  getRequiredValidation,
  patternEmail,
  patternMobile,
} from "@/shared/utils";
import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ProfileInformationForm = (props) => {
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
          defaultValue={defaultValues?.username}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("First name")}
          placeholder={t("First name")}
          fullWidth
          error={Boolean(errors?.first_name?.message)}
          helperText={
            errors?.first_name?.message ? t(`${errors.first_name.message}`) : ""
          }
          {...register(`first_name`, {
            required: getRequiredValidation(t, false),
          })}
          defaultValue={defaultValues?.first_name}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Last name")}
          placeholder={t("Last name")}
          fullWidth
          error={Boolean(errors?.last_name?.message)}
          helperText={
            errors?.last_name?.message ? t(`${errors.last_name.message}`) : ""
          }
          {...register(`last_name`, {
            required: getRequiredValidation(t, false),
          })}
          defaultValue={defaultValues?.last_name}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          fullWidth
          label={t("Email")}
          placeholder={t("Email")}
          error={Boolean(errors?.email?.message)}
          helperText={
            errors?.email?.message ? t(`${errors.email.message}`) : ""
          }
          {...register("email", {
            required: t("Email is required"),
            pattern: patternEmail,
          })}
          defaultValue={defaultValues?.email}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Phone Number")}
          placeholder={t("Phone Number")}
          fullWidth
          error={Boolean(errors?.phone?.message)}
          helperText={
            errors?.phone?.message ? t(`${errors.phone.message}`) : ""
          }
          {...register("phone", {
            required: t("Phone number is required"),
            pattern: patternMobile,
          })}
          defaultValue={defaultValues?.phone}
          InputProps={{
            inputProps: { dir: "ltr" },
          }}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Postal Code")}
          placeholder={t("Postal Code")}
          fullWidth
          error={Boolean(errors?.postal_code?.message)}
          helperText={
            errors?.postal_code?.message
              ? t(`${errors.postal_code.message}`)
              : ""
          }
          {...register(`postal_code`, {
            required: getRequiredValidation(t, false),
          })}
          defaultValue={defaultValues?.postal_code}
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
            required: getRequiredValidation(t, false),
          })}
          defaultValue={defaultValues?.city}
        />
      </Grid>
      <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
        <TextField
          label={t("Country")}
          placeholder={t("Country")}
          fullWidth
          error={Boolean(errors?.country?.message)}
          helperText={
            errors?.country?.message ? t(`${errors.country.message}`) : ""
          }
          {...register(`country`, {
            required: getRequiredValidation(t, false),
          })}
          defaultValue={defaultValues?.country}
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
            required: getRequiredValidation(t, false),
          })}
          defaultValue={defaultValues?.address}
        />
      </Grid>
    </Grid>
  );
};
