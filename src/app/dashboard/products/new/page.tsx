"use client";
import { useAddNewProductHook } from "./addNewProduct.hook";
import { useTabs } from "./components/tabs/useTabs";
import { ProductContextProvider } from "./components/ProductContext";

import { ProductTabs } from "./components/tabs/ProductTabs/ProductTabs";

export default function CreateNewProductPage() {
  const tabs = useTabs();

  const { isLoading, handleClick, handleCancel } = useAddNewProductHook();
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
