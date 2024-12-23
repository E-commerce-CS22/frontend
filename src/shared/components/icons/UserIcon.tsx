import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React, { FC } from "react";

export const UserIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='16.26' height='17' viewBox='0 0 16.26 17' {...props}>
      <path
        id='icons8-user_1_'
        data-name='icons8-user (1)'
        d='M12.13,3A4.435,4.435,0,0,0,7.7,7.435v.739a4.435,4.435,0,1,0,8.87,0V7.435A4.435,4.435,0,0,0,12.13,3Zm0,11.826c-2.961,0-6.76,1.6-7.853,3.023A1.342,1.342,0,0,0,5.351,20H18.908a1.342,1.342,0,0,0,1.075-2.151C18.89,16.428,15.09,14.826,12.129,14.826Z'
        transform='translate(-4 -3)'
        fill={props.fill ? props.fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
