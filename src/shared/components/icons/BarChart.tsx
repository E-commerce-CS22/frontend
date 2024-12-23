import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const BarChart: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='19.433' height='19.433' viewBox='0 0 19.433 19.433' {...props}>
      <path
        id='icons8-bar-chart'
        d='M15.519,4V23.433h5.914V4Zm.845.845h4.225V22.588H16.364ZM2,9.492V23.433H7.914V9.492Zm.845.845H7.07V22.588H2.845Zm5.914,3.8v9.294h5.914V14.139Zm.845.845h4.225v7.6H9.6Z'
        transform='translate(-2 -4)'
      />
    </SvgIcon>
  );
};
