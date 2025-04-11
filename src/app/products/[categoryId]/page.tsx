"use client";
import { Suspense } from "react";
import { CategoryProducts } from "./components/FullPage/CategoryProducts";

type CategoryProductsPageProps = {
  params: {
    categoryId: string;
  };
};

export default function CategoryProductsPage({
  params: { categoryId },
}: CategoryProductsPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryProducts categoryId={categoryId} />
    </Suspense>
  );
}
