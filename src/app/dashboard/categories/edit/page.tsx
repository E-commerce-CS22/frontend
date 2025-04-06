"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { CategoryInformationForm } from "../new/components/CategoryInformationForm";
import { useEditCategoryHook } from "./editCategory.hook";
import { useSearchParams } from "next/navigation";

export default function EditTagPage() {
  const { t } = useTranslation("Store");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    isLoading,
    // isSuccess,
    // isError,
    isLoadingFetchingCategory,
    defaultValues,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useEditCategoryHook({ id });
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
                title={t("Category Information")}
                loading={false}
                doYouHaveData={true}
              >
                {!isLoadingFetchingCategory && (
                  <CategoryInformationForm defaultValues={defaultValues} />
                )}
              </FormCard>
            </Grid>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
