"use client";
// import { FormProvider } from "react-hook-form";
// import { useTranslation } from "react-i18next";
import { useAddNewProductHook } from "./addNewProduct.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
// import { FormActions } from "@/shared/components/FormActions";
// import { Grid } from "@mui/material";
// import { FormCard } from "@/shared/components/Form";
// import { ProductInformationForm } from "./components/ProductInformationForm";
import { CustomTabs } from "@/shared/components/Tabs";
import { useTabs } from "./components/tabs/useTabs";

export default function CreateNewProductPage() {
  // const { t } = useTranslation("Store");
  const tabs = useTabs();

  const {
    // isLoading,
    // // isSuccess,
    // // isError,
    // // error,
    // methods,
    // handleSubmit,
    // handleClick,
    // handleCancel,
  } = useAddNewProductHook();
  return (
    <PageWrapper>
      <CustomTabs items={tabs} />
    </PageWrapper>

    // <FormProvider {...methods}>
    //   <form onSubmit={handleSubmit(handleClick)}>
    //     <PageWrapper
    //       actions={
    //         <FormActions
    //           hasCancel
    //           newButtonDisabled={isLoading}
    //           hasFormButton
    //           isLoading={isLoading}
    //           formButtonTitle={t("Create")}
    //           onNavigation={handleCancel}
    //           onSave={handleClick}
    //         />
    //       }
    //     >
    //       <Grid container spacing={2}>
    //         <Grid>
    //           <FormCard
    //             title={t("Product Information")}
    //             loading={false}
    //             doYouHaveData={true}
    //           >
    //             <ProductInformationForm />
    //           </FormCard>
    //         </Grid>
    //       </Grid>
    //     </PageWrapper>
    //   </form>
    // </FormProvider>
  );
}
