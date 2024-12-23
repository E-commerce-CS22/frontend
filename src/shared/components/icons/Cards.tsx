import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React, { FC } from "react";

export const Cards: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='26.631' height='18.526' viewBox='0 0 26.631 18.526' {...props}>
      <path
        id='icons8-credit-card'
        d='M4.895,9A2.9,2.9,0,0,0,2,11.895V24.631a2.9,2.9,0,0,0,2.895,2.895H25.736a2.9,2.9,0,0,0,2.895-2.895V11.895A2.9,2.9,0,0,0,25.736,9Zm0,1.158H25.736a1.729,1.729,0,0,1,1.737,1.737v1.158H3.158V11.895A1.729,1.729,0,0,1,4.895,10.158ZM3.158,15.947H27.473v8.684a1.729,1.729,0,0,1-1.737,1.737H4.895a1.729,1.729,0,0,1-1.737-1.737Zm2.895,1.737v1.158h9.263V17.684Z'
        transform='translate(-2 -9)'
        fill={props?.fill ? props?.fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
