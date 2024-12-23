import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
export const MyCards: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='121.035' height='84.198' viewBox='0 0 121.035 84.198' {...props}>
      <path
        id='icons8-credit-card'
        d='M15.156,9A13.2,13.2,0,0,0,2,22.156V80.042A13.2,13.2,0,0,0,15.156,93.2h94.723a13.2,13.2,0,0,0,13.156-13.156V22.156A13.2,13.2,0,0,0,109.879,9Zm0,5.262h94.723a7.856,7.856,0,0,1,7.894,7.894v5.262H7.262V22.156A7.856,7.856,0,0,1,15.156,14.262ZM7.262,40.574h110.51V80.042a7.856,7.856,0,0,1-7.894,7.894H15.156a7.856,7.856,0,0,1-7.894-7.894Zm13.156,7.894V53.73h42.1V48.468Z'
        transform='translate(-2 -9)'
        fill={props?.fill ? props?.fill : "#c9d5e2"}
      />
    </SvgIcon>
  );
};
