import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Filter: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='24' height='22' viewBox='0 0 24 22' {...props}>
      <path
        id='icons8-filter_3_'
        d='M4,4A1,1,0,1,0,4,6h.8L12,15h6l7.2-9H26a1,1,0,1,0,0-2Zm8,13v9l6-2V17Z'
        transform='translate(-3 -4)'
        fill='inherit'
      />
    </SvgIcon>
  );
};
