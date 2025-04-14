"use client";
import { useEffect, useState, useContext } from "react";
import { FormCard } from "@/shared/components/Form";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Grid, Autocomplete, TextField } from "@mui/material";
import { FormProvider, Controller } from "react-hook-form";
import { useTagsForm } from "./useTagsForm";
import { useTranslation } from "react-i18next";
import { ProductContext } from "../../ProductContext";

export const TagsForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation("Store");
  const {
    handleClick,
    handleSubmit,
    methods,
    control,
    tags,
    handleChangeTags,
  } = useTagsForm();

  const { tags: contextTags = [] } = useContext(ProductContext);

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
                  name="tags"
                  control={control}
                  defaultValue={contextTags}
                  render={({ field }) => (
                    <Autocomplete
                      options={tags || []}
                      multiple
                      value={field.value || []}
                      getOptionLabel={(option) => option?.name || ""}
                      onChange={(_, newValues) => {
                        field.onChange(newValues || []);
                        handleChangeTags(newValues, field);
                      }}
                      isOptionEqualToValue={(option, value) =>
                        option.id === value.id
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
