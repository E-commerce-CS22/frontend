import { Typography } from "@mui/material";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "tss-react/mui";

interface ILabelProps {
  label: string;
}

export const RequiredLabel: FC<ILabelProps> = ({ label }) => {
  return <>{label}</>;
};

const useOptionalLabelStyles = makeStyles()({
  root: {
    display: "inline",
    fontSize: 9,
  },
});

export const OptionalLabel: FC<ILabelProps> = ({ label }) => {
  const { t } = useTranslation("Store");
  const { classes } = useOptionalLabelStyles();
  return (
    <>
      {label} -{" "}
      <Typography component="p" className={classes.root}>
        {t("Optional", "Optional")}
      </Typography>
    </>
  );
};
