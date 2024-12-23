import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const PencilIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' {...props}>
      <path
        id='icons8-edit'
        d='M17.045,3a1.412,1.412,0,0,0-1,.415l-1.71,1.71,3.542,3.542,1.71-1.71a1.416,1.416,0,0,0,0-2L18.047,3.415A1.412,1.412,0,0,0,17.045,3ZM12.917,6.542,4.6,14.858s.65-.058.892.184.043,1.827.34,2.125,1.873.088,2.1.314.21.919.21.919l8.316-8.316ZM3.708,17.167,3.04,19.059a.706.706,0,0,0,.9.9l.007,0,.018-.006,0,0,1.864-.657L4.771,18.229Z'
        transform='translate(-3 -3)'
        fill='#1C2346'
      />
    </SvgIcon>
  );
};
