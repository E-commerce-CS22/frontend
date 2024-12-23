import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const OkayIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "23"}
      height={height ? height : "23"}
      viewBox={viewBox ? viewBox : "0 0 23 23"}
      {...props}
    >
      <path
        id='icons8-ok'
        d='M13.5,2A11.5,11.5,0,1,0,25,13.5,11.508,11.508,0,0,0,13.5,2Zm0,1A10.5,10.5,0,1,1,3,13.5,10.493,10.493,0,0,1,13.5,3Zm4.994,5.494a.5.5,0,0,0-.408.226l-5.1,7.519L9.34,12.855a.5.5,0,1,0-.68.733l4.5,4.174L18.914,9.28a.5.5,0,0,0-.42-.786Z'
        transform='translate(-2 -2)'
        fill={fill ? fill : "#f6f7f9"}
      />
    </SvgIcon>
  );
};
