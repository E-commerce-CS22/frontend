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
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { primary } from "@/shared/customization/theme/colors";
import { useForm } from "react-hook-form";
import Show from "@/shared/components/Show";
import EyeOffIcon from "@/shared/components/EyeOffIcon";
import Link from "next/link";
import { useLogin } from "./useLogin.hook";

const Login = () => {
  const { t } = useTranslation("Store");
  const { showPassword, handleLogin, handleClickShowPassword } = useLogin();
  const {
    handleSubmit,
    // formState: { errors: formErrorsData },
    register,
  } = useForm({
    mode: "all",
  });

  // const formErrors = formErrorsData;
  // const patternPassword = {
  //   value: /^(?=.*?[A-Z])(?=.*?[^\w\s]).{8,}$/,
  //   message: t(
  //     "Password Must Contain: Minimum of 8 characters, At least one uppercase letter, At least one special character (I.e !@#$%&)"
  //   ),
  // };
  // const handleVerify = () => {
  //   if (!isMobileNumberUsed) {
  //     setError("username", {
  //       message: t("You must use your mobile number to verify your account"),
  //     });
  //     return;
  //   }
  //   handleResendCode();
  // };
  return (
    <PageWrapper>
      <Box
        sx={{
          width: "100%",
          marginTop: "1rem",
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
              marginTop: "2rem",
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
          <Box mt={6} sx={{ textAlign: "center" }}>
            <Typography mb={1} color="primary" variant="h4">
              {t("Welcome Back")} ...
            </Typography>
            <Typography>{t("Enter your information")}</Typography>
          </Box>
          <Box m={4}>
            <form onSubmit={handleSubmit(handleLogin)}>
              <Box m={"1rem 0"}>
                <TextField
                  fullWidth
                  label={t("Email")}
                  placeholder={t("Email")}
                  // error={Boolean(formErrors?.email?.message)}
                  // helperText={t(formErrors?.email?.message)}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("Invalid email format"),
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
                    // pattern: patternPassword,
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
              <Button fullWidth variant="contained" type="submit">
                {t("Login")}
              </Button>
              <Typography>
                {t("I don't have an account")}
                <Link style={{ color: primary }} href={"/signup"}>
                  {" "}
                  {t("Register Now")}
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};
export default Login;
