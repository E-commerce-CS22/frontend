/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-lines */
import { Button, Divider, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCustomDialogStyles } from "./CustomDialog.styles";
import { CustomDialogProps } from "./CustomDialog.types";
import { ModalCloseIcon } from "../icons";
import { useTranslation } from "react-i18next";

const CustomDialog: FC<CustomDialogProps> = (props) => {
  const {
    submitTitle = "Apply",
    headerStyles = {},
    resetTitle = "Reset",
    scrollType = "paper",
    maxWidth = "md",
    title = "",
    open,
    button,
    footerComponent = undefined,
    children,
    disableSubmit = false,
    SubmitButtonProps = {},
    DialogContentProps = {},
    onConfirm,
    onReset,
    onCloseModal,
    titleColor,
  } = props;
  // const isMobile = useIsMobileView();

  const { classes } = useCustomDialogStyles();

  const handleClose = () => {
    onCloseModal && onCloseModal();
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const { handleSubmit, reset } = useForm<FormData>();

  const handleFormReset = () => {
    reset();
  };

  const { t } = useTranslation("Store");
  return (
    <React.Fragment>
      {button}
      <Dialog
        maxWidth={maxWidth}
        fullWidth
        // open={open}
        // fullScreen={isMobile}
        title=""
        PaperProps={{
          style: { borderRadius: "15px" },
        }}
        onClose={handleClose}
        scroll={scrollType}
        {...props}
      >
        <DialogTitle className={classes.header} title="">
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "CoHeadlineTrial-Light, Arab Kufi Medium",
              color: { titleColor },
              ...headerStyles,
            }}
          >
            {title}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{ height: "30px", width: "30px" }}
          >
            <ModalCloseIcon />
          </IconButton>
        </DialogTitle>
        {scrollType === "paper" && <Divider />}
        <DialogContent
          title=""
          ref={descriptionElementRef}
          tabIndex={-1}
          {...DialogContentProps}
          sx={{
            minHeight: "20vh",
            maxHeight: "40vh",
            ...(DialogContentProps?.sx || {}),
          }}
        >
          <form
            id="custom-dialog-form"
            onSubmit={handleSubmit(onConfirm ? onConfirm : () => {})}
          >
            {children}
          </form>
        </DialogContent>
        {(onConfirm || onReset || footerComponent) && (
          <DialogActions className={classes.actions} title="">
            {onConfirm && (
              <Button
                type="submit"
                form="custom-dialog-form"
                disabled={disableSubmit}
                {...(SubmitButtonProps || {})}
              >
                {t(submitTitle)}
              </Button>
            )}
            {onReset && (
              <Button variant="outlined" onClick={handleFormReset}>
                {t(resetTitle)}
              </Button>
            )}
            {footerComponent}
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
};

export default CustomDialog;
