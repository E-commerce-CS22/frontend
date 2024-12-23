import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { white } from "../../customization";

export const SendIcon: FC<SvgIconProps> = ({ width, height, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "9.376"}
      height={height ? height : "17.421"}
      viewBox={viewBox ? viewBox : "0 0 9.376 17.421"}
      {...props}
    >
      <path
        id='icons8-email-send_3_'
        data-name='icons8-email-send (3)'
        d='M16.417,3a.583.583,0,0,0-.165.025L16.2,3.04,3.379,7.119v0a.582.582,0,0,0-.1,1.044l3.9,3.092,7.705-6.141L8.743,12.821l3.09,3.9a.582.582,0,0,0,1.046-.1h0L16.964,3.784q.006-.017.011-.035A.58.58,0,0,0,16.417,3Z'
        transform='translate(-6 -1)'
        fill={props?.fill ? props?.fill : white}
      />
    </SvgIcon>
  );
};
