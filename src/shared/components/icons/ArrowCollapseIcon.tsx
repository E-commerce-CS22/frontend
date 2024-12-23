import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const ArrowCollapseIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='15' height='8.206' viewBox='0 0 15 8.206' {...props}>
      <path
        id='icons8-expand-arrow'
        d='M3.456,12.906l-.706.706,7.5,7.5,7.5-7.5-.706-.706L10.25,19.7Z'
        transform='translate(-2.75 -12.906)'
        fill='#1C2346'
      />
    </SvgIcon>
  );
};
