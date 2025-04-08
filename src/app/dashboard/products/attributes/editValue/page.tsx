import { Suspense } from "react";
import EditForm from "../components/FullPage/EditAttributePage";

export default function EditAttributeVariantPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditForm />
    </Suspense>
  );
}
