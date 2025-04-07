import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormCard } from "@/shared/components/Form";
import { Controller, FormProvider } from "react-hook-form";
import { useCategoriesForm } from "./useCategoryForm";

export const CategoriesForm = () => {
  const { t } = useTranslation("Store");
  const {
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
        <PageWrapper padding="0">
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
