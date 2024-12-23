import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const MapMarkerIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "22"}
      height={height ? height : "26.993"}
      viewBox={viewBox ? viewBox : "0 0 22 26.993"}
      {...props}
    >
      <path
        id='icons8-location'
        d='M15,2A11,11,0,0,0,4,13c0,7.234,7.152,10.7,8.048,11.5a9.289,9.289,0,0,1,1.976,3.714,1,1,0,0,0,1.952,0A9.3,9.3,0,0,1,17.952,24.5C18.848,23.7,26,20.234,26,13A11,11,0,0,0,15,2Zm0,14a3,3,0,1,1,3-3A3,3,0,0,1,15,16Z'
        transform='translate(-4 -2)'
        fill={fill ? fill : "#fff"}
      />
    </SvgIcon>
  );
};
