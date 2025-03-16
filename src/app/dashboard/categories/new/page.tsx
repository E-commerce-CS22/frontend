"use client";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAddNewCategoryHook } from "./addNewCategory.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { FormActions } from "@/shared/components/FormActions";
import { Grid2 } from "@mui/material";
import { FormCard } from "@/shared/components/Form";
import { CategoryInformationForm } from "./components/CategoryInformationForm";

export default function CreateNewProductPage() {
  const { t } = useTranslation("Store");

  const {
    isLoading,
    // isError,
    // isSuccess,
    methods,
    handleSubmit,
    handleClick,
    handleCancel,
  } = useAddNewCategoryHook();

  // const toastId = useRef<string | number | null>(null);

  // useEffect(() => {
  //   if (isLoading) {
  //     toastId.current = toast.info(
  //       <Box display="flex" alignItems="center">
  //         <CircularProgress size={24} sx={{ marginRight: "8px" }} />
  //         <Typography>{t("Submitting, please wait...")}</Typography>
  //       </Box>,
  //       { autoClose: false, closeOnClick: false, closeButton: false }
  //     );
  //   } else if (isError) {
  //     toast.dismiss(toastId.current!);
  //     toast.error(t("Error submitting the data"));
  //   } else if (isSuccess) {
  //     toast.dismiss(toastId.current!);
  //     toast.success(t("Successfully submitted the data"));
  //   }
  // }, [isLoading, isError, isSuccess]);

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
              onSave={handleClick}
              onNavigation={handleCancel}
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
                <CategoryInformationForm />
              </FormCard>
            </Grid2>
          </Grid2>
        </PageWrapper>
      </form>
    </FormProvider>
  );
}
