"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAddNewProductHook } from "./addNewProduct.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid2 } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { ProductInformationForm } from "./components/productInformationForm";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");

  const { methods, handleSubmit, handleClick, handleCancel } =
    useAddNewProductHook();
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper
          actions={
            <FormActions
              hasCancel
              // newButtonDisabled={isLoading}
              hasFormButton
              // isLoading={isLoading}
              formButtonTitle={t("Create")}
              onNavigation={handleCancel}
            />
          }
        >
          <Grid2 container spacing={2}>
            <Grid2>
              <FormCard
                title={t("Product Information")}
                loading={false}
                doYouHaveData={true}
              >
                <ProductInformationForm />
              </FormCard>
            </Grid2>
          </Grid2>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
