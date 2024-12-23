import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React, { FC } from "react";

export const ArrowButton: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/SvgIcon' width='7.785px' height='12px' color={"inherit"} viewBox='0 0 7.785 12' {...props}>
      <path
        id='icons8-sort-down'
        d='M10,11a.5.5,0,0,0-.386.19L4.16,17.677a.741.741,0,0,0-.118.707.553.553,0,0,0,.5.4H15.454a.553.553,0,0,0,.5-.4.741.741,0,0,0-.118-.707L10.385,11.19A.5.5,0,0,0,10,11Z'
        transform='translate(18.785 -4) rotate(90)'
      />
    </SvgIcon>
  );
};
