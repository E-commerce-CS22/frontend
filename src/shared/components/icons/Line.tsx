import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  a: {
    fill: "none",
    stroke: "#e8ebef",
  },
}));
export const Line: FC<SvgIconProps> = props => {
  const { classes } = useStyles();
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='900' height='1' viewBox='0 0 900 1' {...props}>
      <line className={classes.a} x2='900' transform='translate(0 0.5)' />
    </SvgIcon>
  );
};
