import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React, { FC } from "react";

export const SignoutIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='19.262' height='18.482' viewBox='0 0 19.262 18.482' {...props}>
      <path
        id='icons8-sign-out'
        d='M12.241,3a9.241,9.241,0,0,0,0,18.482,9.146,9.146,0,0,0,5.278-1.68.77.77,0,0,0-.886-1.26,7.587,7.587,0,0,1-4.392,1.4,7.7,7.7,0,0,1,0-15.4,7.587,7.587,0,0,1,4.392,1.4.77.77,0,0,0,.886-1.26A9.146,9.146,0,0,0,12.241,3Zm6.153,5.383a.77.77,0,0,0-.537,1.322l1.766,1.766H11.471a.77.77,0,1,0,0,1.54h8.152l-1.766,1.766a.77.77,0,1,0,1.089,1.089l3.013-3.013a.77.77,0,0,0,0-1.226L18.946,8.616a.77.77,0,0,0-.552-.233Z'
        transform='translate(-3 -3)'
        fill={props.fill ? props.fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
