/* eslint-disable @next/next/no-img-element */
import { Delete, ZoomIn } from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { DragAndDropImageIcon } from "../icons";
import { styles } from "./styles";
import { IImageUploadProps } from "./types";
import ZoomUploadedImage from "./ZoomUploadedImage";
import { useTranslation } from "react-i18next";

const ImageUpload: FC<IImageUploadProps> = ({
  // handleImageUploaded,
  image,
  label,
  id,
  ratioImage = {
    width: 150,
    height: 210,
  },
  errorImage,
  helperText,
  validationRation = false,
  canDeleteImage = false,
  onDelete = () => {},
}): React.ReactElement => {
  const { t } = useTranslation();
  const { classes } = styles();
  const [error, setError] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(image);
  const [open, setOpen] = React.useState(false);
  const [isFormatError, serFormatError] = useState(false);
  // const { fetchUploadFile } = useFileUpload();

  useEffect(() => {
    setUploadedImage(image);
  }, [image]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setUploadedImage(null);
    onDelete(null);
  };
  // eslint-disable-next-line max-statements
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const validImagesType = [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/apng",
      "image/bmp",
      "image/gif",
    ];
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = function () {
        const ratio = img.width / img.height;
        if (ratio >= ratioImage.width / ratioImage.height || validationRation) {
          setError(false);
        } else {
          setError(true);
        }
      };
      if (!validImagesType.includes(file.type)) {
        serFormatError(true);
      } else {
        // fetchUploadFile({
        //   files: e?.target?.files,
        //   onComplete: (fileName) => handleImageUploaded(fileName, e),
        // });
        serFormatError(false);
      }
    }
  };

  const isItEmpty = !uploadedImage || uploadedImage?.length === 0;

  return (
    <>
      {label && (
        <Typography
          sx={{
            marginBottom: "8px",
          }}
        >
          {label}
        </Typography>
      )}
      <div className={classes.root}>
        <div
          className={errorImage ? classes.errorsContainer : classes.container}
        >
          <input
            accept="image/*"
            className={classes.input}
            id={`contained-button-file${id}`}
            multiple
            type="file"
            onChange={handleChange}
          />
          <span className={classes.button}></span>
          <label
            htmlFor={`contained-button-file${id}`}
            className={classes.label}
          >
            <React.Fragment>
              <DragAndDropImageIcon
                width={40}
                height={40}
                color={isFormatError ? "error" : "secondary"}
                className={`${classes.imageIcon} `}
              />
              <Tooltip
                title={t("Expected Image Size 150x210 ", {
                  width: ratioImage.width,
                  height: ratioImage.height,
                })}
              >
                <Typography
                  variant="body1"
                  align={"center"}
                  dir={"ltr"}
                  color={"#5B7798"}
                >
                  {t("Drag and Drop , or")} <br />
                  <span className={classes.span}>{t("browse")} </span>
                  {t("your Thumbnails")}
                </Typography>
              </Tooltip>
            </React.Fragment>
            <></>
          </label>
        </div>
        {helperText && (
          <Typography
            variant="caption"
            color="error"
            align="center"
            className={classes.imageIconError}
          >
            {helperText}
          </Typography>
        )}
        {isFormatError && (
          <Typography
            variant="caption"
            color="error"
            align="center"
            position={"absolute"}
          >
            {t("Unsupported file type")}
          </Typography>
        )}
        {!isItEmpty && (
          <div className={classes.containerImg}>
            <img
              className={classes.img}
              src={uploadedImage}
              alt="ImageUpload"
            />
            <div className={classes.icons}>
              {canDeleteImage && (
                <Delete
                  width={30}
                  height={30}
                  color="error"
                  onClick={handleDelete}
                />
              )}
              <ZoomIn width={70} height={70} onClick={handleClickOpen} />
            </div>
          </div>
        )}
        {error && (
          <Typography variant="subtitle1" color="error" position={"absolute"}>
            {t(
              "The size of uploaded image is small, please try to upload another image"
            )}
          </Typography>
        )}
        {open && (
          <ZoomUploadedImage
            open={open}
            handleClose={onClose}
            uploadedImage={uploadedImage}
          />
        )}
      </div>
    </>
  );
};

export default ImageUpload;
