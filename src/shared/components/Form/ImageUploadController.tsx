import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { ImageUpload } from "../ImageUploads";
import { IImageUploadController } from "./types";
import { useTranslation } from "react-i18next";

export const ImageUploadController: FC<IImageUploadController> = ({
  control,
  name,
  defaultValue,
  rules,
  label,
  ratioImage = {
    width: 320,
    height: 450,
  },
  error,
  helperText,
  validationRation = false,
  canDeleteImage = false,
  handleDelete = () => {},
}) => {
  const { t } = useTranslation();
  const defaultRules = {
    required: { value: false, message: t("required", "required") },
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules || defaultRules}
      defaultValue={defaultValue}
      render={({ field: { value, onChange }, ...props }) => {
        return (
          <ImageUpload
            {...props}
            label={label || ""}
            id={`${name}-id`}
            errorImage={error}
            helperText={helperText}
            ratioImage={ratioImage}
            validationRation={validationRation}
            handleImageUploaded={(fileName) => {
              onChange(fileName);
            }}
            image={value}
            canDeleteImage={canDeleteImage}
            onDelete={handleDelete}
          />
        );
      }}
    />
  );
};
