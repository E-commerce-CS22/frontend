/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ButtonProps,
  DialogContentProps,
  DialogProps,
  SxProps,
  Theme,
} from "@mui/material";
import { ReactNode } from "react";

export interface CustomDialogProps extends Omit<DialogProps, "onSubmit"> {
  submitTitle?: string;
  resetTitle?: string;
  closeTitle?: string;
  headerStyles?: SxProps<Theme>;
  footerComponent?: ReactNode;
  open: boolean;
  title?: string;
  scrollType?: DialogProps["scroll"];
  button?: ReactNode;
  hasClose?: boolean;
  disableSubmit?: boolean;
  DialogContentProps?: Partial<DialogContentProps>;
  SubmitButtonProps?: Partial<ButtonProps>;
  onConfirm?: (data: any) => void;
  onReset?: () => void;
  onCloseModal: () => void;
  titleColor?: string;
}
