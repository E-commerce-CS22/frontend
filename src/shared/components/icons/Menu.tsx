import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const MenuIcon: FC<SvgIconProps> = ({ width, height, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "21.193"}
      height={height ? height : "15.5"}
      viewBox={viewBox ? viewBox : "0 0 21.193 15.5"}
      {...props}
    >
      <g id='Group_5511' data-name='Group 5511' transform='translate(-255 -26)'>
        <rect
          id='Rectangle_3327'
          width='14'
          height='1.5'
          rx='0.75'
          transform='translate(255 33)'
          fill={props?.fill ? props?.fill : "#1C2346"}
        />
        <rect
          id='Rectangle_3328'
          width='21.193'
          height='1.5'
          rx='0.75'
          transform='translate(255 26)'
          fill={props?.fill ? props?.fill : "#1C2346"}
        />
        <rect
          id='Rectangle_3330'
          width='18.193'
          height='1.5'
          rx='0.75'
          transform='translate(255 40)'
          fill={props?.fill ? props?.fill : "#1C2346"}
        />
      </g>
    </SvgIcon>
  );
};
