"use client";
// import { FormProvider } from "react-hook-form";
// import { useTranslation } from "react-i18next";
import { useAddNewProductHook } from "./addNewProduct.hook";
// import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
// import { FormActions } from "@/shared/components/FormActions";
// import { Grid } from "@mui/material";
// import { FormCard } from "@/shared/components/Form";
// import { ProductInformationForm } from "./components/ProductInformationForm";
import { CustomTabs } from "@/shared/components/Tabs";
import { useTabs } from "./components/tabs/useTabs";
// import { FormActions } from "@/shared/components/FormActions";
// import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { useTranslation } from "react-i18next";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");
  const tabs = useTabs();

  const { isLoading, handleClick, handleCancel } = useAddNewProductHook();
  return (
    <Box sx={{ margin: "2rem", backgroundColor: "#fff" }}>
      <PageWrapper
        padding={"10px"}
        actions={
          <FormActions
            hasCancel
            newButtonDisabled={isLoading}
            hasFormButton
            isLoading={isLoading}
            formButtonTitle={t("Save")}
            onNavigation={handleCancel}
            onSave={handleClick}
          />
        }
      >
        <CustomTabs items={tabs} />
      </PageWrapper>
    </Box>
  );
}
