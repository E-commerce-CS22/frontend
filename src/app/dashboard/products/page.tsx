"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { TableActions } from "./components/TableActions";
import { useProductsHook } from "./products.hook";
import { CustomTable } from "@/shared/components/Table";

export default function DashboardProducts() {
  const {
    tableActionButtons: actionButtons,
    productData,
    columns,
  } = useProductsHook();
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
