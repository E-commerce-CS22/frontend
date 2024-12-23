import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const SearchIcon: FC<SvgIconProps> = ({ width, height, fill, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "18"}
      height={height ? height : "18.42"}
      viewBox={viewBox ? viewBox : "0 0 18 18.42"}
      {...props}
    >
      <path
        id='icons8-search'
        d='M11.132,3A7.132,7.132,0,1,0,15.3,15.913L20.82,21.42,22,20.24l-5.454-5.467A7.131,7.131,0,0,0,11.132,3Zm0,.839a6.293,6.293,0,1,1-6.293,6.293A6.286,6.286,0,0,1,11.132,3.839Z'
        transform='translate(-4 -3)'
        fill={fill ? fill : "#5b7798"}
      />
    </SvgIcon>
  );
};
