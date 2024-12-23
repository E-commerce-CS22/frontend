import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const EyeIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='20px'
      height='64px'
      viewBox='0 0 64 64'
      enableBackground='new 0 0 64 64'
      {...props}
    >
      <path
        fill='#000000'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M1,32c0,0,11,15,31,15s31-15,31-15S52,17,32,17S1,32,1,32z'
      />
      <circle fill='#000000' stroke='#fff' strokeWidth='2' strokeMiterlimit='10' cx='32' cy='32' r='7' />
    </SvgIcon>
  );
};
