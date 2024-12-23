import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const ErrorIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "50"}
      height={height ? height : "43.559"}
      viewBox={viewBox ? viewBox : "0 0 50 43.559"}
      {...props}
    >
      <path
        id='icons8-error_4_'
        data-name='icons8-error (4)'
        d='M24.835,3.437a.99.99,0,0,0-.718.5L.125,45.484A1,1,0,0,0,1,46.984H48.982a1,1,0,0,0,.875-1.5L25.865,3.937A1,1,0,0,0,24.835,3.437Zm.156,3L47.232,44.985H2.749ZM23.835,18.9a.316.316,0,0,0-.344.344V33.708a.341.341,0,0,0,.344.375h2.312a.341.341,0,0,0,.344-.375V19.244a.316.316,0,0,0-.344-.344Zm-.219,18.056a.333.333,0,0,0-.187.344v2.624a.316.316,0,0,0,.344.344h2.437a.316.316,0,0,0,.344-.344V37.3a.316.316,0,0,0-.344-.344H23.772A.522.522,0,0,0,23.616,36.956Z'
        transform='translate(0.009 -3.425)'
        fill={fill ? fill : "#973149"}
      />
    </SvgIcon>
  );
};
