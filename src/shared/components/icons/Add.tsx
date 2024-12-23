import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  a: {
    fill: "#fff",
  },
  b: {
    fill: "#444b54",
  },
  c: {
    fill: "#ff697b",
  },
}));
export const AddIcon: FC<SvgIconProps> = props => {
  const { width, height } = props;
  const { classes } = useStyles();
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      width={width ? width : "48.357"}
      height={height ? height : "48.357"}
      viewBox='0 0 48.357 48.357'
      {...props}
    >
      <path
        className={classes.a}
        d='M36.81,14A22.81,22.81,0,1,0,59.62,36.81,22.81,22.81,0,0,0,36.81,14Z'
        transform='translate(-12.631 -12.631)'
      />
      <path
        className={classes.b}
        d='M35.178,59.357A24.178,24.178,0,1,1,59.357,35.178,24.22,24.22,0,0,1,35.178,59.357Zm0-45.62A21.441,21.441,0,1,0,56.62,35.178,21.475,21.475,0,0,0,35.178,13.737Z'
        transform='translate(-11 -11)'
      />
      <path
        className={classes.c}
        d='M62.369,62.423A1.344,1.344,0,0,1,61,61.054V47.369a1.369,1.369,0,1,1,2.737,0V61.054A1.344,1.344,0,0,1,62.369,62.423Z'
        transform='translate(-38.19 -30.033)'
      />
      <path
        className={classes.c}
        d='M61.054,63.737H47.369a1.369,1.369,0,0,1,0-2.737H61.054a1.369,1.369,0,0,1,0,2.737Z'
        transform='translate(-30.033 -38.19)'
      />
    </SvgIcon>
  );
};
