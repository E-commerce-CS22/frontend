/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from "@mui/material";
import { BreadcrumbsItemType } from "../Breadcrumb";

export interface AdminHeaderProps {
  position?: "fixed" | "relative";
  isOpen?: boolean;
  title: string;
  branchName?: string;
  breadCrumb?: BreadcrumbsItemType[];
  leftItems?: AdminHeaderItemProps[];
  rightItems?: AdminHeaderItemProps[];
  onToggle?: (state: boolean) => void;
  children?: React.ReactNode;
}

export type AdminHeaderItemProps = {
  id: string;
  name?: string;
  onClick?: (type: string) => void;
  icon?: any;
  count?: number;
};

export type AdminHeaderStyleProps = {
  theme?: Theme;
  drawerWidth?: number;
  isOpen?: boolean;
};
