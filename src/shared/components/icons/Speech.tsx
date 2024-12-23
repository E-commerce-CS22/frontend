import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const SpeechIcon: FC<SvgIconProps> = ({ height, width, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "23.903"}
      height={height ? height : "22.861"}
      viewBox={viewBox ? viewBox : "0 0 23.903 22.861"}
      {...props}
    >
      <path
        id='icons8-speech-bubble'
        d='M14.014,4.063c-6.558,0-11.951,4.618-11.951,10.388a9.966,9.966,0,0,0,4.657,8.19,3.076,3.076,0,0,1-.147.83,8.469,8.469,0,0,1-1.286,2.687l-.537.749.928.016a7.14,7.14,0,0,0,5.373-2.442,13.605,13.605,0,0,0,2.963.358c6.556,0,11.951-4.618,11.951-10.388S20.57,4.063,14.014,4.063Zm0,.977c6.1,0,10.974,4.248,10.974,9.411s-4.87,9.411-10.974,9.411A12.771,12.771,0,0,1,11,23.5l-.293-.065-.2.244a7.312,7.312,0,0,1-3.908,2.1,9.88,9.88,0,0,0,.912-2.052,5.715,5.715,0,0,0,.212-1.3v-.261L7.5,22.022a9.032,9.032,0,0,1-4.461-7.571C3.039,9.287,7.908,5.039,14.014,5.039Z'
        transform='translate(-2.063 -4.063)'
        fill={props.fill ? props.fill : "#E06E0E"}
      />
    </SvgIcon>
  );
};
