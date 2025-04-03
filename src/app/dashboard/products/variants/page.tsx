"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
// import { useProductVariantsHook } from "./variants.hook";
// import { CustomTable } from "@/shared/components/Table";

export default function ProductVariants() {
  // const { productData, columns } = useProductVariantsHook();
  return (
    <PageWrapper>
      {/* <CustomTable
        columns={columns}
        data={productData}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      /> */}
      <div>Variants</div>
    </PageWrapper>
  );
}
