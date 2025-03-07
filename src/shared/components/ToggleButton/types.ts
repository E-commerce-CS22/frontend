import { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { FormGroupProps } from "@mui/material/FormGroup";
import { SwitchProps } from "@mui/material/Switch";
import { ReactNode } from "react";

export interface ToggleButtonProps extends SwitchProps {
  formGroupProps?: Partial<FormGroupProps>;
  formControlLabelProps?: Partial<FormControlLabelProps>;
  children?: ReactNode;
}
