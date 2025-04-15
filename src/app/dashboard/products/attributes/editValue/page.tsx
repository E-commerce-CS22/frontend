import { Suspense } from "react";
import EditAttributeVariantValuePage from "./components/EditAttributeVariantValuePage";

export default function EditAttributeVariantPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditAttributeVariantValuePage />
    </Suspense>
  );
}
