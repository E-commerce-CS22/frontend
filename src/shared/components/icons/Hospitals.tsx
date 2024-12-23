import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Hospitals: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='64.071' height='64.071' viewBox='0 0 64.071 64.071' {...props}>
      <path
        id='icons8-hospital-sign'
        d='M11.628,4A7.651,7.651,0,0,0,4,11.628V60.444a7.651,7.651,0,0,0,7.628,7.628H60.444a7.651,7.651,0,0,0,7.628-7.628V11.628A7.651,7.651,0,0,0,60.444,4Zm0,3.051H60.444a4.554,4.554,0,0,1,4.577,4.577V60.444a4.554,4.554,0,0,1-4.577,4.577H11.628a4.554,4.554,0,0,1-4.577-4.577V11.628A4.554,4.554,0,0,1,11.628,7.051Zm10.679,12.2V52.816h6.1V39.087H43.663v13.73h6.1V19.255h-6.1v13.73H28.408V19.255Z'
        transform='translate(-4 -4)'
        fill='#E06E0E'
      />
    </SvgIcon>
  );
};
