/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type SidebarDataItemType = {
  id: string;
  text: string;
  route?: string;
  icon?: any;
  onClick?: (id: string) => void;
  hidden?: boolean;
  isProhibited?: boolean;
  selected?: boolean;
};

export type SidebarDataSubItemType = {
  subItems?: SidebarDataItemType[];
};

export type SidebarDataType = SidebarDataItemType &
  SidebarDataSubItemType & { fullPath?: string; selected?: boolean };

export interface SidebarProps {
  anchor?: "bottom" | "left" | "right" | "top";
  isOpen: boolean;
  footer?: ReactNode;
  data: SidebarDataType[];
  onToggleDrawer: () => void;
  onNavigate?: (path: string) => void;
  onGoToHome: () => void;
}

export interface SidebarItemProps {
  data: SidebarDataType;
  onNavigate?: (path: string) => void;
}
export type SidebarListProps = {
  data: SidebarDataType[];
  onNavigate?: (path: string) => void;
} & ListProps;

export type SidebarStyleProps = {
  theme?: Theme;
  selected?: boolean;
};
