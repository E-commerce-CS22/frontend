"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid2 } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { useEditAttributeVariantValueHook } from "./editAttributeVariantValue.hook";
import { useSearchParams } from "next/navigation";
import { AttributeVariantValueInformationForm } from "../addValue/components/AttributeValueInformationForm";

export default function EditAttributeVariantValuePage() {
  const { t } = useTranslation("Store");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const attributeId = searchParams.get("attributeId");

  const {
    isLoading,
    // isSuccess,
    // isError,
    isLoadingFetchingAttributeVariantValue,
    defaultValues,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useEditAttributeVariantValueHook({ id, attributeId });
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
              formButtonTitle={t("Update")}
              onNavigation={handleCancel}
              onSave={handleClick}
            />
          }
        >
          <Grid2 container spacing={2}>
            <Grid2>
              <FormCard
                title={t("Value Information")}
                loading={false}
                doYouHaveData={true}
              >
                {!isLoadingFetchingAttributeVariantValue && (
                  <AttributeVariantValueInformationForm
                    defaultValues={defaultValues}
                  />
                )}
              </FormCard>
            </Grid2>
          </Grid2>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
