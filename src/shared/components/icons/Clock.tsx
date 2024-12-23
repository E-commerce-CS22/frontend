import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const ClockIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='25.695' height='25.695' viewBox='0 0 25.695 25.695' {...props}>
      <path
        id='icons8-clock'
        d='M15.847,3A12.847,12.847,0,1,0,28.695,15.847,12.848,12.848,0,0,0,15.847,3Zm1.071,13.918H8.348a1.065,1.065,0,0,1-1.065-1.065v-.012a1.064,1.064,0,0,1,1.065-1.064h6.429V6.206a1.065,1.065,0,0,1,1.065-1.065h.012a1.064,1.064,0,0,1,1.064,1.065Z'
        transform='translate(-3 -3)'
        fill='#1C2346'
      />
    </SvgIcon>
  );
};
