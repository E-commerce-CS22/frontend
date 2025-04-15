/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";
// import { DeleteModel } from "./DeleteModel";
// import { UpdateModel } from "./UpdateModel";
import { EditStatusModel } from "./EditStatusModel";

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

export const getCustomersColumns = (
  t: TFunction
): CustomTableColumnProps<any>[] => [
  {
    key: "FirstName",
    header: t("First Name"),
    accessor: ({ customer_data }) => customer_data?.first_name,
  },
  {
    key: "LastName",
    header: t("Last Name"),
    accessor: ({ customer_data }) => customer_data?.last_name,
  },
  {
    key: "email",
    header: t("Email"),
    accessor: "email",
  },
  {
    key: "username",
    header: t("Username"),
    accessor: "username",
  },
  {
    key: "phoneNumber",
    header: t("Phone Number"),
    accessor: ({ customer_data }) => customer_data?.phone,
  },
  {
    key: "address",
    header: t("Address"),
    accessor: ({ customer_data }) => customer_data?.address,
  },
  {
    key: "city",
    header: t("City"),
    accessor: ({ customer_data }) => customer_data?.city,
  },
  // {
  //   key: "postalCode",
  //   header: t("Postal Code"),
  //   accessor: ({ customer_data }) => customer_data?.postal_code,
  // },
  // {
  //   key: "delete",
  //   header: t("Delete"),
  //   accessor: ({ id }) => <DeleteModel id={id} />,
  // },
  // {
  //   key: "Modify",
  //   header: t("Modify"),
  //   accessor: ({ id }) => <UpdateModel id={id} />,
  // },
  {
    key: "editStatus",
    header: t("Edit Status"),
    accessor: (data) => {
      return <EditStatusModel id={data.id} />;
    },
  },
];
