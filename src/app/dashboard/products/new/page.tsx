"use client";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");
  return (
    <Box>
      <Typography>{t("Create New Product")}</Typography>
    </Box>
  );
}
