import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Facebook: FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      id='icons8-facebook_1_'
      xmlns='http://www.w3.org/2000/svg'
      width='27.423'
      height='27.423'
      viewBox='0 0 27.423 27.423'
      {...props}
    >
      <defs>
        <linearGradient id='linear-gradient' x1='0.15' y1='0.15' x2='0.915' y2='0.915' gradientUnits='objectBoundingBox'>
          <stop offset='0' stopColor='#2aa4f4' />
          <stop offset='1' stopColor='#007ad9' />
        </linearGradient>
      </defs>
      <path
        id='Path_2301'
        d='M17.711,4A13.711,13.711,0,1,0,31.423,17.711,13.711,13.711,0,0,0,17.711,4Z'
        transform='translate(-4 -4)'
        fill='url(#linear-gradient)'
      />
      <path
        id='Path_2302'
        d='M23.359,23.928h3.549l.557-3.6H23.359v-1.97c0-1.5.49-2.825,1.89-2.825H27.5V12.382a19.129,19.129,0,0,0-2.812-.17c-3.3,0-5.235,1.743-5.235,5.714v2.4H16.06v3.6h3.392v9.908a12.474,12.474,0,0,0,3.907.029Z'
        transform='translate(-7.792 -6.582)'
        fill='#fff'
      />
    </SvgIcon>
  );
};
