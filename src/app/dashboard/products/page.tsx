"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TableActions } from "./components/TableActions";
import { useProductsHook } from "./products.hook";

export default function DashboardProducts() {
  const { t } = useTranslation();

  const { tableActionButtons: actionButtons } = useProductsHook();
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      <Box>
        <Typography>{t("products coming soon.")}</Typography>
      </Box>
    </PageWrapper>
  );
}
