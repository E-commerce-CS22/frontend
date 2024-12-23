import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const SquareIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "13"}
      height={height ? height : "13"}
      viewBox={viewBox ? viewBox : "0 0 13 13"}
      {...props}
    >
      <path
        id='icons8-squared-menu_1_'
        data-name='icons8-squared-menu (1)'
        d='M6.048,4.5A1.548,1.548,0,1,0,7.6,6.048,1.548,1.548,0,0,0,6.048,4.5ZM11,4.5a1.548,1.548,0,1,0,1.548,1.548A1.548,1.548,0,0,0,11,4.5Zm4.952,0A1.548,1.548,0,1,0,17.5,6.048,1.548,1.548,0,0,0,15.952,4.5Zm-9.9,4.952A1.548,1.548,0,1,0,7.6,11,1.548,1.548,0,0,0,6.048,9.452Zm4.952,0A1.548,1.548,0,1,0,12.547,11,1.548,1.548,0,0,0,11,9.452Zm4.952,0A1.548,1.548,0,1,0,17.5,11,1.548,1.548,0,0,0,15.952,9.452ZM6.048,14.4A1.548,1.548,0,1,0,7.6,15.952,1.548,1.548,0,0,0,6.048,14.4ZM11,14.4a1.548,1.548,0,1,0,1.548,1.548A1.548,1.548,0,0,0,11,14.4Zm4.952,0A1.548,1.548,0,1,0,17.5,15.952,1.548,1.548,0,0,0,15.952,14.4Z'
        transform='translate(-4.5 -4.5)'
        fill={fill ? fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
