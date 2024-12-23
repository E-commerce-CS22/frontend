/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import { Box, Button, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode } from "react";
import { ErrorIcon, ModalCloseIcon } from "../icons";

export interface WarningConfirmationDialogProps {
  isOpen: boolean;
  confirmButtonColor?:
    | "inherit"
    | "error"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning";
  cancelButtonColor?:
    | "inherit"
    | "error"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning";
  bodyText?: string;
  textColor?: string;
  titleText?: string;
  cancelText?: string;
  confirmText?: string;
  Icon?: ReactNode;
  onConfirm?: () => void;
  onClose: () => void;
  subBodyText?: string;
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
}

export const WarningConfirmationDialog: FC<WarningConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  maxWidth = "xs",
  confirmButtonColor = "error",
  cancelButtonColor = "inherit",
  textColor = "#973149",
  bodyText,
  titleText,
  cancelText,
  confirmText,
  Icon = <ErrorIcon sx={{ fontSize: 40 }} />,
  subBodyText,
}) => {
  const { t } = useTranslation();
  const handleDeleteConfirmation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onConfirm?.();
    onClose();
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);

  return (
    <Dialog
      maxWidth={maxWidth}
      fullWidth
      open={isOpen}
      PaperProps={{
        style: { borderRadius: "15px" },
      }}
      onClose={onClose}
      scroll="paper"
      aria-labelledby="warning-confirmation-dialog"
      aria-describedby="warning-confirmation-dialog-description"
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
        }}
        id="warning-confirmation-dialog"
      >
        <Typography
          color={textColor}
          fontSize={16}
          fontFamily="CoHeadlineTrial-Light,Arab Kufi Regular"
        >
          {titleText || t("Confirmation Required")}
        </Typography>
        <IconButton onClick={onClose} sx={{ height: "30px", width: "30px" }}>
          <ModalCloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="warning-confirmation-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {Icon}
            <Typography
              fontSize={20}
              marginTop={3}
              color={textColor}
              textAlign="center"
            >
              {bodyText || t("Are you sure you want to perform this action")}
            </Typography>
            {subBodyText && (
              <Typography fontSize={20} color={textColor} textAlign="center">
                {subBodyText}
              </Typography>
            )}
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "flex-start",
          padding: "15px",
          boxShadow: "0px 0px 6px #0000001A",
          borderRadius: "0px 0px 15px 15px",
        }}
      >
        <Button
          color={confirmButtonColor}
          onClick={handleDeleteConfirmation}
          data-testid="warningConfirmationDialogConfirmButton"
        >
          {confirmText || t("confirm")}
        </Button>
        <Button
          color={cancelButtonColor}
          onClick={onClose}
          data-testid="warningConfirmationDialogCancelButton"
        >
          {cancelText || t("cancel")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
