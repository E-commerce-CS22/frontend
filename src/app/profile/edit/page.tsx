"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { ProfileInformationForm } from "./components/ProfileInformationForm";
import { useEditProfileHook } from "./EditProfile.hook";

export default function EditTagPage() {
  const { t } = useTranslation("Store");

  const {
    isLoading,
    // isSuccess,
    // isError,
    isLoadingFetchingProfileData,
    defaultValues,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useEditProfileHook();
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
                title={t("My profile data")}
                loading={false}
                doYouHaveData={true}
              >
                {!isLoadingFetchingProfileData && (
                  <ProfileInformationForm defaultValues={defaultValues} />
                )}
              </FormCard>
            </Grid>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
