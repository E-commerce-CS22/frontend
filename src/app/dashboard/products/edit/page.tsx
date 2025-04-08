import { Suspense } from "react";
import EditForm from "./components/FullPage/EditProductPage";

export default function EditProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditForm />
    </Suspense>
  );
}
