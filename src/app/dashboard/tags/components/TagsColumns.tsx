/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";
import { DeleteModel } from "./DeleteModel";
import { UpdateModel } from "./UpdateModel";

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

export const getTagsColumns = (t: TFunction): CustomTableColumnProps<any>[] => [
  {
    key: "name",
    header: t("Tag Name"),
    accessor: "name",
  },
  {
    key: "slug",
    header: t("Slug"),
    accessor: "slug",
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
