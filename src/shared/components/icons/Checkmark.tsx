import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const CheckmarkIcon: FC<SvgIconProps> = props => {
  const { width, height, color, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "20"}
      height={height ? height : "20"}
      viewBox={viewBox ? viewBox : "0 0 20 20"}
      {...props}
    >
      <path
        id='icons8-ok'
        d='M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm5.589,8.089-6.3,6.3a.833.833,0,0,1-1.178,0L8.233,14.512a.833.833,0,1,1,1.178-1.178L11.7,15.622l5.711-5.711a.833.833,0,1,1,1.178,1.178Z'
        transform='translate(-3 -3)'
        fill={color ? color : "#46A200"}
      />
    </SvgIcon>
  );
};
