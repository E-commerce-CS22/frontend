/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAddNewTagHook } from "./addNweTag.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { TagInformationForm } from "./components/TagInformationForm";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");

  const {
    isLoading,
    isSuccess,
    isError,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useAddNewTagHook();

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
              formButtonTitle={t("Create")}
              onNavigation={handleCancel}
              onSave={handleClick}
            />
          }
        >
          <Grid container spacing={2}>
            <Grid>
              <FormCard
                title={t("Category Information")}
                loading={false}
                doYouHaveData={true}
              >
                <TagInformationForm />
              </FormCard>
            </Grid>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
