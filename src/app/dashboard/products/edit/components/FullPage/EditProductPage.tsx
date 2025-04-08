"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { ProductInformationForm } from "../../../new/components/ProductInformationForm";
import { useEditProductHook } from "./editProduct.hook";
import { useSearchParams } from "next/navigation";

export default function EditProductPage() {
  const { t } = useTranslation("Store");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    isLoading,
    // isSuccess,
    // isError,
    isLoadingFetchingProduct,
    defaultValues,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useEditProductHook({ id });
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
                {!isLoadingFetchingProduct && (
                  <ProductInformationForm defaultValues={defaultValues} />
                )}
              </FormCard>
            </Grid>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
