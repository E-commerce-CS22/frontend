import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Versions: FC<SvgIconProps> = props => {
  const { color } = props;
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17' {...props}>
      <path
        id='icons8-versions'
        d='M11.727,4a1.545,1.545,0,0,0-1.545,1.545V19.454A1.545,1.545,0,0,0,11.727,21h7.727A1.545,1.545,0,0,0,21,19.454V5.545A1.545,1.545,0,0,0,19.454,4Zm-3.876.762a.773.773,0,0,0-.761.783V19.454a.773.773,0,1,0,1.546,0V5.545a.773.773,0,0,0-.785-.783Zm-3.091.773A.773.773,0,0,0,4,6.318V18.682a.773.773,0,1,0,1.546,0V6.318a.773.773,0,0,0-.785-.783Z'
        transform='translate(-4 -4)'
        fill={color || "#1C2346"}
      />
    </SvgIcon>
  );
};
