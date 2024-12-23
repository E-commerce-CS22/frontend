import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const SuccessIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' {...props}>
      <path
        id='icons8-check-circle_2_'
        d='M37,2A35.051,35.051,0,1,0,66.466,18.148l-2.083,2.461A32.106,32.106,0,1,1,58.5,13.428l1.991-2.351A34.865,34.865,0,0,0,37,2Zm27.751,8.756-29.4,34.7L22.971,33.909,20.9,36.135,35.606,49.855,67.075,12.724Z'
        transform='translate(-2 -2)'
        fill='#46A200'
      />
    </SvgIcon>
  );
};
