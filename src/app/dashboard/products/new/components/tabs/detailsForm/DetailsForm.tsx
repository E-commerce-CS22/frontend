import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Grid, TextareaAutosize, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDetailsForm } from "./useDetailsForm.hook";
import { FormCard } from "@/shared/components/Form";
import { Controller, FormProvider } from "react-hook-form";
import { getRequiredValidation } from "@/shared/utils";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext";

export const DetailsForm = () => {
  const { t } = useTranslation("Store");
  const { handleClick, handleSubmit, methods, errors, register } =
    useDetailsForm();

  const {
    name: productName,
    description,
    price,
    setName,
    setPrice,
    setDescription,
  } = useContext(ProductContext);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper padding="0">
          <Grid padding={"0px"}>
            <FormCard title={""} loading={false} doYouHaveData={true}>
              <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                <TextField
                  label={t("Product name")}
                  placeholder={t("Product name")}
                  fullWidth
                  error={Boolean(errors?.name?.message)}
                  helperText={
                    errors?.name?.message ? t(`${errors.name.message}`) : ""
                  }
                  {...register("name", {
                    required: getRequiredValidation(t, true),
                  })}
                  defaultValue={productName}
                  onChange={(e) => {
                    if (setName) setName(e.target.value);
                  }}
                />
              </Grid>

              <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                <TextField
                  label={t("Price")}
                  placeholder={t("Price")}
                  fullWidth
                  error={Boolean(errors?.price?.message)}
                  helperText={
                    errors?.price?.message ? t(`${errors.price.message}`) : ""
                  }
                  {...register("price", {
                    required: getRequiredValidation(t, true),
                    validate: (value) => {
                      const isNumber =
                        !isNaN(parseFloat(value)) && isFinite(value);
                      return isNumber || t("Price must be a number");
                    },
                  })}
                  defaultValue={price}
                  onChange={(e) => {
                    if (setPrice) setPrice(e.target.value);
                  }}
                />
              </Grid>
              <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                <Controller
                  name="description"
                  control={methods.control}
                  rules={{ required: getRequiredValidation(t, true) }}
                  render={({ field, fieldState }) => (
                    <>
                      <TextareaAutosize
                        minRows={3}
                        aria-label="description"
                        placeholder={t("Description")}
                        onChange={(e) => {
                          field.onChange(e);
                          setDescription?.(e.target.value);
                        }}
                        defaultValue={description}
                        style={{
                          width: "100%",
                          padding: "10px",
                          borderRadius: "5px",
                          fontFamily: "CoHeadlineTrial-Light",
                          outline: "none",
                          border: fieldState.invalid
                            ? "1px solid red"
                            : "1px solid #ccc",
                        }}
                      />
                      {fieldState.error && (
                        <div style={{ color: "red" }}>
                          {t(fieldState.error.message ?? "")}
                        </div>
                      )}
                    </>
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
