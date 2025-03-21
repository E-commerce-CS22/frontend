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
import { useLogin } from "./useLogin.hook";
import { patternEmail } from "@/shared/utils";

const Login = () => {
  const { t } = useTranslation("Store");
  const { showPassword, handleClickShowPassword, onSubmit } = useLogin();
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
            <Typography color="white">{t("Login")}</Typography>
          </Box>
          <Box mt={4} sx={{ textAlign: "center" }}>
            <Typography mb={1} color="primary" variant="h4">
              {t("Welcome Back")} ...
            </Typography>
            <Typography>{t("Enter your information")}</Typography>
          </Box>
          <Box m={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  defaultValue={"ziad.bahri@example.com"}
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
                    // pattern: patternPassword,
                  })}
                  defaultValue={"password123"}
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
              <Button
                onClick={handleSubmit(onSubmit)}
                fullWidth
                variant="contained"
                type="submit"
              >
                {t("Login")}
              </Button>
              <Typography mt={"0.5rem"}>
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
    </Box>
  );
};
export default Login;
