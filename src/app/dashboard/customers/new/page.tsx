"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAddNewCustomerHook } from "./addNewCustomer.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid2 } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { CustomerInformationForm } from "./components/CustomerInformationForm";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");

  const { methods, handleSubmit, handleClick, handleCancel } =
    useAddNewCustomerHook();
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
                title={t("Customer Information")}
                loading={false}
                doYouHaveData={true}
              >
                <CustomerInformationForm />
              </FormCard>
            </Grid2>
          </Grid2>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
