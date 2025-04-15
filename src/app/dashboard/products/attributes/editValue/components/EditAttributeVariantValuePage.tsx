/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { useEditAttributeVariantValueHook } from "./editAttributeVariantValue.hook";
import { useSearchParams } from "next/navigation";
import { AttributeVariantValueInformationForm } from "../../addValue/components/AttributeValueInformationForm";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function EditAttributeVariantValuePage() {
  const { t } = useTranslation("Store");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const attributeId = searchParams.get("attributeId");

  const {
    isLoading,
    isSuccess,
    isError,
    isLoadingFetchingAttributeVariantValue,
    defaultValues,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useEditAttributeVariantValueHook({ id, attributeId });

  useEffect(() => {
    if (isLoading)
      toast.loading(t("Sending data..."), { toastId: "loadProfile" });
    else toast.dismiss("loadProfile");

    if (isError) toast.error(t("Failed to send data"));
    if (isSuccess) toast.success(t("Sent successfully"));
  }, [isLoading, isSuccess, isError]);
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
          <Grid container spacing={2}>
            <Grid>
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
            </Grid>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
