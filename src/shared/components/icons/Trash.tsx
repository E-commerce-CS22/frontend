import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  root: {
    width: 15,
    height: 17,
  },
}));

export const TrashIcon: FC<SvgIconProps> = ({ width, height, fill, viewBox, ...props }) => {
  const { classes } = useStyles();
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "15px"}
      height={height ? height : "17.25px"}
      viewBox={viewBox ? viewBox : "0 0 15 17.25"}
      fill={fill ? fill : "#1C2346"}
      classes={{ root: classes.root }}
      {...props}
    >
      <path
        id='icons8-trash'
        d='M11,3a.75.75,0,0,0-.76.75H5.75a.75.75,0,1,0,0,1.5h13.5a.75.75,0,1,0,0-1.5H14.76A.75.75,0,0,0,14,3ZM5.75,6.75v12a1.5,1.5,0,0,0,1.5,1.5h10.5a1.5,1.5,0,0,0,1.5-1.5v-12Z'
        transform='translate(-5 -3)'
        fill={fill ? fill : "#1C2346"}
      />
    </SvgIcon>
  );
};
