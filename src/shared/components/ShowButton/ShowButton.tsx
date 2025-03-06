import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";
import Show from "../Show";
import { useTranslation } from "react-i18next";
// interface ShowButtonProps extends ButtonProps {}

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary?.dark,
  "&.MuiButton-containedPrimary": {
    backgroundColor: "transparent",
    color: theme.palette.primary?.dark,
    "& .MuiButton-startIcon > svg > path": {
      fill: "#1C2346",
    },
  },
  transition: theme.transitions.create(["background-color", "color"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.complex,
  }),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    transition: theme.transitions.create(["background-color", "color"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
    "& .MuiButton-startIcon > svg > path": {
      fill: theme.palette.common.white,
    },
  },
}));

export const ShowButton: FC<ButtonProps> = (props) => {
  const { t } = useTranslation();
  return (
    <StyledButton startIcon={<Show fill="inherit" />} size="medium" {...props}>
      {t("Show")}
    </StyledButton>
  );
};
