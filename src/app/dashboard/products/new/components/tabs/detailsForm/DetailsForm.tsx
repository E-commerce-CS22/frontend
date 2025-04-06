import { FormActions } from "@/shared/components/FormActions";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Grid, styled, TextareaAutosize, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDetailsForm } from "./useDetailsForm.hook";
import { FormCard } from "@/shared/components/Form";
import { FormProvider } from "react-hook-form";
import { getRequiredValidation } from "@/shared/utils";
import { primary } from "@/shared/customization";

export const DetailsForm = (props) => {
  const { t } = useTranslation("Store");
  const {
    isLoading = false,
    handleCancel,
    handleClick,
    handleSubmit,
    methods,
    errors,
    register,
  } = useDetailsForm();

  const { defaultValues } = props;

  const StyledTextarea = styled(TextareaAutosize)(({}) => ({}));

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
                  defaultValue={defaultValues?.name}
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
                  })}
                  defaultValue={defaultValues?.price}
                />
              </Grid>
              <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                <StyledTextarea
                  id="description"
                  aria-label="Description"
                  minRows={3}
                  placeholder={t("Description")}
                  {...register("description", {
                    required: getRequiredValidation(t, true),
                  })}
                  defaultValue={defaultValues?.description}
                  sx={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    fontFamily: "CoHeadlineTrial-Light",
                    outline: "none",
                    "&:focus": {
                      border: `2px solid ${primary}`,
                    },
                  }}
                />
                {errors?.description?.message && (
                  <div style={{ color: "red" }}>
                    {t(`${errors.description.message}`)}
                  </div>
                )}
              </Grid>
            </FormCard>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
};
