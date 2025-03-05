"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DashboardProducts() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <Box>
        <Typography>{t("products coming soon.")}</Typography>
      </Box>
    </PageWrapper>
  );
}
