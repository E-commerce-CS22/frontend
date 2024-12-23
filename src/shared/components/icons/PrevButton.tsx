import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React, { FC } from "react";

export const PrevButton: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='7.785px' height='12px' color={"inherit"} viewBox='0 0 7.785 12' {...props}>
      <path
        id='icons8-sort-down'
        d='M6,7.785a.5.5,0,0,1-.386-.19L.16,1.107A.741.741,0,0,1,.042.4a.553.553,0,0,1,.5-.4H11.454a.553.553,0,0,1,.5.4.741.741,0,0,1-.118.707L6.386,7.595A.5.5,0,0,1,6,7.785Z'
        transform='translate(7.785) rotate(90)'
      />
    </SvgIcon>
  );
};
