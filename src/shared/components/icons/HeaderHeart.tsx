import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const HeaderHeartIcon: FC<SvgIconProps> = props => {
  const { width = "24.945", height = "21.861", fill = "#1C2346", viewBox = "0 0 24.945 21.861" } = props;
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...props}>
      <path
        id='icons8-heart'
        d='M9.05,7A7.058,7.058,0,0,0,2,14.05c0,8,9.054,11.956,12.133,14.523l.339.288.339-.288c3.08-2.567,12.133-6.518,12.133-14.523A7,7,0,0,0,14.472,9.627,6.992,6.992,0,0,0,9.05,7Zm0,1.085a5.944,5.944,0,0,1,4.965,2.677l.458.678.458-.678A5.957,5.957,0,0,1,25.86,14.05c0,6.995-7.812,10.615-11.388,13.438C10.9,24.664,3.085,21.044,3.085,14.05A5.958,5.958,0,0,1,9.05,8.085Z'
        transform='translate(-2 -7)'
        fill={fill}
      />
    </SvgIcon>
  );
};
