import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import React, { FC } from "react";
import { CustomIcon } from "../CustomIcon";
import { useNotificationItemStyles } from "./NotificationsItem.styles";
import { NotificationItemProps } from "./type";
import { renderSwitch } from "./utils";

const NotificationsItem: FC<NotificationItemProps> = (props) => {
  const { t } = useTranslation();
  const { title, subTitle, type, link, children } = props;
  const classes = useNotificationItemStyles({ type });

  return (
    <div className={classes.card}>
      <div className={classes.icon}>
        <CustomIcon icon={renderSwitch(type).icon} color="#fff" />
      </div>
      <div className={classes.item}>
        <Typography variant="subtitle2" className={classes.titleNote}>
          {title}
        </Typography>
        {subTitle && <Typography variant="subtitle2">{subTitle}</Typography>}
        {link && (
          <Typography variant="subtitle2">
            <a href={link}>{t("clickToDownLoad", "Click To DownLoad")}</a>
          </Typography>
        )}
        <>{children}</>
      </div>
    </div>
  );
};

export default NotificationsItem;
