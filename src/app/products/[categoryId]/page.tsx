import { Suspense } from "react";
import { CategoryProducts } from "./components/FullPage/CategoryProducts";

export default function EditAttributesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryProducts />
    </Suspense>
  );
}
