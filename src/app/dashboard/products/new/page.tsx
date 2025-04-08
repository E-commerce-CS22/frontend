"use client";
// import { useAddNewProductHook } from "./addNewProduct.hook";
import { useTabs } from "./components/tabs/useTabs";
import { ProductContextProvider } from "./components/ProductContext";

// import { ProductTabs } from "./components/tabs/ProductTabs/ProductTabs";

import dynamic from "next/dynamic";

const ProductTabs = dynamic(
  () => import("./components/tabs/ProductTabs/ProductTabs"),
  {
    loading: () => <div>Loading tabs...</div>,
  }
);

export default function CreateNewProductPage() {
  const tabs = useTabs();

  // const { isLoading, handleClick, handleCancel } = useAddNewProductHook();
  const isLoading = false;
  const handleClick = () => {};
  const handleCancel = () => {};
  return (
    <ProductContextProvider>
      <ProductTabs
        isLoading={isLoading}
        handleCancel={handleCancel}
        handleClick={handleClick}
        tabs={tabs}
      />
    </ProductContextProvider>
  );
}
