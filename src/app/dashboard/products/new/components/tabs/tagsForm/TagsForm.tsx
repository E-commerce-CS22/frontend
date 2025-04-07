import { FormCard } from "@/shared/components/Form";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Grid, Autocomplete, TextField } from "@mui/material";
import { FormProvider, Controller } from "react-hook-form";
import { useTagsForm } from "./useTagsForm";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext";

export const TagsForm = () => {
  const { t } = useTranslation("Store");
  const {
    handleClick,
    handleSubmit,
    methods,
    control,
    tags: data,
    handleChangeTags,
  } = useTagsForm();

  const tags = data?.map((item) => item?.name);

  const { tags: contextTags } = useContext(ProductContext);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper padding="0">
          <Grid padding={"0px"}>
            <FormCard title={""} loading={false} doYouHaveData={true}>
              <Grid p={"1rem"} sx={{ minWidth: "400px" }}>
                <Controller
                  name="tags"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      options={tags}
                      multiple
                      {...field}
                      defaultValue={contextTags}
                      onChange={(_, newValues) =>
                        handleChangeTags(newValues, field)
                      }
                      renderInput={(params) => (
                        <TextField {...params} label={t("Tags")} />
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
