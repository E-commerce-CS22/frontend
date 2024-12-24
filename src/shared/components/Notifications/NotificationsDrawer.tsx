import { useTranslation } from "react-i18next";
import { Drawer, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
// import { useIsMobileView } from "../../hooks";
import { CustomIcon } from "../CustomIcon";
import { useNotificationDrawerStyles } from "./NotificationsDrawer.styles";
import { NotificationsDrawerProps } from "./type";

const NotificationsDrawer: FC<NotificationsDrawerProps> = (props) => {
  const classes = useNotificationDrawerStyles();
  const { open, number, onClose: handleClose, children } = props;
  const { t } = useTranslation("translation");
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleClose}
      classes={{
        paper: `${classes.paper} ${classes?.paperMobileScreen}`,
      }}
    >
      <div className={classes.container}>
        <IconButton
          size="small"
          onClick={handleClose}
          className={classes.iconButtonClose}
        >
          <CustomIcon icon="miniClose" viewBox="0 0 21 21" />
        </IconButton>
        <div>
          <Typography variant="h6" className={classes.title}>
            {t("Notifications")}{" "}
            {Boolean(number) && (
              <sup className={classes.number}>({number})</sup>
            )}
          </Typography>
        </div>

        {children}
      </div>
      {/* <Button fullWidth variant='outlined' onClick={handleClickFooter} className={classes.footer}>
        {t("See All Notifications")}
      </Button> */}
    </Drawer>
  );
};

export default NotificationsDrawer;
