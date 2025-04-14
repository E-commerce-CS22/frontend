/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
// import { DescriptionModel } from "./DescriptionModel";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";
import { ProductsModel } from "./ProductsModel";
import { NotesModel } from "./NotesModel";
import { EditStatusModel } from "./EditStatusModel";
import { EditPaymentStatusModel } from "./EditPaymentStatus";
import { EditTrackingModel } from "./EditTrackingInformation";
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
  {
    key: "editStatus",
    header: t("Edit Status"),
    accessor: ({ id }) => <EditStatusModel id={id} />,
  },
  {
    key: "editPaymentStatus",
    header: t("Edit Payment Status"),
    accessor: ({ id }) => <EditPaymentStatusModel id={id} />,
  },
  {
    key: "editTrackingNumber",
    header: t("Edit Tracking Information"),
    accessor: ({ id, tracking_number }) => (
      <EditTrackingModel id={id} tracking_number={tracking_number} />
    ),
  },
];
