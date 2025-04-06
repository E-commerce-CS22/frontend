import { FormActions } from "@/shared/components/FormActions";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormCard } from "@/shared/components/Form";
import { Controller, FormProvider } from "react-hook-form";
import { useCategoriesForm } from "./useCategoryForm";

export const CategoriesForm = () => {
  const { t } = useTranslation("Store");
  const {
    isLoading = false,
    handleCancel,
    handleClick,
    handleSubmit,
    methods,
    control,
    categories: data,
  } = useCategoriesForm();

  const categories = data?.map((item) => item?.name);

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
              formButtonTitle={t("Save")}
              onNavigation={handleCancel}
              onSave={handleClick}
            />
          }
          padding={"0px"}
        >
          <Grid padding={"0px"}>
            <FormCard title={""} loading={false} doYouHaveData={true}>
              <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                <Controller
                  name="categories"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      options={categories}
                      multiple
                      {...field}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} label={t("Categories")} />
                      )}
                    />
                  )}
                />
              </Grid>
            </FormCard>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
};
