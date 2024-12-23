import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React, { FC } from "react";

export const EditIcon: FC<SvgIconProps> = ({ width, height, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "20"}
      height={height ? height : "20"}
      viewBox={viewBox ? viewBox : "0 0 20 20"}
      {...props}
    >
      <path
        id='icons8-edit'
        d='M19.524,3a1.661,1.661,0,0,0-1.178.488L16.333,5.5,20.5,9.667l2.012-2.012a1.666,1.666,0,0,0,0-2.357L20.7,3.488A1.661,1.661,0,0,0,19.524,3ZM14.667,7.167,4.883,16.95s.765-.069,1.05.216.05,2.15.4,2.5,2.2.1,2.469.369.247,1.081.247,1.081l9.784-9.784ZM3.833,19.667l-.786,2.227a.831.831,0,0,0,1.06,1.06l.008,0,.021-.007,0,0,2.192-.773-1.25-1.25Z'
        transform='translate(-3 -3)'
      />
    </SvgIcon>
  );
};
