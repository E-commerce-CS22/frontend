"use client";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation("Store");
  return (
    <Box>
      <Box>
        <Typography>{t("Create an account")}</Typography>
      </Box>
      <Box>
        <Typography color="primary" variant="h4">
          {t("Welcome to")} Smart Store
        </Typography>
        <Typography>{t("Login to your existing account")}</Typography>
      </Box>
    </Box>
  );
};
export default SignUp;
