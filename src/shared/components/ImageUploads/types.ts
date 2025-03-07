import { Theme } from "@mui/material";
import { ChangeEvent } from "react";

export interface IImageUploadProps {
  handleImageUploaded: (fileName: string, e: ChangeEvent<HTMLInputElement>) => void;
  image: any;
  label: string;
  id: any;
  canDeleteImage?: any;
  onDelete?: (e: any) => void;
  ratioImage?: {
    width: number;
    height: number;
  };
  errorImage?: boolean;
  helperText?: string;
  validationRation?: boolean;
}

export interface ZoomImage {
  open: boolean;
  handleClose: () => void;
  uploadedImage: any;
}
export type ImageStyleProps = {
  theme?: Theme;
};
