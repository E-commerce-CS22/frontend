import { useTranslation } from "react-i18next";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";
import { LanguageGlobeIcon } from "../icons";

const StyledMenuItem = styled(MenuItem)(() => ({
  width: 200,
  borderRadius: 0,
}));

export const LanguageButton: FC = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang, () => {
      if (typeof window !== "undefined") {
        location.reload();
      }
    });
  };
  const handleChangeLanguage = (): void => {
    if (i18n?.language === "en") {
      onChangeLanguage("ar");
    } else {
      onChangeLanguage("en");
    }
    handleClose();
  };

  return (
    <>
      <Menu
        PaperProps={{
          elevation: 0,
          sx: {
            boxShadow: "0px 7px 29px #64646F33",
            borderRadius: "10px",
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Box
          sx={{
            padding: "8px 16px",
          }}
        >
          <Typography fontFamily="CoHeadlineTrial-Light">
            {t("Change language")}
          </Typography>
        </Box>
        <StyledMenuItem onClick={handleChangeLanguage}>
          <Typography>
            {i18n.language === "en" || i18n.language === "en-US"
              ? t("Arabic")
              : t("English")}
          </Typography>
          <Typography sx={{ paddingInline: "4px" }}>
            {i18n.language === "en" || i18n.language === "en-US" ? "ع" : "E"}
          </Typography>
        </StyledMenuItem>
      </Menu>
      <IconButton color="primary" onClick={handleOpen}>
        <LanguageGlobeIcon />
      </IconButton>
    </>
  );
};
