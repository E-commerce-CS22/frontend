/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useTranslation } from "react-i18next";
import { i18n } from "@/shared/utils/i18next";
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { default as React, FC, Fragment, memo } from "react";
import { LanguageButton } from "../LanguageButton";
import { AdminHeaderProps } from "./AdminHeader.types";
import { leftIcons, rightIcons } from "./routes";

const AdminHeader: FC<AdminHeaderProps & { children: React.ReactNode }> = (
  props
) => {
  const theme = useTheme();
  const currentDir = i18n.dir(i18n.language);
  const { t } = useTranslation();

  const {
    position = "fixed",
    leftItems = leftIcons,
    rightItems = rightIcons,
    title,
    // breadCrumb,
    isOpen,
    onToggle,
    children,
    branchName,
  } = props;

  const matches = useMediaQuery("(max-width:600px)");
  const handleToggleDrawer = () => {
    onToggle && onToggle(!isOpen);
  };
  const handleOpenBranchesDialog = () => {
    // openPharmacyBranch(true);
  };
  return (
    <>
      <MuiAppBar elevation={0} position={position}>
        <Toolbar
          sx={{
            height: "100%",
          }}
          disableGutters={false}
          variant="regular"
        >
          {!!leftItems?.length &&
            leftItems?.map((item) => {
              const { id, icon, onClick: onPressItem } = item || {};

              const handleClick = () => {
                onPressItem ? onPressItem(id) : handleToggleDrawer();
              };

              return (
                <IconButton
                  key={id}
                  onClick={handleClick}
                  edge="start"
                  sx={{
                    transform:
                      currentDir === "rtl" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {icon}
                </IconButton>
              );
            })}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "none",
              margin: "0 10px",
              [theme.breakpoints.up("sm")]: {
                display: "block",
              },
            }}
          >
            <Typography>{title}</Typography>
          </Typography>
          {children}
          {!matches && branchName && (
            <Box sx={{ marginInline: 2 }} display="flex" alignItems="center">
              <Typography>{t("Your branch is")}: </Typography>
              <Typography onClick={handleOpenBranchesDialog}>
                {branchName}
              </Typography>
            </Box>
          )}
          <LanguageButton />

          {!!rightItems?.length &&
            rightItems?.map((item) => {
              const { id, icon, count, onClick: onPressItem } = item || {};

              const handleClickItem = () => {
                onPressItem && onPressItem(id);
              };

              return (
                <Fragment key={id}>
                  {count ? (
                    <IconButton key={id} onClick={handleClickItem} edge="start">
                      <Badge badgeContent={count} color="error">
                        {icon}
                      </Badge>
                    </IconButton>
                  ) : (
                    icon
                  )}
                </Fragment>
              );
            })}
        </Toolbar>
      </MuiAppBar>
    </>
  );
};

export default memo(AdminHeader);
