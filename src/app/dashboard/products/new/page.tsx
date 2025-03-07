"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAddNewProductHook } from "./addNewProduct.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");
  const { methods, handleSubmit, handleClick, handleCancel } =
    useAddNewProductHook();
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper
          actions={
            <FormActions
              hasCancel
              // newButtonDisabled={isLoading}
              hasFormButton
              // isLoading={isLoading}
              formButtonTitle={t("Create")}
              onNavigation={handleCancel}
            />
          }
        >
          <div></div>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
