/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import { CustomTable, CustomTableColumnProps } from "@/shared/components/Table";

type ProductsProps = {
  items: any;
};

export const ProductsModel = (props: ProductsProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { items } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const getProductsColumns = (): CustomTableColumnProps<any>[] => [
    {
      key: "name",
      header: t("Name"),
      accessor: ({ product }) => product?.name,
    },
    {
      key: "price",
      header: t("Price"),
      accessor: ({ product }) => product?.price,
    },
    {
      key: "quantity",
      header: t("Quantity"),
      accessor: "quantity",
    },
  ];

  return (
    <CustomDialog
      title={t("Description")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="sm"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <CustomTable
        columns={getProductsColumns()}
        data={items}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </CustomDialog>
  );
};
