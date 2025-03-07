/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";

export interface IImageUploadController {
  control: Control<Record<string, any>> | any;
  label?: string;
  name: string;
  defaultValue: any;
  error?: boolean;
  helperText?: string;
  rules?: any;
  canDeleteImage?: boolean;
  handleDelete?: (e: any) => void;
  ratioImage?: {
    width: number;
    height: number;
  };
  validationRation?: boolean;
}
