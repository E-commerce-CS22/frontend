import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const EmptyBoxIcon: FC<SvgIconProps> = ({ width, height, viewBox, ...props }) => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "109.844"}
      height={height ? height : "83.464"}
      viewBox={viewBox ? viewBox : "0 0 109.844 83.464"}
      {...props}
    >
      <path
        id='icons8-empty-box'
        d='M33.581,6a2.167,2.167,0,0,0-.961.48L10.176,23.709l-.069.069h-.069a2.34,2.34,0,0,0-.48.343l-.069.069a1.024,1.024,0,0,0-.137.069v.069a2.084,2.084,0,0,0-.206.275,1.024,1.024,0,0,0-.069.137l-.069.069a2.386,2.386,0,0,0-.137.343L.223,42.378A2.194,2.194,0,0,0,3.175,45.33L8.8,42.516V87.268a2.2,2.2,0,0,0,2.2,2.2H76.961a2.293,2.293,0,0,0,.412-.069,1.931,1.931,0,0,0,.206-.069,2.165,2.165,0,0,0,.755-.412,1.038,1.038,0,0,0,.137-.137,1.038,1.038,0,0,0,.137-.137l.137-.206a1.037,1.037,0,0,0,.137-.137l17.3-21.621a2.209,2.209,0,0,0,.48-1.373v-21L109.22,31.739a2.189,2.189,0,0,0,.275-2.677L96.66,7.716a2.167,2.167,0,0,0-.48-.961,1.024,1.024,0,0,0-.069-.137h-.069a1.025,1.025,0,0,0-.069-.137H95.9a1.038,1.038,0,0,0-.137-.137,2.385,2.385,0,0,0-.48-.206,1.025,1.025,0,0,0-.137-.069h-.069A1.024,1.024,0,0,0,94.944,6H33.581Zm1.1,4.393H89.11L75.931,23.571H17.451Zm59.372,1.373L104.9,29.749,90.482,44.163,79.637,26.18ZM13.2,27.964H74.7V85.071H13.2V39.221a1.468,1.468,0,0,0,0-.275Zm65.893,5.628L88.217,48.83a2.192,2.192,0,0,0,3.432.48l.618-.618V64.548L79.088,81.022ZM8.8,35.1v2.471L7.156,38.4ZM32.346,36.75a2.218,2.218,0,0,0,.618,4.393H54.928a2.2,2.2,0,1,0,0-4.393H32.346Z'
        transform='translate(0.014 -6)'
        fill={props.fill ? props.fill : "#E06E0E"}
      />
    </SvgIcon>
  );
};
