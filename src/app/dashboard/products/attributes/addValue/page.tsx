import { Suspense } from "react";
import CreateNewProductAttributeVariantValuePage from "./components/FullPage/AddNewAttributeVariantValuePage";

export default function EditCategoriesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateNewProductAttributeVariantValuePage />
    </Suspense>
  );
}
