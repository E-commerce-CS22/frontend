import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
export const MyCart: FC<SvgIconProps> = props => {
  return (
    <SvgIcon width='21.313' height='23.601' viewBox='0 0 21.313 23.601' {...props}>
      <defs>
        <linearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
          <stop offset='0' stopColor='#e2732e' />
          <stop offset='1' stopColor='#df3e26' />
        </linearGradient>
      </defs>
      <path
        id='icons8-shopping-bag'
        d='M13.531,1A4.809,4.809,0,0,0,8.715,5.816V6.78H4.907L4.862,7.2,2.935,24.059l-.06.542H24.188l-.06-.542L22.2,7.2l-.045-.421H18.348V5.816A4.809,4.809,0,0,0,13.531,1Zm0,.963a3.825,3.825,0,0,1,3.853,3.853V6.78H9.678V5.816A3.825,3.825,0,0,1,13.531,1.963ZM5.78,7.743H8.715v1.1a.963.963,0,1,0,.963,0v-1.1h7.706v1.1a.963.963,0,1,0,.963,0v-1.1h2.935L23.1,23.637H3.959Z'
        transform='translate(-2.875 -1)'
        fill={props?.fill ? props?.fill : "url(#linear-gradient)"}
      />
    </SvgIcon>
  );
};
