"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTable } from "@/shared/components/Table";
import { useOderPageHook } from "./useOrderPage.hook";
import { TableActions } from "../TableActions";

export const OrdersPage = () => {
  const {
    tableActionButtons: actionButtons,
    ordersData,
    columns,
  } = useOderPageHook();
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
