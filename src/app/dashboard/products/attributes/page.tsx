"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTable } from "@/shared/components/Table";
import { useProductAttributesHook } from "./attributes.hook";
import { TableActions } from "../components/TableActions";

export default function ProductAttributes() {
  const { productData, columns, tableActionButtons } =
    useProductAttributesHook();
  return (
    <PageWrapper actions={<TableActions buttons={tableActionButtons} />}>
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
