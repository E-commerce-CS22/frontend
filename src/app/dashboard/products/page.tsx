"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { TableActions } from "./components/TableActions";
import { useProductsHook } from "./products.hook";
import { CustomTable } from "@/shared/components/Table";
import { t } from "i18next";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function DashboardProducts() {
  const {
    tableActionButtons: actionButtons,
    productData,
    isLoading,
    columns,
    isError,
  } = useProductsHook();
  useEffect(() => {
    if (isLoading) toast.loading(t("Loading..."), { toastId: "loadProfile" });
    else toast.dismiss("loadProfile");

    if (isError) toast.error(t("Failed to load"));
  }, [isLoading, isError]);
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      <CustomTable
        columns={columns}
        data={productData}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </PageWrapper>
  );
}
