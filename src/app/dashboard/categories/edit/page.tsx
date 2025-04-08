import { Suspense } from "react";
import EditForm from "../components/FullPage/EditCategoryPage";

export default function EditCategoriesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditForm />
    </Suspense>
  );
}
