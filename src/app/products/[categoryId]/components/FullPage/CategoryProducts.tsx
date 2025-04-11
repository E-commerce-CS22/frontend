"use client";
import { useCategoryProductsHook } from "./useCategoryProducts.hook";

export const CategoryProducts = ({ categoryId }) => {
  const { products } = useCategoryProductsHook({ categoryId });
  console.log(products);
  return (
    <div>
      <div>Category Products</div>
    </div>
  );
};
