"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { TableActions } from "./components/TableActions";
import { useCategoriesHook } from "./categories.hook";
import { CustomTable } from "@/shared/components/Table";

export default function DashboardCategories() {
  const {
    tableActionButtons: actionButtons,
    categoriesData,
    columns,
  } = useCategoriesHook();
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      <CustomTable
        columns={columns}
        data={categoriesData}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </PageWrapper>
  );
}
