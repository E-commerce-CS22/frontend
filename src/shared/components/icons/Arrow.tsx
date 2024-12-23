import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Arrow: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='10' height='5.47' viewBox='0 0 10 5.47' {...props}>
      <path
        id='icons8-expand-arrow'
        d='M3.221,12.906l-.471.471,5,5,5-5-.471-.471L7.75,17.436Z'
        transform='translate(-2.75 -12.906)'
        fill='#1C2346'
      />
    </SvgIcon>
  );
};
