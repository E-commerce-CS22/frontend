"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid2 } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { AttributeInformationForm } from "../new/components/AttributeInformationForm";
import { useEditAttributeHook } from "./editAttribute.hook";
import { useSearchParams } from "next/navigation";

export default function EditAttributePage() {
  const { t } = useTranslation("Store");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    isLoading,
    // isSuccess,
    // isError,
    isLoadingFetchingAttribute,
    defaultValues,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useEditAttributeHook({ id });
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
                title={t("Attribute Information")}
                loading={false}
                doYouHaveData={true}
              >
                {!isLoadingFetchingAttribute && (
                  <AttributeInformationForm defaultValues={defaultValues} />
                )}
              </FormCard>
            </Grid2>
          </Grid2>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
