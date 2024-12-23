import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const AddNewIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' {...props}>
      <path
        id='icons8-add'
        d='M25,2A23,23,0,1,0,48,25,23.015,23.015,0,0,0,25,2Zm0,2A21,21,0,1,1,4,25,20.985,20.985,0,0,1,25,4Zm-.016,12.986A1,1,0,0,0,24,18v6H18a1,1,0,1,0,0,2h6v6a1,1,0,1,0,2,0V26h6a1,1,0,1,0,0-2H26V18a1,1,0,0,0-1.016-1.014Z'
        transform='translate(-2 -2)'
        fill='#1C2346'
      />
    </SvgIcon>
  );
};
