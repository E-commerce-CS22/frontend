"use client";
import { Suspense, use } from "react";
import { CategoryProducts } from "./components/FullPage/CategoryProducts";

type CategoryProductsPageProps = {
  params: Promise<{ categoryId: string }>;
};

export default function CategoryProductsPage(props: CategoryProductsPageProps) {
  const params = use<{ categoryId: string }>(props.params);
  const { categoryId } = params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryProducts categoryId={categoryId} />
    </Suspense>
  );
}
