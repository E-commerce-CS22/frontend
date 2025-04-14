import { useContext, useEffect, useState } from "react";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import {
  Autocomplete,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormCard } from "@/shared/components/Form";
import { Controller, FormProvider } from "react-hook-form";
import { useVariantsForm } from "./useVariantForm";
import { ProductContext } from "../../ProductContext";
import { primary } from "@/shared/customization";

const VariantsForm = () => {
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

  const { attribute = null, variantValue = null } = useContext(ProductContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
                  defaultValue={attribute}
                  render={({ field }) => (
                    <Autocomplete
                      options={attributes || []}
                      value={field.value || null}
                      onChange={(_, newValue) => {
                        field.onChange(newValue);
                        handleChangeAttribute(newValue, field);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label={t("Attributes")} />
                      )}
                      getOptionLabel={(option) => option?.name || ""}
                      isOptionEqualToValue={(option, value) =>
                        option?.id === value?.id
                      }
                    />
                  )}
                />
              </Grid>

              {!isLoading && (selectedAttribute || attribute) && (
                <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                  <Controller
                    name="values"
                    control={control}
                    defaultValue={variantValue}
                    render={({ field }) => (
                      <Autocomplete
                        options={attributeValues || []}
                        value={field.value || null}
                        onChange={(_, newValue) => {
                          field.onChange(newValue);
                          handleChangeVariantValue(newValue, field);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} label={t("Values")} />
                        )}
                        getOptionLabel={(option) => option?.name || ""}
                        isOptionEqualToValue={(option, value) =>
                          option?.id === value?.id
                        }
                      />
                    )}
                  />
                </Grid>
              )}

              <Typography m={"0.5rem 1rem"}>
                {t("Create new attribute")}
                <Link style={{ color: primary }} href={"attributes/new"}>
                  <Button variant="contained">{t("Create Now")}</Button>
                </Link>
              </Typography>
            </FormCard>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
};

export default VariantsForm;
