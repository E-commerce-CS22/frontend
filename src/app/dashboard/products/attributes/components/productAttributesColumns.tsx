/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";

import { DeleteModel } from "./DeleteModel";
import { UpdateModel } from "./UpdateModel";
import { ValuesModel } from "./ValuesModel";
import { AddValueModel } from "./AddValueModel";

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

export const getProductAttributesColumns = (
  t: TFunction
): CustomTableColumnProps<any>[] => [
  {
    key: "name",
    header: t("Product Name"),
    accessor: "name",
  },
  {
    key: "values",
    header: t("Values"),
    accessor: ({ values }) => <ValuesModel values={values || "-"} />,
  },
  {
    key: "Modify",
    header: t("Modify name"),
    accessor: ({ id }) => <UpdateModel id={id} />,
  },
  {
    key: "addValues",
    header: t("Add value"),
    accessor: ({ id }) => <AddValueModel id={id} />,
  },
  {
    key: "delete",
    header: t("Delete"),
    accessor: ({ id }) => <DeleteModel id={id} />,
  },
];
