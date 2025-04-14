/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TFunction } from "i18next";
import { DescriptionModel } from "./DescriptionModel";
import { ReactNode } from "react";
import { TableCellProps } from "@mui/material";
import { TagsModel } from "./TagsModel";
import { VariantsModel } from "./VariantModel";
import { DeleteModel } from "./DeleteModel";
import { UpdateModel } from "./UpdateModel";
import { DiscountModel } from "./DiscountModel";
import { EditDiscountModel } from "./EditDiscountModel";
import { DeleteDiscountModel } from "./DeleteDiscountModel";

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

export const getProductsColumns = (
  t: TFunction
): CustomTableColumnProps<any>[] => [
  {
    key: "name",
    header: t("Product Name"),
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
    key: "price",
    header: t("Price"),
    accessor: "price",
  },
  {
    key: "status",
    header: t("Status"),
    accessor: "status",
  },
  {
    key: "discountType",
    header: t("Discount Type"),
    accessor: "discount_type",
  },
  {
    key: "discountValue",
    header: t("Discount Value"),
    accessor: "discount_value",
  },
  {
    key: "addDiscount",
    header: t("Add Discount"),
    accessor: ({ id }) => <DiscountModel id={id} />,
  },
  {
    key: "ModifyDiscount",
    header: t("Modify discount"),
    accessor: ({ id, discount_value }) => (
      <EditDiscountModel id={id} discountValue={discount_value} />
    ),
  },
  {
    key: "deleteDiscount",
    header: t("Delete discount"),
    accessor: ({ id, discount_value }) => (
      <DeleteDiscountModel id={id} discountValue={discount_value} />
    ),
  },
  {
    key: "discountStartDate",
    header: t("Discount Start Date"),
    accessor: "discount_start_date",
  },
  {
    key: "discountEndDate",
    header: t("Discount End Date"),
    accessor: "discount_end_date",
  },
  {
    key: "variants",
    header: t("Variants"),
    accessor: ({ id, variants }) => (
      <VariantsModel id={id} variants={variants} />
    ),
  },
  {
    key: "tags",
    header: t("Tags"),
    accessor: ({ tags }) => <TagsModel tags={tags} />,
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
