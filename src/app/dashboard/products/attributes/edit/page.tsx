import { Suspense } from "react";
import EditForm from "../components/FullPage/EditAttributePage";

export default function EditAttributesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditForm />
    </Suspense>
  );
}
