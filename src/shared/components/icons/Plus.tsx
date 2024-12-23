import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Plus: FC<SvgIconProps> = props => {
  const { color } = props;
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' {...props}>
      <path
        id='icons8-plus-_1_'
        data-name='icons8-plus-+ (1)'
        d='M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm5,10.833H13.833V18a.833.833,0,0,1-1.667,0V13.833H8a.833.833,0,1,1,0-1.667h4.167V8a.833.833,0,1,1,1.667,0v4.167H18a.833.833,0,0,1,0,1.667Z'
        transform='translate(-3 -3)'
        fill={color || "#fff"}
      />
    </SvgIcon>
  );
};
