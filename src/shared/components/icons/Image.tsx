import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const ImageIcon: FC<SvgIconProps> = props => {
  const { width = 43.043, height = 33.11, viewBox = "0 0 43.043 33.11" } = props;
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox={viewBox} {...props}>
      <path
        id='icons8-image'
        d='M5.311,5A3.31,3.31,0,0,0,2,8.311V34.8A3.31,3.31,0,0,0,5.311,38.11H41.732A3.31,3.31,0,0,0,45.043,34.8V8.311A3.31,3.31,0,0,0,41.732,5ZM36.765,9.966a3.311,3.311,0,1,1-3.311,3.311A3.31,3.31,0,0,1,36.765,9.966Zm-29.8,3.311L15.2,21.51l1.7,1.7,1.914,1.914a1.791,1.791,0,0,0,2.525-2.541l-1.908-1.9,2.435-2.435,4.921,4.921L30.4,26.78a1.791,1.791,0,0,0,2.525-2.541l-.252-.249,2.435-2.435,4.966,4.966v6.622H6.966Z'
        transform='translate(-2 -5)'
        fill='#d3d9e6'
      />
    </SvgIcon>
  );
};
