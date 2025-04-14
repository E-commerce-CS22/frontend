import { useEffect, useState, useContext } from "react";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormCard } from "@/shared/components/Form";
import { Controller, FormProvider } from "react-hook-form";
import { useCategoriesForm } from "./useCategoryForm";
import { ProductContext } from "../../ProductContext";

export const CategoriesForm = () => {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation("Store");
  const {
    handleClick,
    handleSubmit,
    methods,
    control,
    categories,
    handleChangeCategories,
  } = useCategoriesForm();

  const { categories: contextCategories = [] } = useContext(ProductContext);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

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
                  defaultValue={contextCategories}
                  render={({ field }) => (
                    <Autocomplete
                      options={categories || []}
                      multiple
                      value={field.value || []}
                      getOptionLabel={(option) => option?.name || ""}
                      onChange={(_, newValues) => {
                        field.onChange(newValues || []);
                        handleChangeCategories(newValues, field);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label={t("Categories")} />
                      )}
                      isOptionEqualToValue={(option, value) =>
                        option.id === value.id
                      }
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
