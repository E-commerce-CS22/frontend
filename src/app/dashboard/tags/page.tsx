"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { TableActions } from "./components/TableActions";
import { useTagsHook } from "./tags.hook";
import { CustomTable } from "@/shared/components/Table";

export default function DashboardCategories() {
  const {
    tableActionButtons: actionButtons,
    tagsData,
    columns,
    isLoading,
  } = useTagsHook();
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      <CustomTable
        columns={columns}
        data={tagsData}
        pageIndex={1}
        pageSize={100}
        isLoading={isLoading}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </PageWrapper>
  );
}
