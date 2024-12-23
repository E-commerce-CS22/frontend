import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const PreviousIcon: FC<SvgIconProps> = ({ width, height, fill, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox={viewBox ? viewBox : "0 0 24 24"}
      {...props}
    >
      <path
        id='icons8-next-page'
        d='M15,3A12,12,0,1,0,27,15,12,12,0,0,0,15,3Zm4.707,12.707-6,6a1,1,0,0,1-1.414-1.414L17.586,15,12.293,9.707a1,1,0,0,1,1.414-1.414l6,6A1,1,0,0,1,19.707,15.707Z'
        transform='scale(-1, 1) translate(-27, -3)'
        fill={fill ? fill : "#fff"}
      />
    </SvgIcon>
  );
};
