import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const StarIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "15"}
      height={height ? height : "14.31"}
      viewBox={viewBox ? viewBox : "0 0 15 14.31"}
      {...props}
    >
      <path
        id='icons8-star'
        d='M9.5,2.191,11.11,6.947l5.019.058a.451.451,0,0,1,.264.813l-4.027,3,1.5,4.792a.451.451,0,0,1-.692.5l-4.094-2.9-4.095,2.9a.451.451,0,0,1-.692-.5l1.5-4.792-4.027-3A.451.451,0,0,1,2.023,7l5.019-.058L8.648,2.191A.451.451,0,0,1,9.5,2.191Z'
        transform='translate(-1.576 -1.884)'
        fill={fill ? fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
