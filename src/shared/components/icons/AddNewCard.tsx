import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const AddNewCard: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' {...props}>
      <path
        id='icons8-add'
        d='M22,2A20,20,0,1,0,42,22,20.013,20.013,0,0,0,22,2Zm0,1.739A18.261,18.261,0,1,1,3.739,22,18.248,18.248,0,0,1,22,3.739Zm-.014,11.292a.87.87,0,0,0-.856.881V21.13H15.913a.87.87,0,1,0,0,1.739H21.13v5.217a.87.87,0,1,0,1.739,0V22.87h5.217a.87.87,0,1,0,0-1.739H22.87V15.913a.87.87,0,0,0-.883-.881Z'
        transform='translate(-2 -2)'
        fill='#1C2346'
      />
    </SvgIcon>
  );
};
