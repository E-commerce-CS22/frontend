"use client";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { primary } from "@/shared/customization/theme/colors";
import { useForm } from "react-hook-form";
import Show from "@/shared/components/Show";
import EyeOffIcon from "@/shared/components/EyeOffIcon";
import Link from "next/link";
import { patternPassword, patternEmail, patternMobile } from "@/shared/utils";
import { useSignUpHook } from "./useSignUp.hook";

const SignUp = () => {
  const { t } = useTranslation("Store");

  const {
    showPassword,
    showConfirmPassword,
    onSubmit,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
  } = useSignUpHook();

  const {
    handleSubmit,
    formState: { errors: formErrors },
    register,
  } = useForm({
    mode: "all",
  });

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "400px",
          }}
        >
          <Box
            sx={{
              background: primary,
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 2rem",
              borderBottomLeftRadius: "1rem",
              borderBottomRightRadius: "1rem",
            }}
          >
            <Typography color="white">{t("Create an account")}</Typography>
          </Box>
          <Box mt={4} sx={{ textAlign: "center" }}>
            <Typography mb={1} color="primary" variant="h4">
              {t("Welcome to")} Smart Store
            </Typography>
            <Typography>{t("Login to your existing account")}</Typography>
          </Box>
          <Box m={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("Username")}
                  placeholder={t("Username")}
                  error={Boolean(formErrors?.username)}
                  helperText={
                    formErrors?.username?.message
                      ? t(String(formErrors.username.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...register("username", {
                    required: t("Username is required"),
                  })}
                />
              </Box>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("First name")}
                  placeholder={t("firstName")}
                  error={Boolean(formErrors?.firstName)}
                  helperText={
                    formErrors?.firstName?.message
                      ? t(String(formErrors.firstName.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...register("firstName", {
                    required: t("First name is required"),
                  })}
                />
              </Box>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("Last name")}
                  placeholder={t("lastName")}
                  error={Boolean(formErrors?.lastName)}
                  helperText={
                    formErrors?.lastName?.message
                      ? t(String(formErrors.lastName.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...register("lastName", {
                    required: t("Last name is required"),
                  })}
                />
              </Box>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("Email")}
                  placeholder={t("Email")}
                  error={Boolean(formErrors?.email)}
                  helperText={
                    formErrors?.email?.message
                      ? t(String(formErrors.email.message))
                      : ""
                  }
                  {...register("email", {
                    required: t("Email is required"),
                    pattern: patternEmail,
                  })}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  label={t("Phone Number")}
                  placeholder={t("Phone Number")}
                  error={Boolean(formErrors?.phoneNumber)}
                  helperText={
                    formErrors?.phoneNumber?.message
                      ? t(String(formErrors.phoneNumber.message))
                      : ""
                  }
                  inputProps={{ maxLength: 13, dir: "ltr" }}
                  {...register("phoneNumber", {
                    required: t("Phone number is required"),
                    pattern: patternMobile,
                  })}
                />
              </Box>
              <Box m="1rem 0">
                <TextField
                  fullWidth
                  label={t("Password")}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("Password")}
                  error={Boolean(formErrors?.password)}
                  helperText={
                    formErrors?.password?.message
                      ? t(String(formErrors.password.message))
                      : ""
                  }
                  {...register("password", {
                    required: t("Password is required"),
                    pattern: patternPassword,
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ padding: 0 }}
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Show /> : <EyeOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box m="1rem 0">
                <TextField
                  fullWidth
                  label={t("Confirm Password")}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t("Confirm Password")}
                  error={Boolean(formErrors?.confirmPassword)}
                  helperText={
                    formErrors?.confirmPassword?.message
                      ? t(String(formErrors.confirmPassword.message))
                      : ""
                  }
                  {...register("confirmPassword", {
                    required: t("Confirm Password is required"),
                    pattern: {
                      value: /(.{8})/,
                      message: t("Password must be at least 8 characters"),
                    },
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ padding: 0 }}
                          onClick={handleClickShowConfirmPassword}
                        >
                          {showConfirmPassword ? <Show /> : <EyeOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("City")}
                  placeholder={t("city")}
                  error={Boolean(formErrors?.city)}
                  helperText={
                    formErrors?.city?.message
                      ? t(String(formErrors.city.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...register("city", {
                    required: t("City is required"),
                  })}
                />
              </Box>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("Address")}
                  placeholder={t("Address")}
                  error={Boolean(formErrors?.address)}
                  helperText={
                    formErrors?.address?.message
                      ? t(String(formErrors.address.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...register("address", {
                    required: t("Address is required"),
                  })}
                />
              </Box>
              <Button
                onClick={handleSubmit(onSubmit)}
                fullWidth
                variant="contained"
                type="submit"
              >
                {t("Register Now")}
              </Button>
              <Typography mt={"0.5rem"}>
                {t("I already have an account")}
                <Link style={{ color: primary }} href={"/login"}>
                  {" "}
                  {t("Login")}
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
