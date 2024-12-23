import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const LocationSmallIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "17.353"}
      height={height ? height : "26.028"}
      viewBox={viewBox ? viewBox : "0 0 17.353 26.028"}
      {...props}
    >
      <path
        id='icons8-location_2_'
        data-name='icons8-location (2)'
        d='M17.677,1A8.674,8.674,0,0,0,9,9.677C9,13.64,11.093,17.9,13.152,21.2a47.72,47.72,0,0,0,4.118,5.643.541.541,0,0,0,.813,0A50.17,50.17,0,0,0,22.2,21.132c2.057-3.319,4.152-7.569,4.152-11.456A8.674,8.674,0,0,0,17.677,1Zm0,1.085a7.572,7.572,0,0,1,7.592,7.592c0,3.489-1.972,7.637-3.982,10.88a44.69,44.69,0,0,1-3.61,5.067,42.34,42.34,0,0,1-3.61-5c-2.008-3.22-3.982-7.374-3.982-10.947A7.572,7.572,0,0,1,17.677,2.085Zm0,4.338a3.8,3.8,0,1,0,3.8,3.8A3.8,3.8,0,0,0,17.677,6.423Zm0,1.085a2.711,2.711,0,1,1-2.711,2.711A2.7,2.7,0,0,1,17.677,7.507Z'
        transform='translate(-9 -1)'
        fill={fill ? fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
