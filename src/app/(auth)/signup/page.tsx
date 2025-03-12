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
// import { combineErrors } from "@/shared/utils/combineErrors";
// import { useAccountRegisterHook } from "@/shared/hooks/AccountRegisterHook";
import Show from "@/shared/components/Show";
import EyeOffIcon from "@/shared/components/EyeOffIcon";
import Link from "next/link";
import { useSignUpHook } from "./useSignUp.hook";

const SignUp = () => {
  const { t } = useTranslation("Store");

  const {
    showPassword,
    showConfirmPassword,
    onSubmit,
    handleSignUp,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
  } = useSignUpHook();

  const {
    handleSubmit,
    // formState: { errors: formErrorsData },
    register,
  } = useForm({
    mode: "all",
  });
  // const {
  //   errors,
  //   showPassword,
  //   showConfirmPassword,
  //   onSubmit,
  //   handleClickShowPassword,
  //   handleClickShowConfirmPassword,
  // } = useAccountRegisterHook();
  // const formErrors = formErrorsData;
  const patternPassword = {
    value: /^(?=.*?[A-Z])(?=.*?[^\w\s]).{8,}$/,
    message: t(
      "Password Must Contain: Minimum of 8 characters, At least one uppercase letter, At least one special character (I.e !@#$%&)"
    ),
  };
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
                  // error={Boolean(formErrors?.username?.message)}
                  // helperText={t(formErrors?.username?.message) || ""}
                  inputProps={{
                    maxLength: 10,
                  }}
                  {...register("username", {
                    required: true,
                  })}
                />
              </Box>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("Email")}
                  placeholder={t("Email")}
                  // error={Boolean(formErrors?.email?.message)}
                  // helperText={t(formErrors?.email?.message) || ""}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("Invalid email format"),
                    },
                  })}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  label={t("Phone Number")}
                  placeholder={t("Phone Number")}
                  // error={Boolean(formErrors?.phoneNumber?.message)}
                  // helperText={t(formErrors?.phoneNumber?.message) || ""}
                  inputProps={{
                    maxLength: 10,
                  }}
                  {...register("phoneNumber", {
                    required: true,
                    pattern: {
                      value: /^\d+$/,
                      message: t("Invalid phone number"),
                    },
                  })}
                />
              </Box>
              <Box m="1rem 0">
                <TextField
                  fullWidth
                  label={t("Password")}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("Password")}
                  // error={Boolean(formErrors?.password?.message)}
                  // helperText={t(formErrors.password?.message)}
                  {...register("password", {
                    required: true,
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
                  // error={Boolean(formErrors?.confirmPassword?.message)}
                  // helperText={t(formErrors.confirmPassword?.message)}
                  {...register("confirmPassword", {
                    required: true,
                    pattern: {
                      value: /(.{8})/,
                      message: t("password must be at least 8 letters length"),
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
              <Button
                onClick={handleSignUp}
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
