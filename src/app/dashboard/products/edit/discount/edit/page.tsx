import { Suspense } from "react";
import EditForm from "./FullPage/EditDiscountPage";

export default function EditDiscountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditForm />
    </Suspense>
  );
}
