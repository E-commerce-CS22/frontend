import { SvgIconProps } from "@mui/material";

export interface IconProps extends SvgIconProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
  text?: string;
  className?;
}

export interface IProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
  text?: string;
  color?: string;
  className?;
}
export interface ButtonProps {
  fill?: string;
}
