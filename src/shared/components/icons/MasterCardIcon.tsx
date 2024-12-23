/* eslint-disable react/no-unknown-property */
import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const MasterCardIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='56.652' height='38.626' viewBox='0 0 56.652 38.626' {...props}>
      <defs>
        <linearGradient id='linear-gradient' x1='0.418' y1='45.202' x2='0.608' y2='46.198' gradientUnits='objectBoundingBox'>
          <stop offset='0' stop-color='#00b3ee' />
          <stop offset='1' stop-color='#0082d8' />
        </linearGradient>
        <linearGradient id='linear-gradient-2' y1='0.5' x2='1' y2='0.5' gradientUnits='objectBoundingBox'>
          <stop offset='0' stop-color='#fede00' />
          <stop offset='1' stop-color='#ffd000' />
        </linearGradient>
      </defs>
      <g id='Group_5809' data-name='Group 5809' transform='translate(-706.674 -179)'>
        <path
          id='Path_3430'
          data-name='Path 3430'
          d='M54.95,9H5.7A3.7,3.7,0,0,0,2,12.7V43.925a3.7,3.7,0,0,0,3.7,3.7H54.95a3.7,3.7,0,0,0,3.7-3.7V12.7A3.7,3.7,0,0,0,54.95,9Z'
          transform='translate(704.674 170)'
          fill='url(#linear-gradient)'
        />
        <ellipse
          id='Ellipse_1125'
          data-name='Ellipse 1125'
          cx='12.944'
          cy='12.944'
          rx='12.944'
          ry='12.944'
          transform='translate(713.111 185.437)'
          fill='#cf1928'
        />
        <ellipse
          id='Ellipse_1126'
          data-name='Ellipse 1126'
          cx='12.944'
          cy='12.944'
          rx='12.944'
          ry='12.944'
          transform='translate(729.85 185.437)'
          fill='url(#linear-gradient-2)'
        />
        <path
          id='Path_3431'
          data-name='Path 3431'
          d='M20,26.256a12.91,12.91,0,0,0,4.575,9.865,12.924,12.924,0,0,0,0-19.73A12.91,12.91,0,0,0,20,26.256Z'
          transform='translate(709.85 172.125)'
          fill='#d97218'
        />
      </g>
    </SvgIcon>
  );
};
