import React from "react";
import { CustomerIcon, MenuIcon, NotificationIcon, SpeechIcon } from "../icons";
import { BreadcrumbsItemType } from "../Breadcrumb";
import { AdminHeaderItemProps } from "../Header";
import { SidebarDataType } from "../Sidebar";
const onClick = (id) => void id;
export const drawerData: SidebarDataType[] = [
  {
    id: "sdsd",
    text: "item",
    icon: "star",
    onClick,
    subItems: [
      {
        id: "123",
        text: "item",
        icon: "star",
        onClick,
      },
    ],
  },
  {
    id: "sdsd",
    text: "item",
    icon: "star",
    onClick,
  },
  {
    id: "sdsd",
    text: "item",
    icon: "star",
    onClick,
    subItems: [
      {
        id: "123",
        text: "item",
        icon: "star",
        onClick,
      },
    ],
  },
  {
    id: "sdsd",
    text: "item",
    icon: "star",
    onClick,
  },
];
export const breadCrumb: BreadcrumbsItemType[] = [
  {
    id: "sdsd",
    name: "Clinicians List",
    onClick,
  },
  {
    id: "sdsd",
    name: "Clinicians List",
    onClick,
  },
];

export const leftIcons: AdminHeaderItemProps[] = [
  {
    id: "menu",
    name: "",
    icon: <MenuIcon fill="inherit" />,
  },
];
export const rightIcons: AdminHeaderItemProps[] = [
  {
    id: "messages",
    name: "",
    onClick,
    icon: <NotificationIcon />,
  },
  {
    id: "customer",
    name: "",
    onClick,
    icon: <CustomerIcon />,
  },
  {
    id: "notifications",
    name: "",
    onClick,
    icon: <SpeechIcon />,
  },
];
