"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTable } from "@/shared/components/Table";
import { useProductAttributesHook } from "./attributes.hook";

export default function ProductAttributes() {
  const { productData, columns } = useProductAttributesHook();
  return (
    <PageWrapper>
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
