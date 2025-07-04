import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const NothingFoundIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='118' height='118' viewBox='0 0 118 118' {...props}>
      <path
        id='icons8-nothing-found'
        d='M52.166,3A49.167,49.167,0,1,0,83.251,90.2l29.356,29.356a4.917,4.917,0,1,0,6.953-6.953L90.2,83.251A49.115,49.115,0,0,0,52.166,3Zm0,9.833A39.333,39.333,0,1,1,12.833,52.166,39.259,39.259,0,0,1,52.166,12.833ZM34.958,37.417a7.375,7.375,0,1,0,7.375,7.375A7.375,7.375,0,0,0,34.958,37.417Zm34.417,0a7.375,7.375,0,1,0,7.375,7.375A7.375,7.375,0,0,0,69.375,37.417ZM52.166,62a31.626,31.626,0,0,0-17.688,5.887,4.921,4.921,0,1,0,5.877,7.894S46,71.833,52.166,71.833,63.978,75.78,63.978,75.78a4.921,4.921,0,1,0,5.877-7.894A31.626,31.626,0,0,0,52.166,62Z'
        transform='translate(-3 -3)'
        fill='#E06E0E'
      />
    </SvgIcon>
  );
};
