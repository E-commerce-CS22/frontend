"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { TableActions } from "./components/TableActions";
import { useCustomersHook } from "./customers.hook";
import { CustomTable } from "@/shared/components/Table";

export default function DashboardCustomers() {
  const {
    tableActionButtons: actionButtons,
    customersData,
    columns,
  } = useCustomersHook();
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      <CustomTable
        columns={columns}
        data={customersData}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </PageWrapper>
  );
}
