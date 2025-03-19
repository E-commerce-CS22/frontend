"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid2 } from "@mui/material";
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
                {!isLoadingFetchingCategory && (
                  <CategoryInformationForm defaultValues={defaultValues} />
                )}
              </FormCard>
            </Grid2>
          </Grid2>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
