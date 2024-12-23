import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { white } from "../../customization";

export const MicrophoneIcon: FC<SvgIconProps> = ({ width, height, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "9.376"}
      height={height ? height : "17.421"}
      viewBox={viewBox ? viewBox : "0 0 9.376 17.421"}
      {...props}
    >
      <path
        id='icons8-microphone'
        d='M12.688,2a2.009,2.009,0,0,0-2.009,2.009v8.036a2.009,2.009,0,1,0,4.018,0V4.009A2.009,2.009,0,0,0,12.688,2ZM8.659,8.688A.67.67,0,0,0,8,9.366v2.679a4.7,4.7,0,0,0,4.018,4.634v1.393H10.009a.67.67,0,1,0,0,1.339h2.566a.67.67,0,0,0,.218,0h2.573a.67.67,0,1,0,0-1.339H13.357V16.679a4.7,4.7,0,0,0,4.018-4.634V9.366a.67.67,0,1,0-1.339,0v2.679a3.336,3.336,0,0,1-3.273,3.344.607.607,0,0,0-.16,0,3.336,3.336,0,0,1-3.265-3.344V9.366a.67.67,0,0,0-.68-.679Z'
        transform='translate(-8 -2)'
        fill={props?.fill ? props?.fill : white}
      />
    </SvgIcon>
  );
};
