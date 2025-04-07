import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormCard } from "@/shared/components/Form";
import { Controller, FormProvider } from "react-hook-form";
import { useVariantsForm } from "./useVariantForm";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext";

export const VariantsForm = () => {
  const { t } = useTranslation("Store");
  const {
    methods,
    control,
    attributes,
    isLoading,
    selectedAttribute,
    attributeValues,
    handleClick,
    handleSubmit,
    handleChangeAttribute,
    handleChangeVariantValue,
  } = useVariantsForm();

  const { attribute, variantValue } = useContext(ProductContext);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper padding="0">
          <Grid padding={"0px"}>
            <FormCard title={""} loading={false} doYouHaveData={true}>
              <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                <Controller
                  name="variants"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      options={attributes}
                      {...field}
                      defaultValue={attribute || null}
                      onChange={(_, newValue) =>
                        handleChangeAttribute(newValue, field)
                      }
                      renderInput={(params) => (
                        <TextField {...params} label={t("Attributes")} />
                      )}
                      getOptionLabel={(option) => option?.name}
                    />
                  )}
                />
              </Grid>
              {!isLoading && (selectedAttribute || attribute) && (
                <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                  <Controller
                    name="values"
                    control={control}
                    render={({ field }) => (
                      <Autocomplete
                        options={attributeValues}
                        {...field}
                        // multiple
                        defaultValue={variantValue}
                        onChange={(_, newValue) =>
                          handleChangeVariantValue(newValue, field)
                        }
                        renderInput={(params) => (
                          <TextField {...params} label={t("Values")} />
                        )}
                        getOptionLabel={(option) => option?.name}
                      />
                    )}
                  />
                </Grid>
              )}
            </FormCard>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
};
