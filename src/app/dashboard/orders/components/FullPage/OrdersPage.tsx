"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTable } from "@/shared/components/Table";
import { useOderPageHook } from "./useOrderPage.hook";
import { TableActions } from "../TableActions";
import { useState, useEffect } from "react";

export const OrdersPage = () => {
  const {
    tableActionButtons: actionButtons,
    ordersData,
    columns,
  } = useOderPageHook();
  console.log(ordersData);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      <CustomTable
        columns={columns}
        data={ordersData}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </PageWrapper>
  );
};
