/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
// import { DescriptionModel } from "./DescriptionModel";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";
// import { DeleteModel } from "./DeleteModel";
// import { UpdateModel } from "./UpdateModel";
// import { ImageModel } from "./ImageModel";

export interface CustomTableColumnProps<RowType = {}> {
  key: string;
  header: ReactNode;
  isHidden?: boolean;
  isSortable?: boolean;
  type?: "number" | "string";
  accessor: string | ((data: RowType) => ReactNode);
  hideFromSettings?: boolean;
  disableToggleVisibility?: boolean;
  sortColumnEnum?: any;
  filter?: string;
  sx?: TableCellProps["sx"];
}

export const getOrdersColumns = (): CustomTableColumnProps<any>[] => [];
