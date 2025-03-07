import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import React, { FC } from "react";
import { styles } from "./styles";
import { ZoomImage } from "./types";

const ZoomUploadedImage: FC<ZoomImage> = ({ open, handleClose, uploadedImage }) => {
  const { classes } = styles();
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
      <DialogContent className={classes.content}>
        <img src={uploadedImage} alt='ZoomUploadedImage' width={400} height={400} />
        <IconButton size='small' color='default' onClick={handleClose} className={classes.zoomIcon}>
          <Close />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

export default ZoomUploadedImage;
