"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { AttributeVariantValueInformationForm } from "./components/AttributeValueInformationForm";
import { useAddNewAttributeVariantValueHook } from "./AddNewAttributeVariantValue.hook";

export default function CreateNewProductAttributeVariantValuePage() {
  const { t } = useTranslation("Store");

  const {
    isLoading,
    // isSuccess,
    // isError,
    // error,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useAddNewAttributeVariantValueHook();
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper
          actions={
            <FormActions
              hasCancel
              newButtonDisabled={isLoading}
              hasFormButton
              isLoading={isLoading}
              formButtonTitle={t("Create")}
              onNavigation={handleCancel}
              onSave={handleClick}
            />
          }
        >
          <Grid container spacing={2}>
            <Grid>
              <FormCard
                title={t("Value Information")}
                loading={false}
                doYouHaveData={true}
              >
                <AttributeVariantValueInformationForm />
              </FormCard>
            </Grid>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
