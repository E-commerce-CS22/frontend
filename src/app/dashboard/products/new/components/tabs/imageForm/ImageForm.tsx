import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Grid, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useImageForm } from "./useImageForm.hook";
import { FormCard } from "@/shared/components/Form";
import { FormProvider } from "react-hook-form";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import Image from "next/image";
import { primary } from "@/shared/customization";
import { AddPhotoAlternate } from "@mui/icons-material";

export const ImageForm = () => {
  const { t } = useTranslation("Store");
  const {
    handleClick,
    handleSubmit,
    methods,
    imagePreview,
    handleImageUpload,
  } = useImageForm();

  const {
    // name: productName,
    // description,
    // price,
    // setName,
    // setPrice,
    // setDescription,
  } = useContext(ProductContext);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleClick)}>
        <PageWrapper padding="0">
          <Grid padding={"0px"}>
            <FormCard title={""} loading={false} doYouHaveData={true}>
              <Grid
                p={"1rem"}
                sx={{
                  margin: "0 1rem",
                  minWidth: "400px",
                  border: `1px solid ${primary}`,
                  borderRadius: "4px",
                }}
              >
                <Typography variant="h6">{t("Category Image")}</Typography>
                <label htmlFor="image-upload" style={{ width: "100%" }}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="image-upload"
                      type="file"
                      onChange={handleImageUpload}
                    />
                    <AddPhotoAlternate />
                  </IconButton>
                </label>
                {imagePreview && (
                  <div style={{ marginTop: "1rem" }}>
                    <Image
                      src={imagePreview}
                      alt="Selected"
                      width={400}
                      height={400}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                )}
                {/* {defaultValues?.image && !imagePreview && (
                  <div style={{ marginTop: "1rem" }}>
                    <Image
                      src={defaultValues?.image}
                      alt="Selected"
                      width={400}
                      height={400}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                )} */}
              </Grid>
            </FormCard>
          </Grid>
        </PageWrapper>
      </form>
    </FormProvider>
  );
};
