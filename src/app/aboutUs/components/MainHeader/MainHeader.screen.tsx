"use client";
import React from "react";
import { useMainHeaderStyles } from "./mainHeader.style";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const MainHeader = () => {
  const classes = useMainHeaderStyles();
  const { t } = useTranslation("Store");
  return (
    <div className={classes.headerItem}>
      <Box className={classes.questionBox}>
        <Typography
          className={`${classes.questionText} ${classes.textWhiteColor}`}
        >
          {t("Do you have any questions?")}
        </Typography>
      </Box>
      <Box>
        <Typography className={`${classes.faqsText} ${classes.textWhiteColor}`}>
          {t("About Us")}
        </Typography>
      </Box>
    </div>
  );
};
