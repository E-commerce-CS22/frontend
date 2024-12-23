import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Upload: FC<SvgIconProps> = props => {
  const { color } = props;
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='18' height='20.455' viewBox='0 0 18 20.455' {...props}>
      <path
        id='icons8-upload'
        d='M5.636,3A1.605,1.605,0,0,0,4,4.573V17.948a1.605,1.605,0,0,0,1.636,1.573h6.545v-9.9l-1.876,1.8a.841.841,0,0,1-1.157,0,.765.765,0,0,1,0-1.112l3.273-3.147a.841.841,0,0,1,1.157,0l3.273,3.147a.765.765,0,0,1,0,1.112.841.841,0,0,1-1.157,0l-1.876-1.8v9.9h6.545A1.605,1.605,0,0,0,22,17.948V4.573A1.605,1.605,0,0,0,20.364,3Zm8.182,16.521H12.182v3.147a.819.819,0,0,0,1.636,0Z'
        transform='translate(-4 -3)'
        fill={color || "#fff"}
      />
    </SvgIcon>
  );
};
