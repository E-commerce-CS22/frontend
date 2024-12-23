"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <Box>
        <Typography>{t("Dashboard coming soon.")}</Typography>
      </Box>
    </PageWrapper>
  );
}
