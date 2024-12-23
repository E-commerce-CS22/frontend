import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Excel: FC<SvgIconProps> = props => {
  const { fill = "#fff" } = props;
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' {...props}>
      <path
        id='icons8-microsoft-excel'
        d='M12,3a1.5,1.5,0,0,0-.3.032h0l-7.477,1.5h0A1.5,1.5,0,0,0,3,6V18a1.5,1.5,0,0,0,1.221,1.474l7.477,1.5A1.5,1.5,0,0,0,13.5,19.5V4.5A1.5,1.5,0,0,0,12,3Zm3,1.5V6.75h1.5v1.5H15v1.5h1.5v1.5H15v1.5h1.5v1.5H15v1.5h1.5v1.5H15V19.5h4.5A1.5,1.5,0,0,0,21,18V6a1.5,1.5,0,0,0-1.5-1.5Zm3,2.25h.75a.75.75,0,0,1,0,1.5H18ZM5.389,8.25h1.8l.933,2.243a4.4,4.4,0,0,1,.195.636h.025a6.686,6.686,0,0,1,.2-.653L9.589,8.25h1.641L9.27,11.966l2.019,3.782H9.538L8.41,13.305a2.1,2.1,0,0,1-.135-.5H8.259c-.026.116-.076.29-.152.521L6.971,15.75H5.212L7.3,12ZM18,9.75h.75a.75.75,0,0,1,0,1.5H18Zm0,3h.75a.75.75,0,0,1,0,1.5H18Zm0,3h.75a.75.75,0,0,1,0,1.5H18Z'
        transform='translate(-3 -3)'
        fill={fill || "#fff"}
      />
    </SvgIcon>
  );
};
