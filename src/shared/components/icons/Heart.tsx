import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React, { FC } from "react";

export const Heart: FC<SvgIconProps> = props => {
  return (
    <SvgIcon width='22.614' height='19.818' viewBox='0 0 22.614 19.818' {...props}>
      <defs>
        <linearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
          <stop offset='0' stopColor='#e2732e' />
          <stop offset='1' stopColor='#df3e26' />
        </linearGradient>
      </defs>
      <path
        id='icons8-heart'
        d='M8.391,7A6.4,6.4,0,0,0,2,13.391c0,7.257,8.208,10.839,11,13.166l.307.261.307-.261c2.792-2.328,11-5.909,11-13.166a6.35,6.35,0,0,0-11.307-4.01A6.338,6.338,0,0,0,8.391,7Zm0,.983a5.389,5.389,0,0,1,4.5,2.427l.415.615.415-.615a5.4,5.4,0,0,1,9.909,2.98c0,6.341-7.082,9.623-10.324,12.183-3.242-2.56-10.324-5.842-10.324-12.183A5.4,5.4,0,0,1,8.391,7.983Z'
        transform='translate(-2 -7)'
        fill={props?.fill ? props?.fill : "url(#linear-gradient)"}
      />
    </SvgIcon>
  );
};
