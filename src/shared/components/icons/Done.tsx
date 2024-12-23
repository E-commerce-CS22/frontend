import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const DoneIcon: FC<SvgIconProps> = props => {
  const { width, height, fill, viewBox } = props;
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "15"}
      height={height ? height : "15"}
      viewBox={viewBox ? viewBox : "0 0 30 30"}
      {...props}
    >
      <path
        d='M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z'
        fill={fill ? fill : "#000000"}
      />
    </SvgIcon>
  );
};
