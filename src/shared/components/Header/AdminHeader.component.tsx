/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
// import { useTranslation } from "react-i18next";
// import { i18n } from "@/shared/utils/i18next";
import {
  Badge,
  // Box,
  IconButton,
  Toolbar,
  // useMediaQuery,
  useTheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
// import Badge from "@mui/material/Badge";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { default as React, FC, Fragment, memo } from "react";
import { LanguageButton } from "../LanguageButton";
import { AdminHeaderProps } from "./AdminHeader.types";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs.component";
import { useAdminHeaderStyles } from "./AdminHeader.styles";
import { i18n } from "@/shared/utils/i18next";
import { BreadcrumbsItemType } from "../Breadcrumb";
import { adminLayoutVariables } from "@/shared/customization/layout";
import { leftIcons, rightIcons } from "../Layout/routes";

const AdminHeader: FC<AdminHeaderProps> = (props) => {
  const theme = useTheme();
  const currentDir = i18n.dir(i18n.language);
  // const { t } = useTranslation();

  const {
    position = "fixed",
    title,
    breadCrumb,
    isOpen,
    onToggle,
    children,
    // branchName,
    rightItems = rightIcons,
    leftItems = leftIcons,
  } = props;

  // const matches = useMediaQuery("(max-width:600px)");
  const handleToggleDrawer = () => {
    onToggle && onToggle(!isOpen);
  };
  // const handleOpenBranchesDialog = () => {
  //   openPharmacyBranch(true);
  // };

  const { drawerWidth } = adminLayoutVariables;

  const { classes } = useAdminHeaderStyles({ drawerWidth, isOpen });

  return (
    <>
      <MuiAppBar elevation={0} className={classes.appMenu} position={position}>
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
                  className={classes.leftIcon}
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
            <Typography className={classes.title}>{title}</Typography>
            <Breadcrumbs data={breadCrumb as BreadcrumbsItemType[]} />
          </Typography>
          {children}
          {/* {!matches && branchName && (
            <Box sx={{ marginInline: 2 }} display="flex" alignItems="center">
              <Typography className={classes.title}>
                {t("Your branch is")}:{" "}
              </Typography>
              <Typography
                className={`${classes.title} ${classes.branchName}`}
                onClick={handleOpenBranchesDialog}
              >
                {branchName}
              </Typography>
            </Box>
          )} */}
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
                    <IconButton
                      className={classes.iconButton}
                      key={id}
                      onClick={handleClickItem}
                      edge="start"
                    >
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
