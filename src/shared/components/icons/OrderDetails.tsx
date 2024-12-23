import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const OrderDetailsIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50' {...props}>
      <path
        d='M 4 4 L 4 46 L 35.414062 46 L 46 35.414062 L 46 35 L 46 4 L 4 4 z M 6 6 L 44 6 L 44 34 L 34 34 L 34 44 L 6 44 L 6 6 z M 14 15 L 14 17 L 37 17 L 37 15 L 14 15 z M 14 21 L 14 23 L 37 23 L 37 21 L 14 21 z M 14 27 L 14 29 L 37 29 L 37 27 L 14 27 z M 36 36 L 42.585938 36 L 36 42.585938 L 36 36 z'
        fill={props?.fill ? props?.fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
