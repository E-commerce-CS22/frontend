import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const MarkerIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "13.925"}
      height={height ? height : "17.085"}
      viewBox={viewBox ? viewBox : "0 0 13.925 17.085"}
      {...props}
    >
      <path
        id='icons8-marker_1_'
        data-name='icons8-marker (1)'
        d='M10.962,2A6.963,6.963,0,0,0,4,8.962c0,4.579,4.527,6.771,5.094,7.281a5.88,5.88,0,0,1,1.251,2.351.634.634,0,0,0,1.236,0,5.884,5.884,0,0,1,1.251-2.351c.567-.51,5.094-2.7,5.094-7.281A6.963,6.963,0,0,0,10.962,2Zm0,8.861a1.9,1.9,0,1,1,1.9-1.9A1.9,1.9,0,0,1,10.962,10.861Z'
        transform='translate(-4 -2)'
        fill={fill ? fill : "#fff"}
      />
    </SvgIcon>
  );
};
