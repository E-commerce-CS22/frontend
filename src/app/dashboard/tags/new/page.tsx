"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAddNewTagHook } from "./addNweTag.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid2 } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { TagInformationForm } from "./components/TagInformationForm";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");

  const {
    isLoading,
    // isSuccess,
    // isError,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useAddNewTagHook();
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
          <Grid2 container spacing={2}>
            <Grid2>
              <FormCard
                title={t("Category Information")}
                loading={false}
                doYouHaveData={true}
              >
                <TagInformationForm />
              </FormCard>
            </Grid2>
          </Grid2>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
