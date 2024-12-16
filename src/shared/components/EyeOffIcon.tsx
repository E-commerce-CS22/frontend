import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

const EyeOffIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="14.667"
      viewBox="0 0 22 14.667"
      {...props}
    >
      <path
        id="icons8-eye-off_1_"
        data-name="icons8-eye (1)"
        d="M11,5C4.4,5,.145,11.9.145,11.9v.02a.661.661,0,0,0-.026.791v.023S3.667,19.667,11,19.667s10.881-6.934,10.881-6.934V12.71a.661.661,0,0,0-.026-.791V11.9S17.6,5,11,5Zm0,2.2a5.133,5.133,0,1,1-5.133,5.133A5.133,5.133,0,0,1,11,7.2Zm0,2.933a2.2,2.2,0,1,0,2.2,2.2A2.2,2.2,0,0,0,11,10.133Z"
        transform="translate(0 -5)"
        fill="#1C2346"
      />
      <line
        fill="#000000"
        stroke="#000000"
        strokeWidth="1"
        strokeMiterlimit="10"
        x1="0"
        y1="15"
        x2="23"
        y2="0"
      />
    </SvgIcon>
  );
};

export default EyeOffIcon;
