import React from "react";

export interface NotificationsDrawerProps {
  open: boolean;
  onClose: () => void;
  number?: number;
  onClickFooter?: () => void;
  children: React.ReactNode;
}
export interface NotificationItemProps {
  title: string;
  subTitle?: string;
  type?: string;
  link?: string;
  children?: React.ReactNode;
}
