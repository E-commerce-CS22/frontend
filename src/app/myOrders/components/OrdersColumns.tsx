/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";
// import { DeleteModel } from "./DeleteModel";
// import { UpdateModel } from "./UpdateModel";
// import { EditStatusModel } from "./EditStatusModel";
import { NotesModel } from "./NotesModel";
import { ProductsModel } from "./ProductsModel";

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

export const getOrdersColumns = (
  t: TFunction
): CustomTableColumnProps<any>[] => [
  {
    key: "notes",
    header: t("Notes"),
    accessor: ({ notes }) => <NotesModel desc={notes || "-"} />,
  },
  {
    key: "status",
    header: t("Status"),
    accessor: "status",
  },
  {
    key: "shipping_address",
    header: t("Shipping Address"),
    accessor: "shipping_address",
  },
  {
    key: "total_amount",
    header: t("Price"),
    accessor: "total_amount",
  },
  {
    key: "items",
    header: t("Products"),
    accessor: ({ items }) => <ProductsModel items={items} />,
  },
];
