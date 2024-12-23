import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const CameraIcon: FC<SvgIconProps> = ({ width, height, fill, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "20"}
      height={height ? height : "15.385"}
      viewBox={viewBox ? viewBox : "0 0 20 15.385"}
      {...props}
    >
      <path
        id='icons8-camera'
        d='M9.874,4A1.538,1.538,0,0,0,8.5,4.85l-.3.607a1.54,1.54,0,0,1-1.376.85H3.538A1.538,1.538,0,0,0,2,7.846v10a1.538,1.538,0,0,0,1.538,1.538H20.462A1.538,1.538,0,0,0,22,17.846v-10a1.538,1.538,0,0,0-1.538-1.538h-3.28a1.538,1.538,0,0,1-1.376-.85l-.3-.607A1.54,1.54,0,0,0,14.126,4Zm-4.8.769a.77.77,0,0,0-.769.769H6.615a.77.77,0,0,0-.769-.769ZM12,7.077a5.385,5.385,0,1,1-5.385,5.385A5.391,5.391,0,0,1,12,7.077Zm6.923.769a.769.769,0,1,1-.769.769A.77.77,0,0,1,18.923,7.846ZM12,8.615a3.846,3.846,0,1,0,3.846,3.846A3.846,3.846,0,0,0,12,8.615Z'
        transform='translate(-2 -4)'
        fill={fill ? fill : "#5b7798"}
      />
    </SvgIcon>
  );
};
