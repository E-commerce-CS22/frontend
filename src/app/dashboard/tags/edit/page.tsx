import { Suspense } from "react";
import EditTagPage from "../components/fullPage/EditTagsPage";

export default function EditCategoriesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditTagPage />
    </Suspense>
  );
}
