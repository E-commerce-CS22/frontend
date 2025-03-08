/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
import { DescriptionModel } from "./DescriptionModel";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";
import { DeleteModel } from "./DeleteModel";
import { UpdateModel } from "./UpdateDialog";

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

export const getCategoriesColumns = (
  t: TFunction
): CustomTableColumnProps<any>[] => [
  {
    key: "name",
    header: t("Category Name"),
    accessor: "name",
  },
  {
    key: "description",
    header: t("Description"),
    accessor: ({ description }) => (
      <DescriptionModel desc={description || "-"} />
    ),
  },
  {
    key: "color",
    header: t("Color"),
    accessor: "color",
  },
  {
    key: "createdAt",
    header: t("Created At"),
    accessor: "created_at",
  },
  {
    key: "updatedAt",
    header: t("Updated At"),
    accessor: "updated_at",
  },
  {
    key: "delete",
    header: t("Delete"),
    accessor: ({ id }) => <DeleteModel id={id} />,
  },
  {
    key: "Modify",
    header: t("Modify"),
    accessor: ({ id }) => <UpdateModel id={id} />,
  },
];
