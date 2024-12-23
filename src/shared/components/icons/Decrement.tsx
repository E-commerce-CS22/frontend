import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const DecrementIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' {...props}>
      <path
        id='icons8-minus'
        d='M11,3a8,8,0,1,0,8,8A8,8,0,0,0,11,3Zm4,8.667H7a.667.667,0,1,1,0-1.333h8a.667.667,0,1,1,0,1.333Z'
        transform='translate(-3 -3)'
        fill='#1C2346'
      />
    </SvgIcon>
  );
};
