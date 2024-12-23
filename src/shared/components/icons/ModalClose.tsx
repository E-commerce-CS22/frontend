import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "15px",
  },
});

export const ModalClose: FC<SvgIconProps> = (props) => {
  const { width, height, fill, viewBox } = props;
  const classes = useStyles();
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      height={height ? height : undefined}
      width={width ? width : "10px"}
      viewBox={viewBox ? viewBox : "0 0 10 10"}
      {...props}
      className={classes.root}
    >
      <path
        id="icons8-close"
        d="M6.665,6.281l-.384.384L10.9,11.281,6.281,15.9l.384.384,4.616-4.616L15.9,16.281l.384-.384-4.616-4.616,4.616-4.616L15.9,6.281,11.281,10.9Z"
        transform="translate(-6.281 -6.281)"
        fill={fill ? fill : "#1C2346"}
        height={"unset"}
      />
    </SvgIcon>
  );
};
