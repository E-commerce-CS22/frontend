import SvgIcon from "@mui/material/SvgIcon";
import React, { FC } from "react";
import { primary } from "../../customization";
import { paths } from "./paths";
import { useStyles } from "./styles";

export type IconProps = {
  icon: keyof typeof paths | undefined;
  width?: number | string;
  height?: number;
  viewBox?: string;
  color?: string;
  transform?: string;
  margin?: string;
};

export const CustomIcon: FC<IconProps> = ({
  icon,
  width = 26,
  height = 26,
  viewBox = "0 0 27 27",
  color = primary,
  transform,
  margin,
}) => {
  const classes = useStyles({
    width,
    height,
    color,
    transform,
    margin,
  } as IconProps);

  return (
    <SvgIcon
      color="inherit"
      width={width}
      height={height}
      viewBox={viewBox}
      className={classes.root}
    >
      {icon && <path d={paths[icon]} />}
    </SvgIcon>
  );
};

// CustomIcon.defaultProps = {
//   icon: "add",
//   width: 26,
//   height: 26,
//   viewBox: "0 0 27 27",
//   color: primary,
//   transform: "rotate(0)",
//   margin: undefined,
// };
