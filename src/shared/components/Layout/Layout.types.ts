import { Theme } from "@mui/material";
import { ReactNode } from "react";
import { BreadcrumbsItemType } from "../Breadcrumb";
import { AdminHeaderItemProps } from "../Header";
import { SidebarDataType } from "../Sidebar";

export interface LayoutProps {
  position?: "fixed" | "relative";
  title: string;
  branchName?: string;
  breadCrumb?: BreadcrumbsItemType[];
  drawerItems?: SidebarDataType[];
  leftItems?: AdminHeaderItemProps[];
  rightItems?: AdminHeaderItemProps[];
  footer?: ReactNode;
  onNavigate?: (path: string) => void;
  onGoToHome: () => void;
  isOpen: boolean;
  onToggleDrawer: () => void;
  children: React.ReactNode;
}

export type LayoutStyleProps = {
  theme?: Theme;
  drawerWidth?: number;
  isOpen?: boolean;
};
