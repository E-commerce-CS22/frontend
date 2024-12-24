import { useTranslation } from "react-i18next";
import {
  Badge,
  Box,
  CircularProgress,
  IconButton,
  // InfiniteScrollContainer,
  // NotificationIcon,
  // NotificationsDrawer,
  // NotificationsItem,
  Typography,
} from "@mui/material";
import { cyan } from "@/shared/customization";
import { Notifications as NotificationIcon } from "@mui/icons-material";
import React from "react";
import { useNotificationsHooks } from "./Notifications.hook";
import { useNotificationsStyles } from "./Notifications.styles";
import { InfiniteScrollContainer } from "../../components/InfiniteScroll";
import { NotificationsDrawer } from "@/shared/components/Notifications";
import { NotificationsItem } from "@/shared/components/Notifications";

export const Notifications = () => {
  const { t } = useTranslation();
  const classes = useNotificationsStyles();
  const {
    open,
    loading,
    notifications,
    pageInfo,
    totalCount,
    unReadNotificationsCount,
    handleToggle,
    fetchMoreData,
  } = useNotificationsHooks();

  return (
    <>
      <IconButton color="primary" onClick={handleToggle}>
        <Badge badgeContent={unReadNotificationsCount} color="error">
          <NotificationIcon />
        </Badge>
      </IconButton>
      {open && (
        <NotificationsDrawer
          open={open}
          number={Number(totalCount)}
          onClose={handleToggle}
        >
          {loading ? (
            <Box display="flex" justifyContent="center" color={cyan} m={1}>
              <CircularProgress size={50} color="inherit" />
            </Box>
          ) : (
            <>
              {notifications?.length ? (
                <div className={classes.container} id="scrollableDiv">
                  <InfiniteScrollContainer
                    dataLength={Number(notifications?.length) || 0}
                    next={() => fetchMoreData()}
                    hasMore={Boolean(pageInfo?.hasNextPage)}
                    loader={
                      <Box
                        display="flex"
                        justifyContent="center"
                        color={cyan}
                        m={1}
                      >
                        <CircularProgress size={50} color="inherit" />
                      </Box>
                    }
                    classes={{
                      infinite: classes.infinite,
                    }}
                    scrollableTarget="scrollableDiv"
                  >
                    {notifications?.map((notification) => (
                      <NotificationsItem
                        key={notification.id}
                        title={String(notification.title)}
                        subTitle={String(notification.body)}
                        type={notification.type}
                      />
                    ))}
                  </InfiniteScrollContainer>
                </div>
              ) : (
                <Typography p={3} variant="h5">
                  {t("There is no Notifications")}
                </Typography>
              )}
            </>
          )}
        </NotificationsDrawer>
      )}
    </>
  );
};
