/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { TagInformationForm } from "../../new/components/TagInformationForm";
import { useEditNewTagHook } from "./editTag.hook";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function EditTagPage() {
  const { t } = useTranslation("Store");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    isLoading,
    isSuccess,
    isError,
    isLoadingFetchingTag,
    defaultValues,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useEditNewTagHook({ id });

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
                title={t("Tag Information")}
                loading={false}
                doYouHaveData={true}
              >
                {!isLoadingFetchingTag && (
                  <TagInformationForm defaultValues={defaultValues} />
                )}
              </FormCard>
            </Grid>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
